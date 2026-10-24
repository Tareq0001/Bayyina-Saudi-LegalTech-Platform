import { DEFAULT_PLEADING_DATA, generatePleadingHtml } from '../engine/document-drafter';
import { PleadingFormData, TemplateType } from '../types';
import { i18n } from './i18n';
import { judicialAudio } from './audio';

export class DrafterView {
  private currentTemplate: TemplateType = 'claim_commercial';
  private formData: Record<TemplateType, PleadingFormData>;

  constructor() {
    this.formData = JSON.parse(JSON.stringify(DEFAULT_PLEADING_DATA));
  }

  getCurrentData(): PleadingFormData {
    return this.formData[this.currentTemplate];
  }

  render(container: HTMLElement) {
    const isAr = i18n.lang === 'ar';
    const data = this.getCurrentData();
    const renderedHtml = generatePleadingHtml(data);

    container.innerHTML = `
      <div class="drafter-wrapper fade-in">
        <!-- Top Toolbar & Template Switcher -->
        <div class="drafter-toolbar-card">
          <div class="template-selector-group">
            <span class="toolbar-label">📝 ${isAr ? 'اختر النموذج القضائي المعتمد:' : 'Select Standard Judicial Template:'}</span>
            <div class="template-buttons-row">
              <button class="template-btn ${this.currentTemplate === 'claim_commercial' ? 'active' : ''}" data-tpl="claim_commercial">
                ⚖️ ${isAr ? 'صحيفة دعوى مالية وتجارية' : 'Commercial Financial Claim'}
              </button>
              <button class="template-btn ${this.currentTemplate === 'defense_pleading' ? 'active' : ''}" data-tpl="defense_pleading">
                🛡️ ${isAr ? 'مذكرة جوابية بدفوع شكلية' : 'Pleading with Formal Defenses'}
              </button>
              <button class="template-btn ${this.currentTemplate === 'appeal_brief' ? 'active' : ''}" data-tpl="appeal_brief">
                📜 ${isAr ? 'لائحة استئناف مسببة' : 'Reasoned Appellate Brief'}
              </button>
              <button class="template-btn ${this.currentTemplate === 'retainer_agreement' ? 'active' : ''}" data-tpl="retainer_agreement">
                🤝 ${isAr ? 'عقد أتعاب محاماة معتمد' : 'Standard Bar Retainer Agreement'}
              </button>
            </div>
          </div>

          <div class="drafter-export-actions">
            <button id="print-pleading-btn" class="action-btn print-btn">
              🖨️ ${i18n.t.printDoc}
            </button>
            <button id="copy-pleading-btn" class="action-btn copy-btn">
              📋 ${isAr ? 'نسخ النص القضائي' : 'Copy Text'}
            </button>
          </div>
        </div>

        <!-- Split Screen: Form Editor on One Side, Live Judicial Preview on Other -->
        <div class="drafter-split-container">
          <!-- Editor Controls Pane -->
          <div class="drafter-form-pane">
            <div class="pane-title-box">
              <h4>${isAr ? 'تخصيص بيانات اللائحة والمرافعة' : 'Customize Pleading Fields & Parties'}</h4>
              <p>${isAr ? 'يتم تحديث الصك القضائي فوراً وبشكل تلقائي' : 'Instant real-time judicial formatting'}</p>
            </div>

            <div class="form-scrollable-body">
              <div class="form-row-2">
                <div class="form-group">
                  <label>${isAr ? 'المحكمة المختصة:' : 'Competent Court:'}</label>
                  <input type="text" id="df-court" class="form-input" value="${data.courtName}" />
                </div>
                <div class="form-group">
                  <label>${isAr ? 'الدائرة القضائية:' : 'Circuit:'}</label>
                  <input type="text" id="df-circuit" class="form-input" value="${data.circuitName}" />
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label>${isAr ? 'اسم المدعي / الموكل:' : 'Claimant / Client Name:'}</label>
                  <input type="text" id="df-claimant" class="form-input" value="${data.claimantName}" />
                </div>
                <div class="form-group">
                  <label>${isAr ? 'السجل التجاري / الهوية:' : 'CR / National ID:'}</label>
                  <input type="text" id="df-claimant-id" class="form-input" value="${data.claimantId}" />
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label>${isAr ? 'اسم المدعى عليه / الوكيل:' : 'Defendant Name:'}</label>
                  <input type="text" id="df-defendant" class="form-input" value="${data.defendantName}" />
                </div>
                <div class="form-group">
                  <label>${isAr ? 'سجل المدعى عليه / الهوية:' : 'Defendant CR / ID:'}</label>
                  <input type="text" id="df-defendant-id" class="form-input" value="${data.defendantId}" />
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label>${isAr ? 'موضوع النزاع / التعاقد:' : 'Contract / Dispute Subject:'}</label>
                  <input type="text" id="df-subject" class="form-input" value="${data.contractSubject}" />
                </div>
                <div class="form-group">
                  <label>${isAr ? 'قيمة المطالبة (ر.س):' : 'Claim Amount (SAR):'}</label>
                  <input type="number" id="df-amount" class="form-input" value="${data.claimAmountSar}" />
                </div>
              </div>

              <div class="form-group">
                <label>${isAr ? 'أولاً: الوقائع والخلفية الموضوعية:' : 'Factual Background & Context:'}</label>
                <textarea id="df-facts" class="form-textarea" rows="4">${data.factualBackground}</textarea>
              </div>

              ${data.templateType === 'defense_pleading' || data.templateType === 'appeal_brief' ? `
                <div class="form-group">
                  <label>${isAr ? 'الدفوع الشكلية الأولية (إن وجدت):' : 'Preliminary Formal Defenses:'}</label>
                  <textarea id="df-formal" class="form-textarea" rows="2">${data.formalDefenses}</textarea>
                </div>
                <div class="form-group">
                  <label>${isAr ? 'الأسانيد والدفوع الموضوعية:' : 'Substantive Grounds & Defenses:'}</label>
                  <textarea id="df-substantive" class="form-textarea" rows="3">${data.substantiveDefenses}</textarea>
                </div>
              ` : ''}

              <div class="form-group">
                <label>${isAr ? 'الأسانيد والمواد النظامية المستشهد بها:' : 'Statutory Articles & Precedents Cited:'}</label>
                <input type="text" id="df-statutory" class="form-input" value="${data.statutoryArticles}" />
              </div>

              <div class="form-group">
                <label>${isAr ? 'الطلبات الختامية الجازمة:' : 'Definitive Relief Sought:'}</label>
                <textarea id="df-relief" class="form-textarea" rows="3">${data.requestedRelief}</textarea>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label>${isAr ? 'اسم المحامي الوكيل:' : 'Attorney Name:'}</label>
                  <input type="text" id="df-attorney" class="form-input" value="${data.attorneyName}" />
                </div>
                <div class="form-group">
                  <label>${isAr ? 'رقم رخصة المحاماة:' : 'Bar License Number:'}</label>
                  <input type="text" id="df-license" class="form-input" value="${data.licenseNumber}" />
                </div>
              </div>
            </div>
          </div>

          <!-- Live Document Preview Pane -->
          <div class="drafter-preview-pane">
            <div class="preview-badge-row">
              <span class="preview-badge">📜 ${isAr ? 'معاينة الصك القضائي المعتمد (جاهز للطباعة والتصدير)' : 'Official Judicial Preview (Print Ready)'}</span>
            </div>
            <div id="live-rendered-judicial-doc">
              ${renderedHtml}
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachEvents(container);
  }

  private attachEvents(container: HTMLElement) {
    // Template buttons
    container.querySelectorAll('.template-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        judicialAudio.playGavel();
        this.currentTemplate = btn.getAttribute('data-tpl') as TemplateType;
        this.render(container);
      });
    });

    // Bind form input events
    const bindInput = (id: string, key: keyof PleadingFormData) => {
      const el = container.querySelector(id) as HTMLInputElement | HTMLTextAreaElement;
      if (el) {
        el.addEventListener('input', () => {
          (this.formData[this.currentTemplate] as any)[key] = el.value;
          this.updateLivePreview(container);
        });
      }
    };

    bindInput('#df-court', 'courtName');
    bindInput('#df-circuit', 'circuitName');
    bindInput('#df-claimant', 'claimantName');
    bindInput('#df-claimant-id', 'claimantId');
    bindInput('#df-defendant', 'defendantName');
    bindInput('#df-defendant-id', 'defendantId');
    bindInput('#df-subject', 'contractSubject');
    bindInput('#df-facts', 'factualBackground');
    bindInput('#df-formal', 'formalDefenses');
    bindInput('#df-substantive', 'substantiveDefenses');
    bindInput('#df-statutory', 'statutoryArticles');
    bindInput('#df-relief', 'requestedRelief');
    bindInput('#df-attorney', 'attorneyName');
    bindInput('#df-license', 'licenseNumber');

    const amountInput = container.querySelector('#df-amount') as HTMLInputElement;
    if (amountInput) {
      amountInput.addEventListener('input', () => {
        this.formData[this.currentTemplate].claimAmountSar = Number(amountInput.value);
        this.updateLivePreview(container);
      });
    }

    // Print button
    const printBtn = container.querySelector('#print-pleading-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        judicialAudio.playChime();
        window.print();
      });
    }

    // Copy button
    const copyBtn = container.querySelector('#copy-pleading-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const d = this.getCurrentData();
        const text = `
=== ${d.courtName} - ${d.circuitName} ===
موضوع النزاع: ${d.contractSubject}
المدعي: ${d.claimantName} (سجل: ${d.claimantId})
المدعى عليه: ${d.defendantName} (سجل: ${d.defendantId})
قيمة المطالبة: ${d.claimAmountSar.toLocaleString()} ريال

الوقائع:
${d.factualBackground}

الدفوع والأسانيد:
${d.statutoryArticles}

الطلبات:
${d.requestedRelief}

مقدمه: ${d.attorneyName} (ترخيص: ${d.licenseNumber})
        `.trim();

        navigator.clipboard.writeText(text).then(() => {
          judicialAudio.playChime();
          copyBtn.textContent = '✓ تم النسخ بنجاح!';
          setTimeout(() => {
            copyBtn.textContent = '📋 نسخ النص القضائي';
          }, 2000);
        });
      });
    }
  }

  private updateLivePreview(container: HTMLElement) {
    const previewContainer = container.querySelector('#live-rendered-judicial-doc');
    if (previewContainer) {
      previewContainer.innerHTML = generatePleadingHtml(this.getCurrentData());
    }
  }
}
