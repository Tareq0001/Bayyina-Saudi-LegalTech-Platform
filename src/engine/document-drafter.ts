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
    <div class="judicial-doc-container" dir="rtl" style="font-family: 'Tajawal', 'Cairo', sans-serif; line-height: 1.8; color: #0f172a; padding: 2.5rem; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; max-width: 860px; margin: 0 auto; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);">
      <!-- Official Header -->
      <div style="border-bottom: 2px solid #064e3b; padding-bottom: 1.5rem; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 1.15rem; font-weight: 800; color: #064e3b;">المملكة العربية السعودية</div>
          <div style="font-size: 0.95rem; color: #334155;">وزارة العدل - منصة التقاضي الإلكتروني (ناجز)</div>
          <div style="font-size: 0.9rem; color: #64748b; margin-top: 0.25rem;">${data.courtName} - ${data.circuitName}</div>
        </div>
        <div style="text-align: left; font-size: 0.85rem; color: #475569; border: 1px solid #e2e8f0; padding: 0.5rem 1rem; border-radius: 8px; background: #f8fafc;">
          <div><strong>رقم القيد:</strong> ${data.caseNumber || '451082914'}</div>
          <div><strong>السنة:</strong> ${data.caseYear || '1445هـ'}</div>
          <div><strong>التاريخ:</strong> ${data.contractDate || '1445/07/15هـ'}</div>
        </div>
      </div>

      <!-- Document Title -->
      <div style="text-align: center; margin: 2rem 0;">
        <span style="display: inline-block; background: #f0fdf4; color: #064e3b; border: 1px solid #86efac; padding: 0.6rem 2rem; border-radius: 9999px; font-weight: 800; font-size: 1.25rem; letter-spacing: 0.5px;">
          ${titles[data.templateType]}
        </span>
      </div>

      <!-- Parties Section -->
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; margin-bottom: 1.75rem;">
        <div style="margin-bottom: 0.75rem;">
          <strong style="color: #064e3b;">${isRetainer ? 'الطرف الأول (الموكل):' : 'المدعي (أو المستأنف):'}</strong>
          <span>${data.claimantName}</span> | <strong>الهوية / السجل:</strong> <span>${data.claimantId}</span>
          <div style="font-size: 0.9rem; color: #64748b; margin-top: 0.2rem;">العنوان الوطني: ${data.claimantAddress}</div>
        </div>
        <div style="border-top: 1px dashed #cbd5e1; padding-top: 0.75rem;">
          <strong style="color: #b45309;">${isRetainer ? 'الطرف الثاني (المحامي الوكيل):' : 'المدعى عليه (أو المستأنف ضده):'}</strong>
          <span>${data.defendantName}</span> | <strong>الهوية / السجل:</strong> <span>${data.defendantId}</span>
          <div style="font-size: 0.9rem; color: #64748b; margin-top: 0.2rem;">العنوان الوطني: ${data.defendantAddress}</div>
        </div>
        <div style="border-top: 1px dashed #cbd5e1; padding-top: 0.75rem; margin-top: 0.75rem; font-size: 0.95rem;">
          <strong style="color: #0f172a;">موضوع النزاع / العقد:</strong> <span>${data.contractSubject}</span> 
          ${data.claimAmountSar > 0 ? `| <strong>قيمة المطالبة:</strong> <span style="font-weight: 700; color: #047857;">${data.claimAmountSar.toLocaleString('ar-SA')} ر.س</span>` : ''}
        </div>
      </div>

      <!-- Facts Section -->
      <div style="margin-bottom: 1.75rem;">
        <h4 style="font-size: 1.1rem; color: #064e3b; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="width: 8px; height: 8px; background: #064e3b; border-radius: 50%; display: inline-block;"></span>
          أولاً: الوقائع والخلفية الموضوعية
        </h4>
        <p style="text-align: justify; color: #334155; line-height: 1.9; white-space: pre-line; background: #ffffff; padding: 0.5rem 0.25rem;">
          ${data.factualBackground}
        </p>
      </div>

      <!-- Formal & Substantive Defenses (if present) -->
      ${data.formalDefenses ? `
        <div style="margin-bottom: 1.75rem;">
          <h4 style="font-size: 1.1rem; color: #b45309; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <span style="width: 8px; height: 8px; background: #b45309; border-radius: 50%; display: inline-block;"></span>
            ثانياً: الدفوع الشكلية الأولية
          </h4>
          <p style="text-align: justify; color: #334155; line-height: 1.9; white-space: pre-line;">
            ${data.formalDefenses}
          </p>
        </div>
      ` : ''}

      ${data.substantiveDefenses ? `
        <div style="margin-bottom: 1.75rem;">
          <h4 style="font-size: 1.1rem; color: #047857; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <span style="width: 8px; height: 8px; background: #047857; border-radius: 50%; display: inline-block;"></span>
            ${data.formalDefenses ? 'ثالثاً:' : 'ثانياً:'} الأسانيد الموضوعية ودحض الدعوى
          </h4>
          <p style="text-align: justify; color: #334155; line-height: 1.9; white-space: pre-line;">
            ${data.substantiveDefenses}
          </p>
        </div>
      ` : ''}

      <!-- Statutory Grounding -->
      <div style="margin-bottom: 1.75rem; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1rem 1.25rem; border-radius: 8px;">
        <h4 style="font-size: 1rem; color: #064e3b; margin: 0 0 0.5rem 0; font-weight: 700;">الأسانيد والمواد النظامية المعتمدة:</h4>
        <div style="color: #14532d; font-size: 0.95rem; font-weight: 600;">${data.statutoryArticles}</div>
      </div>

      <!-- Relief Sought / Requests -->
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.1rem; color: #064e3b; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="width: 8px; height: 8px; background: #d97706; border-radius: 50%; display: inline-block;"></span>
          ${isRetainer ? 'التزامات الطرفين والأتعاب:' : 'الطلبات الختامية الجازمة:'}
        </h4>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1.25rem; color: #0f172a; white-space: pre-line; line-height: 1.9;">
          ${data.requestedRelief}
        </div>
      </div>

      ${isRetainer ? `
        <!-- Retainer Financial Schedule -->
        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 1.25rem; margin-bottom: 2rem;">
          <h4 style="color: #92400e; margin: 0 0 0.75rem 0; font-size: 1rem;">الجدول المالي للأتعاب المتفق عليها:</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div>الأتعاب المقدمة الثابتة: <strong>${data.retainerAmountSar.toLocaleString('ar-SA')} ر.س</strong></div>
            <div>نسبة أتعاب النجاح والتحصيل: <strong>${data.contingencyPercent}% من المبالغ المحصلة</strong></div>
          </div>
        </div>
      ` : ''}

      <!-- Signatures Footer -->
      <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 2px solid #064e3b; display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <div style="font-size: 0.95rem; font-weight: 700; color: #0f172a;">مقدمه لفضيلتكم /</div>
          <div style="font-size: 1rem; color: #064e3b; font-weight: 800; margin-top: 0.25rem;">${data.attorneyName}</div>
          <div style="font-size: 0.85rem; color: #64748b;">رخصة المحاماة رقم: ${data.licenseNumber} - الهيئة السعودية للمحامين</div>
        </div>
        <div style="text-align: center; border: 2px dashed #064e3b; border-radius: 8px; padding: 0.75rem 1.5rem; color: #064e3b; font-size: 0.85rem; background: #f0fdf4;">
          <div>خاتم التوقيع القضائي والتوثيق</div>
          <div style="margin-top: 0.25rem; font-weight: 800; font-size: 0.9rem;">منصة بَيّنة الذكية للتقاضي</div>
        </div>
      </div>
    </div>
  `;
}
