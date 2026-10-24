import { CaseScenario, CaseStage, LawArticle, Statute } from '../types';
import { i18n } from './i18n';
import { judicialAudio } from './audio';

export class ModalView {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'bayyina-modal-root';
    document.body.appendChild(this.container);
  }

  showArticleModal(article: LawArticle, statute: Statute) {
    const isAr = i18n.lang === 'ar';

    const weightColors: Record<string, { bg: string; text: string; labelAr: string; labelEn: string }> = {
      conclusive: { bg: '#dcfce7', text: '#15803d', labelAr: 'حجية قاطعة ملزمة للكافة', labelEn: 'Conclusive Force' },
      high: { bg: '#e0f2fe', text: '#0369a1', labelAr: 'قوة إثبات راجحة ومقنعة', labelEn: 'High Probative Weight' },
      medium: { bg: '#fef3c7', text: '#b45309', labelAr: 'بينة استئناسية', labelEn: 'Corroborative Evidence' },
      circumstantial: { bg: '#f1f5f9', text: '#475569', labelAr: 'قرينة قضائية بسيطة', labelEn: 'Circumstantial' }
    };
    const w = weightColors[article.evidentiaryWeight] || weightColors.high;

    this.container.innerHTML = `
      <div class="modal-backdrop fade-in">
        <div class="modal-card">
          <div class="modal-header">
            <div class="modal-title-group">
              <span class="modal-badge">📜 ${isAr ? statute.nameAr : statute.nameEn}</span>
              <h3 class="modal-title">
                ${isAr ? `المادة (${article.articleNumber}): ${article.titleAr}` : `Article (${article.articleNumber}): ${article.titleEn}`}
              </h3>
            </div>
            <button class="modal-close-btn" id="modal-close-btn">✕</button>
          </div>

          <div class="modal-body">
            <!-- Royal Decree & Metadata Box -->
            <div class="statute-decree-box">
              <div><strong>المرسوم الملكي:</strong> ${isAr ? statute.royalDecreeAr : statute.royalDecreeEn}</div>
              <div><strong>التاريخ:</strong> ${statute.yearHijri} (${statute.yearGregorian}) | <strong>التصنيف:</strong> ${isAr ? statute.category : statute.categoryEn}</div>
            </div>

            <!-- Official Statutory Text -->
            <div class="modal-section">
              <h4 class="section-title">🏛️ ${isAr ? 'النص النظامي الرسمي المعتمد:' : 'Official Statutory Text:'}</h4>
              <div class="statutory-text-box">
                ${isAr ? article.textAr : article.textEn}
              </div>
            </div>

            <!-- In-Depth Legal Commentary -->
            <div class="modal-section">
              <h4 class="section-title">⚖️ ${isAr ? 'التحليل والشرح القضائي والفقهي:' : 'Judicial Analysis & Commentary:'}</h4>
              <div class="commentary-box">
                ${isAr ? article.commentaryAr : article.commentaryEn}
              </div>
            </div>

            <!-- Evidentiary Weight & Tags -->
            <div class="modal-section">
              <div class="weight-tags-row">
                <div class="weight-info-box">
                  <span class="weight-title">${isAr ? 'الحجية والقوة الثبوتية:' : 'Evidentiary Weight:'}</span>
                  <span class="weight-pill" style="background: ${w.bg}; color: ${w.text};">
                    ${isAr ? w.labelAr : w.labelEn}
                  </span>
                </div>
                <div class="tags-info-box">
                  <span class="weight-title">${isAr ? 'الكلمات الدلالية:' : 'Keywords:'}</span>
                  <div class="tags-cluster">
                    ${article.tags.map(t => `<span class="tag-pill">#${t}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>

            <!-- Related Judicial Precedents -->
            ${article.precedents && article.precedents.length > 0 ? `
              <div class="modal-section">
                <h4 class="section-title">⚖️ ${isAr ? 'المبادئ والسوابق القضائية المرتبطة:' : 'Related Judicial Precedents:'}</h4>
                <div class="precedents-list">
                  ${article.precedents.map(p => `
                    <div class="precedent-card">
                      <div class="p-top">
                        <span class="p-court">${isAr ? p.court : p.courtEn}</span>
                        <span class="p-number">صك رقم ${p.judgmentNumber} لسنة ${p.yearHijri}هـ</span>
                      </div>
                      <div class="p-principle">
                        <strong>المبدأ القضائي المستقر:</strong>
                        <p>${isAr ? p.principleAr : p.principleEn}</p>
                      </div>
                      <div class="p-summary">
                        <strong>ملخص التطبيق:</strong>
                        <p>${isAr ? p.summaryAr : p.summaryEn}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <div class="modal-footer">
            <button class="footer-close-btn" id="modal-footer-close-btn">${i18n.t.close}</button>
          </div>
        </div>
      </div>
    `;

    this.attachModalEvents();
  }

  showJudgmentDeedModal(scenario: CaseScenario, stage: CaseStage) {
    const isAr = i18n.lang === 'ar';

    this.container.innerHTML = `
      <div class="modal-backdrop fade-in">
        <div class="modal-card wide-card">
          <div class="modal-header">
            <div class="modal-title-group">
              <span class="modal-badge">⚖️ صك حكم قضائي نهائي موثق (منصة ناجز)</span>
              <h3 class="modal-title">صك حكم رقم (${scenario.caseNumber})</h3>
            </div>
            <button class="modal-close-btn" id="modal-close-btn">✕</button>
          </div>

          <div class="modal-body printable-body">
            <div class="deed-seal-header">
              <div class="header-emblem">المملكة العربية السعودية<br>وزارة العدل - المجلس الأعلى للقضاء<br>${scenario.courtNameAr}</div>
              <div class="qr-placeholder">
                <div class="mock-qr">🔳 QR ناجز</div>
                <span>موثق رسمياً</span>
              </div>
            </div>

            <h3 class="deed-heading">صَكُّ حُكْمٍ قَضَائِيٍّ إِكْتَسَبَ الْقَطْعِيَّةَ</h3>

            <div class="deed-parties-summary">
              <div><strong>الدائرة القضائية:</strong> ${scenario.circuitAr}</div>
              <div><strong>تاريخ النطق بالحكم:</strong> 1445/05/20هـ</div>
              <div><strong>المدعي:</strong> ${scenario.plaintiffAr}</div>
              <div><strong>المدعى عليه:</strong> ${scenario.defendantAr}</div>
              <div><strong>موضوع الدعوى:</strong> ${scenario.legalSubjectAr}</div>
            </div>

            <div class="deed-section">
              <h4>أولاً: أسباب الحكم ومستنداته القضائية</h4>
              <p style="text-align: justify; line-height: 2;">
                حيث نظرت الدائرة الدعوى المقيدة برقم (${scenario.caseNumber})، وبسماع أقوال الطرفين، وتدقيق المستندات والمحررات الكتابية والرقمية المقدمة وفق المادة (53) من نظام الإثبات، وبناءً على ما انتهى إليه تقرير الخبير القضائي المعتمد، ولما كان العقد شريعة المتعاقدين وفق المادة (94) من نظام المعاملات المدنية، وحيث ثبت للدائرة إخلال المدعى عليها بالالتزام التعاقدي دون مسوغ شرعي أو نظامي، وحيث انقضت المهلة النظامية للاعتراض دون تقديم استئناف صحيح؛ فإن الحكم قد اكتسب القطعية وأصبح واجباً للنفاذ.
              </p>
            </div>

            <div class="deed-verdict-box">
              <h4>ثانياً: منطوق الحكم القضائي</h4>
              <p class="verdict-strong-text">
                ${stage.judgmentText ? stage.judgmentText : scenario.stages[4].judgmentText || 'حكمت الدائرة بإلزام المدعى عليها بدفع المبالغ المحكوم بها فوراً وتضمينها مصاريف الدعوى القضائية.'}
              </p>
            </div>

            <div class="deed-footer-signatures">
              <div>عضو الدائرة القضائية<br><strong>فضيلة القاضي</strong></div>
              <div>عضو الدائرة القضائية<br><strong>فضيلة القاضي</strong></div>
              <div>رئيس الدائرة القضائية<br><strong>فضيلة رئيس الدائرة</strong></div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="footer-print-btn" id="modal-print-btn">🖨️ طباعة الصك</button>
            <button class="footer-close-btn" id="modal-footer-close-btn">${i18n.t.close}</button>
          </div>
        </div>
      </div>
    `;

    this.attachModalEvents();

    const printBtn = this.container.querySelector('#modal-print-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  private attachModalEvents() {
    const close = () => {
      judicialAudio.playChime();
      this.container.innerHTML = '';
    };

    const c1 = this.container.querySelector('#modal-close-btn');
    const c2 = this.container.querySelector('#modal-footer-close-btn');
    const backdrop = this.container.querySelector('.modal-backdrop');

    if (c1) c1.addEventListener('click', close);
    if (c2) c2.addEventListener('click', close);
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) close();
      });
    }
  }
}
