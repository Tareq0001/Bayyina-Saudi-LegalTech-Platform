import { EvidenceItem, EvidenceType } from '../types';
import { evaluateEvidenceMatrix } from '../engine/evidence-matrix';
import { i18n } from './i18n';
import { judicialAudio } from './audio';

export class EvidenceView {
  private claimAmountSar: number = 350000;
  private evidencesList: EvidenceItem[] = [
    {
      id: 'demo-ev-1',
      type: 'digital',
      titleAr: 'سجلات البريد الإلكتروني والاعتماد الرقمي للدفعة',
      titleEn: 'Digital Email Records & Automated Milestone Approval',
      sourceAr: 'البريد الرسمي للمدعى عليها ونظام ERP',
      sourceEn: 'Corporate domain mailbox & ERP database logs',
      probativeValue: 92,
      legalBasisAr: 'المادة (53) من نظام الإثبات (حجية الدليل الرقمي)',
      legalBasisEn: 'Article 53 Law of Evidence (Digital Evidence)',
      status: 'conclusive',
      descriptionAr: 'رسائل بريد إلكتروني صريحة تفيد فحص التوريد والموافقة على استحقاق الدفعة.',
      descriptionEn: 'Explicit email thread acknowledging completed delivery and approving payment.'
    },
    {
      id: 'demo-ev-2',
      type: 'ordinary_paper',
      titleAr: 'عقد التوريد الموقع ومحاضر الاستلام الميداني',
      titleEn: 'Executed Supply Contract & Field Handover Minutes',
      sourceAr: 'مستند كتابي موقع ومختوم بسجل الشركة',
      sourceEn: 'Written contract stamped with commercial registration',
      probativeValue: 88,
      legalBasisAr: 'المادة (29) من نظام الإثبات والمادة (94) معاملات مدنية',
      legalBasisEn: 'Article 29 Law of Evidence & Article 94 Civil Transactions',
      status: 'conclusive',
      descriptionAr: 'يثبت التعاقد والشروط الجزائية ومواعيد استحقاق الفواتير.',
      descriptionEn: 'Evidences binding contractual terms and milestone payment schedules.'
    },
    {
      id: 'demo-ev-3',
      type: 'expert_report',
      titleAr: 'تقرير الخبير القضائي المعتمد عبر منصة خبرة',
      titleEn: 'Judicially Appointed Expert Report via Khebrah Platform',
      sourceAr: 'منصة خبرة - وزارة العدل',
      sourceEn: 'Khebrah Platform - Ministry of Justice',
      probativeValue: 94,
      legalBasisAr: 'المواد (110 - 120) من نظام الإثبات',
      legalBasisEn: 'Articles 110 - 120 Law of Evidence',
      status: 'conclusive',
      descriptionAr: 'أكد التقرير إنجاز المدعية للأعمال بنسبة 98% وعدم صحة ادعاءات العيوب الجسيمة.',
      descriptionEn: 'Expert report confirmed 98% completion, dismissing claims of substantial defect.'
    }
  ];

  render(container: HTMLElement) {
    const isAr = i18n.lang === 'ar';
    const evalResult = evaluateEvidenceMatrix(this.evidencesList, this.claimAmountSar);

    container.innerHTML = `
      <div class="evidence-wrapper fade-in">
        <!-- Top Summary Gauge Banner -->
        <div class="gauge-hero-card">
          <div class="gauge-left">
            <div class="speedometer-box">
              <svg class="speedometer-svg" viewBox="0 0 120 70">
                <path d="M 15 60 A 45 45 0 0 1 105 60" fill="none" stroke="#e2e8f0" stroke-width="12" stroke-linecap="round" />
                <path d="M 15 60 A 45 45 0 0 1 105 60" fill="none" stroke="url(#gauge-grad)" stroke-width="12" stroke-linecap="round"
                  stroke-dasharray="141.3" stroke-dashoffset="${141.3 - (141.3 * (evalResult.aggregateScore / 100))}" />
                <defs>
                  <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ef4444" />
                    <stop offset="50%" stop-color="#f59e0b" />
                    <stop offset="100%" stop-color="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="gauge-center-text">
                <span class="gauge-score">${evalResult.aggregateScore}%</span>
                <span class="gauge-label">${isAr ? 'قوة الإثبات' : 'Probative Power'}</span>
              </div>
            </div>
          </div>

          <div class="gauge-right">
            <span class="rating-badge tier-${evalResult.ratingTier}">
              ⚖️ ${isAr ? evalResult.ratingLabelAr : evalResult.ratingLabelEn}
            </span>
            <h3 class="gauge-title">${isAr ? 'احتمالية كسب الدعوى القضائية:' : 'Estimated Judicial Win Likelihood:'} ${evalResult.winProbabilityPercent}%</h3>
            <p class="gauge-desc">${isAr ? evalResult.burdenOfProofAssessmentAr : evalResult.burdenOfProofAssessmentEn}</p>
            <div class="claim-limit-row">
              <label>${isAr ? 'قيمة المطالبة محل الإثبات (ر.س):' : 'Claim Amount under Proof (SAR):'}</label>
              <input type="number" id="evidence-claim-amount" class="small-claim-input" value="${this.claimAmountSar}" min="0" step="25000" />
              ${this.claimAmountSar > 100000 ? `
                <span class="limit-warn-tag">⚠️ ${isAr ? 'تتجاوز 100 ألف (تطبق المادة 66)' : 'Exceeds 100k (Art 66 applies)'}</span>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Evidence List & Form Grid -->
        <div class="evidence-main-grid">
          <!-- Evidence Items List -->
          <div class="evidences-list-pane">
            <div class="pane-header-row">
              <h4>${isAr ? 'حزمة البينات والمستندات المودعة في الدعوى' : 'Filed Case Evidence Bundle'} (${this.evidencesList.length})</h4>
              <button id="add-new-evidence-btn" class="add-evidence-btn">
                + ${isAr ? 'إضافة بينة جديدة' : 'Add New Proof'}
              </button>
            </div>

            <div class="evidence-items-stack">
              ${this.evidencesList.map((ev, idx) => `
                <div class="evidence-full-card" data-ev-id="${ev.id}">
                  <div class="card-header">
                    <div class="ev-tag-row">
                      <span class="type-badge ${ev.type}">
                        ${this.getTypeLabel(ev.type, isAr)}
                      </span>
                      <span class="status-tag status-${ev.status}">
                        ${ev.status === 'conclusive' ? 'قاطع ومنتج' : ev.status === 'challenged' ? 'مطعون فيه' : 'مقبول شكلاً'}
                      </span>
                    </div>
                    <button class="delete-ev-btn" data-delete-idx="${idx}" title="${isAr ? 'حذف البينة' : 'Delete Proof'}">✕</button>
                  </div>

                  <h4 class="ev-card-title">${isAr ? ev.titleAr : ev.titleEn}</h4>
                  <p class="ev-card-desc">${isAr ? ev.descriptionAr : ev.descriptionEn}</p>
                  
                  <div class="ev-footer-meta">
                    <span class="ev-source">📌 <strong>المصدر:</strong> ${isAr ? ev.sourceAr : ev.sourceEn}</span>
                    <span class="ev-basis">⚖️ <strong>السند:</strong> ${isAr ? ev.legalBasisAr : ev.legalBasisEn}</span>
                    <div class="probative-meter-block">
                      <span>القوة الثبوتية: <strong>${ev.probativeValue}%</strong></span>
                      <div class="meter-bar"><div class="meter-fill" style="width: ${ev.probativeValue}%"></div></div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Strategic Advice & Recommendations -->
          <div class="evidence-advice-pane">
            <div class="advice-card">
              <h4 class="advice-title">💡 ${isAr ? 'التوجيهات القضائية لدعم عبء الإثبات:' : 'Evidentiary Strategic Recommendations:'}</h4>
              <ul class="advice-list">
                ${(isAr ? evalResult.recommendationsAr : evalResult.recommendationsEn).map(rec => `
                  <li>✓ ${rec}</li>
                `).join('')}
              </ul>
            </div>

            ${evalResult.criticalMissingEvidencesAr.length > 0 ? `
              <div class="missing-evidence-card">
                <h4 class="missing-title">⚠️ ${isAr ? 'مستندات حاسمة يوصى بإيداعها:' : 'Crucial Missing Evidence:'}</h4>
                <ul class="missing-list">
                  ${evalResult.criticalMissingEvidencesAr.map(m => `<li>• ${m}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- Statutory Evidence Guide Quick Card -->
            <div class="evidence-law-quick-ref">
              <h4>نظام الإثبات (مرسوم م/43) - التراتبية الثبوتية:</h4>
              <ol class="statutory-rank-list">
                <li><strong>1. المحرر الرسمي (مادة 25):</strong> حجة على الكافة لا تنقض إلا بالتزوير.</li>
                <li><strong>2. الدليل الرقمي (مادة 53):</strong> قوة المحرر الكتابي كاملة في المراسلات الموثقة.</li>
                <li><strong>3. المحرر العادي (مادة 29):</strong> حجة ما لم ينكر الخصم توقيعه أو خطه.</li>
                <li><strong>4. شهادة الشهود (مادة 66):</strong> لا تقبل في المعاملات التي تتجاوز 100 ألف ريال.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachEvents(container);
  }

  private getTypeLabel(type: EvidenceType, isAr: boolean): string {
    const map: Record<EvidenceType, { ar: string; en: string }> = {
      digital: { ar: 'دليل رقمي (م53)', en: 'Digital Evidence (Art 53)' },
      official_deed: { ar: 'محرر رسمي صادر من كاتب عدل (م25)', en: 'Notarized Official Deed (Art 25)' },
      ordinary_paper: { ar: 'محرر عادي موقع (م29)', en: 'Customary Written Contract' },
      testimony: { ar: 'شهادة شهود (م66)', en: 'Witness Testimony' },
      expert_report: { ar: 'تقرير خبرة قضائية (م110)', en: 'Court Khebrah Expert Report' },
      decisive_oath: { ar: 'يمين حاسمة / متممة (م93)', en: 'Decisive Judicial Oath' }
    };
    return isAr ? map[type]?.ar || type : map[type]?.en || type;
  }

  private attachEvents(container: HTMLElement) {
    const claimInput = container.querySelector('#evidence-claim-amount') as HTMLInputElement;
    if (claimInput) {
      claimInput.addEventListener('input', () => {
        this.claimAmountSar = Number(claimInput.value);
        this.render(container);
      });
    }

    // Delete evidence button
    container.querySelectorAll('.delete-ev-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-delete-idx'));
        if (!isNaN(idx)) {
          this.evidencesList.splice(idx, 1);
          judicialAudio.playChime();
          this.render(container);
        }
      });
    });

    // Add new evidence button
    const addBtn = container.querySelector('#add-new-evidence-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        judicialAudio.playChime();
        const newEv: EvidenceItem = {
          id: 'ev-' + Date.now(),
          type: 'digital',
          titleAr: 'سجل تحويل مصرفي وإقرار استلام إلكتروني',
          titleEn: 'Digital Bank Transfer Receipt & Electronic Confirmation',
          sourceAr: 'كشف حساب مصرفي موثق ومنصة سداد',
          sourceEn: 'Authenticated Bank Statement & SADAD platform receipt',
          probativeValue: 90,
          legalBasisAr: 'المادة (53) من نظام الإثبات',
          legalBasisEn: 'Article 53 Law of Evidence',
          status: 'conclusive',
          descriptionAr: 'حوالة مصرفية صريحة بقيمة الالتزام مطابقة للسجلات المحاسبية.',
          descriptionEn: 'Wire transfer receipt verifying partial payment performance.'
        };
        this.evidencesList.push(newEv);
        this.render(container);
      });
    }
  }
}
