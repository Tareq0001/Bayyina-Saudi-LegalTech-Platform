import { CaseScenario } from '../types';

export const LANDMARK_CASES: CaseScenario[] = [
  {
    id: 'case-tech-commercial',
    titleAr: 'نزاع تجاري: إخلال بعقد توريد وتطوير برمجيات سحابية بين شركتين',
    titleEn: 'Commercial Dispute: Breach of Cloud Enterprise Software Supply Contract',
    caseNumber: '451082914',
    courtTier: 'commercial_first',
    courtNameAr: 'المحكمة التجارية بالرياض - الدائرة التجارية السابعة',
    courtNameEn: 'Commercial Court in Riyadh - Seventh Circuit',
    circuitAr: 'الدائرة التجارية السابعة (ثلاثية)',
    circuitEn: '7th Commercial Circuit (Three Judges)',
    claimValueSar: 1850000,
    filingDateHijri: '1445/03/15هـ',
    plaintiffAr: 'شركة التقنية المتقدمة للحلول الرقمية ذ.م.م',
    plaintiffEn: 'Advanced Tech Digital Solutions LLC',
    defendantAr: 'شركة سلاسل الإمداد اللوجستية ش.م.م',
    defendantEn: 'Logistics Supply Chain Closed JSC',
    legalSubjectAr: 'المطالبة بباقي قيمة العقد وغرامة التأخير التعاقدية والتعويض عن الإخلال',
    legalSubjectEn: 'Claim for Outstanding Contract Balance, Liquidated Damages & Breach',
    factsSummaryAr: 'أبرم الطرفان عقداً لتطوير ونشر منصة ERP سحابية متكاملة بقيمة 3.5 مليون ريال. قامت المدعية بإنجاز المرحلة الأولى والثانية وتسليمها وفق محاضر فحص رقمية، إلا أن المدعى عليها امتنعت عن سداد الدفعة النهائية البالغة 1.85 مليون ريال دون مسوغ نظامي.',
    factsSummaryEn: 'The parties executed a 3.5M SAR contract for cloud ERP implementation. Plaintiff completed Phases 1 & 2 verified by digital user acceptance logs. Defendant refused to pay the final 1.85M SAR milestone without statutory cause.',
    governingLawsAr: [
      'نظام المعاملات المدنية (م/191) - المواد (94، 138، 178)',
      'نظام الإثبات (م/43) - المواد (53، 54)',
      'نظام المحاكم التجارية ولائحته التنفيذية'
    ],
    governingLawsEn: [
      'Civil Transactions Law (M/191) - Arts (94, 138, 178)',
      'Law of Evidence (M/43) - Arts (53, 54)',
      'Commercial Courts Law and Regulations'
    ],
    currentStageNumber: 3,
    stages: [
      {
        stageNumber: 1,
        id: 'stage-filing',
        nameAr: 'قيد الدعوى وصياغة اللائحة عبر ناجز',
        nameEn: 'Claim Filing & Verification via Najiz',
        descriptionAr: 'قيد صحيفة الدعوى إلكترونياً، سداد التكاليف القضائية الأولية، واستيفاء شرط الإخطار التجاري المسبق (15 يوماً).',
        descriptionEn: 'Electronic filing of statement of claim, initial judicial fee assessment, and fulfillment of the mandatory 15-day pre-litigation commercial notice.',
        status: 'completed',
        proceduralDeadlineDays: 15,
        deadlineWarningAr: 'تم التحقق من توجيه الإخطار التجاري ومضي 15 يوماً دون تسوية.',
        deadlineWarningEn: 'Commercial pre-action notice verified with 15 days elapsed without settlement.',
        requiredActionsAr: [
          'إرفاق السجل التجاري والوكالة الشرعية الموثقة',
          'إرفاق إشعار التنبيه التجاري المسبق عبر البريد المسجل / الوطني',
          'تحديد الطلبات الجازمة وحصر قيمة المطالبة بدقة'
        ],
        requiredActionsEn: [
          'Attach commercial register & verified power of attorney',
          'Attach 15-day pre-action commercial notice via National Address',
          'Specify definitive relief and exact claim quantification'
        ],
        judicialOutcomeAr: 'تم قبول صحيفة الدعوى شكلاً وقيدها برقم (451082914) وإحالتها للدائرة السابعة.',
        judicialOutcomeEn: 'Statement of claim formally admitted, registered under No. 451082914, assigned to 7th Circuit.'
      },
      {
        stageNumber: 2,
        id: 'stage-memos',
        nameAr: 'تبادل المذكرات والدفوع الشكلية والموضوعية',
        nameEn: 'Pleadings & Defense Memorandum Exchange',
        descriptionAr: 'تبادل المذكرات الكتابية عبر بوابة التقاضي الإلكتروني، ودفع المدعى عليها بعدم استكمال المعايير الفنية.',
        descriptionEn: 'Written submissions via judicial portal. Defendant submitted preliminary defense alleging non-conformity with technical specifications.',
        status: 'completed',
        proceduralDeadlineDays: 20,
        requiredActionsAr: [
          'إيداع المذكرة الجوابية للمدعى عليها خلال 10 أيام عمل',
          'تقديم مذكرة الرد والتعقيب من وكيل المدعية مع دحض الدفوع الفنية'
        ],
        requiredActionsEn: [
          'Defendant statement of defense within 10 judicial days',
          'Claimant reply brief rebutting technical non-conformity defenses'
        ],
        judicialOutcomeAr: 'قفل باب تبادل المذكرات بعد استيفاء لائحتي الجواب والرد وحصر نقاط النزاع الفنية.',
        judicialOutcomeEn: 'Pleading exchange closed upon submission of defense & rejoinder, narrowing issues to technical acceptance.'
      },
      {
        stageNumber: 3,
        id: 'stage-hearing',
        nameAr: 'إدارة الجلسة القضائية المرئية وضبط المحضر',
        nameEn: 'Virtual Hearing & Judicial Session Minutes',
        descriptionAr: 'انعقاد الجلسة الأولى عن بُعد عبر منصة التقاضي الإلكتروني التابعة لوزارة العدل، ومواجهة الأطراف بالأدلة الرقمية.',
        descriptionEn: 'Remote judicial hearing convened on Ministry of Justice virtual platform; confrontational examination of digital logs.',
        status: 'in_progress',
        proceduralDeadlineDays: 14,
        minutes: [
          {
            sessionNumber: 1,
            dateHijri: '1445/04/10هـ',
            dateGregorian: '2023/10/25م',
            judgeName: 'فضيلة القاضي رئيس الدائرة التجارية',
            circuitName: 'الدائرة التجارية السابعة بالرياض',
            remarksAr: 'حضر وكيل المدعية المحامي المرخص، وحضر وكيل المدعى عليها. سألت الدائرة وكيل المدعى عليها عن استلام وتشغيل المنصة السحابية فأقر بتشغيلها التجريبي لكنه تمسك بوجود بطء في معالجة العمليات.',
            remarksEn: 'Claimant attorney and Defense counsel present. Bench questioned defense on platform deployment; defense admitted live deployment but alleged transaction latency.',
            transcriptAr: 'القاضي: هل لديكم ما يثبت إشعار المدعية بوجود خلل جسيم خلال فترة الفحص؟\nوكيل المدعى عليها: لم نوجه خطاباً رسمياً لكن هناك رسائل شفهية.\nوكيل المدعية: نبرز لفضيلتكم تقارير قبول الاستخدام الموقعة إلكترونياً (UAT Sign-off) ورسائل البريد الرسمي التي تثبت الاعتماد.',
            transcriptEn: 'Judge: Do you possess evidence of written defect notification during warranty?\nDefense: No formal deed, but oral notices.\nClaimant Counsel: We submit digitally signed UAT certificates and enterprise email confirmations.'
          }
        ],
        evidences: [
          {
            id: 'ev-1',
            type: 'digital',
            titleAr: 'سجلات اعتماد فحص النظام والتوقيع الرقمي (UAT)',
            titleEn: 'Digital User Acceptance Testing (UAT) Sign-Off Records',
            sourceAr: 'منظومة إدارة المشروعات وقواعد بيانات النظام المعتمد',
            sourceEn: 'Enterprise Jira/Azure DevOps authenticated audit trails',
            probativeValue: 92,
            legalBasisAr: 'المادة (53) من نظام الإثبات (حجية الدليل الرقمي في الإثبات)',
            legalBasisEn: 'Article 53 of the Law of Evidence (Full probative force of digital records)',
            status: 'conclusive',
            descriptionAr: 'محاضر تسليم موقعة بالأختام الرقمية من المدير التقني للمدعى عليها تفيد قبول بيئة الإنتاج.',
            descriptionEn: 'Digital logs confirmed by Defendant CTO verifying functional release.'
          },
          {
            id: 'ev-2',
            type: 'ordinary_paper',
            titleAr: 'عقد التوريد والترخيص والاشتراك السحابي',
            titleEn: 'Master Cloud Software & Licensing Agreement',
            sourceAr: 'محرر عادي موقع بين الطرفين ومختوم بالسجلات التجارية',
            sourceEn: 'Executed contract bearing corporate stamps',
            probativeValue: 95,
            legalBasisAr: 'المادة (29) من نظام الإثبات والمادة (94) من المعاملات المدنية',
            legalBasisEn: 'Article 29 Law of Evidence & Article 94 Civil Transactions',
            status: 'conclusive',
            descriptionAr: 'ينص العقد صراحة في البند (12) على التزام العميل بسداد الدفعة خلال 15 يوماً من توقيع محضر الاستلام.',
            descriptionEn: 'Clause 12 mandates payment within 15 days of stage delivery approval.'
          }
        ],
        requiredActionsAr: [
          'توجيه اليمين المتممة أو تكليف خبير تقني معتمد عبر منصة خبرة',
          'تقديم مذكرة حصر الطلبات الختامية ومصاريف التقاضي'
        ],
        requiredActionsEn: [
          'Order specialized technical assessment via Khebrah Platform or supplementary oath',
          'File closing statement with claim for litigation costs and legal fees'
        ]
      },
      {
        stageNumber: 4,
        id: 'stage-expert',
        nameAr: 'تدقيق البينات وندب خبرة المحكمة (منصة خبرة)',
        nameEn: 'Evidentiary Assessment & Expert Khebrah Report',
        descriptionAr: 'إحالة الملف إلى خبير تقني معتمد عبر منصة (خبرة) لفحص سلامة الكود المصدري وفاعلية الربط التقني.',
        descriptionEn: 'Referral to a certified IT forensic expert via Khebrah to examine code integrity and deployment benchmark.',
        status: 'upcoming',
        proceduralDeadlineDays: 30,
        requiredActionsAr: [
          'سداد أمانة الخبير القضائي في الموعد المحدد',
          'تمكين الخبير من معاينة الخوادم واختبارات الأداء الفعلي'
        ],
        requiredActionsEn: [
          'Deposit expert fee trust within statutory window',
          'Provide expert full access to cloud infrastructure for benchmark audits'
        ],
        judicialOutcomeAr: 'تقرير الخبير المعتمد انتهى إلى سلامة المنصة واستحقاق كامل قيمة الدفعة مع حسم 3% كأعطال طفيفة.',
        judicialOutcomeEn: 'Expert concluded platform fully compliant, recommending 97% payment with minor 3% adjustment.'
      },
      {
        stageNumber: 5,
        id: 'stage-judgment',
        nameAr: 'صدور صك الحكم ومسبباته القضائية',
        nameEn: 'Pronouncement of Judgment & Judicial Reasoning',
        descriptionAr: 'النطق بالحكم وإيداع صك الحكم الإلكتروني المتضمن الأسباب النظامية ومنطوق الإلزام والمصاريف.',
        descriptionEn: 'Pronouncement and digital registry of executable judgment deed detailing factual findings and statutory rationale.',
        status: 'upcoming',
        judgmentText: 'حكمت الدائرة بإلزام المدعى عليها بأن تدفع للمدعية مبلغاً قدره (1,794,500) ريال سعودي، بالإضافة إلى مبلغ (75,000) ريال أتعاب محاماة وتكاليف قضائية، ورد ما عدا ذلك من طلبات.',
        judicialOutcomeAr: 'إلزام المدعى عليها بمبلغ 1,794,500 ريال و75,000 ريال أتعاب محاماة استناداً للمادتين 94 من المعاملات المدنية و53 من الإثبات.',
        judicialOutcomeEn: 'Defendant ordered to pay 1,794,500 SAR plus 75,000 SAR legal costs under Art 94 Civil Transactions & Art 53 Evidence.'
      },
      {
        stageNumber: 6,
        id: 'stage-enforcement',
        nameAr: 'الاعتراض بالاستئناف وقضاء التنفيذ',
        nameEn: 'Appellate Review & Enforcement Execution',
        descriptionAr: 'قيد طلب الاستئناف خلال المهلة (30 يوماً)، تأييد الحكم، ثم التقدم لمحكمة التنفيذ لفرض المادة 46.',
        descriptionEn: '30-day appellate review window, appellate affirmation, and enforcement execution under Article 46.',
        status: 'upcoming',
        proceduralDeadlineDays: 30,
        deadlineWarningAr: 'مهلة الاستئناف النظامية 30 يوماً من تاريخ تبليغ صك الحكم.',
        deadlineWarningEn: 'Mandatory 30-day appeal countdown starting day following electronic delivery.',
        requiredActionsAr: [
          'متابعة انقضاء مهلة الـ 30 يوماً لاكتساب الحكم القطعية',
          'طلب ختم الصيغة التنفيذية عبر بوابة ناجز',
          'تقديم طلب تنفيذ مالي لدى محكمة التنفيذ وإيقاع الحجز التنفيذي'
        ],
        requiredActionsEn: [
          'Track 30-day appeal countdown for res judicata status',
          'Affix electronic executory formula via Najiz',
          'Submit financial execution request to freeze accounts under Article 46'
        ],
        judicialOutcomeAr: 'اكتساب الحكم الصفة النهائية والتنفيذ الجبري لسداد كامل المبلغ عبر إشعار مصرفي.',
        judicialOutcomeEn: 'Judgment attained finality; full payment recovered through bank enforcement attachment.'
      }
    ]
  },
  {
    id: 'case-labor-77',
    titleAr: 'مطالبة عمالية: فصل غير مشروع وفق المادة 77 ومستحقات متأخرة',
    titleEn: 'Labor Claim: Unlawful Dismissal under Article 77 & Withheld Wages',
    caseNumber: '442194012',
    courtTier: 'labor_first',
    courtNameAr: 'المحكمة العمالية بجدة - الدائرة العمالية الثالثة',
    courtNameEn: 'Labor Court in Jeddah - Third Labor Circuit',
    circuitAr: 'الدائرة العمالية الثالثة (فردية)',
    circuitEn: '3rd Labor Circuit (Single Judge)',
    claimValueSar: 264000,
    filingDateHijri: '1445/05/18هـ',
    plaintiffAr: 'المهندس / حسام بن منصور العتيبي (مدير مشاريع)',
    plaintiffEn: 'Eng. Hossam Mansour Al-Otaibi (Project Manager)',
    defendantAr: 'شركة الإنشاءات الهندسية الكبرى القابضة',
    defendantEn: 'Major Engineering Construction Holding Co.',
    legalSubjectAr: 'المطالبة بتعويض المادة 77، مكافأة نهاية الخدمة، وبدل رصيد الإجازات وفترة الإشعار',
    legalSubjectEn: 'Claim for Article 77 Termination Compensation, EOS Gratuity, Vacation Balance & Notice Pay',
    factsSummaryAr: 'عمل المدعي لدى الشركة بموجب عقد غير محدد المدة لمدة 6 سنوات و4 أشهر، براتب شهري شامل قدره 24,000 ريال (أساسي 16,000 + سكن 6,000 + مواصلات 2,000). قامت الشركة بفصله تعسفياً دون إنذار ودون إسناد لسبب مشروع أو تحقيق كتابي وفق المادة 80.',
    factsSummaryEn: 'Plaintiff served 6 years and 4 months under an indefinite contract with gross monthly salary of 24,000 SAR. Employer terminated him summarily without written notice, justification, or Article 80 statutory disciplinary inquiry.',
    governingLawsAr: [
      'نظام العمل السعودي - المادة 77 (التعويض عن الإنهاء غير المشروع)',
      'نظام العمل السعودي - المادة 84 (مكافأة نهاية الخدمة)',
      'نظام العمل السعودي - المادة 75 و76 (مهلة الإشعار)',
      'نظام الإثبات - المادة 53'
    ],
    governingLawsEn: [
      'Saudi Labor Law - Article 77 (Compensation for Unjustified Termination)',
      'Saudi Labor Law - Article 84 (End-of-Service Gratuity)',
      'Saudi Labor Law - Articles 75 & 76 (Notice Period)',
      'Law of Evidence - Article 53'
    ],
    currentStageNumber: 2,
    stages: [
      {
        stageNumber: 1,
        id: 'stage-filing',
        nameAr: 'جلسة التسوية الودية (منصة ودي) وقيد الدعوى',
        nameEn: 'Waddi Amicable Settlement & Case Registration',
        descriptionAr: 'المرور الإلزامي عبر منصة (ودي) بوزارة الموارد البشرية لمدة 21 يوماً لتعذر الصلح ثم إحالة الملف للمحكمة العمالية.',
        descriptionEn: 'Mandatory 21-day conciliation process via Waddi Portal; upon impasse, case referred to Labor Court without fees.',
        status: 'completed',
        proceduralDeadlineDays: 21,
        deadlineWarningAr: 'تم صدور محضر تعذر الصلح بعد انقضاء 21 يوماً من التقدم.',
        deadlineWarningEn: 'Impasse report formally issued following expiry of 21-day mediation window.',
        requiredActionsAr: [
          'حضور جلسات الصلح عن بُعد في منصة ودي',
          'استخراج محضر تعذر الصلح الإلكتروني وتضمينه في صحيفة الدعوى'
        ],
        requiredActionsEn: [
          'Attend virtual mediation hearings on Waddi platform',
          'Export digital Impasse Report and integrate into statement of claim'
        ],
        judicialOutcomeAr: 'قيد الدعوى رسمياً بالمحكمة العمالية وإعفاء العامل من التكاليف القضائية بنص المادة (17) من نظام التكاليف.',
        judicialOutcomeEn: 'Labor claim formally docketed; worker granted total exemption from court fees under Art 17.'
      },
      {
        stageNumber: 2,
        id: 'stage-memos',
        nameAr: 'تبادل المذكرات ودفوع الفصل التأديبي',
        nameEn: 'Memoranda Exchange & Article 80 Challenge',
        descriptionAr: 'ادعت الشركة فصل العامل لتقصيره، بينما دفع العامل ببطلان الفصل لعدم وجود تحقيق مكتوب أو إنذار رسمي مسبق.',
        descriptionEn: 'Company alleged dismissal for underperformance; employee countered asserting nullity due to lack of written investigation.',
        status: 'in_progress',
        proceduralDeadlineDays: 10,
        requiredActionsAr: [
          'تقديم الشركة لمحاضر التحقيق الإداري إن وجدت',
          'تقديم كشف حساب مصرفي يوضح مسيرات الرواتب والبدلات الأخيرة'
        ],
        requiredActionsEn: [
          'Employer to produce statutory written investigation files',
          'Employee to submit certified wage protection bank statements'
        ],
        evidences: [
          {
            id: 'ev-l1',
            type: 'digital',
            titleAr: 'سجلات منصة قوى (Qiwa) وعقد العمل الموثق',
            titleEn: 'Authenticated Qiwa Platform Employment Contract',
            sourceAr: 'وزارة الموارد البشرية والتنمية الاجتماعية - منصة قوى',
            sourceEn: 'Qiwa Digital Portal Registry',
            probativeValue: 98,
            legalBasisAr: 'المادة (53) من نظام الإثبات',
            legalBasisEn: 'Article 53 Law of Evidence',
            status: 'conclusive',
            descriptionAr: 'يثبت العقد الموثق أن تاريخ البداية 2017م والراتب الشامل 24,000 ريال دون أي انقطاع.',
            descriptionEn: 'Conclusively certifies continuous service since 2017 with 24k SAR gross salary.'
          },
          {
            id: 'ev-l2',
            type: 'digital',
            titleAr: 'خطاب إنهاء الخدمات عبر البريد الإلكتروني دون تسبيب',
            titleEn: 'Digital Termination Letter without Statutory Cause',
            sourceAr: 'البريد الإلكتروني الرسمي لقسم الموارد البشرية',
            sourceEn: 'Enterprise HR corporate email correspondence',
            probativeValue: 95,
            legalBasisAr: 'المادة (53) إثبات والمادة (77) عمل',
            legalBasisEn: 'Article 53 Evidence & Article 77 Labor',
            status: 'conclusive',
            descriptionAr: 'خطاب يفيد الاستغناء عن خدمات المدعي فوراً لـ "إعادة الهيكلة" وهو ما لا يعد سبباً مشروعاً يعفي من التعويض.',
            descriptionEn: 'Restructuring letter lacking statutory cause under Article 80.'
          }
        ]
      },
      {
        stageNumber: 3,
        id: 'stage-hearing',
        nameAr: 'جلسة المرافعة والتحقق من حساب الأجر الفعلي',
        nameEn: 'Pleading Session & Gross Salary Verification',
        descriptionAr: 'استجواب الطرفين حول بدلات السكن والمواصلات وتطبيق نص المادة (77) على الأجر الشامل.',
        descriptionEn: 'Interrogation on wage components and calculating Article 77 upon comprehensive salary.',
        status: 'upcoming',
        proceduralDeadlineDays: 14,
        requiredActionsAr: ['تثبيت عناصر الأجر الشامل في ضبط الجلسة القضائية'],
        requiredActionsEn: ['Record all salary allowances into official session minutes']
      },
      {
        stageNumber: 4,
        id: 'stage-expert',
        nameAr: 'مراجعة خبير الحسابات وتدقيق رصيد الإجازات',
        nameEn: 'Accounting Audit & Unused Vacation Verification',
        descriptionAr: 'حساب رصيد الإجازات المستحق لـ 45 يوماً ومكافأة نهاية الخدمة وفق المادة 84 بدقة تامة.',
        descriptionEn: 'Exact calculation of 45 unused vacation days and statutory gratuity under Article 84.',
        status: 'upcoming'
      },
      {
        stageNumber: 5,
        id: 'stage-judgment',
        nameAr: 'النطق بالحكم وإلزام الشركة بالتعويض',
        nameEn: 'Judgment & Statutory Entitlements Award',
        descriptionAr: 'الحكم للعامل بمبلغ 76,000 ريال تعويض مادة 77 + 92,000 ريال نهاية خدمة + 36,000 ريال رصيد إجازات + 24,000 ريال إشعار.',
        descriptionEn: 'Awarding 76k SAR Art 77 damages, 92k SAR gratuity, 36k SAR leave pay, and 24k SAR notice pay.',
        status: 'upcoming'
      },
      {
        stageNumber: 6,
        id: 'stage-enforcement',
        nameAr: 'التنفيذ الفوري المباشر عبر محكمة التنفيذ',
        nameEn: 'Expedited Enforcement via Najiz Execution Court',
        descriptionAr: 'الأحكام العمالية مشمولة بالنفاذ المعجل في الأجور؛ إيداع سند التنفيذ وتجميد الحسابات وسداد المستحقات.',
        descriptionEn: 'Labor wage awards carry expedited provisional execution; bank attachment and direct transfer.',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 'case-real-estate',
    titleAr: 'نزاع عقاري: إثبات ملكية ونقض تصرف استناداً للمحررات الرسمية وسجل العيني',
    titleEn: 'Real Estate Dispute: Title Rectification & Deed Annulment based on Official Notarized Registry',
    caseNumber: '441992105',
    courtTier: 'general_first',
    courtNameAr: 'المحكمة العامة بالرياض - الدائرة العقارية الأولى',
    courtNameEn: 'General Court in Riyadh - First Real Estate Circuit',
    circuitAr: 'الدائرة العقارية الأولى (ثلاثية)',
    circuitEn: '1st Real Estate Circuit (Three Judges)',
    claimValueSar: 4200000,
    filingDateHijri: '1445/02/10هـ',
    plaintiffAr: 'ورثة الشيخ / عبدالرحمن بن عبدالعزيز آل سعود (وكالة شرعية)',
    plaintiffEn: 'Heirs of Sheikh Abdulrahman Al-Saud (Power of Attorney)',
    defendantAr: 'مؤسسة التطوير العمراني والأراضي الفضاء',
    defendantEn: 'Urban Real Estate Land Development Est.',
    legalSubjectAr: 'المطالبة بإلغاء تداخل صكوك وإثبات حجية الصك الإلكتروني المفرغ وتطهير الملكية',
    legalSubjectEn: 'Action to Expunge Overlapping Title & Affirm Conclusive Force of Notarized Deed',
    factsSummaryAr: 'يمتلك المدعون قطعة أرض بموجب صك إلكتروني رسمي صادر من كتابة العدل مسجل في السجل العقاري العيني. فوجئ المدعون بقيام المدعى عليها بإقامة شباك ومحاولة تسوير الأرض مدعية شراءها بصك عادي غير موثق صادر قبل 30 عاماً.',
    factsSummaryEn: 'Plaintiffs own a parcel under official electronic deed registered with the In-Kind Real Estate Registry. Defendant erected fences claiming title via an unnotarized 30-year-old customary deed.',
    governingLawsAr: [
      'نظام الإثبات (م/43) - المادة 25 (حجية المحررات الرسمية)',
      'نظام التسجيل العيني للعقار ولائحته التنفيذية',
      'نظام المعاملات المدنية - حماية الملكية العقارية'
    ],
    governingLawsEn: [
      'Law of Evidence (M/43) - Article 25 (Conclusive weight of official deeds)',
      'Real Estate In-Kind Registration Law',
      'Civil Transactions Law - Property Rights Protection'
    ],
    currentStageNumber: 4,
    stages: [
      {
        stageNumber: 1,
        id: 'stage-filing',
        nameAr: 'قيد الدعوى وتقديم المخطط المساحي المعتمد',
        nameEn: 'Case Registration & Cadastral Survey Submission',
        descriptionAr: 'قيد صحيفة الدعوى وربطها بالرقم المرجعي للصك الإلكتروني والهيئة العامة للعقار.',
        descriptionEn: 'Case filing linked to official notary deed reference and General Real Estate Authority records.',
        status: 'completed'
      },
      {
        stageNumber: 2,
        id: 'stage-memos',
        nameAr: 'الدفع بحجية الصك الرسمي والطعن في الورقة العادية',
        nameEn: 'Pleading Defense of Res Judicata & Challenging Customary Deed',
        descriptionAr: 'تمسك وكيل المدعين بالمادة 25 من نظام الإثبات؛ المحرر الرسمي حجة على الكافة ولا يعارضه محرر عادي.',
        descriptionEn: 'Asserting Article 25 Law of Evidence: official notarized deed is conclusive erga omnes over private papers.',
        status: 'completed'
      },
      {
        stageNumber: 3,
        id: 'stage-hearing',
        nameAr: 'جلسة التحقق وإشعار الهيئة العامة للعقار',
        nameEn: 'Judicial Hearing & Verification with Real Estate Authority',
        descriptionAr: 'مخاطبة الدائرة القضائية لكتابة العدل والسجل العقاري للإفادة عن صحة الصك وسريان مفعوله.',
        descriptionEn: 'Judicial requisition dispatched to Notary Registry affirming title validity and unencumbered status.',
        status: 'completed'
      },
      {
        stageNumber: 4,
        id: 'stage-expert',
        nameAr: 'تقرير المسح الميداني ورفع الإحداثيات (منصة خبرة)',
        nameEn: 'Field Cadastral Survey & Satellite GIS Verification',
        descriptionAr: 'ندب مساح معتمد لإسقاط الصك المساحي على الطبيعة والتحقق من عدم وجود تداخل حدودي.',
        descriptionEn: 'Designation of certified surveyor to cross-reference deed boundaries with satellite GIS coordinates.',
        status: 'in_progress',
        proceduralDeadlineDays: 20
      },
      {
        stageNumber: 5,
        id: 'stage-judgment',
        nameAr: 'الحكم بتثبيت الملكية وإلزام المدعى عليها بإزالة التعديات',
        nameEn: 'Judgment Affirming Unencumbered Title & Ordering Demolition',
        descriptionAr: 'صدور حكم الدائرة بتثبيت ملكية المدعين وبطلان ادعاء المدعى عليها وأمرها بإزالة الشباك فوراً.',
        descriptionEn: 'Court ruling confirming absolute ownership and mandating immediate removal of encroachments.',
        status: 'upcoming'
      },
      {
        stageNumber: 6,
        id: 'stage-enforcement',
        nameAr: 'تنفيذ تسليم العقار بالقوة الجبرية بمحكمة التنفيذ',
        nameEn: 'Execution & Property Handover with Judicial Police',
        descriptionAr: 'إصدار أمر تنفيذ عقاري بتسليم العقار بالقوة الجبرية وإزالة الشباك عبر شرطة التنفيذ.',
        descriptionEn: 'Enforcement court eviction warrant executed via judicial marshals and police support.',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 'case-admin-grievances',
    titleAr: 'دعوى إدارية: إلغاء قرار إداري بفرض غرامة بلدية والتعويض عنها أمام ديوان المظالم',
    titleEn: 'Administrative Lawsuit: Annulment of Municipal Penalty & Damages before Board of Grievances',
    caseNumber: '443019882',
    courtTier: 'grievances',
    courtNameAr: 'المحكمة الإدارية بالرياض (ديوان المظالم) - الدائرة الإدارية الثالثة',
    courtNameEn: 'Administrative Court in Riyadh (Board of Grievances) - 3rd Circuit',
    circuitAr: 'الدائرة الإدارية الثالثة (ثلاثية)',
    circuitEn: '3rd Administrative Circuit (Three Judges)',
    claimValueSar: 650000,
    filingDateHijri: '1445/06/02هـ',
    plaintiffAr: 'شركة المتاجر الكبرى للتجزئة والاستثمار ذ.م.م',
    plaintiffEn: 'Major Retail Stores & Investment Co. LLC',
    defendantAr: 'أمانة منطقة الرياض (جهة إدارية)',
    defendantEn: 'Riyadh Municipality (Administrative Authority)',
    legalSubjectAr: 'المطالبة بإلغاء القرار الإداري رقم 98124 لعدم المشروعية واسترداد الغرامة مع التعويض',
    legalSubjectEn: 'Action for Judicial Annulment of Ultra Vires Administrative Penalty and Restitution',
    factsSummaryAr: 'أصدرت الأمانة قراراً بفرض غرامة قدرها 400,000 ريال وإغلاق فرع للمدعية بزعم مخالفة اشتراطات الترخيص البلدي. أثبتت المدعية حصولها على ترخيص نظامي ساري المفعول واستيفاء كامل شروط السلامة والتظلم الإداري خلال 60 يوماً.',
    factsSummaryEn: 'Municipality imposed a 400,000 SAR fine and branch closure alleging municipal licensing non-compliance. Plaintiff proved valid permit, fire-safety certificate, and timely 60-day administrative grievance.',
    governingLawsAr: [
      'نظام ديوان المظالم ولائحته التنفيذية',
      'نظام المرافعات أمام ديوان المظالم - المواد (8، 9، 11)',
      'قواعد وإجراءات التظلم الإداري'
    ],
    governingLawsEn: [
      'Board of Grievances Law & Regulations',
      'Law of Procedure before the Board of Grievances - Arts (8, 9, 11)',
      'Rules & Regulations of Administrative Grievances'
    ],
    currentStageNumber: 2,
    stages: [
      {
        stageNumber: 1,
        id: 'stage-filing',
        nameAr: 'التظلم الإداري المسبق وقيد الدعوى الإدارية (منصة معين)',
        nameEn: 'Mandatory Administrative Grievance & Filing on Moeen Portal',
        descriptionAr: 'تقديم التظلم خلال 60 يوماً من العلم بالقرار، وانتظار 60 يوماً للرد أو الرفض الضمني، ثم قيد الدعوى خلال 60 يوماً التالية.',
        descriptionEn: 'Grievance within 60 days of knowledge, 60 days agency response window, and filing on Moeen portal within 60 days of rejection.',
        status: 'completed',
        proceduralDeadlineDays: 60,
        deadlineWarningAr: 'تم التقيد بالمواعيد الإجرائية الثلاثية الصارمة لديوان المظالم (60+60+60).',
        deadlineWarningEn: 'Strict administrative procedural limitation periods (60+60+60 days) satisfied.',
        requiredActionsAr: [
          'إرفاق إشعار التظلم الإداري الموجه لأمين المنطقة',
          'إرفاق ما يثبت فوات 60 يوماً أو صدور قرار الرفض'
        ],
        requiredActionsEn: [
          'Attach formal administrative grievance submitted to Municipality',
          'Attach proof of 60 days silence or written rejection'
        ],
        judicialOutcomeAr: 'قبول الدعوى الإدارية شكلاً وإعفاؤها من التكاليف القضائية بنص المادة (17) من نظام التكاليف.',
        judicialOutcomeEn: 'Administrative claim admitted; exempted from court fees pursuant to Art 17 of Judicial Costs Law.'
      },
      {
        stageNumber: 2,
        id: 'stage-memos',
        nameAr: 'فحص عيوب القرار الإداري (عيب السبب والشكل والانحراف بالسلطة)',
        nameEn: 'Scrutiny of Administrative Decision Flaws (Cause, Form, Ultra Vires)',
        descriptionAr: 'تقديم مذكرة تفصيلية تثبت انعدام ركن السبب ومخالفة اللائحة التنفيذية لوزارة البلديات والإسكان.',
        descriptionEn: 'Detailed brief establishing total lack of factual cause and violation of Ministry of Municipalities executive regulations.',
        status: 'in_progress',
        proceduralDeadlineDays: 15,
        requiredActionsAr: ['إيداع التراخيص البلدية وشهادات الدفاع المدني الموثقة'],
        requiredActionsEn: ['File validated municipal permits and civil defense safety compliance deeds']
      },
      {
        stageNumber: 3,
        id: 'stage-hearing',
        nameAr: 'مواجهة ممثل الجهة الإدارية وإلزامها بملف القرار',
        nameEn: 'Interrogation of Municipality Counsel & Producing Government File',
        descriptionAr: 'إلزام ممثل الأمانة بإبراز محضر الضبط الميداني الأصلي وسند التقدير.',
        descriptionEn: 'Court order directing municipal counsel to produce original field inspection log and valuation basis.',
        status: 'upcoming'
      },
      {
        stageNumber: 4,
        id: 'stage-expert',
        nameAr: 'حساب الضرر الناجم عن الإغلاق التعسفي',
        nameEn: 'Quantification of Commercial Damages & Lost Turnover',
        descriptionAr: 'حساب الخسائر المادية المباشرة الناتجة عن إغلاق الفرع لمدة 12 يوماً وأجور العمالة المتعطلة.',
        descriptionEn: 'Calculation of direct economic losses and staff overhead for 12 days of unauthorized closure.',
        status: 'upcoming'
      },
      {
        stageNumber: 5,
        id: 'stage-judgment',
        nameAr: 'الحكم بإلغاء القرار الإداري واسترداد الغرامة والتعويض',
        nameEn: 'Judgment Annulling Administrative Penalty & Ordering Restitution',
        descriptionAr: 'قضاء الدائرة بإلغاء قرار الغرامة لعدم مشروعيته وإلزام الأمانة بإعادة 400,000 ريال والتعويض بـ 150,000 ريال.',
        descriptionEn: 'Judgment annulling penalty, ordering full restitution of 400k SAR plus 150k SAR compensation.',
        status: 'upcoming'
      },
      {
        stageNumber: 6,
        id: 'stage-enforcement',
        nameAr: 'متابعة تنفيذ الحكم الإداري وفق نظام التنفيذ أمام ديوان المظالم',
        nameEn: 'Enforcement of Administrative Judgment via Board of Grievances Execution Unit',
        descriptionAr: 'إخطار وزارة المالية وممثل الجهة لتنفيذ صرف المبلغ وسحب القرار من السجلات النظامية.',
        descriptionEn: 'Formal notification to Ministry of Finance to release awarded funds and expunge penalty.',
        status: 'upcoming'
      }
    ]
  }
];
