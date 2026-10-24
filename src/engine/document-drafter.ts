import { PleadingFormData, TemplateType } from '../types';

export const DEFAULT_PLEADING_DATA: Record<TemplateType, PleadingFormData> = {
  claim_commercial: {
    templateType: 'claim_commercial',
    courtName: 'المحكمة التجارية بالرياض',
    circuitName: 'الدائرة التجارية السابعة',
    claimantName: 'شركة الإمداد الرقمي للتقنية المحدودة',
    claimantId: '7001928341',
    claimantCapacity: 'المدعية (المتعاقد والمورد الأساسي)',
    claimantAddress: 'الرياض - طريق الملك فهد - برج التقنية',
    defendantName: 'مؤسسة الرواد للتجارة والمقاولات',
    defendantId: '1010398241',
    defendantAddress: 'الرياض - حي الملز - شارع الستين',
    caseNumber: '451082914',
    caseYear: '1445هـ',
    claimAmountSar: 485000,
    contractDate: '1444/08/15هـ',
    contractSubject: 'توريد وتركيب أجهزة وخوادم سحابية وربط قواعد البيانات',
    factualBackground: 'قامت موكلتي بإنجاز كافة أعمال التوريد المتفق عليها وتسليمها بموجب محاضر فحص واستلام رسمية موقعة ومختومة من الطرفين. وحيث إن المدعى عليها سددت الدفعة الأولى وامتنعت عن سداد باقي قيمة العقد دون مسوغ شرعي أو نظامي رغم التنبيه والإخطار.',
    formalDefenses: '',
    substantiveDefenses: '',
    requestedRelief: '1- إلزام المدعى عليها بأن تدفع للمدعية مبلغاً قدره (485,000) ريال سعودي المتبقي من قيمة العقد.\n2- إلزامها بالتعويض عن أضرار التأخير وغرامة الإخلال بمبلغ (48,500) ريال.\n3- إلزامها بأتعاب المحاماة ومصاريف الدعوى القضائية بمبلغ (35,000) ريال.',
    statutoryArticles: 'المادة (94) و(138) و(178) من نظام المعاملات المدنية، والمادة (53) من نظام الإثبات.',
    attorneyName: 'المحامي / طارق ابوعشي',
    licenseNumber: '42/1098',
    retainerAmountSar: 35000,
    contingencyPercent: 10
  },
  defense_pleading: {
    templateType: 'defense_pleading',
    courtName: 'المحكمة التجارية بجدة',
    circuitName: 'الدائرة التجارية الرابعة',
    claimantName: 'شركة البناء الحديث ش.م.م',
    claimantId: '7002819441',
    claimantCapacity: 'المدعية',
    claimantAddress: 'جدة - حي الأندلس',
    defendantName: 'شركة التطوير المعماري للاستثمار',
    defendantId: '1010884920',
    defendantAddress: 'جدة - طريق الملك عبدالعزيز',
    caseNumber: '442194012',
    caseYear: '1445هـ',
    claimAmountSar: 1250000,
    contractDate: '1444/01/20هـ',
    contractSubject: 'عقد مقاولة وتشييد أبراج سكنية',
    factualBackground: 'أقامت المدعية دعواها مطالبة بمستخلصات ختامية، متجاهلة تقارير الاستشاري المشرف التي أثبتت وجود عيوب إنشائية جسيمة في العزل والتشطيبات تجاوزت تكلفتها قيمة المستخلص.',
    formalDefenses: 'الدفع بعدم قبول الدعوى لرفعها قبل استنفاد شرط اللجوء إلى التوفيق والوساطة المنصوص عليه صراحة في البند (24) من العقد، استناداً للمادة (60) من نظام المحاكم التجارية.',
    substantiveDefenses: 'ثبوت إخلال المدعية بالمواصفات القياسية لكود البناء السعودي ووجود تأخير غير مبرر لمدة 120 يوماً يوجب تطبيق غرامة التأخير التعاقدية وإعمال المقاصة القضائية طبقاً لنظام المعاملات المدنية.',
    requestedRelief: 'أولاً: أصلياً، الحكم بعدم قبول الدعوى شكلاً لوجود شرط الوساطة الملزم.\nثانياً: احتياطياً، في الموضوع، رفض الدعوى لثبوت العيوب المانعة للاستحقاق والحكم بطلبنا العارض بإلزام المدعية بتعويض التأخير وأتعاب المحاماة.',
    statutoryArticles: 'المادة (60) نظام المحاكم التجارية، المواد (94، 178، 351) نظام المعاملات المدنية، والمادة (29) نظام الإثبات.',
    attorneyName: 'المحامي / طارق ابوعشي',
    licenseNumber: '42/1098',
    retainerAmountSar: 50000,
    contingencyPercent: 8
  },
  appeal_brief: {
    templateType: 'appeal_brief',
    courtName: 'محكمة الاستئناف بالرياض',
    circuitName: 'دائرة الاستئناف التجارية الأولى',
    claimantName: 'شركة سلاسل الإمداد اللوجستية ش.م.م',
    claimantId: '7003847291',
    claimantCapacity: 'المستأنفة (المدعى عليها سابقاً)',
    claimantAddress: 'الرياض - حي العليا',
    defendantName: 'مؤسسة التقنية العالمية المحدودة',
    defendantId: '1010573829',
    defendantAddress: 'الرياض - حي الصحافة',
    caseNumber: '441029341',
    caseYear: '1445هـ',
    claimAmountSar: 890000,
    contractDate: '1443/11/10هـ',
    contractSubject: 'استئناف الحكم الابتدائي رقم (441029341) القاضي بإلزام المستأنفة',
    factualBackground: 'أصدرت الدائرة الابتدائية حكمها بإلزام موكلتي بالمبلغ، وقد شابه القصور في التسبيب والفساد في الاستدلال، إذ التفتت الدائرة عن ندب خبير هندسي لفحص العيوب الجوهرية المدفوع بها، واكتفت بأوراق عادية مجردة لم يثبت توقيعها من المفوض نظاماً.',
    formalDefenses: 'قيد الاستئناف خلال المهلة النظامية المقررة (ثلاثون يوماً) من تاريخ إيداع الصك بالنظام الإلكتروني عملاً بالمادة (187) مرافعات شرعية.',
    substantiveDefenses: '1- الخطأ في تطبيق نظام الإثبات (المادة 29 و66) بالاعتماد على بينة غير مكتملة.\n2- إغفال حق الدفاع الجوهري بعدم إحالة ملف الدعوى إلى منصة (خبرة) لتقدير نسبة الإنجاز الفعلية.',
    requestedRelief: '1- قبول الاستئناف شكلاً لوروده في الميعاد النظامي.\n2- موضوعاً: نقض وإلغاء الحكم الابتدائي المستأنف، والقضاء مجدداً برفض دعوى المدعية، أو إعادة القضية للدائرة الابتدائية لندب خبير هندسي محايد.',
    statutoryArticles: 'المادة (187) و(188) من نظام المرافعات الشرعية، والمادة (110) من نظام الإثبات.',
    attorneyName: 'المحامي / طارق ابوعشي',
    licenseNumber: '42/1098',
    retainerAmountSar: 45000,
    contingencyPercent: 12
  },
  retainer_agreement: {
    templateType: 'retainer_agreement',
    courtName: 'المحاكم التجارية والعمالية والعامة بالرياض',
    circuitName: 'كافة الدوائر القضائية ولجان الفصل وهيئات التحكيم',
    claimantName: 'شركة الاستثمار القابضة للتطوير العقاري',
    claimantId: '7008492019',
    claimantCapacity: 'الطرف الأول (الموكل)',
    claimantAddress: 'الرياض - طريق الملك خالد',
    defendantName: 'مكتب المحامي طارق ابوعشي للاستشارات القانونية والتمثيل القضائي',
    defendantId: '1029384756',
    defendantAddress: 'أبها / الرياض - ترخيص رقم 42/1098',
    caseNumber: 'اتفاقية تمثيل 1445-09',
    caseYear: '1445هـ',
    claimAmountSar: 3500000,
    contractDate: '1445/07/01هـ',
    contractSubject: 'عقد أتعاب محاماة وتمثيل قضائي وصياغة لوائح ومذكرات',
    factualBackground: 'اتفق الطرفان بكامل الأهلية المعتبرة شرعاً ونظاماً على قيام الطرف الثاني بتمثيل الطرف الأول في النزاع القضائي المنعقد أمام المحاكم السعودية وتبادل المذكرات وحضور الجلسات حتى صدور حكم قطعي.',
    formalDefenses: '',
    substantiveDefenses: '',
    requestedRelief: 'الالتزام ببذل العناية المهنية الواجبة طبقاً لنظام المحاماة ولائحته التنفيذية وميثاق السلوك المهني الصادر عن الهيئة السعودية للمحامين.',
    statutoryArticles: 'نظام المحاماة ولائحته التنفيذية (مرسوم ملكي م/38)، ونظام المعاملات المدنية.',
    attorneyName: 'المحامي / طارق ابوعشي',
    licenseNumber: '42/1098',
    retainerAmountSar: 60000,
    contingencyPercent: 7.5
  }
};

export function generatePleadingHtml(data: PleadingFormData): string {
  const titles: Record<TemplateType, string> = {
    claim_commercial: 'صَحِيفَةُ دَعْوَى قَضَائِيَّةٍ (مُطَالَبَةٌ مَالِيَّةٌ تِجَارِيَّةٌ)',
    defense_pleading: 'مُذَكِّرَةٌ جَوَابِيَّةٌ مُتَضَمِّنَةٌ دُفُوعاً شَكْلِيَّةً وَمَوْضُوعِيَّةً',
    appeal_brief: 'لائِحَةُ اعْتِرَاضٍ بِطَلَبِ الاسْتِئْنَافِ مَسْبُوبَةٌ نِظَاماً',
    retainer_agreement: 'عَقْدُ أَتْعَابِ مُحَامَاةٍ وَتَمْثِيلٍ قَضَائِيٍّ نَمُوذَجِيٍّ مُعْتَمَدٍ'
  };

  const isRetainer = data.templateType === 'retainer_agreement';

  return `
    <div class="judicial-doc-container official-parchment-sheet" dir="rtl">
      <!-- Islamic Calligraphic Basmala Header -->
      <div class="judicial-basmala-row">
        <div class="basmala-ornament-left">❖</div>
        <div class="basmala-text">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
        <div class="basmala-ornament-right">❖</div>
      </div>

      <!-- Official Kingdom Header & Najiz Electronic Verification -->
      <div class="official-judicial-header">
        <div class="header-seal-column">
          <div class="seal-kingdom-name">المملكة العربية السعودية</div>
          <div class="seal-ministry-name">وزارة العدل - منصة التقاضي الإلكتروني (ناجز)</div>
          <div class="seal-court-spec">${data.courtName} - ${data.circuitName}</div>
        </div>

        <div class="header-emblem-column">
          <div class="emblem-judicial-crest">⚖️</div>
          <div class="emblem-saudi-tag">وثيقة قضائية رسمية</div>
        </div>

        <div class="header-electronic-badge">
          <div class="qr-watermark-box">
            <div class="qr-code-graphic">
              <!-- Inline QR Stamp Pattern -->
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect width="44" height="44" rx="4" fill="#064e3b" fill-opacity="0.08"/>
                <rect x="4" y="4" width="14" height="14" rx="2" stroke="#064e3b" stroke-width="2"/>
                <rect x="8" y="8" width="6" height="6" fill="#064e3b"/>
                <rect x="26" y="4" width="14" height="14" rx="2" stroke="#064e3b" stroke-width="2"/>
                <rect x="30" y="8" width="6" height="6" fill="#064e3b"/>
                <rect x="4" y="26" width="14" height="14" rx="2" stroke="#064e3b" stroke-width="2"/>
                <rect x="8" y="30" width="6" height="6" fill="#064e3b"/>
                <circle cx="26" cy="26" r="3" fill="#d97706"/>
                <rect x="32" y="26" width="8" height="3" fill="#064e3b"/>
                <rect x="26" y="34" width="14" height="6" fill="#064e3b"/>
              </svg>
            </div>
            <div class="qr-verification-details">
              <div><strong>رقم القيد:</strong> ${data.caseNumber || '451082914'}</div>
              <div><strong>السنة:</strong> ${data.caseYear || '1445هـ'}</div>
              <div><strong>التاريخ:</strong> ${data.contractDate || '1445/07/15هـ'}</div>
            </div>
          </div>
          <div class="najiz-verified-strip">✓ موثق إلكترونياً عبر منصة ناجز العدلية</div>
        </div>
      </div>

      <!-- Golden Judicial Pleading Title Banner -->
      <div class="judicial-title-banner">
        <div class="banner-ribbon-line"></div>
        <div class="banner-title-text">${titles[data.templateType]}</div>
        <div class="banner-ribbon-line"></div>
      </div>

      <!-- Parties Block (الخصوم وصفاتهم) -->
      <div class="judicial-parties-card">
        <div class="party-entry party-claimant">
          <div class="party-role-tag">${isRetainer ? 'الطرف الأول (الموكل):' : 'المدعي (أو المستأنف):'}</div>
          <div class="party-identity">
            <span class="party-name-strong">${data.claimantName}</span>
            <span class="party-id-chip">السجل / الهوية: <strong>${data.claimantId}</strong></span>
          </div>
          <div class="party-address-line">📌 العنوان الوطني المعتمد: ${data.claimantAddress}</div>
        </div>

        <div class="parties-divider-line">
          <span class="divider-vs">ضــــد</span>
        </div>

        <div class="party-entry party-defendant">
          <div class="party-role-tag defendant-role">${isRetainer ? 'الطرف الثاني (المحامي الوكيل):' : 'المدعى عليه (أو المستأنف ضده):'}</div>
          <div class="party-identity">
            <span class="party-name-strong">${data.defendantName}</span>
            <span class="party-id-chip">السجل / الهوية: <strong>${data.defendantId}</strong></span>
          </div>
          <div class="party-address-line">📌 العنوان الوطني المعتمد: ${data.defendantAddress}</div>
        </div>

        <div class="litigation-subject-bar">
          <div class="subj-col"><strong>موضوع النزاع / العقد:</strong> <span>${data.contractSubject}</span></div>
          ${data.claimAmountSar > 0 ? `
            <div class="claim-val-col">
              <strong>قيمة المطالبة:</strong>
              <span class="sar-amount">${data.claimAmountSar.toLocaleString('ar-SA')} ر.س</span>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Facts Section (أولاً: الوقائع) -->
      <div class="judicial-section-block">
        <div class="section-ornate-header">
          <span class="section-num-emblem">أولاً</span>
          <h4 class="section-header-title">الوقائع والخلفية الموضوعية للدعوى</h4>
        </div>
        <div class="section-body-text">
          ${data.factualBackground}
        </div>
      </div>

      <!-- Formal Defenses (if present) -->
      ${data.formalDefenses ? `
        <div class="judicial-section-block defense-block">
          <div class="section-ornate-header gold-header">
            <span class="section-num-emblem gold-emblem">ثانياً</span>
            <h4 class="section-header-title">الدفوع الشكلية الأولية وسقوط الخصومة</h4>
          </div>
          <div class="section-body-text">
            ${data.formalDefenses}
          </div>
        </div>
      ` : ''}

      <!-- Substantive Defenses (if present) -->
      ${data.substantiveDefenses ? `
        <div class="judicial-section-block">
          <div class="section-ornate-header">
            <span class="section-num-emblem">${data.formalDefenses ? 'ثالثاً' : 'ثانياً'}</span>
            <h4 class="section-header-title">الأسانيد الموضوعية والدفوع الجوهرية</h4>
          </div>
          <div class="section-body-text">
            ${data.substantiveDefenses}
          </div>
        </div>
      ` : ''}

      <!-- Statutory Grounding (الأسانيد النظامية) -->
      <div class="statutory-grounding-box">
        <div class="grounding-header">
          <span class="grounding-icon">⚖️</span>
          <strong>الأسانيد والمواد النظامية المعتمدة في المرافعة:</strong>
        </div>
        <div class="grounding-content">
          ${data.statutoryArticles}
        </div>
      </div>

      <!-- Relief Sought (الطلبات الختامية الجازمة) -->
      <div class="judicial-section-block relief-block">
        <div class="section-ornate-header royal-header">
          <span class="section-num-emblem royal-emblem">ختاماً</span>
          <h4 class="section-header-title">${isRetainer ? 'التزامات الطرفين وجدول الأتعاب:' : 'الطلبات الختامية الجازمة:'}</h4>
        </div>
        <div class="relief-body-card">
          ${data.requestedRelief}
        </div>
      </div>

      ${isRetainer ? `
        <!-- Retainer Financial Schedule -->
        <div class="retainer-financial-schedule">
          <div class="schedule-title">الجدول المالي للأتعاب المتفق عليها وفق لائحة المحاماة:</div>
          <div class="schedule-grid">
            <div class="sched-item">
              <span class="sched-lbl">الأتعاب المقدمة الثابتة:</span>
              <strong class="sched-val">${data.retainerAmountSar.toLocaleString('ar-SA')} ر.س</strong>
            </div>
            <div class="sched-item">
              <span class="sched-lbl">نسبة أتعاب النجاح والتحصيل:</span>
              <strong class="sched-val">${data.contingencyPercent}% من المبالغ المحصلة</strong>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Signatures & Official Bar Certification -->
      <div class="judicial-doc-footer">
        <div class="attorney-signature-box">
          <div class="sig-label">مقدمه لفضيلتكم /</div>
          <div class="attorney-name">${data.attorneyName}</div>
          <div class="license-info">رخصة المحاماة رقم: <strong>${data.licenseNumber}</strong> - الهيئة السعودية للمحامين</div>
          <div class="signature-line-mark">التوقيع والاعتماد: .......................................</div>
        </div>

        <div class="official-stamp-box">
          <div class="stamp-inner-border">
            <div class="stamp-emblem">⚖️</div>
            <div class="stamp-org">منصة بَيّنة الذكية للتقاضي</div>
            <div class="stamp-audit">صك قضائي رسمي معتمد</div>
            <div class="stamp-id">ID: SA-${data.caseNumber || '451082914'}-NZ</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
