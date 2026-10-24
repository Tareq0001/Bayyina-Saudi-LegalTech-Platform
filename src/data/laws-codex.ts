import { Statute, LawArticle } from '../types';

export const SAUDI_STATUTES: Statute[] = [
  {
    id: 'civil-transactions',
    nameAr: 'نظام المعاملات المدنية',
    nameEn: 'Civil Transactions Law',
    royalDecreeAr: 'مرسوم ملكي رقم (م/191) وتاريخ 1444/11/29هـ',
    royalDecreeEn: 'Royal Decree No. M/191 dated 29/11/1444H',
    yearHijri: '1444هـ',
    yearGregorian: '2023م',
    category: 'الأنظمة المدنية والتعاقدية',
    categoryEn: 'Civil & Contractual Laws',
    descriptionAr: 'النظام الأساسي الذي يؤطر العقود، الالتزامات، المسؤولية التقصيرية، الحقوق العينية، والضمان المالي في المملكة العربية السعودية.',
    descriptionEn: 'The codification of contracts, obligations, tort liability, real property rights, and financial security in Saudi Arabia.',
    articlesCount: 721,
    articles: [
      {
        id: 'civ-art-94',
        statuteId: 'civil-transactions',
        articleNumber: 94,
        titleAr: 'العقد شريعة المتعاقدين والقوة الملزمة',
        titleEn: 'Binding Force of Contract (Pacta Sunt Servanda)',
        textAr: 'العقد شريعة المتعاقدين، فلا يجوز نقضه ولا تعديله إلا باتفاق الطرفين، أو للأسباب التي يقررها النظام. ويجب تنفيذ العقد طبقاً لما اشتمل عليه وبطريقة تتفق مع ما يقتضيه حسن النية.',
        textEn: 'A contract is the law of the contracting parties; it may not be revoked or amended except by mutual agreement or for reasons prescribed by law. It must be performed in accordance with its contents and in good faith.',
        commentaryAr: 'تكرس المادة مبدأ القوة الملزمة للعقد وحسن النية في المعاملات، وتقطع دابر التنصل التعسفي من الالتزامات التعاقدية.',
        commentaryEn: 'Establishes the inviolable rule of pacta sunt servanda and good-faith execution in commercial and civil covenants.',
        evidentiaryWeight: 'conclusive',
        category: 'الالتزامات والعقود',
        tags: ['العقد شريعة المتعاقدين', 'حسن النية', 'القوة الملزمة'],
        precedents: [
          {
            id: 'prec-civ-1',
            judgmentNumber: '441029341',
            yearHijri: '1445',
            court: 'المحكمة العليا - الدائرة التجارية',
            courtEn: 'Supreme Court - Commercial Circuit',
            principleAr: 'الأصل في الشروط الصحة واللزوم، ولا يلتفت لادعاء الغبن متى كان العاقد ذا دراية بسوق التعامل.',
            principleEn: 'Conditions in contracts are presumed valid and binding; claims of unconscionability are rejected where the contracting party is commercially experienced.',
            summaryAr: 'إلزام شركة مقاولات بتنفيذ بنود غرامات التأخير المتفق عليها دون تعديل.',
            summaryEn: 'Holding contractor strictly liable for agreed delay damages without equitable reduction.'
          }
        ]
      },
      {
        id: 'civ-art-138',
        statuteId: 'civil-transactions',
        articleNumber: 138,
        titleAr: 'المسؤولية عن الفعل الضار (التعويض)',
        titleEn: 'Tort Liability and Damages for Harm',
        textAr: 'كل خطأ سبب ضرراً للغير يلزم من ارتكبه بالتعويض. ويشمل التعويض ما لحق المتضرر من خسارة وما فاته من كسب، إذا كان ذلك نتيجة طبيعية للفعل الضار.',
        textEn: 'Every fault causing harm to another obligates the wrongdoer to provide compensation. Compensation includes actual loss sustained and loss of profit incurred, provided it is a natural consequence of the wrongful act.',
        commentaryAr: 'تحدد المادة أركان المسؤولية التقصيرية الثلاثة: الخطأ، والضرر، وعلاقة السببية، وتقر رسمياً التعويض عن فوات الكسب المحقق.',
        commentaryEn: 'Formulates the tripartite tort doctrine: fault, harm, and causation, formally recognizing compensation for proven loss of profit.',
        evidentiaryWeight: 'high',
        category: 'المسؤولية التقصيرية والضمان',
        tags: ['التعويض', 'فوات الكسب', 'المسؤولية التقصيرية', 'الضرر المادي والمعنوي']
      },
      {
        id: 'civ-art-178',
        statuteId: 'civil-transactions',
        articleNumber: 178,
        titleAr: 'الشرط الجزائي وتعديله القضائي',
        titleEn: 'Liquidated Damages (Penalty Clause)',
        textAr: 'يجوز للمتعاقدين أن يحددا مقدماً مقدار التعويض بالنص عليه في العقد أو في اتفاق لاحق. ولا يكون التعويض المتفق عليه مستحقاً إذا أثبت المدين أن الدائن لم يلحقه ضرر. ويجوز للمحكمة تخفيض التعويض إذا أثبت المدين أنه كان مبالغاً فيه بدرجة كبيرة.',
        textEn: 'Parties may predetermine compensation within the contract or via subsequent agreement. The agreed compensation is not due if debtor proves creditor suffered no damage. The court may reduce the compensation if proven to be substantially exaggerated.',
        commentaryAr: 'يوازن النظام بين سلطة الإرادة التعاقدية في تحديد التعويض مقدماً وبين الرقابة القضائية لمنع الإثراء بلا سبب والإجحاف.',
        commentaryEn: 'Strikes an equitable balance between contractual freedom to set liquidated damages and judicial power to mitigate windfall penalties.',
        evidentiaryWeight: 'high',
        category: 'الشرط الجزائي والتعويض',
        tags: ['الشرط الجزائي', 'سلطة القاضي التقديرية', 'تخفيض التعويض']
      }
    ]
  },
  {
    id: 'evidence-law',
    nameAr: 'نظام الإثبات',
    nameEn: 'Law of Evidence',
    royalDecreeAr: 'مرسوم ملكي رقم (م/43) وتاريخ 1443/05/26هـ',
    royalDecreeEn: 'Royal Decree No. M/43 dated 26/05/1443H',
    yearHijri: '1443هـ',
    yearGregorian: '2022م',
    category: 'الأنظمة القضائية والإجرائية',
    categoryEn: 'Judicial & Evidentiary Codes',
    descriptionAr: 'النظام المحوري لتحديد حجية الأدلة الرقمية، المحررات الرسمية والعادية، شهادة الشهود، القرائن القضائية، واليمين أمام المحاكم السعودية.',
    descriptionEn: 'The benchmark evidentiary statute codifying digital evidence admissibility, official notarized deeds, witness testimony, judicial presumptions, and oaths.',
    articlesCount: 129,
    articles: [
      {
        id: 'ev-art-53',
        statuteId: 'evidence-law',
        articleNumber: 53,
        titleAr: 'حجية الدليل الرقمي في الإثبات',
        titleEn: 'Evidentiary Admissibility and Weight of Digital Evidence',
        textAr: 'يكون للدليل الرقمي حكم الإثبات بالكتابة المقررة في هذا النظام. ويشمل ذلك السجلات والمحررات الرقمية، والمراسلات الرقمية بما فيها البريد الإلكتروني، والرسائل النصية عبر منصات التواصل المرخصة ووسائط الاتصال الإلكترونية الموثقة.',
        textEn: 'Digital evidence carries the evidentiary weight of written evidence prescribed in this Law, including digital records, electronic communications (emails, authorized instant messaging apps), and authenticated digital logs.',
        commentaryAr: 'نقلة تشريعية نوعية جعلت رسائل البريد الإلكتروني وواتساب الموثقة ومنصات العمل وسجلات النظام بمثابة حجة كتابية كاملة.',
        commentaryEn: 'A landmark procedural shift granting enterprise emails, verified WhatsApp correspondence, and database transaction logs full written evidentiary force.',
        evidentiaryWeight: 'conclusive',
        category: 'الأدلة الرقمية',
        tags: ['الدليل الرقمي', 'البريد الإلكتروني', 'محادثات الواتساب', 'المحررات الرقمية'],
        precedents: [
          {
            id: 'prec-ev-1',
            judgmentNumber: '433091182',
            yearHijri: '1444',
            court: 'محكمة الاستئناف التجارية بالرياض',
            courtEn: 'Commercial Court of Appeal - Riyadh',
            principleAr: 'المراسلات الصادرة من النطاق الرسمي للشركة تعد حجة قاطعة على إقرار الالتزام متى سلمت من الطعن بالتزوير الرقمي.',
            principleEn: 'Communications originating from a corporate domain constitute conclusive evidence of obligation unless proven digitally forged.',
            summaryAr: 'إلزام المدعى عليها بقيمة فواتير وتوريدات بناء على مراسلات بريد إلكتروني بين المديرين التنفيذيين.',
            summaryEn: 'Ordering payment based solely on authenticated CEO email exchange confirming delivery.'
          }
        ]
      },
      {
        id: 'ev-art-25',
        statuteId: 'evidence-law',
        articleNumber: 25,
        titleAr: 'حجية المحررات الرسمية',
        titleEn: 'Evidentiary Weight of Official (Notarized) Deeds',
        textAr: 'المحرر الرسمي حجة على الكافة بما دُوّن فيه من أمور قام بها موثقه في حدود اختصاصه أو وقعت من ذوي الشأن في حضوره، ما لم يثبت تزويره بالطرق المقررة نظاماً.',
        textEn: 'An official deed is conclusive evidence against all parties regarding matters recorded therein performed by the public officer within their authority, unless proven forged.',
        commentaryAr: 'الصكوك العقارية المفرغة والوثائق الموثقة عبر منصة ناجز والصادرة من كتاب العدل لا تنقض إلا بدعوى التزوير أو البطلان المطلق.',
        commentaryEn: 'Notarized deeds issued via Najiz or notary publics enjoy absolute judicial presumption of truth barring formal proof of forgery.',
        evidentiaryWeight: 'conclusive',
        category: 'المحررات الرسمية',
        tags: ['المحررات الرسمية', 'كتابة العدل', 'الصكوك العقارية', 'التزوير']
      },
      {
        id: 'ev-art-66',
        statuteId: 'evidence-law',
        articleNumber: 66,
        titleAr: 'حدود الإثبات بشهادة الشهود',
        titleEn: 'Statutory Limits on Witness Testimony',
        textAr: 'يجب أن يثبت بالكتابة كل تصرف تزيد قيمته على (مائة ألف ريال) أو ما يعادلها، أو كان غير محدد القيمة، ولا تجوز شهادة الشهود في إثبات وجوده أو انقضائه ما لم يوجد اتفاق أو نص يقضي بغير ذلك.',
        textEn: 'Any juridical act exceeding 100,000 SAR or of indeterminate value must be proven in writing. Witness testimony is inadmissible to prove its existence or discharge absent contrary statutory provision.',
        commentaryAr: 'منع نظام الإثبات اللجوء إلى الشهود لإثبات الالتزامات المالية التي تتجاوز 100 ألف ريال حماية للاستقرار الاقتصادي ومنعاً للتواطؤ.',
        commentaryEn: 'Statute of frauds threshold barring oral witness testimony for transactions exceeding 100k SAR.',
        evidentiaryWeight: 'circumstantial',
        category: 'شهادة الشهود',
        tags: ['شهادة الشهود', 'نصاب الإثبات بالكتابة', 'حدود المائة ألف ريال']
      }
    ]
  },
  {
    id: 'civil-procedure',
    nameAr: 'نظام المرافعات الشرعية',
    nameEn: 'Law of Civil Procedure',
    royalDecreeAr: 'مرسوم ملكي رقم (م/1) وتاريخ 1435/01/22هـ ولائحته',
    royalDecreeEn: 'Royal Decree No. M/1 dated 22/01/1435H',
    yearHijri: '1435هـ',
    yearGregorian: '2013م',
    category: 'الأنظمة القضائية والإجرائية',
    categoryEn: 'Judicial & Evidentiary Codes',
    descriptionAr: 'قانون الإجراءات القضائية أمام المحاكم العامة والتجارية والاستئناف، وضوابط التبليغ الإلكتروني، الدفوع الشكلية، ومواعيد الطعن.',
    descriptionEn: 'The procedural blueprint governing jurisdictional competence, electronic service of process, preliminary defenses, and appellate deadlines.',
    articlesCount: 242,
    articles: [
      {
        id: 'proc-art-57',
        statuteId: 'civil-procedure',
        articleNumber: 57,
        titleAr: 'شطب الدعوى وآثار غياب المدعي',
        titleEn: 'Dismissal and Striking Off for Claimant Non-Appearance',
        textAr: 'إذا غاب المدعي عن جلسة من جلسات المحاكمة ولم يتقدم بعذر تقبله المحكمة، تحكم المحكمة بشطب الدعوى. وإذا انقضت (ستون) يوماً ولم يطلب المدعي السير فيها اعتبرت الدعوى كأن لم تكن.',
        textEn: 'If claimant fails to appear at a trial session without an accepted excuse, the court strikes off the claim. If 60 days elapse without request to resume, the case is deemed non-existent.',
        commentaryAr: 'مهلة الـ 60 يوماً حاسمة؛ إذا لم يتم تقديم طلب السير في الدعوى تسقط الخصومة بقوة النظام.',
        commentaryEn: 'A mandatory 60-day limitation window to revive stricken claims before irrevocable procedural expiration.',
        evidentiaryWeight: 'high',
        category: 'إدارة الجلسات',
        tags: ['شطب الدعوى', 'غياب المدعي', 'مهلة الستين يوماً']
      },
      {
        id: 'proc-art-187',
        statuteId: 'civil-procedure',
        articleNumber: 187,
        titleAr: 'ميعاد الاعتراض بطلب الاستئناف (30 يوماً)',
        titleEn: 'Mandatory 30-Day Period for Lodging Appeals',
        textAr: 'مدة الاعتراض بطلب الاستئناف أو التدقيق (ثلاثون) يوماً، ما لم ينص النظام على خلاف ذلك، وتبدأ المدة من اليوم التالي لتسليم صورة صك الحكم للمحكوم عليه أو إيداعه في النظام الإلكتروني.',
        textEn: 'The deadline for appealing or reviewing judgments is 30 days, starting from the day following delivery of the deed or its electronic filing.',
        commentaryAr: 'ميعاد الاستئناف من النظام العام؛ فواته يسقط الحق في الطعن ويصير الحكم الابتدائي نهائياً وواجب النفاذ.',
        commentaryEn: 'Appellate time limitation is a matter of public policy. Expiration renders first-instance judgment final and executory.',
        evidentiaryWeight: 'conclusive',
        category: 'الاعتراض على الأحكام',
        tags: ['الاستئناف', 'ميعاد الطعن', 'ثلاثون يوماً', 'صك الحكم']
      }
    ]
  },
  {
    id: 'companies-law',
    nameAr: 'نظام الشركات الجديد',
    nameEn: 'New Commercial Companies Law',
    royalDecreeAr: 'مرسوم ملكي رقم (م/132) وتاريخ 1443/12/01هـ',
    royalDecreeEn: 'Royal Decree No. M/132 dated 01/12/1443H',
    yearHijri: '1443هـ',
    yearGregorian: '2022م',
    category: 'الأنظمة التجارية والمالية',
    categoryEn: 'Commercial & Corporate Laws',
    descriptionAr: 'النظام الحديث المنظم لشركة المساهمة المبسطة، حوكمة مجالس الإدارة، اتفاقيات الشركاء، وحماية حقوق الأقلية والتحكيم التجاري.',
    descriptionEn: 'Modern corporate framework introducing simplified joint-stock companies (SJSC), board fiduciary duties, and minority protections.',
    articlesCount: 283,
    articles: [
      {
        id: 'comp-art-28',
        statuteId: 'companies-law',
        articleNumber: 28,
        titleAr: 'المسؤولية التضامنية للمديرين وأعضاء مجلس الإدارة',
        titleEn: 'Fiduciary Duty and Joint Liability of Directors & Officers',
        textAr: 'يسأل أعضاء مجلس الإدارة أو المديرون بالتضامن عن تعويض الشركة أو الشركاء أو الغير عن الضرر الناتج عن مخالفتهم أحكام النظام أو عقد تأسيس الشركة أو نظامها الأساس، أو بسبب ما يصدر منهم من أخطاء في أداء عملهم.',
        textEn: 'Board members and managers are jointly liable to indemnify the company, shareholders, or third parties for harm resulting from violations of law, articles of association, or wrongful management acts.',
        commentaryAr: 'يرسخ النظام مبدأ المسؤولية الشخصية والتضامنية للمديرين في حال التجاوز أو الإهمال الجسيم في الإدارة.',
        commentaryEn: 'Enforces personal joint liability on corporate fiduciaries for ultra vires actions or gross negligence.',
        evidentiaryWeight: 'high',
        category: 'حوكمة الشركات ومسؤولية المديرين',
        tags: ['حوكمة الشركات', 'مسؤولية المديرين', 'التضامن', 'حماية الشركاء']
      }
    ]
  },
  {
    id: 'labor-law',
    nameAr: 'نظام العمل السعودي',
    nameEn: 'Saudi Labor Law & Amendments',
    royalDecreeAr: 'مرسوم ملكي رقم (م/51) وتاريخ 1426/08/23هـ وتعديلاته الكبرى',
    royalDecreeEn: 'Royal Decree No. M/51 dated 23/08/1426H and Major Amendments',
    yearHijri: '1426هـ',
    yearGregorian: '2005م',
    category: 'أنظمة العمل والموارد البشرية',
    categoryEn: 'Labor & Human Resources Laws',
    descriptionAr: 'النظام الحاكم لعلاقات العمل التعاقدية، مكافأة نهاية الخدمة (م84)، التعويض عن الفصل غير المشروع (م77)، وحالات الإنهاء التأديبي (م80).',
    descriptionEn: 'The core employment code regulating end of service gratuities (Art 84), unlawful termination damages (Art 77), and summary dismissals (Art 80).',
    articlesCount: 245,
    articles: [
      {
        id: 'lab-art-77',
        statuteId: 'labor-law',
        articleNumber: 77,
        titleAr: 'التعويض عن إنهاء العقد لسبب غير مشروع (مادة 77)',
        titleEn: 'Compensation for Termination without Valid Reason (Article 77)',
        textAr: 'ما لم يتضمن العقد تعويضاً محدداً مقابل إنهائه من أحد الطرفين لسبب غير مشروع، يستحق الطرف المتضرر من إنهاء العقد تعويضاً على النحو الآتي: 1- أجر خمسة عشر يوماً عن كل سنة من سنوات خدمة العامل إذا كان العقد غير محدد المدة. 2- أجر المدة الباقية من العقد إذا كان العقد محدد المدة. ويجب ألا يقل التعويض المشار إليه في الفقرتين (1) و(2) من هذه المادة عن أجر العامل لمدة شهرين.',
        textEn: 'Unless contract specifies predetermined compensation for unjustified termination, the harmed party is entitled to: 1) 15 days pay per service year for indefinite contracts; 2) Wages for the remaining term for fixed contracts. Minimum compensation cannot be less than 2 months wages.',
        commentaryAr: 'أشهر مادة في النزاعات العمالية؛ وضعت حداً أدنى إجبارياً للتعويض (أجر شهرين) ويحسب الأجر على أساس الأجر الفعلي الشامل للبدلات.',
        commentaryEn: 'Foundational provision in Saudi labor litigation establishing a mandatory floor of 2 months full wage compensation.',
        evidentiaryWeight: 'conclusive',
        category: 'إنهاء علاقة العمل والتعويضات',
        tags: ['المادة 77', 'فصل تعسفي', 'تعويض العامل', 'عقد محدد وغير محدد'],
        precedents: [
          {
            id: 'prec-lab-1',
            judgmentNumber: '44299101',
            yearHijri: '1445',
            court: 'المحكمة العمالية بجدة - دائرة الاستئناف',
            courtEn: 'Labor Court of Appeal - Jeddah',
            principleAr: 'احتساب تعويض المادة 77 يكون بالاستناد إلى الأجر الفعلي الأخير الشامل لكافة البدلات الثابتة وليس الأساسي فقط.',
            principleEn: 'Article 77 compensation must be calculated using the final gross comprehensive wage including all standard allowances.',
            summaryAr: 'تأييد حكم بتعويض مهندس بمبلغ 180,000 ريال عن الإنهاء غير المشروع مع احتساب بدل السكن والمواصلات.',
            summaryEn: 'Affirming award of 180,000 SAR for unlawful termination factoring housing and transport allowances.'
          }
        ]
      },
      {
        id: 'lab-art-84',
        statuteId: 'labor-law',
        articleNumber: 84,
        titleAr: 'مكافأة نهاية الخدمة (مادة 84)',
        titleEn: 'End of Service Gratuity (Article 84)',
        textAr: 'إذا انتهت علاقة العمل وجب على صاحب العمل أن يدفع إلى العامل مكافأة عن مدة خدمته تحسب على أساس أجر نصف شهر عن كل سنة من السنوات الخمس الأولى، وأجر شهر عن كل سنة من السنوات التالية، ويتخذ الأجر الأخير أساساً لحساب المكافأة، ويستحق العامل مكافأة عن أجزاء السنة بنسبة ما قضاه منها في العمل.',
        textEn: 'Upon termination of employment, employer must pay end-of-service gratuity calculated as half a month wage for each of the first five years, and a full month wage for each subsequent year, based on the last wage paid.',
        commentaryAr: 'حق جوهري أصيل للعامل، تحسب المكافأة على الأجر الأخير الشامل (أساسي + بدلات مستمرة).',
        commentaryEn: 'A mandatory statutory entitlement computed upon the final comprehensive gross remuneration.',
        evidentiaryWeight: 'conclusive',
        category: 'مكافأة نهاية الخدمة',
        tags: ['مكافأة نهاية الخدمة', 'المادة 84', 'حساب المستحقات']
      },
      {
        id: 'lab-art-80',
        statuteId: 'labor-law',
        articleNumber: 80,
        titleAr: 'حالات الفصل التأديبي دون مكافأة أو إشعار (مادة 80)',
        titleEn: 'Summary Dismissal without Notice or Gratuity (Article 80)',
        textAr: 'لا يجوز لصاحب العمل فسخ العقد دون مكافأة أو إشعار أو تعويض إلا في حالات حصرية محددة، منها: الاعتداء على صاحب العمل أو رؤسائه، عدم أداء الالتزامات الجوهرية، ارتكاب عمل مخل بالشرف، أو إفشاء الأسرار الصناعية والتجارية.',
        textEn: 'Employer may not terminate without gratuity, notice, or compensation except in exclusive statutory grounds, including physical assault, willful breach of core obligations, moral turpitude, or disclosure of trade secrets.',
        commentaryAr: 'عبء الإثبات في المادة 80 يقع بالكامل على عاتق صاحب العمل وفق إجراءات التحقيق الخطي والإنذار المسبق.',
        commentaryEn: 'Burden of proof rests strictly upon the employer requiring formal written investigation and prior warnings.',
        evidentiaryWeight: 'high',
        category: 'الفسخ التأديبي',
        tags: ['المادة 80', 'فصل العامل', 'إفشاء الأسرار', 'عبء الإثبات']
      }
    ]
  },
  {
    id: 'personal-status',
    nameAr: 'نظام الأحوال الشخصية',
    nameEn: 'Personal Status Law',
    royalDecreeAr: 'مرسوم ملكي رقم (م/73) وتاريخ 1443/08/06هـ',
    royalDecreeEn: 'Royal Decree No. M/73 dated 06/08/1443H',
    yearHijri: '1443هـ',
    yearGregorian: '2022م',
    category: 'أنظمة الأسرة والتركات والفرائض',
    categoryEn: 'Family & Estate Distribution Laws',
    descriptionAr: 'النظام المقنن لقضايا الأسرة، الوصية، وتوزيع التركات والمواريث وفقاً للأصول الفقهية وقواعد الفرائض وحجب الحرمان والنقصان.',
    descriptionEn: 'The comprehensive statutory code regulating family affairs, bequests, and estate inheritance shares under codified Islamic jurisprudence.',
    articlesCount: 252,
    articles: [
      {
        id: 'pers-art-201',
        statuteId: 'personal-status',
        articleNumber: 201,
        titleAr: 'ترتيب الحقوق المتعلقة بالتركة',
        titleEn: 'Priority Order of Estate Liabilities & Distribution',
        textAr: 'تؤدى من التركة بحسب الترتيب الآتي: أولاً: مؤن تجهيز المتوفى بالمعروف. ثانياً: ديون المتوفى العينية المتعلقة بأعيان التركة. ثالثاً: ديون المتوفى المرسلة في ذمته. رابعاً: الوصية بما لا يجاوز ثلث ما تبقى من التركة. خامساً: الميراث المستحق للورثة.',
        textEn: 'Estate claims are settled in strict order: 1) Reasonable funeral expenses; 2) Secured debts tied to specific assets; 3) Unsecured debts in personam; 4) Valid bequests up to one-third of remaining estate; 5) Residual inheritance to heirs.',
        commentaryAr: 'قاعدة فقهية ونظامية ذهبية: لا تركة إلا بعد سداد الديون وتنفيذ الوصايا المشروعة في حدود الثلث.',
        commentaryEn: 'Inflexible statutory hierarchy ensuring debts and valid testamentary bequests precede heir distributions.',
        evidentiaryWeight: 'conclusive',
        category: 'التركات والديون',
        tags: ['تصفية التركات', 'الديون', 'الوصية', 'الثلث الشرعي']
      }
    ]
  },
  {
    id: 'code-of-law-practice',
    nameAr: 'نظام المحاماة ولائحته التنفيذية',
    nameEn: 'Code of Law Practice',
    royalDecreeAr: 'مرسوم ملكي رقم (م/38) وتاريخ 1422/10/28هـ ولائحته',
    royalDecreeEn: 'Royal Decree No. M/38 dated 28/10/1422H',
    yearHijri: '1422هـ',
    yearGregorian: '2001م',
    category: 'الأنظمة المهنية والعدلية',
    categoryEn: 'Judicial & Evidentiary Codes',
    descriptionAr: 'النظام المنظم لمزاولة مهنة المحاماة، واجبات المحامي، أتعاب المحاماة، وحصانة الدفاع وأخلاقيات الترافع أمام المحاكم وهيئة المحامين.',
    descriptionEn: 'Professional code governing legal practice, advocate ethical duties, attorney retainer agreements, defense immunity, and bar standards.',
    articlesCount: 44,
    articles: [
      {
        id: 'law-art-26',
        statuteId: 'code-of-law-practice',
        articleNumber: 26,
        titleAr: 'تحديد أتعاب المحاماة والنزاع حولها',
        titleEn: 'Determination of Legal Fees and Retainer Disputes',
        textAr: 'تحدد أتعاب المحامي وطريقة دفعها باتفاق يعقده مع موكله، فإذا لم يكن هناك اتفاق مكتوب، أو كان الاتفاق محل خلاف، تولت المحكمة التي نظرت الدعوى تقديرها عند الخلاف، مستأنسة برأي هيئة الخبراء أو الهيئة السعودية للمحامين وفق الجهد المبذول والنفع العائد.',
        textEn: 'Attorney fees and payment terms are determined by agreement with the client. Absent a written agreement, the adjudicating court assesses quantum meruit fees considering legal effort and achieved benefit.',
        commentaryAr: 'أهمية توثيق عقد أتعاب محاماة نموذجي لتفادي الخلاف القضائي وتقدير الأتعاب بالنظر إلى النفع المحقق للموكل.',
        commentaryEn: 'Underlines the critical necessity of standardized written retainer agreements to safeguard attorney compensation.',
        evidentiaryWeight: 'high',
        category: 'أتعاب المحاماة',
        tags: ['عقد الأتعاب', 'هيئة المحامين', 'تقدير المحكمة']
      }
    ]
  },
  {
    id: 'judicial-costs',
    nameAr: 'نظام تكاليف الدعاوى القضائية',
    nameEn: 'Law of Judicial Costs',
    royalDecreeAr: 'مرسوم ملكي رقم (م/16) وتاريخ 1443/01/30هـ',
    royalDecreeEn: 'Royal Decree No. M/16 dated 30/01/1443H',
    yearHijri: '1443هـ',
    yearGregorian: '2021م',
    category: 'الأنظمة القضائية والإجرائية',
    categoryEn: 'Judicial & Evidentiary Codes',
    descriptionAr: 'النظام المحدد لرسوم التقاضي (5% بحد أقصى مليون ريال)، تكاليف الاستئناف، طلبات التماس إعادة النظر، وحالات الإعفاء النظامي.',
    descriptionEn: 'Statutory fees regime imposing up to 5% litigation tariffs (capped at 1,000,000 SAR), appellate fees, and public welfare exemptions.',
    articlesCount: 19,
    articles: [
      {
        id: 'cost-art-3',
        statuteId: 'judicial-costs',
        articleNumber: 3,
        titleAr: 'نسبة التكاليف القضائية والحد الأعلى',
        titleEn: 'Statutory Fee Percentage and Cap Threshold (5% / 1M SAR)',
        textAr: 'تفرض على الدعاوى القضائية تكاليف بما لا يزيد على نسبة (5%) من قيمة المطالبة، وبحد أقصى قدره (مليون ريال). وتحدد اللائحة معايير تقدير التكاليف بحسب نوع الدعوى ومبلغها وقيمة الطلبات العارضة.',
        textEn: 'Judicial costs are levied at a rate not exceeding 5% of the claimed sum, capped at a maximum of 1,000,000 SAR, as detailed in the executive regulations.',
        commentaryAr: 'الهدف من النظام هو الحد من الدعاوى الكيدية وتشجيع التسويات الودية والوساطة والتحكيم قبل اللجوء للمحاكم.',
        commentaryEn: 'Designed to deter vexatious litigation and foster commercial arbitration and alternative dispute resolution.',
        evidentiaryWeight: 'conclusive',
        category: 'الرسوم القضائية',
        tags: ['تكاليف الدعاوى', 'نسبة الـ 5%', 'مليون ريال', 'الدعاوى الكيدية']
      },
      {
        id: 'cost-art-17',
        statuteId: 'judicial-costs',
        articleNumber: 17,
        titleAr: 'حالات الإعفاء من التكاليف القضائية',
        titleEn: 'Statutory Exemptions from Court Filing Fees',
        textAr: 'يُعفى من التكاليف القضائية: 1- الدعاوى الجزائية العامة والطلبات المتعلقة بها. 2- الدعاوى والطلبات التي يختص بها قضاء الأحوال الشخصية، باستثناء طلب النقض والتماس إعادة النظر. 3- الدعاوى والطلبات التي يختص بها قضاء ديوان المظالم. 4- دعاوى العمال الخاضعين لنظام العمل ومستحقيهم.',
        textEn: 'Exempted from judicial costs are: 1) Public criminal proceedings; 2) Personal status family matters (excluding cassation and reconsideration); 3) Administrative claims before the Board of Grievances; 4) Claims filed by laborers covered under the Labor Law.',
        commentaryAr: 'مراعاة الاعتبارات الإنسانية والاجتماعية وحماية العمال في تحصيل أجورهم وحقوقهم دون عوائق مالية.',
        commentaryEn: 'Ensures equitable access to justice by insulating workers and personal status litigants from prohibitive fees.',
        evidentiaryWeight: 'conclusive',
        category: 'الإعفاءات القضائية',
        tags: ['إعفاء التكاليف', 'الدعاوى العمالية', 'الأحوال الشخصية', 'ديوان المظالم']
      }
    ]
  }
];
