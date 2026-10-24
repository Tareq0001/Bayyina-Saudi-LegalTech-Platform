import { calculateLaborEntitlements } from '../engine/labor-calculator';
import { calculateCourtCosts } from '../engine/court-costs-calculator';
import { calculateInheritance } from '../engine/inheritance-calculator';
import { calculateContractDamages } from '../engine/damages-calculator';
import { LaborCalcInput, CourtCostInput, InheritanceInput, DelayDamagesInput } from '../types';
import { i18n } from './i18n';
import { judicialAudio } from './audio';

export type CalculatorTab = 'labor' | 'court_costs' | 'inheritance' | 'damages';

export class CalculatorsView {
  private activeTab: CalculatorTab = 'labor';

  // Labor state
  private laborInput: LaborCalcInput = {
    contractType: 'indefinite',
    years: 5,
    months: 6,
    basicSalary: 12000,
    allowances: 3000,
    terminationReason: 'employer_unlawful_77',
    unusedLeaveDays: 24,
    unpaidNoticeDays: 30
  };

  // Court Costs state
  private courtCostsInput: CourtCostInput = {
    claimValue: 850000,
    caseType: 'commercial',
    isFirstInstance: true,
    isLaborWorkerExempt: false
  };

  // Inheritance state
  private inheritanceInput: InheritanceInput = {
    estateGross: 3600000,
    funeralCosts: 15000,
    debts: 85000,
    bequestWill: 100000,
    heirs: {
      wifeCount: 1,
      father: true,
      mother: true,
      sonsCount: 2,
      daughtersCount: 2
    }
  };

  // Damages state
  private damagesInput: DelayDamagesInput = {
    contractValue: 1500000,
    delayDays: 45,
    dailyRatePercent: 0.1,
    maxCapPercent: 10,
    directMaterialLoss: 40000,
    lossOfProfitExpected: 25000
  };

  render(container: HTMLElement) {
    const isAr = i18n.lang === 'ar';

    container.innerHTML = `
      <div class="calculators-wrapper fade-in">
        <!-- Sub-nav Tabs -->
        <div class="calc-tabs-bar">
          <button class="calc-tab-btn ${this.activeTab === 'labor' ? 'active' : ''}" data-tab="labor">
            👔 ${isAr ? 'حاسبة مستحقات العمل والفصل (م77 وم84)' : 'Labor & Article 77 Severance'}
          </button>
          <button class="calc-tab-btn ${this.activeTab === 'court_costs' ? 'active' : ''}" data-tab="court_costs">
            ⚖️ ${isAr ? 'حاسبة التكاليف القضائية (م/16)' : 'Court Filing Costs Calculator'}
          </button>
          <button class="calc-tab-btn ${this.activeTab === 'inheritance' ? 'active' : ''}" data-tab="inheritance">
            🕌 ${isAr ? 'حاسبة المواريث والفرائض (الأحوال الشخصية)' : 'Islamic Inheritance & Mirath'}
          </button>
          <button class="calc-tab-btn ${this.activeTab === 'damages' ? 'active' : ''}" data-tab="damages">
            📉 ${isAr ? 'حاسبة غرامات التأخير والتعويض (م/191)' : 'Liquidated Damages & Penalties'}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="calc-content-card">
          ${this.renderActiveTab(isAr)}
        </div>
      </div>
    `;

    this.attachEvents(container);
  }

  private renderActiveTab(isAr: boolean): string {
    switch (this.activeTab) {
      case 'labor': return this.renderLaborCalc(isAr);
      case 'court_costs': return this.renderCourtCostsCalc(isAr);
      case 'inheritance': return this.renderInheritanceCalc(isAr);
      case 'damages': return this.renderDamagesCalc(isAr);
    }
  }

  // 1. Labor Calculator
  private renderLaborCalc(isAr: boolean): string {
    const res = calculateLaborEntitlements(this.laborInput);

    return `
      <div class="calc-inner-grid">
        <!-- Form Inputs -->
        <div class="calc-inputs-pane">
          <div class="calc-pane-title">
            <h4>${isAr ? 'بيانات عقد العمل والإنهاء' : 'Employment Contract & Termination Details'}</h4>
            <p>${isAr ? 'احتساب دقيق وفقاً للمواد (77، 84، 85) من نظام العمل السعودي' : 'Statutory computation under Articles 77, 84, and 85'}</p>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'نوع عقد العمل:' : 'Contract Type:'}</label>
              <select id="labor-contract-type" class="form-select">
                <option value="indefinite" ${this.laborInput.contractType === 'indefinite' ? 'selected' : ''}>${isAr ? 'عقد غير محدد المدة' : 'Indefinite Term'}</option>
                <option value="fixed" ${this.laborInput.contractType === 'fixed' ? 'selected' : ''}>${isAr ? 'عقد محدد المدة' : 'Fixed Term'}</option>
              </select>
            </div>
            <div class="form-group">
              <label>${isAr ? 'سبب انتهاء العلاقة العمالية:' : 'Termination Grounds:'}</label>
              <select id="labor-term-reason" class="form-select">
                <option value="employer_unlawful_77" ${this.laborInput.terminationReason === 'employer_unlawful_77' ? 'selected' : ''}>${isAr ? 'فصل غير مشروع من صاحب العمل (المادة 77)' : 'Unlawful Termination by Employer (Art 77)'}</option>
                <option value="employee_resignation_85" ${this.laborInput.terminationReason === 'employee_resignation_85' ? 'selected' : ''}>${isAr ? 'استقالة بمبادرة من العامل (المادة 85)' : 'Voluntary Resignation by Employee (Art 85)'}</option>
                <option value="employer_article_80" ${this.laborInput.terminationReason === 'employer_article_80' ? 'selected' : ''}>${isAr ? 'فسخ تأديبي لخطأ العامل الجسيم (المادة 80)' : 'Summary Disciplinary Dismissal (Art 80)'}</option>
                <option value="employee_article_81" ${this.laborInput.terminationReason === 'employee_article_81' ? 'selected' : ''}>${isAr ? 'ترك العمل لإخلال صاحب العمل (المادة 81)' : 'Employee Resignation with Cause (Art 81)'}</option>
                <option value="contract_expiry" ${this.laborInput.terminationReason === 'contract_expiry' ? 'selected' : ''}>${isAr ? 'انتهاء مدة العقد أو باتفاق الطرفين' : 'Expiry of Term / Mutual Consent'}</option>
              </select>
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'الراتب الأساسي الأخير (ر.س):' : 'Last Basic Wage (SAR):'}</label>
              <input type="number" id="labor-basic" class="form-input" value="${this.laborInput.basicSalary}" min="0" step="500" />
            </div>
            <div class="form-group">
              <label>${isAr ? 'البدلات الثابتة (سكن، مواصلات، دورية):' : 'Standard Allowances (SAR):'}</label>
              <input type="number" id="labor-allowances" class="form-input" value="${this.laborInput.allowances}" min="0" step="250" />
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'سنوات الخدمة:' : 'Service Years:'}</label>
              <input type="number" id="labor-years" class="form-input" value="${this.laborInput.years}" min="0" max="40" />
            </div>
            <div class="form-group">
              <label>${isAr ? 'الأشهر الإضافية:' : 'Additional Months:'}</label>
              <input type="number" id="labor-months" class="form-input" value="${this.laborInput.months}" min="0" max="11" />
            </div>
          </div>

          ${this.laborInput.contractType === 'fixed' && this.laborInput.terminationReason === 'employer_unlawful_77' ? `
            <div class="form-group">
              <label>${isAr ? 'المدة المتبقية من العقد (بالأشهر):' : 'Remaining Contract Months:'}</label>
              <input type="number" id="labor-remaining-months" class="form-input" value="${this.laborInput.remainingContractMonths || 6}" min="1" max="60" />
            </div>
          ` : ''}

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'رصيد الإجازات السنوية غير المستخدمة (أيام):' : 'Unused Vacation Days:'}</label>
              <input type="number" id="labor-vacation-days" class="form-input" value="${this.laborInput.unusedLeaveDays || 0}" min="0" />
            </div>
            <div class="form-group">
              <label>${isAr ? 'أيام مهلة الإشعار غير المدفوعة:' : 'Unpaid Notice Days:'}</label>
              <input type="number" id="labor-notice-days" class="form-input" value="${this.laborInput.unpaidNoticeDays || 0}" min="0" />
            </div>
          </div>
        </div>

        <!-- Calculation Results -->
        <div class="calc-results-pane">
          <div class="total-entitlement-hero">
            <span class="hero-label">${isAr ? 'إجمالي المستحقات العمالية الواجبة السداد:' : 'Total Payable Labor Entitlements:'}</span>
            <div class="hero-number">${res.totalEntitlements.toLocaleString('ar-SA')} <span class="sar-unit">ر.س</span></div>
            <span class="hero-sub">الأجر الشامل المعتمد بالحساب: ${res.totalWage.toLocaleString('ar-SA')} ر.س / شهرياً</span>
          </div>

          <div class="entitlements-breakdown-list">
            <div class="breakdown-item">
              <div class="item-title-col">
                <strong>مكافأة نهاية الخدمة (المادة 84)</strong>
                <span>بحسب سنوات الخدمة ونظام الاستحقاق</span>
              </div>
              <div class="item-amount">${res.eosGratuity.toLocaleString('ar-SA')} ر.س</div>
            </div>

            ${res.article77Compensation > 0 ? `
              <div class="breakdown-item highlight-green">
                <div class="item-title-col">
                  <strong>تعويض الفصل غير المشروع (المادة 77)</strong>
                  <span>الحد الأدنى شهران، أو 15 يوماً عن كل سنة</span>
                </div>
                <div class="item-amount">${res.article77Compensation.toLocaleString('ar-SA')} ر.س</div>
              </div>
            ` : ''}

            ${res.leaveEncashment > 0 ? `
              <div class="breakdown-item">
                <div class="item-title-col">
                  <strong>بدل رصيد الإجازات المستحقة (المادة 111)</strong>
                  <span>عن ${this.laborInput.unusedLeaveDays} يوماً من واقع الأجر الفعلي</span>
                </div>
                <div class="item-amount">${res.leaveEncashment.toLocaleString('ar-SA')} ر.س</div>
              </div>
            ` : ''}

            ${res.noticeCompensation > 0 ? `
              <div class="breakdown-item">
                <div class="item-title-col">
                  <strong>بدل مهلة الإشعار (المادة 76)</strong>
                  <span>عن عدم مراعاة مدة الإخطار المقررة</span>
                </div>
                <div class="item-amount">${res.noticeCompensation.toLocaleString('ar-SA')} ر.س</div>
              </div>
            ` : ''}
          </div>

          <div class="statutory-basis-box">
            <strong>الأسانيد النظامية للنتيجة:</strong>
            <ul>
              ${(isAr ? res.statutoryBasisAr : res.statutoryBasisEn).map(s => `<li>⚖️ ${s}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Court Costs Calculator
  private renderCourtCostsCalc(isAr: boolean): string {
    const res = calculateCourtCosts(this.courtCostsInput);

    return `
      <div class="calc-inner-grid">
        <div class="calc-inputs-pane">
          <div class="calc-pane-title">
            <h4>${isAr ? 'حساب تكاليف الدعاوى القضائية' : 'Judicial Costs & Filing Tariff Calculator'}</h4>
            <p>${isAr ? 'استناداً للمرسوم الملكي (م/16) ولائحته التنفيذية بوزارة العدل' : 'Pursuant to Royal Decree M/16 and Executive Regulations'}</p>
          </div>

          <div class="form-group">
            <label>${isAr ? 'نوع الدعوى أو الطلب القضائي:' : 'Proceedings Type:'}</label>
            <select id="court-case-type" class="form-select">
              <option value="commercial" ${this.courtCostsInput.caseType === 'commercial' ? 'selected' : ''}>${isAr ? 'دعوى تجارية ابتدائية (محاكم تجارية)' : 'Commercial First Instance'}</option>
              <option value="general" ${this.courtCostsInput.caseType === 'general' ? 'selected' : ''}>${isAr ? 'دعوى عامة أو عقارية (محاكم عامة)' : 'General / Real Estate First Instance'}</option>
              <option value="appeal" ${this.courtCostsInput.caseType === 'appeal' ? 'selected' : ''}>${isAr ? 'طلب استئناف صك حكم ابتدائي' : 'Appellate Challenge'}</option>
              <option value="petition_reconsideration" ${this.courtCostsInput.caseType === 'petition_reconsideration' ? 'selected' : ''}>${isAr ? 'طلب التماس إعادة النظر' : 'Petition for Reconsideration'}</option>
              <option value="labor" ${this.courtCostsInput.caseType === 'labor' ? 'selected' : ''}>${isAr ? 'دعوى عمالية (مقدمة من عامل)' : 'Labor Claim (Employee)'}</option>
            </select>
          </div>

          <div class="form-group">
            <label>${isAr ? 'قيمة المطالبة المالية الإجمالية (ر.س):' : 'Total Claim Amount (SAR):'}</label>
            <input type="number" id="court-claim-val" class="form-input" value="${this.courtCostsInput.claimValue}" min="0" step="10000" />
          </div>

          <div class="form-check-group">
            <label class="checkbox-label">
              <input type="checkbox" id="labor-exempt-check" ${this.courtCostsInput.caseType === 'labor' || this.courtCostsInput.isLaborWorkerExempt ? 'checked' : ''} />
              <span>${isAr ? 'مقدم الدعوى عامل خاضع لنظام العمل (إعفاء نظامي كامل المادة 17)' : 'Claimant is an employee under Labor Law (Full Exemption Art 17)'}</span>
            </label>
          </div>
        </div>

        <div class="calc-results-pane">
          <div class="total-entitlement-hero ${res.isExempt ? 'exempt' : ''}">
            <span class="hero-label">${isAr ? 'مبلغ التكاليف القضائية المستحقة:' : 'Payable Judicial Costs Tariff:'}</span>
            <div class="hero-number">${res.finalFee.toLocaleString('ar-SA')} <span class="sar-unit">ر.س</span></div>
            <span class="hero-sub">
              ${res.isExempt ? (isAr ? 'معفى من الرسوم القضائية بقوة النظام' : 'Statutorily Exempt from Court Fees') : (isAr ? `الحد الأقصى للتكاليف نظاماً: مليون ريال` : `Statutory Cap: 1,000,000 SAR`)}
            </span>
          </div>

          ${res.isExempt ? `
            <div class="exemption-card-box">
              <div class="ex-icon">🛡️</div>
              <div>
                <strong>${isAr ? 'موجب الإعفاء من التكاليف:' : 'Exemption Rationale:'}</strong>
                <p>${isAr ? res.exemptionReasonAr : res.exemptionReasonEn}</p>
              </div>
            </div>
          ` : `
            <div class="entitlements-breakdown-list">
              <div class="breakdown-item">
                <div class="item-title-col">
                  <strong>النسبة المطبقة على المطالبة</strong>
                  <span>حسب الشرائح النظامية</span>
                </div>
                <div class="item-amount">${res.feePercentage}%</div>
              </div>
              <div class="breakdown-item">
                <div class="item-title-col">
                  <strong>الحد الأقصى المقرر نظاماً (Cap)</strong>
                  <span>المادة 3 من نظام تكاليف الدعاوى</span>
                </div>
                <div class="item-amount">1,000,000 ر.س</div>
              </div>
            </div>
          `}

          <div class="statutory-basis-box">
            <strong>المرجع النظامي:</strong>
            <p>⚖️ ${isAr ? res.legalRefAr : res.legalRefEn}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 3. Inheritance Calculator
  private renderInheritanceCalc(isAr: boolean): string {
    const res = calculateInheritance(this.inheritanceInput);

    return `
      <div class="calc-inner-grid">
        <div class="calc-inputs-pane">
          <div class="calc-pane-title">
            <h4>${isAr ? 'بيانات التركة والورثة الشرعيين' : 'Estate Liquidation & Islamic Heirs'}</h4>
            <p>${isAr ? 'تطبيق دقيق للأحكام المقننة في نظام الأحوال الشخصية (م/73)' : 'Statutory codified inheritance under Personal Status Law (M/73)'}</p>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'إجمالي التركة (الأموال والعقارات) ر.س:' : 'Gross Estate (SAR):'}</label>
              <input type="number" id="m-gross" class="form-input" value="${this.inheritanceInput.estateGross}" min="0" step="50000" />
            </div>
            <div class="form-group">
              <label>${isAr ? 'مؤن التجهيز والديون المرسلة (ر.س):' : 'Funeral & Debts (SAR):'}</label>
              <input type="number" id="m-debts" class="form-input" value="${this.inheritanceInput.debts + this.inheritanceInput.funeralCosts}" min="0" step="5000" />
            </div>
          </div>

          <div class="form-group">
            <label>${isAr ? 'الوصية المشروعة (في حدود الثلث الشرعي) ر.س:' : 'Valid Testamentary Bequest (Max 1/3):'}</label>
            <input type="number" id="m-bequest" class="form-input" value="${this.inheritanceInput.bequestWill}" min="0" step="10000" />
          </div>

          <hr class="calc-divider" />
          <h5 class="sub-pane-title">👥 ${isAr ? 'تحديد الورثة المتواجدين على قيد الحياة:' : 'Surviving Eligible Heirs:'}</h5>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'الزوجة / الزوجات:' : 'Wife / Wives Count:'}</label>
              <select id="m-wives" class="form-select">
                <option value="0" ${this.inheritanceInput.heirs.wifeCount === 0 ? 'selected' : ''}>لا توجد زوجة</option>
                <option value="1" ${this.inheritanceInput.heirs.wifeCount === 1 ? 'selected' : ''}>زوجة واحدة (1)</option>
                <option value="2" ${this.inheritanceInput.heirs.wifeCount === 2 ? 'selected' : ''}>زوجتان (2)</option>
                <option value="3" ${this.inheritanceInput.heirs.wifeCount === 3 ? 'selected' : ''}>3 زوجات</option>
                <option value="4" ${this.inheritanceInput.heirs.wifeCount === 4 ? 'selected' : ''}>4 زوجات</option>
              </select>
            </div>
            <div class="form-group">
              <label>${isAr ? 'هل المتوفاة زوجة ويوجد زوج؟' : 'Is deceased a woman with husband?'}</label>
              <select id="m-husband" class="form-select">
                <option value="no" ${!this.inheritanceInput.heirs.husband ? 'selected' : ''}>لا (المتوفى رجل)</option>
                <option value="yes" ${this.inheritanceInput.heirs.husband ? 'selected' : ''}>نعم (المتوفاة امرأة والزوج حي)</option>
              </select>
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'الأب على قيد الحياة؟' : 'Is Father alive?'}</label>
              <select id="m-father" class="form-select">
                <option value="yes" ${this.inheritanceInput.heirs.father ? 'selected' : ''}>نعم</option>
                <option value="no" ${!this.inheritanceInput.heirs.father ? 'selected' : ''}>لا (متوفى)</option>
              </select>
            </div>
            <div class="form-group">
              <label>${isAr ? 'الأم على قيد الحياة؟' : 'Is Mother alive?'}</label>
              <select id="m-mother" class="form-select">
                <option value="yes" ${this.inheritanceInput.heirs.mother ? 'selected' : ''}>نعم</option>
                <option value="no" ${!this.inheritanceInput.heirs.mother ? 'selected' : ''}>لا (متوفاة)</option>
              </select>
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'عدد الأبناء (ذكور):' : 'Number of Sons:'}</label>
              <input type="number" id="m-sons" class="form-input" value="${this.inheritanceInput.heirs.sonsCount || 0}" min="0" max="20" />
            </div>
            <div class="form-group">
              <label>${isAr ? 'عدد البنات (إناث):' : 'Number of Daughters:'}</label>
              <input type="number" id="m-daughters" class="form-input" value="${this.inheritanceInput.heirs.daughtersCount || 0}" min="0" max="20" />
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'عدد الإخوة الأشقاء:' : 'Full Brothers Count:'}</label>
              <input type="number" id="m-fbrothers" class="form-input" value="${this.inheritanceInput.heirs.fullBrothersCount || 0}" min="0" max="20" />
            </div>
            <div class="form-group">
              <label>${isAr ? 'عدد الأخوات الشقيقات:' : 'Full Sisters Count:'}</label>
              <input type="number" id="m-fsisters" class="form-input" value="${this.inheritanceInput.heirs.fullSistersCount || 0}" min="0" max="20" />
            </div>
          </div>
        </div>

        <div class="calc-results-pane">
          <div class="total-entitlement-hero">
            <span class="hero-label">${isAr ? 'التركة الصافية القابلة للقسمة:' : 'Net Distributable Estate:'}</span>
            <div class="hero-number">${res.netDistributableEstate.toLocaleString('ar-SA')} <span class="sar-unit">ر.س</span></div>
            <span class="hero-sub">
              ${isAr ? res.explanationAr : res.explanationEn}
            </span>
          </div>

          <!-- Shares Table -->
          <div class="shares-table-wrapper">
            <table class="shares-table">
              <thead>
                <tr>
                  <th>${isAr ? 'الوارث الشرعي' : 'Heir'}</th>
                  <th>${isAr ? 'الفرض / النصيب' : 'Share'}</th>
                  <th>${isAr ? 'نصيب الفرد' : 'Per Person'}</th>
                  <th>${isAr ? 'الإجمالي (ر.س)' : 'Total (SAR)'}</th>
                </tr>
              </thead>
              <tbody>
                ${res.shares.map(s => `
                  <tr class="${s.status === 'mahjoob' ? 'mahjoob-row' : ''}">
                    <td>
                      <strong>${isAr ? s.heirTitleAr : s.heirTitleEn}</strong>
                      <div class="share-reason-sub">${isAr ? s.reasonAr : s.reasonEn}</div>
                    </td>
                    <td><span class="fraction-badge">${isAr ? s.shareFractionAr : s.shareFractionEn}</span></td>
                    <td class="amount-cell">${s.perPersonAmountSar.toLocaleString('ar-SA')} ر.س</td>
                    <td class="amount-cell total-cell">${s.totalAmountSar.toLocaleString('ar-SA')} ر.س</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // 4. Contract Damages Calculator
  private renderDamagesCalc(isAr: boolean): string {
    const res = calculateContractDamages(this.damagesInput);

    return `
      <div class="calc-inner-grid">
        <div class="calc-inputs-pane">
          <div class="calc-pane-title">
            <h4>${isAr ? 'حساب غرامات التأخير والشرط الجزائي' : 'Delay Penalties & Tort Damages Calculator'}</h4>
            <p>${isAr ? 'وفق المادتين (138 و178) من نظام المعاملات المدنية وضوابط تخفيض التعويض' : 'Under Articles 138 & 178 Civil Transactions Law'}</p>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'قيمة العقد الإجمالية (ر.س):' : 'Total Contract Value (SAR):'}</label>
              <input type="number" id="damages-contract-val" class="form-input" value="${this.damagesInput.contractValue}" min="0" step="50000" />
            </div>
            <div class="form-group">
              <label>${isAr ? 'أيام التأخير الفعلية:' : 'Days of Actual Delay:'}</label>
              <input type="number" id="damages-days" class="form-input" value="${this.damagesInput.delayDays}" min="0" />
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'نسبة الغرامة اليومية المحددة (%):' : 'Daily Penalty Rate (%):'}</label>
              <input type="number" id="damages-daily-rate" class="form-input" value="${this.damagesInput.dailyRatePercent}" step="0.01" min="0" />
            </div>
            <div class="form-group">
              <label>${isAr ? 'الحد الأقصى للغرامة التعاقدية (Cap %):' : 'Maximum Cap Limit (%):'}</label>
              <input type="number" id="damages-cap" class="form-input" value="${this.damagesInput.maxCapPercent}" min="1" max="50" />
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${isAr ? 'الخسارة المادية المباشرة المثبتة (ر.س):' : 'Proven Direct Material Loss (SAR):'}</label>
              <input type="number" id="damages-direct" class="form-input" value="${this.damagesInput.directMaterialLoss}" min="0" step="5000" />
            </div>
            <div class="form-group">
              <label>${isAr ? 'فوات الكسب المحقق (المادة 138) ر.س:' : 'Loss of Profit (Art 138) SAR:'}</label>
              <input type="number" id="damages-profit" class="form-input" value="${this.damagesInput.lossOfProfitExpected}" min="0" step="5000" />
            </div>
          </div>
        </div>

        <div class="calc-results-pane">
          <div class="total-entitlement-hero">
            <span class="hero-label">${isAr ? 'التعويض الإجمالي المقدر قضائياً:' : 'Total Assessed Judicial Award:'}</span>
            <div class="hero-number">${res.totalAssessedAwardSar.toLocaleString('ar-SA')} <span class="sar-unit">ر.س</span></div>
            <span class="hero-sub">${isAr ? res.legalAnalysisAr : res.legalAnalysisEn}</span>
          </div>

          <div class="entitlements-breakdown-list">
            <div class="breakdown-item">
              <div class="item-title-col">
                <strong>غرامة التأخير النافذة بعد مراعاة السقف</strong>
                <span>${res.isCapped ? 'تم تخفيضها للسقف الأقصى المتفق عليه' : 'ضمن الحدود النظامية'}</span>
              </div>
              <div class="item-amount">${res.cappedPenaltyAmount.toLocaleString('ar-SA')} ر.س</div>
            </div>
            <div class="breakdown-item">
              <div class="item-title-col">
                <strong>التعويض عن الضرر المادي المباشر وفوات الكسب</strong>
                <span>المادة (138) معاملات مدنية</span>
              </div>
              <div class="item-amount">${res.provenDirectDamages.toLocaleString('ar-SA')} ر.س</div>
            </div>
          </div>

          <div class="statutory-basis-box">
            <strong>الرأي القانوني في الشرط الجزائي:</strong>
            <p>⚖️ لا يجوز الجمع بين الشرط الجزائي الكامل والتعويض عن ذات الضرر لتفادي الإثراء بلا سبب؛ وتملك المحكمة سلطة تقديرية في ملاءمة التعويض للخسارة الفعلية.</p>
          </div>
        </div>
      </div>
    `;
  }

  private attachEvents(container: HTMLElement) {
    // Tabs switcher
    container.querySelectorAll('.calc-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        judicialAudio.playChime();
        this.activeTab = btn.getAttribute('data-tab') as CalculatorTab;
        this.render(container);
      });
    });

    // Labor inputs
    const bInput = container.querySelector('#labor-basic') as HTMLInputElement;
    if (bInput) {
      bInput.addEventListener('input', () => {
        this.laborInput.basicSalary = Number(bInput.value);
        this.render(container);
      });
    }

    const aInput = container.querySelector('#labor-allowances') as HTMLInputElement;
    if (aInput) {
      aInput.addEventListener('input', () => {
        this.laborInput.allowances = Number(aInput.value);
        this.render(container);
      });
    }

    const yInput = container.querySelector('#labor-years') as HTMLInputElement;
    if (yInput) {
      yInput.addEventListener('input', () => {
        this.laborInput.years = Number(yInput.value);
        this.render(container);
      });
    }

    const mInput = container.querySelector('#labor-months') as HTMLInputElement;
    if (mInput) {
      mInput.addEventListener('input', () => {
        this.laborInput.months = Number(mInput.value);
        this.render(container);
      });
    }

    const cSelect = container.querySelector('#labor-contract-type') as HTMLSelectElement;
    if (cSelect) {
      cSelect.addEventListener('change', () => {
        this.laborInput.contractType = cSelect.value as any;
        this.render(container);
      });
    }

    const tSelect = container.querySelector('#labor-term-reason') as HTMLSelectElement;
    if (tSelect) {
      tSelect.addEventListener('change', () => {
        this.laborInput.terminationReason = tSelect.value as any;
        this.render(container);
      });
    }

    const vacInput = container.querySelector('#labor-vacation-days') as HTMLInputElement;
    if (vacInput) {
      vacInput.addEventListener('input', () => {
        this.laborInput.unusedLeaveDays = Number(vacInput.value);
        this.render(container);
      });
    }

    const notInput = container.querySelector('#labor-notice-days') as HTMLInputElement;
    if (notInput) {
      notInput.addEventListener('input', () => {
        this.laborInput.unpaidNoticeDays = Number(notInput.value);
        this.render(container);
      });
    }

    // Court Costs inputs
    const ccClaim = container.querySelector('#court-claim-val') as HTMLInputElement;
    if (ccClaim) {
      ccClaim.addEventListener('input', () => {
        this.courtCostsInput.claimValue = Number(ccClaim.value);
        this.render(container);
      });
    }

    const ccType = container.querySelector('#court-case-type') as HTMLSelectElement;
    if (ccType) {
      ccType.addEventListener('change', () => {
        this.courtCostsInput.caseType = ccType.value as any;
        this.render(container);
      });
    }

    const ccLaborCheck = container.querySelector('#labor-exempt-check') as HTMLInputElement;
    if (ccLaborCheck) {
      ccLaborCheck.addEventListener('change', () => {
        this.courtCostsInput.isLaborWorkerExempt = ccLaborCheck.checked;
        this.render(container);
      });
    }

    // Inheritance inputs
    const mGross = container.querySelector('#m-gross') as HTMLInputElement;
    if (mGross) {
      mGross.addEventListener('input', () => {
        this.inheritanceInput.estateGross = Number(mGross.value);
        this.render(container);
      });
    }

    const mWives = container.querySelector('#m-wives') as HTMLSelectElement;
    if (mWives) {
      mWives.addEventListener('change', () => {
        this.inheritanceInput.heirs.wifeCount = Number(mWives.value);
        this.render(container);
      });
    }

    const mHusband = container.querySelector('#m-husband') as HTMLSelectElement;
    if (mHusband) {
      mHusband.addEventListener('change', () => {
        this.inheritanceInput.heirs.husband = mHusband.value === 'yes';
        this.render(container);
      });
    }

    const mFather = container.querySelector('#m-father') as HTMLSelectElement;
    if (mFather) {
      mFather.addEventListener('change', () => {
        this.inheritanceInput.heirs.father = mFather.value === 'yes';
        this.render(container);
      });
    }

    const mMother = container.querySelector('#m-mother') as HTMLSelectElement;
    if (mMother) {
      mMother.addEventListener('change', () => {
        this.inheritanceInput.heirs.mother = mMother.value === 'yes';
        this.render(container);
      });
    }

    const mSons = container.querySelector('#m-sons') as HTMLInputElement;
    if (mSons) {
      mSons.addEventListener('input', () => {
        this.inheritanceInput.heirs.sonsCount = Number(mSons.value);
        this.render(container);
      });
    }

    const mDaughters = container.querySelector('#m-daughters') as HTMLInputElement;
    if (mDaughters) {
      mDaughters.addEventListener('input', () => {
        this.inheritanceInput.heirs.daughtersCount = Number(mDaughters.value);
        this.render(container);
      });
    }

    const mFBrothers = container.querySelector('#m-fbrothers') as HTMLInputElement;
    if (mFBrothers) {
      mFBrothers.addEventListener('input', () => {
        this.inheritanceInput.heirs.fullBrothersCount = Number(mFBrothers.value);
        this.render(container);
      });
    }

    const mFSisters = container.querySelector('#m-fsisters') as HTMLInputElement;
    if (mFSisters) {
      mFSisters.addEventListener('input', () => {
        this.inheritanceInput.heirs.fullSistersCount = Number(mFSisters.value);
        this.render(container);
      });
    }

    // Damages inputs
    const dVal = container.querySelector('#damages-contract-val') as HTMLInputElement;
    if (dVal) {
      dVal.addEventListener('input', () => {
        this.damagesInput.contractValue = Number(dVal.value);
        this.render(container);
      });
    }

    const dDays = container.querySelector('#damages-days') as HTMLInputElement;
    if (dDays) {
      dDays.addEventListener('input', () => {
        this.damagesInput.delayDays = Number(dDays.value);
        this.render(container);
      });
    }
  }
}
