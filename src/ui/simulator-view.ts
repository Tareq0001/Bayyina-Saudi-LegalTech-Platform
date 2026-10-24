import { LANDMARK_CASES } from '../data/case-scenarios';
import { CaseScenario, CaseStage } from '../types';
import { i18n } from './i18n';
import { judicialAudio } from './audio';

export class SimulatorView {
  private currentScenarioId: string = 'case-tech-commercial';
  private selectedStageNumber: number = 3;
  private scenarioState: Record<string, CaseScenario>;
  private onInspectJudgment: (scenario: CaseScenario, stage: CaseStage) => void;

  constructor(onInspectJudgment: (scenario: CaseScenario, stage: CaseStage) => void) {
    this.onInspectJudgment = onInspectJudgment;
    // Deep copy initial landmark cases so mutations persist per session
    this.scenarioState = JSON.parse(JSON.stringify(
      LANDMARK_CASES.reduce((acc, c) => ({ ...acc, [c.id]: c }), {})
    ));
    this.selectedStageNumber = this.getActiveScenario().currentStageNumber;
  }

  getActiveScenario(): CaseScenario {
    return this.scenarioState[this.currentScenarioId] || LANDMARK_CASES[0];
  }

  selectScenario(id: string) {
    if (this.scenarioState[id]) {
      this.currentScenarioId = id;
      this.selectedStageNumber = this.scenarioState[id].currentStageNumber;
      judicialAudio.playGavel();
    }
  }

  advanceStage() {
    const sc = this.getActiveScenario();
    if (sc.currentStageNumber < 6) {
      // Mark current stage completed
      const currStage = sc.stages.find(s => s.stageNumber === sc.currentStageNumber);
      if (currStage) currStage.status = 'completed';

      sc.currentStageNumber += 1;
      const nextStage = sc.stages.find(s => s.stageNumber === sc.currentStageNumber);
      if (nextStage) nextStage.status = 'in_progress';

      this.selectedStageNumber = sc.currentStageNumber;

      if (sc.currentStageNumber === 5) {
        judicialAudio.playVerdictFanfare();
      } else {
        judicialAudio.playGavel();
      }
    }
  }

  render(container: HTMLElement) {
    const isAr = i18n.lang === 'ar';
    const sc = this.getActiveScenario();
    const activeStage = sc.stages.find(s => s.stageNumber === this.selectedStageNumber) || sc.stages[0];

    const courtTierNames: Record<string, { ar: string; en: string }> = {
      commercial_first: { ar: 'المحاكم التجارية الابتدائية', en: 'First Instance Commercial Courts' },
      labor_first: { ar: 'المحاكم العمالية الابتدائية', en: 'First Instance Labor Courts' },
      general_first: { ar: 'المحاكم العامة (العقارية والمدنية)', en: 'First Instance General Courts' },
      enforcement: { ar: 'محاكم التنفيذ وقضاء الجبر', en: 'Enforcement Courts' },
      appeal: { ar: 'محاكم الاستئناف', en: 'Courts of Appeal' },
      supreme: { ar: 'المحكمة العليا', en: 'Supreme Court' },
      grievances: { ar: 'ديوان المظالم (القضاء الإداري)', en: 'Board of Grievances (Administrative)' }
    };

    container.innerHTML = `
      <div class="simulator-wrapper fade-in">
        <!-- Top Scenario Selector Bar -->
        <div class="scenarios-selector-bar">
          <div class="selector-title-row">
            <span class="selector-badge">🏛️ ${isAr ? 'القضايا النموذجية الواقعية (اضغط للتجربة الفورية):' : 'Landmark Case Scenarios (Click to Load):'}</span>
          </div>
          <div class="scenario-buttons-grid">
            ${LANDMARK_CASES.map(c => `
              <button class="scenario-nav-btn ${this.currentScenarioId === c.id ? 'active' : ''}" data-scenario-id="${c.id}">
                <div class="sc-btn-num">رقم ${c.caseNumber}</div>
                <div class="sc-btn-title">${isAr ? c.titleAr : c.titleEn}</div>
                <div class="sc-btn-court">⚖️ ${isAr ? c.courtNameAr : c.courtNameEn}</div>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Case Header Summary Card -->
        <div class="case-dossier-card">
          <div class="dossier-top">
            <div class="dossier-id-block">
              <span class="dossier-badge">${isAr ? 'صك قضائي مقيد' : 'Registered Case Docket'}</span>
              <h2 class="dossier-title">${isAr ? sc.titleAr : sc.titleEn}</h2>
              <div class="dossier-court-name">
                🏛️ ${isAr ? sc.courtNameAr : sc.courtNameEn} | ${isAr ? sc.circuitAr : sc.circuitEn}
              </div>
            </div>
            <div class="dossier-stats-block">
              <div class="stat-box">
                <span class="stat-label">${isAr ? 'قيمة المطالبة' : 'Claim Value'}</span>
                <span class="stat-value highlight-gold">${sc.claimValueSar.toLocaleString('ar-SA')} ر.س</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">${isAr ? 'تاريخ القيد' : 'Filing Date'}</span>
                <span class="stat-value">${sc.filingDateHijri}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">${isAr ? 'المرحلة الحالية' : 'Current Stage'}</span>
                <span class="stat-value status-badge in-progress">${sc.currentStageNumber} / 6</span>
              </div>
            </div>
          </div>

          <!-- Parties & Facts Row -->
          <div class="dossier-parties-row">
            <div class="party-col plaintiff-col">
              <span class="party-label">⚖️ ${isAr ? 'المدعي (صاحب الحق):' : 'Claimant / Plaintiff:'}</span>
              <strong class="party-name">${isAr ? sc.plaintiffAr : sc.plaintiffEn}</strong>
            </div>
            <div class="party-vs">VS</div>
            <div class="party-col defendant-col">
              <span class="party-label">🛡️ ${isAr ? 'المدعى عليه:' : 'Defendant:'}</span>
              <strong class="party-name">${isAr ? sc.defendantAr : sc.defendantEn}</strong>
            </div>
          </div>

          <div class="dossier-facts">
            <strong>${isAr ? 'ملخص الوقائع ومحل النزاع:' : 'Factual Background & Claims:'}</strong>
            <p>${isAr ? sc.factsSummaryAr : sc.factsSummaryEn}</p>
          </div>

          <div class="governing-laws-row">
            <span class="gov-label">${isAr ? 'الأنظمة الحاكمة:' : 'Governing Laws:'}</span>
            ${(isAr ? sc.governingLawsAr : sc.governingLawsEn).map(l => `
              <span class="law-tag">📜 ${l}</span>
            `).join('')}
          </div>
        </div>

        <!-- 6-Stage Interactive Case Pipeline -->
        <div class="pipeline-section-card">
          <div class="pipeline-header">
            <div class="pipeline-title">
              <h3>${isAr ? 'خارطة مسار التقاضي وإجراءات ناجز (6 مراحل قضائية)' : 'Najiz 6-Stage Case Lifecycle Pipeline'}</h3>
              <p class="pipeline-sub">${isAr ? 'انقر على أي مرحلة لاستعراض محاضرها ودفوعها وسجلاتها الإجرائية' : 'Click any stage to examine session minutes, pleadings, and procedural deadlines'}</p>
            </div>
            <div class="pipeline-actions">
              <button id="advance-stage-btn" class="advance-stage-btn ${sc.currentStageNumber >= 6 ? 'disabled' : ''}">
                ⚡ ${isAr ? 'تقديم المرحلة القضائية وتحديث ناجز' : 'Advance Stage & Update Docket'}
              </button>
            </div>
          </div>

          <!-- Stepper Bar -->
          <div class="stepper-horizontal-bar">
            ${sc.stages.map(stage => {
              const isSelected = stage.stageNumber === this.selectedStageNumber;
              const isCurrent = stage.stageNumber === sc.currentStageNumber;
              const isDone = stage.stageNumber < sc.currentStageNumber || stage.status === 'completed';

              let statusClass = 'upcoming';
              if (isDone) statusClass = 'completed';
              else if (isCurrent) statusClass = 'in_progress';

              return `
                <div class="step-node ${statusClass} ${isSelected ? 'selected' : ''}" data-stage-num="${stage.stageNumber}">
                  <div class="step-circle">
                    ${isDone ? '✓' : stage.stageNumber}
                  </div>
                  <div class="step-content">
                    <span class="step-num-label">${isAr ? `المرحلة ${stage.stageNumber}` : `Stage ${stage.stageNumber}`}</span>
                    <span class="step-name">${isAr ? stage.nameAr : stage.nameEn}</span>
                  </div>
                  ${stage.stageNumber < 6 ? '<div class="step-connector"></div>' : ''}
                </div>
              `;
            }).join('')}
          </div>

          <!-- Stage Detail Inspector Panel -->
          <div class="stage-detail-inspector">
            <div class="stage-inspector-top">
              <div>
                <span class="inspector-stage-tag">
                  ${isAr ? `المرحلة (${activeStage.stageNumber}) من 6` : `Stage (${activeStage.stageNumber}) of 6`}
                </span>
                <h3 class="inspector-title">${isAr ? activeStage.nameAr : activeStage.nameEn}</h3>
                <p class="inspector-desc">${isAr ? activeStage.descriptionAr : activeStage.descriptionEn}</p>
              </div>
              <div class="deadline-block">
                ${activeStage.proceduralDeadlineDays ? `
                  <div class="deadline-badge">
                    ⏱️ ${isAr ? `المهلة الإجرائية: ${activeStage.proceduralDeadlineDays} يوماً` : `Procedural Limit: ${activeStage.proceduralDeadlineDays} Days`}
                  </div>
                ` : ''}
                ${activeStage.status === 'completed' ? `
                  <span class="status-pill completed">✓ ${i18n.t.stageCompleted}</span>
                ` : activeStage.status === 'in_progress' ? `
                  <span class="status-pill in_progress">⏳ ${i18n.t.stageInProgress}</span>
                ` : `
                  <span class="status-pill upcoming">🔒 ${i18n.t.stageUpcoming}</span>
                `}
              </div>
            </div>

            ${activeStage.deadlineWarningAr ? `
              <div class="deadline-alert-banner">
                ⚠️ <strong>${isAr ? 'تنبيه إجرائي نظامي:' : 'Procedural Warning:'}</strong>
                <span>${isAr ? activeStage.deadlineWarningAr : activeStage.deadlineWarningEn}</span>
              </div>
            ` : ''}

            <!-- Required Actions Grid -->
            ${(activeStage.requiredActionsAr && activeStage.requiredActionsAr.length > 0) ? `
            <div class="inspector-section">
              <h4 class="section-heading">📌 ${isAr ? 'الإجراءات القضائية والمتطلبات النظامية:' : 'Statutory Actions & Pleading Steps:'}</h4>
              <ul class="actions-list">
                ${(isAr ? (activeStage.requiredActionsAr || []) : (activeStage.requiredActionsEn || [])).map(act => `
                  <li class="action-item">
                    <span class="check-icon">✓</span>
                    <span>${act}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
            ` : ''}

            <!-- Virtual Session Minutes (ضبط الجلسة القضائية) -->
            ${activeStage.minutes && activeStage.minutes.length > 0 ? `
              <div class="inspector-section">
                <h4 class="section-heading">📜 ${isAr ? 'محضر الجلسة القضائية المرئية والوقائع المسجلة:' : 'Virtual Hearing Record & Verbatim Session Transcript:'}</h4>
                ${activeStage.minutes.map(m => `
                  <div class="session-minute-box">
                    <div class="minute-header">
                      <span><strong>الجلسة رقم:</strong> ${m.sessionNumber}</span>
                      <span><strong>التاريخ:</strong> ${m.dateHijri} (${m.dateGregorian})</span>
                      <span><strong>القاضي:</strong> ${m.judgeName}</span>
                    </div>
                    <div class="minute-remarks">
                      <strong>ملاحظات الضبط:</strong> ${isAr ? m.remarksAr : m.remarksEn}
                    </div>
                    <div class="minute-transcript">
                      <div class="transcript-title">🎙️ نص مرافعة الجلسة وضبط الأقوال:</div>
                      <pre class="transcript-pre">${isAr ? m.transcriptAr : m.transcriptEn}</pre>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <!-- Stage Evidences (البينات المدققة) -->
            ${activeStage.evidences && activeStage.evidences.length > 0 ? `
              <div class="inspector-section">
                <h4 class="section-heading">📂 ${isAr ? 'البينات والمستندات المقدمة في هذه المرحلة:' : 'Submitted Evidence & Probative Documentation:'}</h4>
                <div class="evidence-cards-row">
                  ${activeStage.evidences.map(ev => `
                    <div class="evidence-mini-card">
                      <div class="ev-top">
                        <span class="ev-type-tag">📁 ${ev.type}</span>
                        <span class="ev-probative">${ev.probativeValue}% ${isAr ? 'قوة ثبوتية' : 'Weight'}</span>
                      </div>
                      <h5 class="ev-title">${isAr ? ev.titleAr : ev.titleEn}</h5>
                      <p class="ev-desc">${isAr ? ev.descriptionAr : ev.descriptionEn}</p>
                      <div class="ev-basis">⚖️ ${isAr ? ev.legalBasisAr : ev.legalBasisEn}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Judicial Outcome / Judgment Pronouncement -->
            ${activeStage.judgmentText || activeStage.judicialOutcomeAr ? `
              <div class="verdict-banner-box">
                <div class="verdict-icon">⚖️</div>
                <div class="verdict-body">
                  <h4 class="verdict-title">${isAr ? 'منطوق الصك القضائي والأثر الإجرائي:' : 'Pronounced Judicial Deed & Executable Order:'}</h4>
                  <p class="verdict-text">${activeStage.judgmentText ? activeStage.judgmentText : (isAr ? activeStage.judicialOutcomeAr : activeStage.judicialOutcomeEn)}</p>
                  <div class="verdict-btn-row">
                    <button id="inspect-judgment-deed-btn" class="inspect-deed-btn">
                      📜 ${isAr ? 'استعراض صك الحكم التفصيلي الموثق' : 'Inspect Certified Judgment Deed'}
                    </button>
                  </div>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    this.attachEvents(container);
  }

  private attachEvents(container: HTMLElement) {
    // Scenario selector buttons
    container.querySelectorAll('.scenario-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-scenario-id');
        if (id) {
          this.selectScenario(id);
          this.render(container);
        }
      });
    });

    // Step node clicking
    container.querySelectorAll('.step-node').forEach(node => {
      node.addEventListener('click', () => {
        judicialAudio.playChime();
        const stageNum = Number(node.getAttribute('data-stage-num'));
        if (stageNum) {
          this.selectedStageNumber = stageNum;
          this.render(container);
        }
      });
    });

    // Advance Stage button
    const advBtn = container.querySelector('#advance-stage-btn');
    if (advBtn) {
      advBtn.addEventListener('click', () => {
        this.advanceStage();
        this.render(container);
      });
    }

    // Inspect judgment deed
    const deedBtn = container.querySelector('#inspect-judgment-deed-btn');
    if (deedBtn) {
      deedBtn.addEventListener('click', () => {
        judicialAudio.playGavel();
        const sc = this.getActiveScenario();
        const activeStage = sc.stages.find(s => s.stageNumber === this.selectedStageNumber) || sc.stages[4];
        this.onInspectJudgment(sc, activeStage);
      });
    }
  }
}
