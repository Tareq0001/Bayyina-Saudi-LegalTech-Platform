var J=Object.defineProperty;var H=(s,e,t)=>e in s?J(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var u=(s,e,t)=>H(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const O={ar:{appName:"بَيّنة",appSub:"المنصة القضائية الذكية للأنظمة السعودية وإدارة القضايا والمحاماة",courtTiers:"التدرج القضائي والمحاكم",navCodex:"مدونة الأنظمة الذكية",navSimulator:"محاكي التقاضي وناجز",navCalculators:"الحاسبات القضائية",navEvidence:"مصفوفة الإثبات والبينات",navDrafter:"محرر اللوائح والعقود",gavelBtn:"قرع مطرقة القضاء",langBtn:"English",soundBtn:"الصوت",searchPlaceholder:"ابحث في نصوص الأنظمة، المواد، المراسيم الملكية، أو الكلمات الدلالية...",statutesCount:"الأنظمة المقننة",articlesCount:"المواد المستوفاة",precedentsCount:"المبادئ القضائية",caseScenariosCount:"قضايا نموذجية",printDoc:"طباعة بصيغة صك قضائي",exportMarkdown:"تصدير Markdown",calculate:"احسب المستحقات الآن",viewDetails:"عرض التفاصيل والسوابق",close:"إغلاق",back:"رجوع",stageCompleted:"مكتملة نظاماً",stageInProgress:"قيد المداولة والنظر",stageUpcoming:"مرحلة لاحقة",executeStageAction:"تنفيذ الإجراء القضائي",nextStage:"المرحلة التالية",previousStage:"المرحلة السابقة",verdictIssued:"صك الحكم قطعي وواجب النفاذ",evidenceStrength:"مؤشر قوة الدليل وحجيته"},en:{appName:"Bayyina",appSub:"Saudi Judicial Intelligence & LegalTech Platform",courtTiers:"Judicial Hierarchy & Courts",navCodex:"Regulatory Codex",navSimulator:"Najiz Litigation Simulator",navCalculators:"Judicial Calculators",navEvidence:"Evidence & Proof Matrix",navDrafter:"Pleadings & Contract Drafter",gavelBtn:"Strike Judicial Gavel",langBtn:"العربية",soundBtn:"Audio",searchPlaceholder:"Search statutes, royal decrees, articles, legal keywords...",statutesCount:"Codified Laws",articlesCount:"Key Statutory Articles",precedentsCount:"Judicial Precedents",caseScenariosCount:"Landmark Cases",printDoc:"Print Judicial Deed",exportMarkdown:"Export Markdown",calculate:"Calculate Entitlements",viewDetails:"View Details & Precedents",close:"Close",back:"Back",stageCompleted:"Statutorily Completed",stageInProgress:"In Progress / Hearing",stageUpcoming:"Subsequent Stage",executeStageAction:"Execute Judicial Step",nextStage:"Next Stage",previousStage:"Previous Stage",verdictIssued:"Final Executable Judgment",evidenceStrength:"Probative Force Meter"}};class W{constructor(){u(this,"currentLang","ar");u(this,"listeners",[])}get lang(){return this.currentLang}get t(){return O[this.currentLang]}setLanguage(e){this.currentLang=e,document.documentElement.lang=e,document.documentElement.dir=e==="ar"?"rtl":"ltr",this.listeners.forEach(t=>t(e))}toggle(){this.setLanguage(this.currentLang==="ar"?"en":"ar")}subscribe(e){this.listeners.push(e)}}const v=new W;class G{constructor(){u(this,"ctx",null);u(this,"isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playGavel(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(320,e),t.frequency.exponentialRampToValueAtTime(80,e+.08),i.gain.setValueAtTime(1,e),i.gain.exponentialRampToValueAtTime(.001,e+.09),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.1);const a=this.ctx.createOscillator(),n=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(140,e),a.frequency.exponentialRampToValueAtTime(45,e+.28),n.gain.setValueAtTime(.85,e),n.gain.exponentialRampToValueAtTime(.001,e+.35),a.connect(n),n.connect(this.ctx.destination),a.start(e),a.stop(e+.38),setTimeout(()=>{if(!this.ctx)return;const r=this.ctx.currentTime,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(260,r),o.frequency.exponentialRampToValueAtTime(70,r+.07),c.gain.setValueAtTime(.6,r),c.gain.exponentialRampToValueAtTime(.001,r+.15),o.connect(c),c.connect(this.ctx.destination),o.start(r),o.stop(r+.18)},210)}catch(e){console.warn("Audio play error:",e)}}playChime(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(587.33,e),t.frequency.exponentialRampToValueAtTime(880,e+.12),i.gain.setValueAtTime(.18,e),i.gain.exponentialRampToValueAtTime(.001,e+.25),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.26)}catch(e){console.warn("Audio chime error:",e)}}playVerdictFanfare(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;[440,554.37,659.25,880].forEach((t,i)=>{var c;const a=i*.1,n=(((c=this.ctx)==null?void 0:c.currentTime)||0)+a,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(t,n),o.gain.setValueAtTime(.2,n),o.gain.exponentialRampToValueAtTime(.001,n+.4),r.connect(o),o.connect(this.ctx.destination),r.start(n),r.stop(n+.42)})}catch(e){console.warn("Audio fanfare error:",e)}}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted}}const E=new G;class z{constructor(e){u(this,"activeView","codex");u(this,"onNavigate");this.onNavigate=e}setActive(e){this.activeView=e}render(e){const t=v.lang==="ar";e.innerHTML=`
      <header class="bayyina-nav-header">
        <!-- Top Legal Banner -->
        <div class="top-legal-bar">
          <div class="legal-bar-content">
            <span class="royal-decree-lead">
              🇸🇦 ${t?"المملكة العربية السعودية | منظومة التشريعات القضائية المتطورة والتحول الرقمي العدلي (ناجز)":"Kingdom of Saudi Arabia | Modern Judicial Reforms & Najiz Digital Justice"}
            </span>
            <div class="top-bar-right">
              <span class="pulse-live">●</span>
              <span>${t?"الأنظمة سارية المفعول 1445هـ / 2024م":"In-Force Statutes 2024"}</span>
            </div>
          </div>
        </div>

        <!-- Main Brand & Action Header -->
        <div class="main-header-row">
          <div class="brand-section">
            <div class="brand-emblem-box">
              <div class="brand-emblem">⚖️</div>
            </div>
            <div class="brand-text-box">
              <div class="brand-name-row">
                <h1 class="brand-title">${v.t.appName}</h1>
                <span class="brand-version-badge">v2.5 Enterprise</span>
              </div>
              <p class="brand-subtitle">${v.t.appSub}</p>
            </div>
          </div>

          <!-- Quick Controls (Gavel, Sound, Lang) -->
          <div class="header-controls">
            <button id="gavel-strike-btn" class="gavel-btn" title="${v.t.gavelBtn}">
              <span class="gavel-icon">🔨</span>
              <span class="gavel-label">${t?"قرع المطرقة":"Strike Gavel"}</span>
            </button>

            <button id="sound-toggle-btn" class="ctrl-btn" title="${v.t.soundBtn}">
              <span id="sound-icon">${E.isMuted?"🔇":"🔊"}</span>
            </button>

            <button id="lang-toggle-btn" class="ctrl-btn lang-btn">
              🌐 ${v.t.langBtn}
            </button>
          </div>
        </div>

        <!-- Primary Navigation Tabs -->
        <nav class="primary-nav-bar">
          <div class="nav-tabs-cluster">
            <button class="nav-tab-item ${this.activeView==="codex"?"active":""}" data-view="codex">
              <span class="tab-icon">📜</span>
              <span class="tab-label">${v.t.navCodex}</span>
            </button>

            <button class="nav-tab-item ${this.activeView==="simulator"?"active":""}" data-view="simulator">
              <span class="tab-icon">🏛️</span>
              <span class="tab-label">${v.t.navSimulator}</span>
              <span class="tab-pulse-badge">6 مراحل</span>
            </button>

            <button class="nav-tab-item ${this.activeView==="calculators"?"active":""}" data-view="calculators">
              <span class="tab-icon">🧮</span>
              <span class="tab-label">${v.t.navCalculators}</span>
              <span class="tab-tag">م77 / التكاليف</span>
            </button>

            <button class="nav-tab-item ${this.activeView==="evidence"?"active":""}" data-view="evidence">
              <span class="tab-icon">🔍</span>
              <span class="tab-label">${v.t.navEvidence}</span>
            </button>

            <button class="nav-tab-item ${this.activeView==="drafter"?"active":""}" data-view="drafter">
              <span class="tab-icon">✍️</span>
              <span class="tab-label">${v.t.navDrafter}</span>
            </button>
          </div>

          <!-- Quick Stats Pill Cluster -->
          <div class="header-stats-pill">
            <div class="h-stat-unit">
              <strong>8</strong>
              <span>${v.t.statutesCount}</span>
            </div>
            <div class="h-stat-unit">
              <strong>4</strong>
              <span>${v.t.caseScenariosCount}</span>
            </div>
            <div class="h-stat-unit">
              <strong>100%</strong>
              <span>توافق نظامي</span>
            </div>
          </div>
        </nav>
      </header>
    `,this.attachEvents(e)}attachEvents(e){e.querySelectorAll(".nav-tab-item").forEach(n=>{n.addEventListener("click",()=>{E.playChime();const r=n.getAttribute("data-view");r&&(this.activeView=r,this.onNavigate(r))})});const t=e.querySelector("#gavel-strike-btn");t&&t.addEventListener("click",()=>{E.playGavel()});const i=e.querySelector("#sound-toggle-btn");i&&i.addEventListener("click",()=>{const n=E.toggleMute(),r=e.querySelector("#sound-icon");r&&(r.textContent=n?"🔇":"🔊")});const a=e.querySelector("#lang-toggle-btn");a&&a.addEventListener("click",()=>{E.playChime(),v.toggle()})}}const R=[{id:"civil-transactions",nameAr:"نظام المعاملات المدنية",nameEn:"Civil Transactions Law",royalDecreeAr:"مرسوم ملكي رقم (م/191) وتاريخ 1444/11/29هـ",royalDecreeEn:"Royal Decree No. M/191 dated 29/11/1444H",yearHijri:"1444هـ",yearGregorian:"2023م",category:"الأنظمة المدنية والتعاقدية",categoryEn:"Civil & Contractual Laws",descriptionAr:"النظام الأساسي الذي يؤطر العقود، الالتزامات، المسؤولية التقصيرية، الحقوق العينية، والضمان المالي في المملكة العربية السعودية.",descriptionEn:"The codification of contracts, obligations, tort liability, real property rights, and financial security in Saudi Arabia.",articlesCount:721,articles:[{id:"civ-art-94",statuteId:"civil-transactions",articleNumber:94,titleAr:"العقد شريعة المتعاقدين والقوة الملزمة",titleEn:"Binding Force of Contract (Pacta Sunt Servanda)",textAr:"العقد شريعة المتعاقدين، فلا يجوز نقضه ولا تعديله إلا باتفاق الطرفين، أو للأسباب التي يقررها النظام. ويجب تنفيذ العقد طبقاً لما اشتمل عليه وبطريقة تتفق مع ما يقتضيه حسن النية.",textEn:"A contract is the law of the contracting parties; it may not be revoked or amended except by mutual agreement or for reasons prescribed by law. It must be performed in accordance with its contents and in good faith.",commentaryAr:"تكرس المادة مبدأ القوة الملزمة للعقد وحسن النية في المعاملات، وتقطع دابر التنصل التعسفي من الالتزامات التعاقدية.",commentaryEn:"Establishes the inviolable rule of pacta sunt servanda and good-faith execution in commercial and civil covenants.",evidentiaryWeight:"conclusive",category:"الالتزامات والعقود",tags:["العقد شريعة المتعاقدين","حسن النية","القوة الملزمة"],precedents:[{id:"prec-civ-1",judgmentNumber:"441029341",yearHijri:"1445",court:"المحكمة العليا - الدائرة التجارية",courtEn:"Supreme Court - Commercial Circuit",principleAr:"الأصل في الشروط الصحة واللزوم، ولا يلتفت لادعاء الغبن متى كان العاقد ذا دراية بسوق التعامل.",principleEn:"Conditions in contracts are presumed valid and binding; claims of unconscionability are rejected where the contracting party is commercially experienced.",summaryAr:"إلزام شركة مقاولات بتنفيذ بنود غرامات التأخير المتفق عليها دون تعديل.",summaryEn:"Holding contractor strictly liable for agreed delay damages without equitable reduction."}]},{id:"civ-art-138",statuteId:"civil-transactions",articleNumber:138,titleAr:"المسؤولية عن الفعل الضار (التعويض)",titleEn:"Tort Liability and Damages for Harm",textAr:"كل خطأ سبب ضرراً للغير يلزم من ارتكبه بالتعويض. ويشمل التعويض ما لحق المتضرر من خسارة وما فاته من كسب، إذا كان ذلك نتيجة طبيعية للفعل الضار.",textEn:"Every fault causing harm to another obligates the wrongdoer to provide compensation. Compensation includes actual loss sustained and loss of profit incurred, provided it is a natural consequence of the wrongful act.",commentaryAr:"تحدد المادة أركان المسؤولية التقصيرية الثلاثة: الخطأ، والضرر، وعلاقة السببية، وتقر رسمياً التعويض عن فوات الكسب المحقق.",commentaryEn:"Formulates the tripartite tort doctrine: fault, harm, and causation, formally recognizing compensation for proven loss of profit.",evidentiaryWeight:"high",category:"المسؤولية التقصيرية والضمان",tags:["التعويض","فوات الكسب","المسؤولية التقصيرية","الضرر المادي والمعنوي"]},{id:"civ-art-178",statuteId:"civil-transactions",articleNumber:178,titleAr:"الشرط الجزائي وتعديله القضائي",titleEn:"Liquidated Damages (Penalty Clause)",textAr:"يجوز للمتعاقدين أن يحددا مقدماً مقدار التعويض بالنص عليه في العقد أو في اتفاق لاحق. ولا يكون التعويض المتفق عليه مستحقاً إذا أثبت المدين أن الدائن لم يلحقه ضرر. ويجوز للمحكمة تخفيض التعويض إذا أثبت المدين أنه كان مبالغاً فيه بدرجة كبيرة.",textEn:"Parties may predetermine compensation within the contract or via subsequent agreement. The agreed compensation is not due if debtor proves creditor suffered no damage. The court may reduce the compensation if proven to be substantially exaggerated.",commentaryAr:"يوازن النظام بين سلطة الإرادة التعاقدية في تحديد التعويض مقدماً وبين الرقابة القضائية لمنع الإثراء بلا سبب والإجحاف.",commentaryEn:"Strikes an equitable balance between contractual freedom to set liquidated damages and judicial power to mitigate windfall penalties.",evidentiaryWeight:"high",category:"الشرط الجزائي والتعويض",tags:["الشرط الجزائي","سلطة القاضي التقديرية","تخفيض التعويض"]}]},{id:"evidence-law",nameAr:"نظام الإثبات",nameEn:"Law of Evidence",royalDecreeAr:"مرسوم ملكي رقم (م/43) وتاريخ 1443/05/26هـ",royalDecreeEn:"Royal Decree No. M/43 dated 26/05/1443H",yearHijri:"1443هـ",yearGregorian:"2022م",category:"الأنظمة القضائية والإجرائية",categoryEn:"Judicial & Evidentiary Codes",descriptionAr:"النظام المحوري لتحديد حجية الأدلة الرقمية، المحررات الرسمية والعادية، شهادة الشهود، القرائن القضائية، واليمين أمام المحاكم السعودية.",descriptionEn:"The benchmark evidentiary statute codifying digital evidence admissibility, official notarized deeds, witness testimony, judicial presumptions, and oaths.",articlesCount:129,articles:[{id:"ev-art-53",statuteId:"evidence-law",articleNumber:53,titleAr:"حجية الدليل الرقمي في الإثبات",titleEn:"Evidentiary Admissibility and Weight of Digital Evidence",textAr:"يكون للدليل الرقمي حكم الإثبات بالكتابة المقررة في هذا النظام. ويشمل ذلك السجلات والمحررات الرقمية، والمراسلات الرقمية بما فيها البريد الإلكتروني، والرسائل النصية عبر منصات التواصل المرخصة ووسائط الاتصال الإلكترونية الموثقة.",textEn:"Digital evidence carries the evidentiary weight of written evidence prescribed in this Law, including digital records, electronic communications (emails, authorized instant messaging apps), and authenticated digital logs.",commentaryAr:"نقلة تشريعية نوعية جعلت رسائل البريد الإلكتروني وواتساب الموثقة ومنصات العمل وسجلات النظام بمثابة حجة كتابية كاملة.",commentaryEn:"A landmark procedural shift granting enterprise emails, verified WhatsApp correspondence, and database transaction logs full written evidentiary force.",evidentiaryWeight:"conclusive",category:"الأدلة الرقمية",tags:["الدليل الرقمي","البريد الإلكتروني","محادثات الواتساب","المحررات الرقمية"],precedents:[{id:"prec-ev-1",judgmentNumber:"433091182",yearHijri:"1444",court:"محكمة الاستئناف التجارية بالرياض",courtEn:"Commercial Court of Appeal - Riyadh",principleAr:"المراسلات الصادرة من النطاق الرسمي للشركة تعد حجة قاطعة على إقرار الالتزام متى سلمت من الطعن بالتزوير الرقمي.",principleEn:"Communications originating from a corporate domain constitute conclusive evidence of obligation unless proven digitally forged.",summaryAr:"إلزام المدعى عليها بقيمة فواتير وتوريدات بناء على مراسلات بريد إلكتروني بين المديرين التنفيذيين.",summaryEn:"Ordering payment based solely on authenticated CEO email exchange confirming delivery."}]},{id:"ev-art-25",statuteId:"evidence-law",articleNumber:25,titleAr:"حجية المحررات الرسمية",titleEn:"Evidentiary Weight of Official (Notarized) Deeds",textAr:"المحرر الرسمي حجة على الكافة بما دُوّن فيه من أمور قام بها موثقه في حدود اختصاصه أو وقعت من ذوي الشأن في حضوره، ما لم يثبت تزويره بالطرق المقررة نظاماً.",textEn:"An official deed is conclusive evidence against all parties regarding matters recorded therein performed by the public officer within their authority, unless proven forged.",commentaryAr:"الصكوك العقارية المفرغة والوثائق الموثقة عبر منصة ناجز والصادرة من كتاب العدل لا تنقض إلا بدعوى التزوير أو البطلان المطلق.",commentaryEn:"Notarized deeds issued via Najiz or notary publics enjoy absolute judicial presumption of truth barring formal proof of forgery.",evidentiaryWeight:"conclusive",category:"المحررات الرسمية",tags:["المحررات الرسمية","كتابة العدل","الصكوك العقارية","التزوير"]},{id:"ev-art-66",statuteId:"evidence-law",articleNumber:66,titleAr:"حدود الإثبات بشهادة الشهود",titleEn:"Statutory Limits on Witness Testimony",textAr:"يجب أن يثبت بالكتابة كل تصرف تزيد قيمته على (مائة ألف ريال) أو ما يعادلها، أو كان غير محدد القيمة، ولا تجوز شهادة الشهود في إثبات وجوده أو انقضائه ما لم يوجد اتفاق أو نص يقضي بغير ذلك.",textEn:"Any juridical act exceeding 100,000 SAR or of indeterminate value must be proven in writing. Witness testimony is inadmissible to prove its existence or discharge absent contrary statutory provision.",commentaryAr:"منع نظام الإثبات اللجوء إلى الشهود لإثبات الالتزامات المالية التي تتجاوز 100 ألف ريال حماية للاستقرار الاقتصادي ومنعاً للتواطؤ.",commentaryEn:"Statute of frauds threshold barring oral witness testimony for transactions exceeding 100k SAR.",evidentiaryWeight:"circumstantial",category:"شهادة الشهود",tags:["شهادة الشهود","نصاب الإثبات بالكتابة","حدود المائة ألف ريال"]}]},{id:"civil-procedure",nameAr:"نظام المرافعات الشرعية",nameEn:"Law of Civil Procedure",royalDecreeAr:"مرسوم ملكي رقم (م/1) وتاريخ 1435/01/22هـ ولائحته",royalDecreeEn:"Royal Decree No. M/1 dated 22/01/1435H",yearHijri:"1435هـ",yearGregorian:"2013م",category:"الأنظمة القضائية والإجرائية",categoryEn:"Judicial & Evidentiary Codes",descriptionAr:"قانون الإجراءات القضائية أمام المحاكم العامة والتجارية والاستئناف، وضوابط التبليغ الإلكتروني، الدفوع الشكلية، ومواعيد الطعن.",descriptionEn:"The procedural blueprint governing jurisdictional competence, electronic service of process, preliminary defenses, and appellate deadlines.",articlesCount:242,articles:[{id:"proc-art-57",statuteId:"civil-procedure",articleNumber:57,titleAr:"شطب الدعوى وآثار غياب المدعي",titleEn:"Dismissal and Striking Off for Claimant Non-Appearance",textAr:"إذا غاب المدعي عن جلسة من جلسات المحاكمة ولم يتقدم بعذر تقبله المحكمة، تحكم المحكمة بشطب الدعوى. وإذا انقضت (ستون) يوماً ولم يطلب المدعي السير فيها اعتبرت الدعوى كأن لم تكن.",textEn:"If claimant fails to appear at a trial session without an accepted excuse, the court strikes off the claim. If 60 days elapse without request to resume, the case is deemed non-existent.",commentaryAr:"مهلة الـ 60 يوماً حاسمة؛ إذا لم يتم تقديم طلب السير في الدعوى تسقط الخصومة بقوة النظام.",commentaryEn:"A mandatory 60-day limitation window to revive stricken claims before irrevocable procedural expiration.",evidentiaryWeight:"high",category:"إدارة الجلسات",tags:["شطب الدعوى","غياب المدعي","مهلة الستين يوماً"]},{id:"proc-art-187",statuteId:"civil-procedure",articleNumber:187,titleAr:"ميعاد الاعتراض بطلب الاستئناف (30 يوماً)",titleEn:"Mandatory 30-Day Period for Lodging Appeals",textAr:"مدة الاعتراض بطلب الاستئناف أو التدقيق (ثلاثون) يوماً، ما لم ينص النظام على خلاف ذلك، وتبدأ المدة من اليوم التالي لتسليم صورة صك الحكم للمحكوم عليه أو إيداعه في النظام الإلكتروني.",textEn:"The deadline for appealing or reviewing judgments is 30 days, starting from the day following delivery of the deed or its electronic filing.",commentaryAr:"ميعاد الاستئناف من النظام العام؛ فواته يسقط الحق في الطعن ويصير الحكم الابتدائي نهائياً وواجب النفاذ.",commentaryEn:"Appellate time limitation is a matter of public policy. Expiration renders first-instance judgment final and executory.",evidentiaryWeight:"conclusive",category:"الاعتراض على الأحكام",tags:["الاستئناف","ميعاد الطعن","ثلاثون يوماً","صك الحكم"]}]},{id:"companies-law",nameAr:"نظام الشركات الجديد",nameEn:"New Commercial Companies Law",royalDecreeAr:"مرسوم ملكي رقم (م/132) وتاريخ 1443/12/01هـ",royalDecreeEn:"Royal Decree No. M/132 dated 01/12/1443H",yearHijri:"1443هـ",yearGregorian:"2022م",category:"الأنظمة التجارية والمالية",categoryEn:"Commercial & Corporate Laws",descriptionAr:"النظام الحديث المنظم لشركة المساهمة المبسطة، حوكمة مجالس الإدارة، اتفاقيات الشركاء، وحماية حقوق الأقلية والتحكيم التجاري.",descriptionEn:"Modern corporate framework introducing simplified joint-stock companies (SJSC), board fiduciary duties, and minority protections.",articlesCount:283,articles:[{id:"comp-art-28",statuteId:"companies-law",articleNumber:28,titleAr:"المسؤولية التضامنية للمديرين وأعضاء مجلس الإدارة",titleEn:"Fiduciary Duty and Joint Liability of Directors & Officers",textAr:"يسأل أعضاء مجلس الإدارة أو المديرون بالتضامن عن تعويض الشركة أو الشركاء أو الغير عن الضرر الناتج عن مخالفتهم أحكام النظام أو عقد تأسيس الشركة أو نظامها الأساس، أو بسبب ما يصدر منهم من أخطاء في أداء عملهم.",textEn:"Board members and managers are jointly liable to indemnify the company, shareholders, or third parties for harm resulting from violations of law, articles of association, or wrongful management acts.",commentaryAr:"يرسخ النظام مبدأ المسؤولية الشخصية والتضامنية للمديرين في حال التجاوز أو الإهمال الجسيم في الإدارة.",commentaryEn:"Enforces personal joint liability on corporate fiduciaries for ultra vires actions or gross negligence.",evidentiaryWeight:"high",category:"حوكمة الشركات ومسؤولية المديرين",tags:["حوكمة الشركات","مسؤولية المديرين","التضامن","حماية الشركاء"]}]},{id:"labor-law",nameAr:"نظام العمل السعودي",nameEn:"Saudi Labor Law & Amendments",royalDecreeAr:"مرسوم ملكي رقم (م/51) وتاريخ 1426/08/23هـ وتعديلاته الكبرى",royalDecreeEn:"Royal Decree No. M/51 dated 23/08/1426H and Major Amendments",yearHijri:"1426هـ",yearGregorian:"2005م",category:"أنظمة العمل والموارد البشرية",categoryEn:"Labor & Human Resources Laws",descriptionAr:"النظام الحاكم لعلاقات العمل التعاقدية، مكافأة نهاية الخدمة (م84)، التعويض عن الفصل غير المشروع (م77)، وحالات الإنهاء التأديبي (م80).",descriptionEn:"The core employment code regulating end of service gratuities (Art 84), unlawful termination damages (Art 77), and summary dismissals (Art 80).",articlesCount:245,articles:[{id:"lab-art-77",statuteId:"labor-law",articleNumber:77,titleAr:"التعويض عن إنهاء العقد لسبب غير مشروع (مادة 77)",titleEn:"Compensation for Termination without Valid Reason (Article 77)",textAr:"ما لم يتضمن العقد تعويضاً محدداً مقابل إنهائه من أحد الطرفين لسبب غير مشروع، يستحق الطرف المتضرر من إنهاء العقد تعويضاً على النحو الآتي: 1- أجر خمسة عشر يوماً عن كل سنة من سنوات خدمة العامل إذا كان العقد غير محدد المدة. 2- أجر المدة الباقية من العقد إذا كان العقد محدد المدة. ويجب ألا يقل التعويض المشار إليه في الفقرتين (1) و(2) من هذه المادة عن أجر العامل لمدة شهرين.",textEn:"Unless contract specifies predetermined compensation for unjustified termination, the harmed party is entitled to: 1) 15 days pay per service year for indefinite contracts; 2) Wages for the remaining term for fixed contracts. Minimum compensation cannot be less than 2 months wages.",commentaryAr:"أشهر مادة في النزاعات العمالية؛ وضعت حداً أدنى إجبارياً للتعويض (أجر شهرين) ويحسب الأجر على أساس الأجر الفعلي الشامل للبدلات.",commentaryEn:"Foundational provision in Saudi labor litigation establishing a mandatory floor of 2 months full wage compensation.",evidentiaryWeight:"conclusive",category:"إنهاء علاقة العمل والتعويضات",tags:["المادة 77","فصل تعسفي","تعويض العامل","عقد محدد وغير محدد"],precedents:[{id:"prec-lab-1",judgmentNumber:"44299101",yearHijri:"1445",court:"المحكمة العمالية بجدة - دائرة الاستئناف",courtEn:"Labor Court of Appeal - Jeddah",principleAr:"احتساب تعويض المادة 77 يكون بالاستناد إلى الأجر الفعلي الأخير الشامل لكافة البدلات الثابتة وليس الأساسي فقط.",principleEn:"Article 77 compensation must be calculated using the final gross comprehensive wage including all standard allowances.",summaryAr:"تأييد حكم بتعويض مهندس بمبلغ 180,000 ريال عن الإنهاء غير المشروع مع احتساب بدل السكن والمواصلات.",summaryEn:"Affirming award of 180,000 SAR for unlawful termination factoring housing and transport allowances."}]},{id:"lab-art-84",statuteId:"labor-law",articleNumber:84,titleAr:"مكافأة نهاية الخدمة (مادة 84)",titleEn:"End of Service Gratuity (Article 84)",textAr:"إذا انتهت علاقة العمل وجب على صاحب العمل أن يدفع إلى العامل مكافأة عن مدة خدمته تحسب على أساس أجر نصف شهر عن كل سنة من السنوات الخمس الأولى، وأجر شهر عن كل سنة من السنوات التالية، ويتخذ الأجر الأخير أساساً لحساب المكافأة، ويستحق العامل مكافأة عن أجزاء السنة بنسبة ما قضاه منها في العمل.",textEn:"Upon termination of employment, employer must pay end-of-service gratuity calculated as half a month wage for each of the first five years, and a full month wage for each subsequent year, based on the last wage paid.",commentaryAr:"حق جوهري أصيل للعامل، تحسب المكافأة على الأجر الأخير الشامل (أساسي + بدلات مستمرة).",commentaryEn:"A mandatory statutory entitlement computed upon the final comprehensive gross remuneration.",evidentiaryWeight:"conclusive",category:"مكافأة نهاية الخدمة",tags:["مكافأة نهاية الخدمة","المادة 84","حساب المستحقات"]},{id:"lab-art-80",statuteId:"labor-law",articleNumber:80,titleAr:"حالات الفصل التأديبي دون مكافأة أو إشعار (مادة 80)",titleEn:"Summary Dismissal without Notice or Gratuity (Article 80)",textAr:"لا يجوز لصاحب العمل فسخ العقد دون مكافأة أو إشعار أو تعويض إلا في حالات حصرية محددة، منها: الاعتداء على صاحب العمل أو رؤسائه، عدم أداء الالتزامات الجوهرية، ارتكاب عمل مخل بالشرف، أو إفشاء الأسرار الصناعية والتجارية.",textEn:"Employer may not terminate without gratuity, notice, or compensation except in exclusive statutory grounds, including physical assault, willful breach of core obligations, moral turpitude, or disclosure of trade secrets.",commentaryAr:"عبء الإثبات في المادة 80 يقع بالكامل على عاتق صاحب العمل وفق إجراءات التحقيق الخطي والإنذار المسبق.",commentaryEn:"Burden of proof rests strictly upon the employer requiring formal written investigation and prior warnings.",evidentiaryWeight:"high",category:"الفسخ التأديبي",tags:["المادة 80","فصل العامل","إفشاء الأسرار","عبء الإثبات"]}]},{id:"personal-status",nameAr:"نظام الأحوال الشخصية",nameEn:"Personal Status Law",royalDecreeAr:"مرسوم ملكي رقم (م/73) وتاريخ 1443/08/06هـ",royalDecreeEn:"Royal Decree No. M/73 dated 06/08/1443H",yearHijri:"1443هـ",yearGregorian:"2022م",category:"أنظمة الأسرة والتركات والفرائض",categoryEn:"Family & Estate Distribution Laws",descriptionAr:"النظام المقنن لقضايا الأسرة، الوصية، وتوزيع التركات والمواريث وفقاً للأصول الفقهية وقواعد الفرائض وحجب الحرمان والنقصان.",descriptionEn:"The comprehensive statutory code regulating family affairs, bequests, and estate inheritance shares under codified Islamic jurisprudence.",articlesCount:252,articles:[{id:"pers-art-201",statuteId:"personal-status",articleNumber:201,titleAr:"ترتيب الحقوق المتعلقة بالتركة",titleEn:"Priority Order of Estate Liabilities & Distribution",textAr:"تؤدى من التركة بحسب الترتيب الآتي: أولاً: مؤن تجهيز المتوفى بالمعروف. ثانياً: ديون المتوفى العينية المتعلقة بأعيان التركة. ثالثاً: ديون المتوفى المرسلة في ذمته. رابعاً: الوصية بما لا يجاوز ثلث ما تبقى من التركة. خامساً: الميراث المستحق للورثة.",textEn:"Estate claims are settled in strict order: 1) Reasonable funeral expenses; 2) Secured debts tied to specific assets; 3) Unsecured debts in personam; 4) Valid bequests up to one-third of remaining estate; 5) Residual inheritance to heirs.",commentaryAr:"قاعدة فقهية ونظامية ذهبية: لا تركة إلا بعد سداد الديون وتنفيذ الوصايا المشروعة في حدود الثلث.",commentaryEn:"Inflexible statutory hierarchy ensuring debts and valid testamentary bequests precede heir distributions.",evidentiaryWeight:"conclusive",category:"التركات والديون",tags:["تصفية التركات","الديون","الوصية","الثلث الشرعي"]}]},{id:"code-of-law-practice",nameAr:"نظام المحاماة ولائحته التنفيذية",nameEn:"Code of Law Practice",royalDecreeAr:"مرسوم ملكي رقم (م/38) وتاريخ 1422/10/28هـ ولائحته",royalDecreeEn:"Royal Decree No. M/38 dated 28/10/1422H",yearHijri:"1422هـ",yearGregorian:"2001م",category:"الأنظمة المهنية والعدلية",categoryEn:"Judicial & Evidentiary Codes",descriptionAr:"النظام المنظم لمزاولة مهنة المحاماة، واجبات المحامي، أتعاب المحاماة، وحصانة الدفاع وأخلاقيات الترافع أمام المحاكم وهيئة المحامين.",descriptionEn:"Professional code governing legal practice, advocate ethical duties, attorney retainer agreements, defense immunity, and bar standards.",articlesCount:44,articles:[{id:"law-art-26",statuteId:"code-of-law-practice",articleNumber:26,titleAr:"تحديد أتعاب المحاماة والنزاع حولها",titleEn:"Determination of Legal Fees and Retainer Disputes",textAr:"تحدد أتعاب المحامي وطريقة دفعها باتفاق يعقده مع موكله، فإذا لم يكن هناك اتفاق مكتوب، أو كان الاتفاق محل خلاف، تولت المحكمة التي نظرت الدعوى تقديرها عند الخلاف، مستأنسة برأي هيئة الخبراء أو الهيئة السعودية للمحامين وفق الجهد المبذول والنفع العائد.",textEn:"Attorney fees and payment terms are determined by agreement with the client. Absent a written agreement, the adjudicating court assesses quantum meruit fees considering legal effort and achieved benefit.",commentaryAr:"أهمية توثيق عقد أتعاب محاماة نموذجي لتفادي الخلاف القضائي وتقدير الأتعاب بالنظر إلى النفع المحقق للموكل.",commentaryEn:"Underlines the critical necessity of standardized written retainer agreements to safeguard attorney compensation.",evidentiaryWeight:"high",category:"أتعاب المحاماة",tags:["عقد الأتعاب","هيئة المحامين","تقدير المحكمة"]}]},{id:"judicial-costs",nameAr:"نظام تكاليف الدعاوى القضائية",nameEn:"Law of Judicial Costs",royalDecreeAr:"مرسوم ملكي رقم (م/16) وتاريخ 1443/01/30هـ",royalDecreeEn:"Royal Decree No. M/16 dated 30/01/1443H",yearHijri:"1443هـ",yearGregorian:"2021م",category:"الأنظمة القضائية والإجرائية",categoryEn:"Judicial & Evidentiary Codes",descriptionAr:"النظام المحدد لرسوم التقاضي (5% بحد أقصى مليون ريال)، تكاليف الاستئناف، طلبات التماس إعادة النظر، وحالات الإعفاء النظامي.",descriptionEn:"Statutory fees regime imposing up to 5% litigation tariffs (capped at 1,000,000 SAR), appellate fees, and public welfare exemptions.",articlesCount:19,articles:[{id:"cost-art-3",statuteId:"judicial-costs",articleNumber:3,titleAr:"نسبة التكاليف القضائية والحد الأعلى",titleEn:"Statutory Fee Percentage and Cap Threshold (5% / 1M SAR)",textAr:"تفرض على الدعاوى القضائية تكاليف بما لا يزيد على نسبة (5%) من قيمة المطالبة، وبحد أقصى قدره (مليون ريال). وتحدد اللائحة معايير تقدير التكاليف بحسب نوع الدعوى ومبلغها وقيمة الطلبات العارضة.",textEn:"Judicial costs are levied at a rate not exceeding 5% of the claimed sum, capped at a maximum of 1,000,000 SAR, as detailed in the executive regulations.",commentaryAr:"الهدف من النظام هو الحد من الدعاوى الكيدية وتشجيع التسويات الودية والوساطة والتحكيم قبل اللجوء للمحاكم.",commentaryEn:"Designed to deter vexatious litigation and foster commercial arbitration and alternative dispute resolution.",evidentiaryWeight:"conclusive",category:"الرسوم القضائية",tags:["تكاليف الدعاوى","نسبة الـ 5%","مليون ريال","الدعاوى الكيدية"]},{id:"cost-art-17",statuteId:"judicial-costs",articleNumber:17,titleAr:"حالات الإعفاء من التكاليف القضائية",titleEn:"Statutory Exemptions from Court Filing Fees",textAr:"يُعفى من التكاليف القضائية: 1- الدعاوى الجزائية العامة والطلبات المتعلقة بها. 2- الدعاوى والطلبات التي يختص بها قضاء الأحوال الشخصية، باستثناء طلب النقض والتماس إعادة النظر. 3- الدعاوى والطلبات التي يختص بها قضاء ديوان المظالم. 4- دعاوى العمال الخاضعين لنظام العمل ومستحقيهم.",textEn:"Exempted from judicial costs are: 1) Public criminal proceedings; 2) Personal status family matters (excluding cassation and reconsideration); 3) Administrative claims before the Board of Grievances; 4) Claims filed by laborers covered under the Labor Law.",commentaryAr:"مراعاة الاعتبارات الإنسانية والاجتماعية وحماية العمال في تحصيل أجورهم وحقوقهم دون عوائق مالية.",commentaryEn:"Ensures equitable access to justice by insulating workers and personal status litigants from prohibitive fees.",evidentiaryWeight:"conclusive",category:"الإعفاءات القضائية",tags:["إعفاء التكاليف","الدعاوى العمالية","الأحوال الشخصية","ديوان المظالم"]}]}];class U{constructor(e){u(this,"selectedStatuteId","all");u(this,"searchQuery","");u(this,"bookmarkedArticleIds",new Set);u(this,"onInspectArticle");this.onInspectArticle=e;try{const t=localStorage.getItem("bayyina_bookmarks");t&&(this.bookmarkedArticleIds=new Set(JSON.parse(t)))}catch{}}toggleBookmark(e){this.bookmarkedArticleIds.has(e)?this.bookmarkedArticleIds.delete(e):(this.bookmarkedArticleIds.add(e),E.playChime());try{localStorage.setItem("bayyina_bookmarks",JSON.stringify(Array.from(this.bookmarkedArticleIds)))}catch{}}render(e){const t=v.lang==="ar";let i=R;this.selectedStatuteId!=="all"&&(i=R.filter(n=>n.id===this.selectedStatuteId));const a=this.searchQuery.trim().toLowerCase();e.innerHTML=`
      <div class="codex-wrapper fade-in">
        <!-- Search & Filter Controls -->
        <div class="codex-header-card">
          <div class="search-box-row">
            <div class="search-input-wrapper">
              <span class="search-icon">🔍</span>
              <input 
                type="text" 
                id="codex-search-input" 
                class="codex-search-input" 
                placeholder="${v.t.searchPlaceholder}"
                value="${this.searchQuery}"
              />
              ${this.searchQuery?'<button id="clear-search-btn" class="clear-btn">✕</button>':""}
            </div>
          </div>

          <!-- Statute Filter Pills -->
          <div class="statute-pills-row">
            <button class="pill-btn ${this.selectedStatuteId==="all"?"active":""}" data-statute="all">
              ${t?"كافة الأنظمة المعتمدة":"All Codified Statutes"}
              <span class="badge">${R.length}</span>
            </button>
            ${R.map(n=>`
              <button class="pill-btn ${this.selectedStatuteId===n.id?"active":""}" data-statute="${n.id}">
                ${t?n.nameAr:n.nameEn}
                <span class="badge">${n.articles.length}</span>
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Statutes & Articles Grid -->
        <div class="statutes-results-container">
          ${i.map(n=>{const r=n.articles.filter(o=>a?o.titleAr.toLowerCase().includes(a)||o.titleEn.toLowerCase().includes(a)||o.textAr.toLowerCase().includes(a)||o.textEn.toLowerCase().includes(a)||o.commentaryAr.toLowerCase().includes(a)||o.tags.some(c=>c.toLowerCase().includes(a))||o.articleNumber.toString()===a||n.royalDecreeAr.toLowerCase().includes(a):!0);return r.length===0&&a?"":`
              <div class="statute-section-card">
                <div class="statute-banner">
                  <div class="statute-meta">
                    <span class="decree-tag">📜 ${t?n.royalDecreeAr:n.royalDecreeEn}</span>
                    <span class="year-tag">📅 ${n.yearHijri} (${n.yearGregorian})</span>
                    <span class="cat-tag">🏛️ ${t?n.category:n.categoryEn}</span>
                  </div>
                  <h3 class="statute-title">${t?n.nameAr:n.nameEn}</h3>
                  <p class="statute-desc">${t?n.descriptionAr:n.descriptionEn}</p>
                </div>

                <div class="articles-grid">
                  ${r.map(o=>{const c=this.bookmarkedArticleIds.has(o.id),m={conclusive:{bg:"#dcfce7",text:"#15803d",labelAr:"حجية قاطعة ملزمة",labelEn:"Conclusive Force"},high:{bg:"#e0f2fe",text:"#0369a1",labelAr:"قوة إثبات راجحة",labelEn:"High Probative"},medium:{bg:"#fef3c7",text:"#b45309",labelAr:"بينة استئناسية",labelEn:"Corroborative"},circumstantial:{bg:"#f1f5f9",text:"#475569",labelAr:"قرينة قضائية",labelEn:"Circumstantial"}},p=m[o.evidentiaryWeight]||m.high;return`
                      <div class="article-card" data-article-id="${o.id}">
                        <div class="article-top-row">
                          <span class="article-num-badge">
                            ${t?`المادة (${o.articleNumber})`:`Article (${o.articleNumber})`}
                          </span>
                          <div class="article-actions">
                            <span class="weight-badge" style="background: ${p.bg}; color: ${p.text};">
                              ${t?p.labelAr:p.labelEn}
                            </span>
                            <button class="bookmark-btn ${c?"active":""}" data-bookmark-id="${o.id}" title="${t?"حفظ المادة":"Bookmark Article"}">
                              ${c?"★":"☆"}
                            </button>
                          </div>
                        </div>

                        <h4 class="article-heading">${t?o.titleAr:o.titleEn}</h4>
                        <div class="article-text-preview">
                          ${t?o.textAr:o.textEn}
                        </div>

                        <div class="article-tags-row">
                          ${o.tags.slice(0,3).map(d=>`<span class="tag-pill">#${d}</span>`).join("")}
                        </div>

                        <div class="article-card-footer">
                          ${o.precedents&&o.precedents.length>0?`
                            <span class="precedents-indicator">
                              ⚖️ ${o.precedents.length} ${t?"مبدأ قضائي مرتبط":"Precedent Linked"}
                            </span>
                          `:"<span></span>"}
                          <button class="inspect-btn" data-art-id="${o.id}" data-statute-id="${n.id}">
                            ${v.t.viewDetails} →
                          </button>
                        </div>
                      </div>
                    `}).join("")}
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `,this.attachEvents(e)}attachEvents(e){const t=e.querySelector("#codex-search-input");t&&t.addEventListener("input",a=>{this.searchQuery=a.target.value,this.render(e);const n=e.querySelector("#codex-search-input");n&&(n.focus(),n.setSelectionRange(n.value.length,n.value.length))});const i=e.querySelector("#clear-search-btn");i&&i.addEventListener("click",()=>{this.searchQuery="",this.render(e)}),e.querySelectorAll(".pill-btn").forEach(a=>{a.addEventListener("click",()=>{E.playChime(),this.selectedStatuteId=a.getAttribute("data-statute")||"all",this.render(e)})}),e.querySelectorAll(".bookmark-btn").forEach(a=>{a.addEventListener("click",n=>{n.stopPropagation();const r=a.getAttribute("data-bookmark-id");r&&(this.toggleBookmark(r),this.render(e))})}),e.querySelectorAll(".inspect-btn").forEach(a=>{a.addEventListener("click",()=>{E.playChime();const n=a.getAttribute("data-art-id"),r=a.getAttribute("data-statute-id"),o=R.find(c=>c.id===r);if(o){const c=o.articles.find(m=>m.id===n);c&&this.onInspectArticle(c,o)}})})}}const q=[{id:"case-tech-commercial",titleAr:"نزاع تجاري: إخلال بعقد توريد وتطوير برمجيات سحابية بين شركتين",titleEn:"Commercial Dispute: Breach of Cloud Enterprise Software Supply Contract",caseNumber:"451082914",courtTier:"commercial_first",courtNameAr:"المحكمة التجارية بالرياض - الدائرة التجارية السابعة",courtNameEn:"Commercial Court in Riyadh - Seventh Circuit",circuitAr:"الدائرة التجارية السابعة (ثلاثية)",circuitEn:"7th Commercial Circuit (Three Judges)",claimValueSar:185e4,filingDateHijri:"1445/03/15هـ",plaintiffAr:"شركة التقنية المتقدمة للحلول الرقمية ذ.م.م",plaintiffEn:"Advanced Tech Digital Solutions LLC",defendantAr:"شركة سلاسل الإمداد اللوجستية ش.م.م",defendantEn:"Logistics Supply Chain Closed JSC",legalSubjectAr:"المطالبة بباقي قيمة العقد وغرامة التأخير التعاقدية والتعويض عن الإخلال",legalSubjectEn:"Claim for Outstanding Contract Balance, Liquidated Damages & Breach",factsSummaryAr:"أبرم الطرفان عقداً لتطوير ونشر منصة ERP سحابية متكاملة بقيمة 3.5 مليون ريال. قامت المدعية بإنجاز المرحلة الأولى والثانية وتسليمها وفق محاضر فحص رقمية، إلا أن المدعى عليها امتنعت عن سداد الدفعة النهائية البالغة 1.85 مليون ريال دون مسوغ نظامي.",factsSummaryEn:"The parties executed a 3.5M SAR contract for cloud ERP implementation. Plaintiff completed Phases 1 & 2 verified by digital user acceptance logs. Defendant refused to pay the final 1.85M SAR milestone without statutory cause.",governingLawsAr:["نظام المعاملات المدنية (م/191) - المواد (94، 138، 178)","نظام الإثبات (م/43) - المواد (53، 54)","نظام المحاكم التجارية ولائحته التنفيذية"],governingLawsEn:["Civil Transactions Law (M/191) - Arts (94, 138, 178)","Law of Evidence (M/43) - Arts (53, 54)","Commercial Courts Law and Regulations"],currentStageNumber:3,stages:[{stageNumber:1,id:"stage-filing",nameAr:"قيد الدعوى وصياغة اللائحة عبر ناجز",nameEn:"Claim Filing & Verification via Najiz",descriptionAr:"قيد صحيفة الدعوى إلكترونياً، سداد التكاليف القضائية الأولية، واستيفاء شرط الإخطار التجاري المسبق (15 يوماً).",descriptionEn:"Electronic filing of statement of claim, initial judicial fee assessment, and fulfillment of the mandatory 15-day pre-litigation commercial notice.",status:"completed",proceduralDeadlineDays:15,deadlineWarningAr:"تم التحقق من توجيه الإخطار التجاري ومضي 15 يوماً دون تسوية.",deadlineWarningEn:"Commercial pre-action notice verified with 15 days elapsed without settlement.",requiredActionsAr:["إرفاق السجل التجاري والوكالة الشرعية الموثقة","إرفاق إشعار التنبيه التجاري المسبق عبر البريد المسجل / الوطني","تحديد الطلبات الجازمة وحصر قيمة المطالبة بدقة"],requiredActionsEn:["Attach commercial register & verified power of attorney","Attach 15-day pre-action commercial notice via National Address","Specify definitive relief and exact claim quantification"],judicialOutcomeAr:"تم قبول صحيفة الدعوى شكلاً وقيدها برقم (451082914) وإحالتها للدائرة السابعة.",judicialOutcomeEn:"Statement of claim formally admitted, registered under No. 451082914, assigned to 7th Circuit."},{stageNumber:2,id:"stage-memos",nameAr:"تبادل المذكرات والدفوع الشكلية والموضوعية",nameEn:"Pleadings & Defense Memorandum Exchange",descriptionAr:"تبادل المذكرات الكتابية عبر بوابة التقاضي الإلكتروني، ودفع المدعى عليها بعدم استكمال المعايير الفنية.",descriptionEn:"Written submissions via judicial portal. Defendant submitted preliminary defense alleging non-conformity with technical specifications.",status:"completed",proceduralDeadlineDays:20,requiredActionsAr:["إيداع المذكرة الجوابية للمدعى عليها خلال 10 أيام عمل","تقديم مذكرة الرد والتعقيب من وكيل المدعية مع دحض الدفوع الفنية"],requiredActionsEn:["Defendant statement of defense within 10 judicial days","Claimant reply brief rebutting technical non-conformity defenses"],judicialOutcomeAr:"قفل باب تبادل المذكرات بعد استيفاء لائحتي الجواب والرد وحصر نقاط النزاع الفنية.",judicialOutcomeEn:"Pleading exchange closed upon submission of defense & rejoinder, narrowing issues to technical acceptance."},{stageNumber:3,id:"stage-hearing",nameAr:"إدارة الجلسة القضائية المرئية وضبط المحضر",nameEn:"Virtual Hearing & Judicial Session Minutes",descriptionAr:"انعقاد الجلسة الأولى عن بُعد عبر منصة التقاضي الإلكتروني التابعة لوزارة العدل، ومواجهة الأطراف بالأدلة الرقمية.",descriptionEn:"Remote judicial hearing convened on Ministry of Justice virtual platform; confrontational examination of digital logs.",status:"in_progress",proceduralDeadlineDays:14,minutes:[{sessionNumber:1,dateHijri:"1445/04/10هـ",dateGregorian:"2023/10/25م",judgeName:"فضيلة القاضي رئيس الدائرة التجارية",circuitName:"الدائرة التجارية السابعة بالرياض",remarksAr:"حضر وكيل المدعية المحامي المرخص، وحضر وكيل المدعى عليها. سألت الدائرة وكيل المدعى عليها عن استلام وتشغيل المنصة السحابية فأقر بتشغيلها التجريبي لكنه تمسك بوجود بطء في معالجة العمليات.",remarksEn:"Claimant attorney and Defense counsel present. Bench questioned defense on platform deployment; defense admitted live deployment but alleged transaction latency.",transcriptAr:`القاضي: هل لديكم ما يثبت إشعار المدعية بوجود خلل جسيم خلال فترة الفحص؟
وكيل المدعى عليها: لم نوجه خطاباً رسمياً لكن هناك رسائل شفهية.
وكيل المدعية: نبرز لفضيلتكم تقارير قبول الاستخدام الموقعة إلكترونياً (UAT Sign-off) ورسائل البريد الرسمي التي تثبت الاعتماد.`,transcriptEn:`Judge: Do you possess evidence of written defect notification during warranty?
Defense: No formal deed, but oral notices.
Claimant Counsel: We submit digitally signed UAT certificates and enterprise email confirmations.`}],evidences:[{id:"ev-1",type:"digital",titleAr:"سجلات اعتماد فحص النظام والتوقيع الرقمي (UAT)",titleEn:"Digital User Acceptance Testing (UAT) Sign-Off Records",sourceAr:"منظومة إدارة المشروعات وقواعد بيانات النظام المعتمد",sourceEn:"Enterprise Jira/Azure DevOps authenticated audit trails",probativeValue:92,legalBasisAr:"المادة (53) من نظام الإثبات (حجية الدليل الرقمي في الإثبات)",legalBasisEn:"Article 53 of the Law of Evidence (Full probative force of digital records)",status:"conclusive",descriptionAr:"محاضر تسليم موقعة بالأختام الرقمية من المدير التقني للمدعى عليها تفيد قبول بيئة الإنتاج.",descriptionEn:"Digital logs confirmed by Defendant CTO verifying functional release."},{id:"ev-2",type:"ordinary_paper",titleAr:"عقد التوريد والترخيص والاشتراك السحابي",titleEn:"Master Cloud Software & Licensing Agreement",sourceAr:"محرر عادي موقع بين الطرفين ومختوم بالسجلات التجارية",sourceEn:"Executed contract bearing corporate stamps",probativeValue:95,legalBasisAr:"المادة (29) من نظام الإثبات والمادة (94) من المعاملات المدنية",legalBasisEn:"Article 29 Law of Evidence & Article 94 Civil Transactions",status:"conclusive",descriptionAr:"ينص العقد صراحة في البند (12) على التزام العميل بسداد الدفعة خلال 15 يوماً من توقيع محضر الاستلام.",descriptionEn:"Clause 12 mandates payment within 15 days of stage delivery approval."}],requiredActionsAr:["توجيه اليمين المتممة أو تكليف خبير تقني معتمد عبر منصة خبرة","تقديم مذكرة حصر الطلبات الختامية ومصاريف التقاضي"],requiredActionsEn:["Order specialized technical assessment via Khebrah Platform or supplementary oath","File closing statement with claim for litigation costs and legal fees"]},{stageNumber:4,id:"stage-expert",nameAr:"تدقيق البينات وندب خبرة المحكمة (منصة خبرة)",nameEn:"Evidentiary Assessment & Expert Khebrah Report",descriptionAr:"إحالة الملف إلى خبير تقني معتمد عبر منصة (خبرة) لفحص سلامة الكود المصدري وفاعلية الربط التقني.",descriptionEn:"Referral to a certified IT forensic expert via Khebrah to examine code integrity and deployment benchmark.",status:"upcoming",proceduralDeadlineDays:30,requiredActionsAr:["سداد أمانة الخبير القضائي في الموعد المحدد","تمكين الخبير من معاينة الخوادم واختبارات الأداء الفعلي"],requiredActionsEn:["Deposit expert fee trust within statutory window","Provide expert full access to cloud infrastructure for benchmark audits"],judicialOutcomeAr:"تقرير الخبير المعتمد انتهى إلى سلامة المنصة واستحقاق كامل قيمة الدفعة مع حسم 3% كأعطال طفيفة.",judicialOutcomeEn:"Expert concluded platform fully compliant, recommending 97% payment with minor 3% adjustment."},{stageNumber:5,id:"stage-judgment",nameAr:"صدور صك الحكم ومسبباته القضائية",nameEn:"Pronouncement of Judgment & Judicial Reasoning",descriptionAr:"النطق بالحكم وإيداع صك الحكم الإلكتروني المتضمن الأسباب النظامية ومنطوق الإلزام والمصاريف.",descriptionEn:"Pronouncement and digital registry of executable judgment deed detailing factual findings and statutory rationale.",status:"upcoming",judgmentText:"حكمت الدائرة بإلزام المدعى عليها بأن تدفع للمدعية مبلغاً قدره (1,794,500) ريال سعودي، بالإضافة إلى مبلغ (75,000) ريال أتعاب محاماة وتكاليف قضائية، ورد ما عدا ذلك من طلبات.",judicialOutcomeAr:"إلزام المدعى عليها بمبلغ 1,794,500 ريال و75,000 ريال أتعاب محاماة استناداً للمادتين 94 من المعاملات المدنية و53 من الإثبات.",judicialOutcomeEn:"Defendant ordered to pay 1,794,500 SAR plus 75,000 SAR legal costs under Art 94 Civil Transactions & Art 53 Evidence."},{stageNumber:6,id:"stage-enforcement",nameAr:"الاعتراض بالاستئناف وقضاء التنفيذ",nameEn:"Appellate Review & Enforcement Execution",descriptionAr:"قيد طلب الاستئناف خلال المهلة (30 يوماً)، تأييد الحكم، ثم التقدم لمحكمة التنفيذ لفرض المادة 46.",descriptionEn:"30-day appellate review window, appellate affirmation, and enforcement execution under Article 46.",status:"upcoming",proceduralDeadlineDays:30,deadlineWarningAr:"مهلة الاستئناف النظامية 30 يوماً من تاريخ تبليغ صك الحكم.",deadlineWarningEn:"Mandatory 30-day appeal countdown starting day following electronic delivery.",requiredActionsAr:["متابعة انقضاء مهلة الـ 30 يوماً لاكتساب الحكم القطعية","طلب ختم الصيغة التنفيذية عبر بوابة ناجز","تقديم طلب تنفيذ مالي لدى محكمة التنفيذ وإيقاع الحجز التنفيذي"],requiredActionsEn:["Track 30-day appeal countdown for res judicata status","Affix electronic executory formula via Najiz","Submit financial execution request to freeze accounts under Article 46"],judicialOutcomeAr:"اكتساب الحكم الصفة النهائية والتنفيذ الجبري لسداد كامل المبلغ عبر إشعار مصرفي.",judicialOutcomeEn:"Judgment attained finality; full payment recovered through bank enforcement attachment."}]},{id:"case-labor-77",titleAr:"مطالبة عمالية: فصل غير مشروع وفق المادة 77 ومستحقات متأخرة",titleEn:"Labor Claim: Unlawful Dismissal under Article 77 & Withheld Wages",caseNumber:"442194012",courtTier:"labor_first",courtNameAr:"المحكمة العمالية بجدة - الدائرة العمالية الثالثة",courtNameEn:"Labor Court in Jeddah - Third Labor Circuit",circuitAr:"الدائرة العمالية الثالثة (فردية)",circuitEn:"3rd Labor Circuit (Single Judge)",claimValueSar:264e3,filingDateHijri:"1445/05/18هـ",plaintiffAr:"المهندس / حسام بن منصور العتيبي (مدير مشاريع)",plaintiffEn:"Eng. Hossam Mansour Al-Otaibi (Project Manager)",defendantAr:"شركة الإنشاءات الهندسية الكبرى القابضة",defendantEn:"Major Engineering Construction Holding Co.",legalSubjectAr:"المطالبة بتعويض المادة 77، مكافأة نهاية الخدمة، وبدل رصيد الإجازات وفترة الإشعار",legalSubjectEn:"Claim for Article 77 Termination Compensation, EOS Gratuity, Vacation Balance & Notice Pay",factsSummaryAr:"عمل المدعي لدى الشركة بموجب عقد غير محدد المدة لمدة 6 سنوات و4 أشهر، براتب شهري شامل قدره 24,000 ريال (أساسي 16,000 + سكن 6,000 + مواصلات 2,000). قامت الشركة بفصله تعسفياً دون إنذار ودون إسناد لسبب مشروع أو تحقيق كتابي وفق المادة 80.",factsSummaryEn:"Plaintiff served 6 years and 4 months under an indefinite contract with gross monthly salary of 24,000 SAR. Employer terminated him summarily without written notice, justification, or Article 80 statutory disciplinary inquiry.",governingLawsAr:["نظام العمل السعودي - المادة 77 (التعويض عن الإنهاء غير المشروع)","نظام العمل السعودي - المادة 84 (مكافأة نهاية الخدمة)","نظام العمل السعودي - المادة 75 و76 (مهلة الإشعار)","نظام الإثبات - المادة 53"],governingLawsEn:["Saudi Labor Law - Article 77 (Compensation for Unjustified Termination)","Saudi Labor Law - Article 84 (End-of-Service Gratuity)","Saudi Labor Law - Articles 75 & 76 (Notice Period)","Law of Evidence - Article 53"],currentStageNumber:2,stages:[{stageNumber:1,id:"stage-filing",nameAr:"جلسة التسوية الودية (منصة ودي) وقيد الدعوى",nameEn:"Waddi Amicable Settlement & Case Registration",descriptionAr:"المرور الإلزامي عبر منصة (ودي) بوزارة الموارد البشرية لمدة 21 يوماً لتعذر الصلح ثم إحالة الملف للمحكمة العمالية.",descriptionEn:"Mandatory 21-day conciliation process via Waddi Portal; upon impasse, case referred to Labor Court without fees.",status:"completed",proceduralDeadlineDays:21,deadlineWarningAr:"تم صدور محضر تعذر الصلح بعد انقضاء 21 يوماً من التقدم.",deadlineWarningEn:"Impasse report formally issued following expiry of 21-day mediation window.",requiredActionsAr:["حضور جلسات الصلح عن بُعد في منصة ودي","استخراج محضر تعذر الصلح الإلكتروني وتضمينه في صحيفة الدعوى"],requiredActionsEn:["Attend virtual mediation hearings on Waddi platform","Export digital Impasse Report and integrate into statement of claim"],judicialOutcomeAr:"قيد الدعوى رسمياً بالمحكمة العمالية وإعفاء العامل من التكاليف القضائية بنص المادة (17) من نظام التكاليف.",judicialOutcomeEn:"Labor claim formally docketed; worker granted total exemption from court fees under Art 17."},{stageNumber:2,id:"stage-memos",nameAr:"تبادل المذكرات ودفوع الفصل التأديبي",nameEn:"Memoranda Exchange & Article 80 Challenge",descriptionAr:"ادعت الشركة فصل العامل لتقصيره، بينما دفع العامل ببطلان الفصل لعدم وجود تحقيق مكتوب أو إنذار رسمي مسبق.",descriptionEn:"Company alleged dismissal for underperformance; employee countered asserting nullity due to lack of written investigation.",status:"in_progress",proceduralDeadlineDays:10,requiredActionsAr:["تقديم الشركة لمحاضر التحقيق الإداري إن وجدت","تقديم كشف حساب مصرفي يوضح مسيرات الرواتب والبدلات الأخيرة"],requiredActionsEn:["Employer to produce statutory written investigation files","Employee to submit certified wage protection bank statements"],evidences:[{id:"ev-l1",type:"digital",titleAr:"سجلات منصة قوى (Qiwa) وعقد العمل الموثق",titleEn:"Authenticated Qiwa Platform Employment Contract",sourceAr:"وزارة الموارد البشرية والتنمية الاجتماعية - منصة قوى",sourceEn:"Qiwa Digital Portal Registry",probativeValue:98,legalBasisAr:"المادة (53) من نظام الإثبات",legalBasisEn:"Article 53 Law of Evidence",status:"conclusive",descriptionAr:"يثبت العقد الموثق أن تاريخ البداية 2017م والراتب الشامل 24,000 ريال دون أي انقطاع.",descriptionEn:"Conclusively certifies continuous service since 2017 with 24k SAR gross salary."},{id:"ev-l2",type:"digital",titleAr:"خطاب إنهاء الخدمات عبر البريد الإلكتروني دون تسبيب",titleEn:"Digital Termination Letter without Statutory Cause",sourceAr:"البريد الإلكتروني الرسمي لقسم الموارد البشرية",sourceEn:"Enterprise HR corporate email correspondence",probativeValue:95,legalBasisAr:"المادة (53) إثبات والمادة (77) عمل",legalBasisEn:"Article 53 Evidence & Article 77 Labor",status:"conclusive",descriptionAr:'خطاب يفيد الاستغناء عن خدمات المدعي فوراً لـ "إعادة الهيكلة" وهو ما لا يعد سبباً مشروعاً يعفي من التعويض.',descriptionEn:"Restructuring letter lacking statutory cause under Article 80."}]},{stageNumber:3,id:"stage-hearing",nameAr:"جلسة المرافعة والتحقق من حساب الأجر الفعلي",nameEn:"Pleading Session & Gross Salary Verification",descriptionAr:"استجواب الطرفين حول بدلات السكن والمواصلات وتطبيق نص المادة (77) على الأجر الشامل.",descriptionEn:"Interrogation on wage components and calculating Article 77 upon comprehensive salary.",status:"upcoming",proceduralDeadlineDays:14,requiredActionsAr:["تثبيت عناصر الأجر الشامل في ضبط الجلسة القضائية"],requiredActionsEn:["Record all salary allowances into official session minutes"]},{stageNumber:4,id:"stage-expert",nameAr:"مراجعة خبير الحسابات وتدقيق رصيد الإجازات",nameEn:"Accounting Audit & Unused Vacation Verification",descriptionAr:"حساب رصيد الإجازات المستحق لـ 45 يوماً ومكافأة نهاية الخدمة وفق المادة 84 بدقة تامة.",descriptionEn:"Exact calculation of 45 unused vacation days and statutory gratuity under Article 84.",status:"upcoming"},{stageNumber:5,id:"stage-judgment",nameAr:"النطق بالحكم وإلزام الشركة بالتعويض",nameEn:"Judgment & Statutory Entitlements Award",descriptionAr:"الحكم للعامل بمبلغ 76,000 ريال تعويض مادة 77 + 92,000 ريال نهاية خدمة + 36,000 ريال رصيد إجازات + 24,000 ريال إشعار.",descriptionEn:"Awarding 76k SAR Art 77 damages, 92k SAR gratuity, 36k SAR leave pay, and 24k SAR notice pay.",status:"upcoming"},{stageNumber:6,id:"stage-enforcement",nameAr:"التنفيذ الفوري المباشر عبر محكمة التنفيذ",nameEn:"Expedited Enforcement via Najiz Execution Court",descriptionAr:"الأحكام العمالية مشمولة بالنفاذ المعجل في الأجور؛ إيداع سند التنفيذ وتجميد الحسابات وسداد المستحقات.",descriptionEn:"Labor wage awards carry expedited provisional execution; bank attachment and direct transfer.",status:"upcoming"}]},{id:"case-real-estate",titleAr:"نزاع عقاري: إثبات ملكية ونقض تصرف استناداً للمحررات الرسمية وسجل العيني",titleEn:"Real Estate Dispute: Title Rectification & Deed Annulment based on Official Notarized Registry",caseNumber:"441992105",courtTier:"general_first",courtNameAr:"المحكمة العامة بالرياض - الدائرة العقارية الأولى",courtNameEn:"General Court in Riyadh - First Real Estate Circuit",circuitAr:"الدائرة العقارية الأولى (ثلاثية)",circuitEn:"1st Real Estate Circuit (Three Judges)",claimValueSar:42e5,filingDateHijri:"1445/02/10هـ",plaintiffAr:"ورثة الشيخ / عبدالرحمن بن عبدالعزيز آل سعود (وكالة شرعية)",plaintiffEn:"Heirs of Sheikh Abdulrahman Al-Saud (Power of Attorney)",defendantAr:"مؤسسة التطوير العمراني والأراضي الفضاء",defendantEn:"Urban Real Estate Land Development Est.",legalSubjectAr:"المطالبة بإلغاء تداخل صكوك وإثبات حجية الصك الإلكتروني المفرغ وتطهير الملكية",legalSubjectEn:"Action to Expunge Overlapping Title & Affirm Conclusive Force of Notarized Deed",factsSummaryAr:"يمتلك المدعون قطعة أرض بموجب صك إلكتروني رسمي صادر من كتابة العدل مسجل في السجل العقاري العيني. فوجئ المدعون بقيام المدعى عليها بإقامة شباك ومحاولة تسوير الأرض مدعية شراءها بصك عادي غير موثق صادر قبل 30 عاماً.",factsSummaryEn:"Plaintiffs own a parcel under official electronic deed registered with the In-Kind Real Estate Registry. Defendant erected fences claiming title via an unnotarized 30-year-old customary deed.",governingLawsAr:["نظام الإثبات (م/43) - المادة 25 (حجية المحررات الرسمية)","نظام التسجيل العيني للعقار ولائحته التنفيذية","نظام المعاملات المدنية - حماية الملكية العقارية"],governingLawsEn:["Law of Evidence (M/43) - Article 25 (Conclusive weight of official deeds)","Real Estate In-Kind Registration Law","Civil Transactions Law - Property Rights Protection"],currentStageNumber:4,stages:[{stageNumber:1,id:"stage-filing",nameAr:"قيد الدعوى وتقديم المخطط المساحي المعتمد",nameEn:"Case Registration & Cadastral Survey Submission",descriptionAr:"قيد صحيفة الدعوى وربطها بالرقم المرجعي للصك الإلكتروني والهيئة العامة للعقار.",descriptionEn:"Case filing linked to official notary deed reference and General Real Estate Authority records.",status:"completed"},{stageNumber:2,id:"stage-memos",nameAr:"الدفع بحجية الصك الرسمي والطعن في الورقة العادية",nameEn:"Pleading Defense of Res Judicata & Challenging Customary Deed",descriptionAr:"تمسك وكيل المدعين بالمادة 25 من نظام الإثبات؛ المحرر الرسمي حجة على الكافة ولا يعارضه محرر عادي.",descriptionEn:"Asserting Article 25 Law of Evidence: official notarized deed is conclusive erga omnes over private papers.",status:"completed"},{stageNumber:3,id:"stage-hearing",nameAr:"جلسة التحقق وإشعار الهيئة العامة للعقار",nameEn:"Judicial Hearing & Verification with Real Estate Authority",descriptionAr:"مخاطبة الدائرة القضائية لكتابة العدل والسجل العقاري للإفادة عن صحة الصك وسريان مفعوله.",descriptionEn:"Judicial requisition dispatched to Notary Registry affirming title validity and unencumbered status.",status:"completed"},{stageNumber:4,id:"stage-expert",nameAr:"تقرير المسح الميداني ورفع الإحداثيات (منصة خبرة)",nameEn:"Field Cadastral Survey & Satellite GIS Verification",descriptionAr:"ندب مساح معتمد لإسقاط الصك المساحي على الطبيعة والتحقق من عدم وجود تداخل حدودي.",descriptionEn:"Designation of certified surveyor to cross-reference deed boundaries with satellite GIS coordinates.",status:"in_progress",proceduralDeadlineDays:20},{stageNumber:5,id:"stage-judgment",nameAr:"الحكم بتثبيت الملكية وإلزام المدعى عليها بإزالة التعديات",nameEn:"Judgment Affirming Unencumbered Title & Ordering Demolition",descriptionAr:"صدور حكم الدائرة بتثبيت ملكية المدعين وبطلان ادعاء المدعى عليها وأمرها بإزالة الشباك فوراً.",descriptionEn:"Court ruling confirming absolute ownership and mandating immediate removal of encroachments.",status:"upcoming"},{stageNumber:6,id:"stage-enforcement",nameAr:"تنفيذ تسليم العقار بالقوة الجبرية بمحكمة التنفيذ",nameEn:"Execution & Property Handover with Judicial Police",descriptionAr:"إصدار أمر تنفيذ عقاري بتسليم العقار بالقوة الجبرية وإزالة الشباك عبر شرطة التنفيذ.",descriptionEn:"Enforcement court eviction warrant executed via judicial marshals and police support.",status:"upcoming"}]},{id:"case-admin-grievances",titleAr:"دعوى إدارية: إلغاء قرار إداري بفرض غرامة بلدية والتعويض عنها أمام ديوان المظالم",titleEn:"Administrative Lawsuit: Annulment of Municipal Penalty & Damages before Board of Grievances",caseNumber:"443019882",courtTier:"grievances",courtNameAr:"المحكمة الإدارية بالرياض (ديوان المظالم) - الدائرة الإدارية الثالثة",courtNameEn:"Administrative Court in Riyadh (Board of Grievances) - 3rd Circuit",circuitAr:"الدائرة الإدارية الثالثة (ثلاثية)",circuitEn:"3rd Administrative Circuit (Three Judges)",claimValueSar:65e4,filingDateHijri:"1445/06/02هـ",plaintiffAr:"شركة المتاجر الكبرى للتجزئة والاستثمار ذ.م.م",plaintiffEn:"Major Retail Stores & Investment Co. LLC",defendantAr:"أمانة منطقة الرياض (جهة إدارية)",defendantEn:"Riyadh Municipality (Administrative Authority)",legalSubjectAr:"المطالبة بإلغاء القرار الإداري رقم 98124 لعدم المشروعية واسترداد الغرامة مع التعويض",legalSubjectEn:"Action for Judicial Annulment of Ultra Vires Administrative Penalty and Restitution",factsSummaryAr:"أصدرت الأمانة قراراً بفرض غرامة قدرها 400,000 ريال وإغلاق فرع للمدعية بزعم مخالفة اشتراطات الترخيص البلدي. أثبتت المدعية حصولها على ترخيص نظامي ساري المفعول واستيفاء كامل شروط السلامة والتظلم الإداري خلال 60 يوماً.",factsSummaryEn:"Municipality imposed a 400,000 SAR fine and branch closure alleging municipal licensing non-compliance. Plaintiff proved valid permit, fire-safety certificate, and timely 60-day administrative grievance.",governingLawsAr:["نظام ديوان المظالم ولائحته التنفيذية","نظام المرافعات أمام ديوان المظالم - المواد (8، 9، 11)","قواعد وإجراءات التظلم الإداري"],governingLawsEn:["Board of Grievances Law & Regulations","Law of Procedure before the Board of Grievances - Arts (8, 9, 11)","Rules & Regulations of Administrative Grievances"],currentStageNumber:2,stages:[{stageNumber:1,id:"stage-filing",nameAr:"التظلم الإداري المسبق وقيد الدعوى الإدارية (منصة معين)",nameEn:"Mandatory Administrative Grievance & Filing on Moeen Portal",descriptionAr:"تقديم التظلم خلال 60 يوماً من العلم بالقرار، وانتظار 60 يوماً للرد أو الرفض الضمني، ثم قيد الدعوى خلال 60 يوماً التالية.",descriptionEn:"Grievance within 60 days of knowledge, 60 days agency response window, and filing on Moeen portal within 60 days of rejection.",status:"completed",proceduralDeadlineDays:60,deadlineWarningAr:"تم التقيد بالمواعيد الإجرائية الثلاثية الصارمة لديوان المظالم (60+60+60).",deadlineWarningEn:"Strict administrative procedural limitation periods (60+60+60 days) satisfied.",requiredActionsAr:["إرفاق إشعار التظلم الإداري الموجه لأمين المنطقة","إرفاق ما يثبت فوات 60 يوماً أو صدور قرار الرفض"],requiredActionsEn:["Attach formal administrative grievance submitted to Municipality","Attach proof of 60 days silence or written rejection"],judicialOutcomeAr:"قبول الدعوى الإدارية شكلاً وإعفاؤها من التكاليف القضائية بنص المادة (17) من نظام التكاليف.",judicialOutcomeEn:"Administrative claim admitted; exempted from court fees pursuant to Art 17 of Judicial Costs Law."},{stageNumber:2,id:"stage-memos",nameAr:"فحص عيوب القرار الإداري (عيب السبب والشكل والانحراف بالسلطة)",nameEn:"Scrutiny of Administrative Decision Flaws (Cause, Form, Ultra Vires)",descriptionAr:"تقديم مذكرة تفصيلية تثبت انعدام ركن السبب ومخالفة اللائحة التنفيذية لوزارة البلديات والإسكان.",descriptionEn:"Detailed brief establishing total lack of factual cause and violation of Ministry of Municipalities executive regulations.",status:"in_progress",proceduralDeadlineDays:15,requiredActionsAr:["إيداع التراخيص البلدية وشهادات الدفاع المدني الموثقة"],requiredActionsEn:["File validated municipal permits and civil defense safety compliance deeds"]},{stageNumber:3,id:"stage-hearing",nameAr:"مواجهة ممثل الجهة الإدارية وإلزامها بملف القرار",nameEn:"Interrogation of Municipality Counsel & Producing Government File",descriptionAr:"إلزام ممثل الأمانة بإبراز محضر الضبط الميداني الأصلي وسند التقدير.",descriptionEn:"Court order directing municipal counsel to produce original field inspection log and valuation basis.",status:"upcoming"},{stageNumber:4,id:"stage-expert",nameAr:"حساب الضرر الناجم عن الإغلاق التعسفي",nameEn:"Quantification of Commercial Damages & Lost Turnover",descriptionAr:"حساب الخسائر المادية المباشرة الناتجة عن إغلاق الفرع لمدة 12 يوماً وأجور العمالة المتعطلة.",descriptionEn:"Calculation of direct economic losses and staff overhead for 12 days of unauthorized closure.",status:"upcoming"},{stageNumber:5,id:"stage-judgment",nameAr:"الحكم بإلغاء القرار الإداري واسترداد الغرامة والتعويض",nameEn:"Judgment Annulling Administrative Penalty & Ordering Restitution",descriptionAr:"قضاء الدائرة بإلغاء قرار الغرامة لعدم مشروعيته وإلزام الأمانة بإعادة 400,000 ريال والتعويض بـ 150,000 ريال.",descriptionEn:"Judgment annulling penalty, ordering full restitution of 400k SAR plus 150k SAR compensation.",status:"upcoming"},{stageNumber:6,id:"stage-enforcement",nameAr:"متابعة تنفيذ الحكم الإداري وفق نظام التنفيذ أمام ديوان المظالم",nameEn:"Enforcement of Administrative Judgment via Board of Grievances Execution Unit",descriptionAr:"إخطار وزارة المالية وممثل الجهة لتنفيذ صرف المبلغ وسحب القرار من السجلات النظامية.",descriptionEn:"Formal notification to Ministry of Finance to release awarded funds and expunge penalty.",status:"upcoming"}]}];class Q{constructor(e){u(this,"currentScenarioId","case-tech-commercial");u(this,"selectedStageNumber",3);u(this,"scenarioState");u(this,"onInspectJudgment");this.onInspectJudgment=e,this.scenarioState=JSON.parse(JSON.stringify(q.reduce((t,i)=>({...t,[i.id]:i}),{}))),this.selectedStageNumber=this.getActiveScenario().currentStageNumber}getActiveScenario(){return this.scenarioState[this.currentScenarioId]||q[0]}selectScenario(e){this.scenarioState[e]&&(this.currentScenarioId=e,this.selectedStageNumber=this.scenarioState[e].currentStageNumber,E.playGavel())}advanceStage(){const e=this.getActiveScenario();if(e.currentStageNumber<6){const t=e.stages.find(a=>a.stageNumber===e.currentStageNumber);t&&(t.status="completed"),e.currentStageNumber+=1;const i=e.stages.find(a=>a.stageNumber===e.currentStageNumber);i&&(i.status="in_progress"),this.selectedStageNumber=e.currentStageNumber,e.currentStageNumber===5?E.playVerdictFanfare():E.playGavel()}}render(e){const t=v.lang==="ar",i=this.getActiveScenario(),a=i.stages.find(n=>n.stageNumber===this.selectedStageNumber)||i.stages[0];e.innerHTML=`
      <div class="simulator-wrapper fade-in">
        <!-- Top Scenario Selector Bar -->
        <div class="scenarios-selector-bar">
          <div class="selector-title-row">
            <span class="selector-badge">🏛️ ${t?"القضايا النموذجية الواقعية (اضغط للتجربة الفورية):":"Landmark Case Scenarios (Click to Load):"}</span>
          </div>
          <div class="scenario-buttons-grid">
            ${q.map(n=>`
              <button class="scenario-nav-btn ${this.currentScenarioId===n.id?"active":""}" data-scenario-id="${n.id}">
                <div class="sc-btn-num">رقم ${n.caseNumber}</div>
                <div class="sc-btn-title">${t?n.titleAr:n.titleEn}</div>
                <div class="sc-btn-court">⚖️ ${t?n.courtNameAr:n.courtNameEn}</div>
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Case Header Summary Card -->
        <div class="case-dossier-card">
          <div class="dossier-top">
            <div class="dossier-id-block">
              <span class="dossier-badge">${t?"صك قضائي مقيد":"Registered Case Docket"}</span>
              <h2 class="dossier-title">${t?i.titleAr:i.titleEn}</h2>
              <div class="dossier-court-name">
                🏛️ ${t?i.courtNameAr:i.courtNameEn} | ${t?i.circuitAr:i.circuitEn}
              </div>
            </div>
            <div class="dossier-stats-block">
              <div class="stat-box">
                <span class="stat-label">${t?"قيمة المطالبة":"Claim Value"}</span>
                <span class="stat-value highlight-gold">${i.claimValueSar.toLocaleString("ar-SA")} ر.س</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">${t?"تاريخ القيد":"Filing Date"}</span>
                <span class="stat-value">${i.filingDateHijri}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">${t?"المرحلة الحالية":"Current Stage"}</span>
                <span class="stat-value status-badge in-progress">${i.currentStageNumber} / 6</span>
              </div>
            </div>
          </div>

          <!-- Parties & Facts Row -->
          <div class="dossier-parties-row">
            <div class="party-col plaintiff-col">
              <span class="party-label">⚖️ ${t?"المدعي (صاحب الحق):":"Claimant / Plaintiff:"}</span>
              <strong class="party-name">${t?i.plaintiffAr:i.plaintiffEn}</strong>
            </div>
            <div class="party-vs">VS</div>
            <div class="party-col defendant-col">
              <span class="party-label">🛡️ ${t?"المدعى عليه:":"Defendant:"}</span>
              <strong class="party-name">${t?i.defendantAr:i.defendantEn}</strong>
            </div>
          </div>

          <div class="dossier-facts">
            <strong>${t?"ملخص الوقائع ومحل النزاع:":"Factual Background & Claims:"}</strong>
            <p>${t?i.factsSummaryAr:i.factsSummaryEn}</p>
          </div>

          <div class="governing-laws-row">
            <span class="gov-label">${t?"الأنظمة الحاكمة:":"Governing Laws:"}</span>
            ${(t?i.governingLawsAr:i.governingLawsEn).map(n=>`
              <span class="law-tag">📜 ${n}</span>
            `).join("")}
          </div>
        </div>

        <!-- 6-Stage Interactive Case Pipeline -->
        <div class="pipeline-section-card">
          <div class="pipeline-header">
            <div class="pipeline-title">
              <h3>${t?"خارطة مسار التقاضي وإجراءات ناجز (6 مراحل قضائية)":"Najiz 6-Stage Case Lifecycle Pipeline"}</h3>
              <p class="pipeline-sub">${t?"انقر على أي مرحلة لاستعراض محاضرها ودفوعها وسجلاتها الإجرائية":"Click any stage to examine session minutes, pleadings, and procedural deadlines"}</p>
            </div>
            <div class="pipeline-actions">
              <button id="advance-stage-btn" class="advance-stage-btn ${i.currentStageNumber>=6?"disabled":""}">
                ⚡ ${t?"تقديم المرحلة القضائية وتحديث ناجز":"Advance Stage & Update Docket"}
              </button>
            </div>
          </div>

          <!-- Stepper Bar -->
          <div class="stepper-horizontal-bar">
            ${i.stages.map(n=>{const r=n.stageNumber===this.selectedStageNumber,o=n.stageNumber===i.currentStageNumber,c=n.stageNumber<i.currentStageNumber||n.status==="completed";let m="upcoming";return c?m="completed":o&&(m="in_progress"),`
                <div class="step-node ${m} ${r?"selected":""}" data-stage-num="${n.stageNumber}">
                  <div class="step-circle">
                    ${c?"✓":n.stageNumber}
                  </div>
                  <div class="step-content">
                    <span class="step-num-label">${t?`المرحلة ${n.stageNumber}`:`Stage ${n.stageNumber}`}</span>
                    <span class="step-name">${t?n.nameAr:n.nameEn}</span>
                  </div>
                  ${n.stageNumber<6?'<div class="step-connector"></div>':""}
                </div>
              `}).join("")}
          </div>

          <!-- Stage Detail Inspector Panel -->
          <div class="stage-detail-inspector">
            <div class="stage-inspector-top">
              <div>
                <span class="inspector-stage-tag">
                  ${t?`المرحلة (${a.stageNumber}) من 6`:`Stage (${a.stageNumber}) of 6`}
                </span>
                <h3 class="inspector-title">${t?a.nameAr:a.nameEn}</h3>
                <p class="inspector-desc">${t?a.descriptionAr:a.descriptionEn}</p>
              </div>
              <div class="deadline-block">
                ${a.proceduralDeadlineDays?`
                  <div class="deadline-badge">
                    ⏱️ ${t?`المهلة الإجرائية: ${a.proceduralDeadlineDays} يوماً`:`Procedural Limit: ${a.proceduralDeadlineDays} Days`}
                  </div>
                `:""}
                ${a.status==="completed"?`
                  <span class="status-pill completed">✓ ${v.t.stageCompleted}</span>
                `:a.status==="in_progress"?`
                  <span class="status-pill in_progress">⏳ ${v.t.stageInProgress}</span>
                `:`
                  <span class="status-pill upcoming">🔒 ${v.t.stageUpcoming}</span>
                `}
              </div>
            </div>

            ${a.deadlineWarningAr?`
              <div class="deadline-alert-banner">
                ⚠️ <strong>${t?"تنبيه إجرائي نظامي:":"Procedural Warning:"}</strong>
                <span>${t?a.deadlineWarningAr:a.deadlineWarningEn}</span>
              </div>
            `:""}

            <!-- Required Actions Grid -->
            ${a.requiredActionsAr&&a.requiredActionsAr.length>0?`
            <div class="inspector-section">
              <h4 class="section-heading">📌 ${t?"الإجراءات القضائية والمتطلبات النظامية:":"Statutory Actions & Pleading Steps:"}</h4>
              <ul class="actions-list">
                ${(t?a.requiredActionsAr||[]:a.requiredActionsEn||[]).map(n=>`
                  <li class="action-item">
                    <span class="check-icon">✓</span>
                    <span>${n}</span>
                  </li>
                `).join("")}
              </ul>
            </div>
            `:""}

            <!-- Virtual Session Minutes (ضبط الجلسة القضائية) -->
            ${a.minutes&&a.minutes.length>0?`
              <div class="inspector-section">
                <h4 class="section-heading">📜 ${t?"محضر الجلسة القضائية المرئية والوقائع المسجلة:":"Virtual Hearing Record & Verbatim Session Transcript:"}</h4>
                ${a.minutes.map(n=>`
                  <div class="session-minute-box">
                    <div class="minute-header">
                      <span><strong>الجلسة رقم:</strong> ${n.sessionNumber}</span>
                      <span><strong>التاريخ:</strong> ${n.dateHijri} (${n.dateGregorian})</span>
                      <span><strong>القاضي:</strong> ${n.judgeName}</span>
                    </div>
                    <div class="minute-remarks">
                      <strong>ملاحظات الضبط:</strong> ${t?n.remarksAr:n.remarksEn}
                    </div>
                    <div class="minute-transcript">
                      <div class="transcript-title">🎙️ نص مرافعة الجلسة وضبط الأقوال:</div>
                      <pre class="transcript-pre">${t?n.transcriptAr:n.transcriptEn}</pre>
                    </div>
                  </div>
                `).join("")}
              </div>
            `:""}

            <!-- Stage Evidences (البينات المدققة) -->
            ${a.evidences&&a.evidences.length>0?`
              <div class="inspector-section">
                <h4 class="section-heading">📂 ${t?"البينات والمستندات المقدمة في هذه المرحلة:":"Submitted Evidence & Probative Documentation:"}</h4>
                <div class="evidence-cards-row">
                  ${a.evidences.map(n=>`
                    <div class="evidence-mini-card">
                      <div class="ev-top">
                        <span class="ev-type-tag">📁 ${n.type}</span>
                        <span class="ev-probative">${n.probativeValue}% ${t?"قوة ثبوتية":"Weight"}</span>
                      </div>
                      <h5 class="ev-title">${t?n.titleAr:n.titleEn}</h5>
                      <p class="ev-desc">${t?n.descriptionAr:n.descriptionEn}</p>
                      <div class="ev-basis">⚖️ ${t?n.legalBasisAr:n.legalBasisEn}</div>
                    </div>
                  `).join("")}
                </div>
              </div>
            `:""}

            <!-- Judicial Outcome / Judgment Pronouncement -->
            ${a.judgmentText||a.judicialOutcomeAr?`
              <div class="verdict-banner-box">
                <div class="verdict-icon">⚖️</div>
                <div class="verdict-body">
                  <h4 class="verdict-title">${t?"منطوق الصك القضائي والأثر الإجرائي:":"Pronounced Judicial Deed & Executable Order:"}</h4>
                  <p class="verdict-text">${a.judgmentText?a.judgmentText:t?a.judicialOutcomeAr:a.judicialOutcomeEn}</p>
                  <div class="verdict-btn-row">
                    <button id="inspect-judgment-deed-btn" class="inspect-deed-btn">
                      📜 ${t?"استعراض صك الحكم التفصيلي الموثق":"Inspect Certified Judgment Deed"}
                    </button>
                  </div>
                </div>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `,this.attachEvents(e)}attachEvents(e){e.querySelectorAll(".scenario-nav-btn").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-scenario-id");n&&(this.selectScenario(n),this.render(e))})}),e.querySelectorAll(".step-node").forEach(a=>{a.addEventListener("click",()=>{E.playChime();const n=Number(a.getAttribute("data-stage-num"));n&&(this.selectedStageNumber=n,this.render(e))})});const t=e.querySelector("#advance-stage-btn");t&&t.addEventListener("click",()=>{this.advanceStage(),this.render(e)});const i=e.querySelector("#inspect-judgment-deed-btn");i&&i.addEventListener("click",()=>{E.playGavel();const a=this.getActiveScenario(),n=a.stages.find(r=>r.stageNumber===this.selectedStageNumber)||a.stages[4];this.onInspectJudgment(a,n)})}}function K(s){const e=Number(s.basicSalary)+Number(s.allowances),t=Number(s.years)+Number(s.months)/12;let i=0;if(t<=5)i=e*.5*t;else{const b=e*.5*5,A=t-5;i=b+e*1*A}let a=i;const n=[],r=[],o=[];s.terminationReason==="employee_resignation_85"?(n.push("المادة 85 من نظام العمل (استقالة العامل)"),r.push("Article 85 Labor Law (Voluntary Resignation)"),t<2?(a=0,o.push({title:"مكافأة نهاية الخدمة (استقالة أقل من سنتين)",amount:0,note:"لا يستحق العامل مكافأة إذا كانت خدمته أقل من سنتين متتاليتين."})):t>=2&&t<5?(a=i*(1/3),o.push({title:"مكافأة نهاية الخدمة (استقالة من 2 إلى 5 سنوات)",amount:Math.round(a),note:"استحقاق ثلث المكافأة النظامية (1/3)."})):t>=5&&t<10?(a=i*(2/3),o.push({title:"مكافأة نهاية الخدمة (استقالة من 5 إلى 10 سنوات)",amount:Math.round(a),note:"استحقاق ثلثي المكافأة النظامية (2/3)."})):(a=i,o.push({title:"مكافأة نهاية الخدمة (استقالة 10 سنوات فأكثر)",amount:Math.round(a),note:"استحقاق كامل المكافأة بنسبة 100%."}))):s.terminationReason==="employer_article_80"?(a=0,n.push("المادة 80 من نظام العمل (فصل تأديبي دون مكافأة)"),r.push("Article 80 Labor Law (Summary Dismissal for Cause)"),o.push({title:"مكافأة نهاية الخدمة (المادة 80)",amount:0,note:"تسقط المكافأة بالكامل في حالات الفصل التأديبي المنصوص عليها بالمادة 80."})):(n.push("المادة 84 من نظام العمل (مكافأة نهاية الخدمة الكاملة)"),r.push("Article 84 Labor Law (Full End of Service Gratuity)"),o.push({title:"مكافأة نهاية الخدمة (المادة 84)",amount:Math.round(a),note:"نصف شهر عن كل سنة من الخمس الأولى وشهر كامل عن كل سنة تالية."}));let c=0;if(s.terminationReason==="employer_unlawful_77")if(n.push("المادة 77 من نظام العمل (التعويض عن الإنهاء غير المشروع)"),r.push("Article 77 Labor Law (Unlawful Termination Damages)"),s.contractType==="indefinite"){const b=e*.5*t,A=e*2;c=Math.max(b,A),o.push({title:"تعويض المادة 77 (عقد غير محدد المدة)",amount:Math.round(c),note:`أجر 15 يوماً عن كل سنة (${Math.round(b)} ر.س)، والحد الأدنى النظامي أجر شهرين (${Math.round(A)} ر.س).`})}else{const b=Number(s.remainingContractMonths||0),A=e*b,$=e*2;c=Math.max(A,$),o.push({title:"تعويض المادة 77 (عقد محدد المدة)",amount:Math.round(c),note:`أجر المدة المتبقية (${b} أشهر = ${Math.round(A)} ر.س)، والحد الأدنى أجر شهرين (${Math.round($)} ر.س).`})}let m=0;const p=Number(s.unusedLeaveDays||0);p>0&&(m=e/30*p,n.push("المادة 111 من نظام العمل (التعويض عن رصيد الإجازات السنوية)"),r.push("Article 111 Labor Law (Annual Leave Encashment)"),o.push({title:"بدل رصيد الإجازات المستحقة",amount:Math.round(m),note:`تعويض عن (${p}) يوماً بناءً على آخر أجر فعلي شامل.`}));let d=0;const h=Number(s.unpaidNoticeDays||0);h>0&&s.terminationReason==="employer_unlawful_77"&&(d=e/30*h,n.push("المادة 76 من نظام العمل (التعويض عن عدم مراعاة مهلة الإشعار)"),r.push("Article 76 Labor Law (Notice Period Indemnity)"),o.push({title:"بدل مهلة الإشعار",amount:Math.round(d),note:`تعويض عن مهلة إشعار غير مدفوعة قدرها (${h}) يوماً.`}));const S=Math.round(a+c+m+d);return{totalWage:e,eosGratuity:Math.round(a),article77Compensation:Math.round(c),leaveEncashment:Math.round(m),noticeCompensation:Math.round(d),totalEntitlements:S,statutoryBasisAr:n,statutoryBasisEn:r,breakdownAr:o}}function Y(s){const e=Math.max(0,Number(s.claimValue||0)),t=1e6;if(s.caseType==="labor"&&s.isLaborWorkerExempt)return{claimValue:e,feePercentage:0,calculatedFee:0,statutoryCap:t,finalFee:0,isExempt:!0,exemptionReasonAr:"معفى بقوة النظام وفق الفقرة (4) من المادة (17) من نظام تكاليف الدعاوى القضائية (دعاوى العمال الخاضعين لنظام العمل).",exemptionReasonEn:"Statutorily exempt under Article 17(4) of the Judicial Costs Law (Claims filed by employees).",legalRefAr:"المادة (17) من نظام تكاليف الدعاوى القضائية",legalRefEn:"Article 17, Law of Judicial Costs"};if(s.caseType==="petition_reconsideration")return{claimValue:e,feePercentage:0,calculatedFee:1e4,statutoryCap:1e4,finalFee:1e4,isExempt:!1,exemptionReasonAr:"",exemptionReasonEn:"",legalRefAr:"المادة (7) من نظام تكاليف الدعاوى القضائية (رسم ثابت لطلب التماس إعادة النظر 10,000 ريال)",legalRefEn:"Article 7, Law of Judicial Costs (Fixed fee of 10,000 SAR for Petition for Reconsideration)"};if(s.caseType==="appeal"){const r=Math.min(1e4,Math.max(2e3,e*.02));return{claimValue:e,feePercentage:2,calculatedFee:Math.round(r),statutoryCap:1e4,finalFee:Math.round(r),isExempt:!1,exemptionReasonAr:"",exemptionReasonEn:"",legalRefAr:"المادة (6) من نظام تكاليف الدعاوى القضائية ولائحته (رسم الاستئناف والتدقيق)",legalRefEn:"Article 6, Law of Judicial Costs (Appellate & Cassation Review Fees)"}}let i=5,a=0;e<=1e5?(i=5,a=e*.05):e<=5e5?(i=4,a=5e3+(e-1e5)*.04):e<=1e6?(i=3,a=21e3+(e-5e5)*.03):(i=2,a=36e3+(e-1e6)*.02);const n=Math.min(a,t);return{claimValue:e,feePercentage:i,calculatedFee:Math.round(a),statutoryCap:t,finalFee:Math.round(n),isExempt:!1,exemptionReasonAr:"",exemptionReasonEn:"",legalRefAr:"المادة (3) والمادة (4) من نظام تكاليف الدعاوى القضائية (مرسوم ملكي م/16)",legalRefEn:"Articles 3 & 4, Law of Judicial Costs (Royal Decree M/16)"}}function X(s){var F;const e=Math.max(0,Number(s.estateGross||0)),t=Math.max(0,Number(s.funeralCosts||0)),i=Math.max(0,Number(s.debts||0)),a=Math.max(0,e-t-i),n=a/3,r=Math.min(Math.max(0,Number(s.bequestWill||0)),n),o=Math.max(0,a-r),c=t+i+r,m=s.heirs,p=Number(m.sonsCount||0),d=Number(m.daughtersCount||0),h=p+d>0,S=p>0,b=Number(m.wifeCount||0),A=!!m.husband,$=!!m.father,D=!!m.mother,x=Number(m.fullBrothersCount||0),y=Number(m.fullSistersCount||0),N=x+y,f=[];let w=0;if(A){const l=h?.25:.5,g=h?"1/4":"1/2";w+=l,f.push({heirTitleAr:"الزوج",heirTitleEn:"Husband",count:1,shareFractionAr:g,shareFractionEn:g,shareDecimal:l,totalAmountSar:0,perPersonAmountSar:0,reasonAr:h?"الربع لوجود الفرع الوارث للمتوفاة":"النصف لعدم وجود الفرع الوارث",reasonEn:h?"1/4 due to presence of descendants":"1/2 in absence of descendants",status:"ashab_furud"})}else if(b>0){const l=h?.125:.25,g=h?"1/8":"1/4";w+=l,f.push({heirTitleAr:b>1?`الزوجات (${b})`:"الزوجة",heirTitleEn:b>1?`Wives (${b})`:"Wife",count:b,shareFractionAr:g,shareFractionEn:g,shareDecimal:l,totalAmountSar:0,perPersonAmountSar:0,reasonAr:h?"الثمن فرضاً لوجود الفرع الوارث يقسم بينهن بالتساوي":"الربع فرضاً لعدم وجود الفرع الوارث يقسم بينهن بالتساوي",reasonEn:h?"1/8 Qur'anic share shared equally due to descendants":"1/4 shared equally in absence of descendants",status:"ashab_furud"})}if(D){const l=h||N>=2,g=l?1/6:1/3,j=l?"1/6":"1/3";w+=g,f.push({heirTitleAr:"الأم",heirTitleEn:"Mother",count:1,shareFractionAr:j,shareFractionEn:j,shareDecimal:g,totalAmountSar:0,perPersonAmountSar:0,reasonAr:l?"السدس لوجود الفرع الوارث أو جمع من الإخوة":"الثلث لعدم وجود الفرع الوارث وعدم جمع الإخوة",reasonEn:l?"1/6 due to descendants or multiple siblings":"1/3 in absence of descendants or multiple siblings",status:"ashab_furud"})}let L=!1,T=!1;if($)if(S){const l=.16666666666666666;w+=l,f.push({heirTitleAr:"الأب",heirTitleEn:"Father",count:1,shareFractionAr:"1/6",shareFractionEn:"1/6",shareDecimal:l,totalAmountSar:0,perPersonAmountSar:0,reasonAr:"السدس فرضاً لوجود الفرع الوارث المذكر (الابن)",reasonEn:"1/6 Qur'anic share due to presence of male descendant (son)",status:"ashab_furud"})}else if(d>0){T=!0;const l=1/6;w+=l,f.push({heirTitleAr:"الأب",heirTitleEn:"Father",count:1,shareFractionAr:"1/6 + عصبة",shareFractionEn:"1/6 + Residuary",shareDecimal:l,totalAmountSar:0,perPersonAmountSar:0,reasonAr:"السدس فرضاً لوجود الفرع الوارث المؤنث + الباقي تعصيباً إن وجد",reasonEn:"1/6 Qur'anic share plus residual asabah if remaining",status:"asabah"})}else L=!0,f.push({heirTitleAr:"الأب",heirTitleEn:"Father",count:1,shareFractionAr:"عصبة بالنفس",shareFractionEn:"Residuary (Asabah)",shareDecimal:0,totalAmountSar:0,perPersonAmountSar:0,reasonAr:"يرث الباقي تعصيباً لعدم وجود الفرع الوارث",reasonEn:"Inherits residue as sole prime agnatic residuary",status:"asabah"});if(p===0&&d>0){const l=d===1?.5:.6666666666666666,g=d===1?"1/2":"2/3";w+=l,f.push({heirTitleAr:d===1?"البنت":`البنات (${d})`,heirTitleEn:d===1?"Daughter":`Daughters (${d})`,count:d,shareFractionAr:g,shareFractionEn:g,shareDecimal:l,totalAmountSar:0,perPersonAmountSar:0,reasonAr:d===1?"النصف فرضاً لانفرادها وعدم وجود المعصب":"الثلثان فرضاً لاشتراكهن وعدم وجود المعصب",reasonEn:d===1?"1/2 Qur'anic share for sole daughter":"2/3 Qur'anic share shared equally for 2+ daughters",status:"ashab_furud"})}if(p>0){const l=Math.max(0,1-w),g=p*2+d;f.push({heirTitleAr:p===1?"الابن":`الأبناء (${p})`,heirTitleEn:p===1?"Son":`Sons (${p})`,count:p,shareFractionAr:d>0?"عصبة بالغير (للذكر مثل حظ الأنثيين)":"عصبة بالنفس (الباقي)",shareFractionEn:d>0?"Residuary with sisters (2:1 ratio)":"Prime Residuary",shareDecimal:l*(p*2)/g,totalAmountSar:0,perPersonAmountSar:0,reasonAr:"يرثون الباقي تعصيباً كأقوى عصبة بالنفس",reasonEn:"Inherit residue as prime agnatic heirs",status:"asabah"}),d>0&&f.push({heirTitleAr:d===1?"البنت":`البنات (${d})`,heirTitleEn:d===1?"Daughter":`Daughters (${d})`,count:d,shareFractionAr:"عصبة بالغير (مع الإخوة الذكور)",shareFractionEn:"Residuary with brothers (2:1)",shareDecimal:l*d/g,totalAmountSar:0,perPersonAmountSar:0,reasonAr:"عصبة بالغير مع إخوتهن الذكور (للذكر مثل حظ الأنثيين)",reasonEn:"Agnatic co-heirs with brothers receiving half male share",status:"asabah"})}if($||p>0)(x>0||y>0)&&f.push({heirTitleAr:"الإخوة والأخوات الأشقاء",heirTitleEn:"Full Siblings",count:N,shareFractionAr:"محجوبون حجب حرمان",shareFractionEn:"Excluded (Hajb)",shareDecimal:0,totalAmountSar:0,perPersonAmountSar:0,reasonAr:$?"محجوبون حجب حرمان تام لوجود الأب":"محجوبون حجب حرمان لوجود الابن (الفرع الوارث المذكر)",reasonEn:$?"Completely excluded by Father":"Excluded by Male Descendant (Son)",status:"mahjoob"});else if(!h&&!$&&N>0){const l=Math.max(0,1-w);if(x>0){const g=x*2+y;f.push({heirTitleAr:`الإخوة الأشقاء (${x})`,heirTitleEn:`Full Brothers (${x})`,count:x,shareFractionAr:"عصبة بالنفس / بالغير",shareFractionEn:"Residuary (Asabah)",shareDecimal:l*(x*2)/g,totalAmountSar:0,perPersonAmountSar:0,reasonAr:"يرثون الباقي تعصيباً لعدم وجود الأصل المذكر أو الفرع الوارث",reasonEn:"Inherit residue in absence of father and descendants",status:"asabah"}),y>0&&f.push({heirTitleAr:`الأخوات الشقيقات (${y})`,heirTitleEn:`Full Sisters (${y})`,count:y,shareFractionAr:"عصبة بالغير مع الإخوة",shareFractionEn:"Residuary with brothers",shareDecimal:l*y/g,totalAmountSar:0,perPersonAmountSar:0,reasonAr:"عصبة بالغير مع الإخوة الأشقاء (للذكر مثل حظ الأنثيين)",reasonEn:"Residuary with brothers (2:1)",status:"asabah"})}else{const g=y===1?.5:.6666666666666666;w+=g,f.push({heirTitleAr:y===1?"الأخت الشقيقة":`الأخوات الشقيقات (${y})`,heirTitleEn:y===1?"Full Sister":`Full Sisters (${y})`,count:y,shareFractionAr:y===1?"1/2":"2/3",shareFractionEn:y===1?"1/2":"2/3",shareDecimal:g,totalAmountSar:0,perPersonAmountSar:0,reasonAr:y===1?"النصف فرضاً لانفرادها":"الثلثان فرضاً لتعددهن",reasonEn:y===1?"1/2 Qur'anic share":"2/3 Qur'anic share shared",status:"ashab_furud"})}}if(T){const l=f.findIndex(g=>g.heirTitleAr==="الأب");if(l!==-1){const g=Math.max(0,1-w);f[l].shareDecimal=1/6+g,g>0&&(f[l].reasonAr="السدس فرضاً (1/6) بالإضافة إلى الباقي تعصيباً بعد أصحاب الفروض.")}}if(L){const l=f.findIndex(g=>g.heirTitleAr==="الأب");l!==-1&&(f[l].shareDecimal=Math.max(0,1-w))}let I="fair_distribution",k=f.reduce((l,g)=>l+g.shareDecimal,0);if(k>1.0001){I="awl";for(const l of f)l.shareDecimal>0&&(l.shareDecimal=l.shareDecimal/k)}else if(k<.9999&&!S&&!$&&x===0){I="radd";const l=f.filter(C=>C.heirTitleAr!=="الزوج"&&!C.heirTitleAr.includes("الزوجة")&&C.shareDecimal>0),g=l.reduce((C,_)=>C+_.shareDecimal,0),B=1-(((F=f.find(C=>C.heirTitleAr==="الزوج"||C.heirTitleAr.includes("الزوجة")))==null?void 0:F.shareDecimal)||0);if(g>0)for(const C of l)C.shareDecimal=C.shareDecimal/g*B}for(const l of f)l.totalAmountSar=Math.round(o*l.shareDecimal),l.perPersonAmountSar=l.count>0?Math.round(l.totalAmountSar/l.count):l.totalAmountSar;let P="قسمة عادلة مطابقة للفروض والتعصيب الشرعي وفق نظام الأحوال الشخصية.",M="Equitable distribution conforming to Islamic shares and agnatic priority.";return I==="awl"?(P="دخلت المسألة في (العول) لزيادة مجموع السهام عن أصل المسألة، فنقص نصيب كل وارث بنسبة فرضه دون إسقاط أحد.",M="Awl doctrine applied: total shares exceeded 1.0, proportionally scaling down all entitlements."):I==="radd"&&(P="دخلت المسألة في (الرد) لوجود فائض في التركة بعد أصحاب الفروض مع عدم وجود عصبة، فرُد الفائض على ذوي الفروض النسبية.",M="Radd doctrine applied: remaining estate surplus reallocated to blood Qur'anic heirs."),{grossEstate:e,liabilitiesDeductions:c,netDistributableEstate:o,sharesTotalFraction:k,stateOfEstate:I,shares:f,explanationAr:P,explanationEn:M}}function Z(s){const e=Math.max(0,Number(s.contractValue||0)),t=Math.max(0,Number(s.delayDays||0)),i=Math.max(0,Number(s.dailyRatePercent||.1))/100,a=Math.max(0,Number(s.maxCapPercent||10))/100,n=e*i*t,r=e*a,o=n>r,c=o?r:n,m=Math.max(0,Number(s.directMaterialLoss||0)),p=Math.max(0,Number(s.lossOfProfitExpected||0)),d=m+p,h=Math.round(c+d),S=o?`تم تطبيق السقف النظامي لغرامة التأخير (${s.maxCapPercent}%) بقيمة ${Math.round(r)} ر.س وفق المادة (178) من نظام المعاملات المدنية لمنع الغبن والإجحاف، مع إضافة الضرر المباشر المحقق البالغ ${Math.round(d)} ر.س.`:`الغرامة المحتسبة بنسبة ${s.dailyRatePercent}% يومياً لمدة ${t} يوماً بلغت ${Math.round(c)} ر.س ولم تتجاوز السقف المتفق عليه، تضاف إليها التعويضات عن الخسارة الفعلية طبقاً للمادة (138).`,b=o?`Liquidated damages statutory cap of ${s.maxCapPercent}% applied (${Math.round(r)} SAR) pursuant to Article 178 Civil Transactions Law, plus proven direct damages (${Math.round(d)} SAR).`:`Accrued delay penalty for ${t} days is ${Math.round(c)} SAR within statutory limits, alongside proven consequential damages under Article 138.`;return{delayPenaltyAmount:Math.round(n),cappedPenaltyAmount:Math.round(c),isCapped:o,provenDirectDamages:Math.round(d),totalAssessedAwardSar:h,legalAnalysisAr:S,legalAnalysisEn:b}}class ee{constructor(){u(this,"activeTab","labor");u(this,"laborInput",{contractType:"indefinite",years:5,months:6,basicSalary:12e3,allowances:3e3,terminationReason:"employer_unlawful_77",unusedLeaveDays:24,unpaidNoticeDays:30});u(this,"courtCostsInput",{claimValue:85e4,caseType:"commercial",isFirstInstance:!0,isLaborWorkerExempt:!1});u(this,"inheritanceInput",{estateGross:36e5,funeralCosts:15e3,debts:85e3,bequestWill:1e5,heirs:{wifeCount:1,father:!0,mother:!0,sonsCount:2,daughtersCount:2}});u(this,"damagesInput",{contractValue:15e5,delayDays:45,dailyRatePercent:.1,maxCapPercent:10,directMaterialLoss:4e4,lossOfProfitExpected:25e3})}render(e){const t=v.lang==="ar";e.innerHTML=`
      <div class="calculators-wrapper fade-in">
        <!-- Sub-nav Tabs -->
        <div class="calc-tabs-bar">
          <button class="calc-tab-btn ${this.activeTab==="labor"?"active":""}" data-tab="labor">
            👔 ${t?"حاسبة مستحقات العمل والفصل (م77 وم84)":"Labor & Article 77 Severance"}
          </button>
          <button class="calc-tab-btn ${this.activeTab==="court_costs"?"active":""}" data-tab="court_costs">
            ⚖️ ${t?"حاسبة التكاليف القضائية (م/16)":"Court Filing Costs Calculator"}
          </button>
          <button class="calc-tab-btn ${this.activeTab==="inheritance"?"active":""}" data-tab="inheritance">
            🕌 ${t?"حاسبة المواريث والفرائض (الأحوال الشخصية)":"Islamic Inheritance & Mirath"}
          </button>
          <button class="calc-tab-btn ${this.activeTab==="damages"?"active":""}" data-tab="damages">
            📉 ${t?"حاسبة غرامات التأخير والتعويض (م/191)":"Liquidated Damages & Penalties"}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="calc-content-card">
          ${this.renderActiveTab(t)}
        </div>
      </div>
    `,this.attachEvents(e)}renderActiveTab(e){switch(this.activeTab){case"labor":return this.renderLaborCalc(e);case"court_costs":return this.renderCourtCostsCalc(e);case"inheritance":return this.renderInheritanceCalc(e);case"damages":return this.renderDamagesCalc(e)}}renderLaborCalc(e){const t=K(this.laborInput);return`
      <div class="calc-inner-grid">
        <!-- Form Inputs -->
        <div class="calc-inputs-pane">
          <div class="calc-pane-title">
            <h4>${e?"بيانات عقد العمل والإنهاء":"Employment Contract & Termination Details"}</h4>
            <p>${e?"احتساب دقيق وفقاً للمواد (77، 84، 85) من نظام العمل السعودي":"Statutory computation under Articles 77, 84, and 85"}</p>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"نوع عقد العمل:":"Contract Type:"}</label>
              <select id="labor-contract-type" class="form-select">
                <option value="indefinite" ${this.laborInput.contractType==="indefinite"?"selected":""}>${e?"عقد غير محدد المدة":"Indefinite Term"}</option>
                <option value="fixed" ${this.laborInput.contractType==="fixed"?"selected":""}>${e?"عقد محدد المدة":"Fixed Term"}</option>
              </select>
            </div>
            <div class="form-group">
              <label>${e?"سبب انتهاء العلاقة العمالية:":"Termination Grounds:"}</label>
              <select id="labor-term-reason" class="form-select">
                <option value="employer_unlawful_77" ${this.laborInput.terminationReason==="employer_unlawful_77"?"selected":""}>${e?"فصل غير مشروع من صاحب العمل (المادة 77)":"Unlawful Termination by Employer (Art 77)"}</option>
                <option value="employee_resignation_85" ${this.laborInput.terminationReason==="employee_resignation_85"?"selected":""}>${e?"استقالة بمبادرة من العامل (المادة 85)":"Voluntary Resignation by Employee (Art 85)"}</option>
                <option value="employer_article_80" ${this.laborInput.terminationReason==="employer_article_80"?"selected":""}>${e?"فسخ تأديبي لخطأ العامل الجسيم (المادة 80)":"Summary Disciplinary Dismissal (Art 80)"}</option>
                <option value="employee_article_81" ${this.laborInput.terminationReason==="employee_article_81"?"selected":""}>${e?"ترك العمل لإخلال صاحب العمل (المادة 81)":"Employee Resignation with Cause (Art 81)"}</option>
                <option value="contract_expiry" ${this.laborInput.terminationReason==="contract_expiry"?"selected":""}>${e?"انتهاء مدة العقد أو باتفاق الطرفين":"Expiry of Term / Mutual Consent"}</option>
              </select>
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"الراتب الأساسي الأخير (ر.س):":"Last Basic Wage (SAR):"}</label>
              <input type="number" id="labor-basic" class="form-input" value="${this.laborInput.basicSalary}" min="0" step="500" />
            </div>
            <div class="form-group">
              <label>${e?"البدلات الثابتة (سكن، مواصلات، دورية):":"Standard Allowances (SAR):"}</label>
              <input type="number" id="labor-allowances" class="form-input" value="${this.laborInput.allowances}" min="0" step="250" />
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"سنوات الخدمة:":"Service Years:"}</label>
              <input type="number" id="labor-years" class="form-input" value="${this.laborInput.years}" min="0" max="40" />
            </div>
            <div class="form-group">
              <label>${e?"الأشهر الإضافية:":"Additional Months:"}</label>
              <input type="number" id="labor-months" class="form-input" value="${this.laborInput.months}" min="0" max="11" />
            </div>
          </div>

          ${this.laborInput.contractType==="fixed"&&this.laborInput.terminationReason==="employer_unlawful_77"?`
            <div class="form-group">
              <label>${e?"المدة المتبقية من العقد (بالأشهر):":"Remaining Contract Months:"}</label>
              <input type="number" id="labor-remaining-months" class="form-input" value="${this.laborInput.remainingContractMonths||6}" min="1" max="60" />
            </div>
          `:""}

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"رصيد الإجازات السنوية غير المستخدمة (أيام):":"Unused Vacation Days:"}</label>
              <input type="number" id="labor-vacation-days" class="form-input" value="${this.laborInput.unusedLeaveDays||0}" min="0" />
            </div>
            <div class="form-group">
              <label>${e?"أيام مهلة الإشعار غير المدفوعة:":"Unpaid Notice Days:"}</label>
              <input type="number" id="labor-notice-days" class="form-input" value="${this.laborInput.unpaidNoticeDays||0}" min="0" />
            </div>
          </div>
        </div>

        <!-- Calculation Results -->
        <div class="calc-results-pane">
          <div class="total-entitlement-hero">
            <span class="hero-label">${e?"إجمالي المستحقات العمالية الواجبة السداد:":"Total Payable Labor Entitlements:"}</span>
            <div class="hero-number">${t.totalEntitlements.toLocaleString("ar-SA")} <span class="sar-unit">ر.س</span></div>
            <span class="hero-sub">الأجر الشامل المعتمد بالحساب: ${t.totalWage.toLocaleString("ar-SA")} ر.س / شهرياً</span>
          </div>

          <div class="entitlements-breakdown-list">
            <div class="breakdown-item">
              <div class="item-title-col">
                <strong>مكافأة نهاية الخدمة (المادة 84)</strong>
                <span>بحسب سنوات الخدمة ونظام الاستحقاق</span>
              </div>
              <div class="item-amount">${t.eosGratuity.toLocaleString("ar-SA")} ر.س</div>
            </div>

            ${t.article77Compensation>0?`
              <div class="breakdown-item highlight-green">
                <div class="item-title-col">
                  <strong>تعويض الفصل غير المشروع (المادة 77)</strong>
                  <span>الحد الأدنى شهران، أو 15 يوماً عن كل سنة</span>
                </div>
                <div class="item-amount">${t.article77Compensation.toLocaleString("ar-SA")} ر.س</div>
              </div>
            `:""}

            ${t.leaveEncashment>0?`
              <div class="breakdown-item">
                <div class="item-title-col">
                  <strong>بدل رصيد الإجازات المستحقة (المادة 111)</strong>
                  <span>عن ${this.laborInput.unusedLeaveDays} يوماً من واقع الأجر الفعلي</span>
                </div>
                <div class="item-amount">${t.leaveEncashment.toLocaleString("ar-SA")} ر.س</div>
              </div>
            `:""}

            ${t.noticeCompensation>0?`
              <div class="breakdown-item">
                <div class="item-title-col">
                  <strong>بدل مهلة الإشعار (المادة 76)</strong>
                  <span>عن عدم مراعاة مدة الإخطار المقررة</span>
                </div>
                <div class="item-amount">${t.noticeCompensation.toLocaleString("ar-SA")} ر.س</div>
              </div>
            `:""}
          </div>

          <div class="statutory-basis-box">
            <strong>الأسانيد النظامية للنتيجة:</strong>
            <ul>
              ${(e?t.statutoryBasisAr:t.statutoryBasisEn).map(i=>`<li>⚖️ ${i}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `}renderCourtCostsCalc(e){const t=Y(this.courtCostsInput);return`
      <div class="calc-inner-grid">
        <div class="calc-inputs-pane">
          <div class="calc-pane-title">
            <h4>${e?"حساب تكاليف الدعاوى القضائية":"Judicial Costs & Filing Tariff Calculator"}</h4>
            <p>${e?"استناداً للمرسوم الملكي (م/16) ولائحته التنفيذية بوزارة العدل":"Pursuant to Royal Decree M/16 and Executive Regulations"}</p>
          </div>

          <div class="form-group">
            <label>${e?"نوع الدعوى أو الطلب القضائي:":"Proceedings Type:"}</label>
            <select id="court-case-type" class="form-select">
              <option value="commercial" ${this.courtCostsInput.caseType==="commercial"?"selected":""}>${e?"دعوى تجارية ابتدائية (محاكم تجارية)":"Commercial First Instance"}</option>
              <option value="general" ${this.courtCostsInput.caseType==="general"?"selected":""}>${e?"دعوى عامة أو عقارية (محاكم عامة)":"General / Real Estate First Instance"}</option>
              <option value="appeal" ${this.courtCostsInput.caseType==="appeal"?"selected":""}>${e?"طلب استئناف صك حكم ابتدائي":"Appellate Challenge"}</option>
              <option value="petition_reconsideration" ${this.courtCostsInput.caseType==="petition_reconsideration"?"selected":""}>${e?"طلب التماس إعادة النظر":"Petition for Reconsideration"}</option>
              <option value="labor" ${this.courtCostsInput.caseType==="labor"?"selected":""}>${e?"دعوى عمالية (مقدمة من عامل)":"Labor Claim (Employee)"}</option>
            </select>
          </div>

          <div class="form-group">
            <label>${e?"قيمة المطالبة المالية الإجمالية (ر.س):":"Total Claim Amount (SAR):"}</label>
            <input type="number" id="court-claim-val" class="form-input" value="${this.courtCostsInput.claimValue}" min="0" step="10000" />
          </div>

          <div class="form-check-group">
            <label class="checkbox-label">
              <input type="checkbox" id="labor-exempt-check" ${this.courtCostsInput.caseType==="labor"||this.courtCostsInput.isLaborWorkerExempt?"checked":""} />
              <span>${e?"مقدم الدعوى عامل خاضع لنظام العمل (إعفاء نظامي كامل المادة 17)":"Claimant is an employee under Labor Law (Full Exemption Art 17)"}</span>
            </label>
          </div>
        </div>

        <div class="calc-results-pane">
          <div class="total-entitlement-hero ${t.isExempt?"exempt":""}">
            <span class="hero-label">${e?"مبلغ التكاليف القضائية المستحقة:":"Payable Judicial Costs Tariff:"}</span>
            <div class="hero-number">${t.finalFee.toLocaleString("ar-SA")} <span class="sar-unit">ر.س</span></div>
            <span class="hero-sub">
              ${t.isExempt?e?"معفى من الرسوم القضائية بقوة النظام":"Statutorily Exempt from Court Fees":e?"الحد الأقصى للتكاليف نظاماً: مليون ريال":"Statutory Cap: 1,000,000 SAR"}
            </span>
          </div>

          ${t.isExempt?`
            <div class="exemption-card-box">
              <div class="ex-icon">🛡️</div>
              <div>
                <strong>${e?"موجب الإعفاء من التكاليف:":"Exemption Rationale:"}</strong>
                <p>${e?t.exemptionReasonAr:t.exemptionReasonEn}</p>
              </div>
            </div>
          `:`
            <div class="entitlements-breakdown-list">
              <div class="breakdown-item">
                <div class="item-title-col">
                  <strong>النسبة المطبقة على المطالبة</strong>
                  <span>حسب الشرائح النظامية</span>
                </div>
                <div class="item-amount">${t.feePercentage}%</div>
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
            <p>⚖️ ${e?t.legalRefAr:t.legalRefEn}</p>
          </div>
        </div>
      </div>
    `}renderInheritanceCalc(e){const t=X(this.inheritanceInput);return`
      <div class="calc-inner-grid">
        <div class="calc-inputs-pane">
          <div class="calc-pane-title">
            <h4>${e?"بيانات التركة والورثة الشرعيين":"Estate Liquidation & Islamic Heirs"}</h4>
            <p>${e?"تطبيق دقيق للأحكام المقننة في نظام الأحوال الشخصية (م/73)":"Statutory codified inheritance under Personal Status Law (M/73)"}</p>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"إجمالي التركة (الأموال والعقارات) ر.س:":"Gross Estate (SAR):"}</label>
              <input type="number" id="m-gross" class="form-input" value="${this.inheritanceInput.estateGross}" min="0" step="50000" />
            </div>
            <div class="form-group">
              <label>${e?"مؤن التجهيز والديون المرسلة (ر.س):":"Funeral & Debts (SAR):"}</label>
              <input type="number" id="m-debts" class="form-input" value="${this.inheritanceInput.debts+this.inheritanceInput.funeralCosts}" min="0" step="5000" />
            </div>
          </div>

          <div class="form-group">
            <label>${e?"الوصية المشروعة (في حدود الثلث الشرعي) ر.س:":"Valid Testamentary Bequest (Max 1/3):"}</label>
            <input type="number" id="m-bequest" class="form-input" value="${this.inheritanceInput.bequestWill}" min="0" step="10000" />
          </div>

          <hr class="calc-divider" />
          <h5 class="sub-pane-title">👥 ${e?"تحديد الورثة المتواجدين على قيد الحياة:":"Surviving Eligible Heirs:"}</h5>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"الزوجة / الزوجات:":"Wife / Wives Count:"}</label>
              <select id="m-wives" class="form-select">
                <option value="0" ${this.inheritanceInput.heirs.wifeCount===0?"selected":""}>لا توجد زوجة</option>
                <option value="1" ${this.inheritanceInput.heirs.wifeCount===1?"selected":""}>زوجة واحدة (1)</option>
                <option value="2" ${this.inheritanceInput.heirs.wifeCount===2?"selected":""}>زوجتان (2)</option>
                <option value="3" ${this.inheritanceInput.heirs.wifeCount===3?"selected":""}>3 زوجات</option>
                <option value="4" ${this.inheritanceInput.heirs.wifeCount===4?"selected":""}>4 زوجات</option>
              </select>
            </div>
            <div class="form-group">
              <label>${e?"هل المتوفاة زوجة ويوجد زوج؟":"Is deceased a woman with husband?"}</label>
              <select id="m-husband" class="form-select">
                <option value="no" ${this.inheritanceInput.heirs.husband?"":"selected"}>لا (المتوفى رجل)</option>
                <option value="yes" ${this.inheritanceInput.heirs.husband?"selected":""}>نعم (المتوفاة امرأة والزوج حي)</option>
              </select>
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"الأب على قيد الحياة؟":"Is Father alive?"}</label>
              <select id="m-father" class="form-select">
                <option value="yes" ${this.inheritanceInput.heirs.father?"selected":""}>نعم</option>
                <option value="no" ${this.inheritanceInput.heirs.father?"":"selected"}>لا (متوفى)</option>
              </select>
            </div>
            <div class="form-group">
              <label>${e?"الأم على قيد الحياة؟":"Is Mother alive?"}</label>
              <select id="m-mother" class="form-select">
                <option value="yes" ${this.inheritanceInput.heirs.mother?"selected":""}>نعم</option>
                <option value="no" ${this.inheritanceInput.heirs.mother?"":"selected"}>لا (متوفاة)</option>
              </select>
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"عدد الأبناء (ذكور):":"Number of Sons:"}</label>
              <input type="number" id="m-sons" class="form-input" value="${this.inheritanceInput.heirs.sonsCount||0}" min="0" max="20" />
            </div>
            <div class="form-group">
              <label>${e?"عدد البنات (إناث):":"Number of Daughters:"}</label>
              <input type="number" id="m-daughters" class="form-input" value="${this.inheritanceInput.heirs.daughtersCount||0}" min="0" max="20" />
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"عدد الإخوة الأشقاء:":"Full Brothers Count:"}</label>
              <input type="number" id="m-fbrothers" class="form-input" value="${this.inheritanceInput.heirs.fullBrothersCount||0}" min="0" max="20" />
            </div>
            <div class="form-group">
              <label>${e?"عدد الأخوات الشقيقات:":"Full Sisters Count:"}</label>
              <input type="number" id="m-fsisters" class="form-input" value="${this.inheritanceInput.heirs.fullSistersCount||0}" min="0" max="20" />
            </div>
          </div>
        </div>

        <div class="calc-results-pane">
          <div class="total-entitlement-hero">
            <span class="hero-label">${e?"التركة الصافية القابلة للقسمة:":"Net Distributable Estate:"}</span>
            <div class="hero-number">${t.netDistributableEstate.toLocaleString("ar-SA")} <span class="sar-unit">ر.س</span></div>
            <span class="hero-sub">
              ${e?t.explanationAr:t.explanationEn}
            </span>
          </div>

          <!-- Shares Table -->
          <div class="shares-table-wrapper">
            <table class="shares-table">
              <thead>
                <tr>
                  <th>${e?"الوارث الشرعي":"Heir"}</th>
                  <th>${e?"الفرض / النصيب":"Share"}</th>
                  <th>${e?"نصيب الفرد":"Per Person"}</th>
                  <th>${e?"الإجمالي (ر.س)":"Total (SAR)"}</th>
                </tr>
              </thead>
              <tbody>
                ${t.shares.map(i=>`
                  <tr class="${i.status==="mahjoob"?"mahjoob-row":""}">
                    <td>
                      <strong>${e?i.heirTitleAr:i.heirTitleEn}</strong>
                      <div class="share-reason-sub">${e?i.reasonAr:i.reasonEn}</div>
                    </td>
                    <td><span class="fraction-badge">${e?i.shareFractionAr:i.shareFractionEn}</span></td>
                    <td class="amount-cell">${i.perPersonAmountSar.toLocaleString("ar-SA")} ر.س</td>
                    <td class="amount-cell total-cell">${i.totalAmountSar.toLocaleString("ar-SA")} ر.س</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}renderDamagesCalc(e){const t=Z(this.damagesInput);return`
      <div class="calc-inner-grid">
        <div class="calc-inputs-pane">
          <div class="calc-pane-title">
            <h4>${e?"حساب غرامات التأخير والشرط الجزائي":"Delay Penalties & Tort Damages Calculator"}</h4>
            <p>${e?"وفق المادتين (138 و178) من نظام المعاملات المدنية وضوابط تخفيض التعويض":"Under Articles 138 & 178 Civil Transactions Law"}</p>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"قيمة العقد الإجمالية (ر.س):":"Total Contract Value (SAR):"}</label>
              <input type="number" id="damages-contract-val" class="form-input" value="${this.damagesInput.contractValue}" min="0" step="50000" />
            </div>
            <div class="form-group">
              <label>${e?"أيام التأخير الفعلية:":"Days of Actual Delay:"}</label>
              <input type="number" id="damages-days" class="form-input" value="${this.damagesInput.delayDays}" min="0" />
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"نسبة الغرامة اليومية المحددة (%):":"Daily Penalty Rate (%):"}</label>
              <input type="number" id="damages-daily-rate" class="form-input" value="${this.damagesInput.dailyRatePercent}" step="0.01" min="0" />
            </div>
            <div class="form-group">
              <label>${e?"الحد الأقصى للغرامة التعاقدية (Cap %):":"Maximum Cap Limit (%):"}</label>
              <input type="number" id="damages-cap" class="form-input" value="${this.damagesInput.maxCapPercent}" min="1" max="50" />
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label>${e?"الخسارة المادية المباشرة المثبتة (ر.س):":"Proven Direct Material Loss (SAR):"}</label>
              <input type="number" id="damages-direct" class="form-input" value="${this.damagesInput.directMaterialLoss}" min="0" step="5000" />
            </div>
            <div class="form-group">
              <label>${e?"فوات الكسب المحقق (المادة 138) ر.س:":"Loss of Profit (Art 138) SAR:"}</label>
              <input type="number" id="damages-profit" class="form-input" value="${this.damagesInput.lossOfProfitExpected}" min="0" step="5000" />
            </div>
          </div>
        </div>

        <div class="calc-results-pane">
          <div class="total-entitlement-hero">
            <span class="hero-label">${e?"التعويض الإجمالي المقدر قضائياً:":"Total Assessed Judicial Award:"}</span>
            <div class="hero-number">${t.totalAssessedAwardSar.toLocaleString("ar-SA")} <span class="sar-unit">ر.س</span></div>
            <span class="hero-sub">${e?t.legalAnalysisAr:t.legalAnalysisEn}</span>
          </div>

          <div class="entitlements-breakdown-list">
            <div class="breakdown-item">
              <div class="item-title-col">
                <strong>غرامة التأخير النافذة بعد مراعاة السقف</strong>
                <span>${t.isCapped?"تم تخفيضها للسقف الأقصى المتفق عليه":"ضمن الحدود النظامية"}</span>
              </div>
              <div class="item-amount">${t.cappedPenaltyAmount.toLocaleString("ar-SA")} ر.س</div>
            </div>
            <div class="breakdown-item">
              <div class="item-title-col">
                <strong>التعويض عن الضرر المادي المباشر وفوات الكسب</strong>
                <span>المادة (138) معاملات مدنية</span>
              </div>
              <div class="item-amount">${t.provenDirectDamages.toLocaleString("ar-SA")} ر.س</div>
            </div>
          </div>

          <div class="statutory-basis-box">
            <strong>الرأي القانوني في الشرط الجزائي:</strong>
            <p>⚖️ لا يجوز الجمع بين الشرط الجزائي الكامل والتعويض عن ذات الضرر لتفادي الإثراء بلا سبب؛ وتملك المحكمة سلطة تقديرية في ملاءمة التعويض للخسارة الفعلية.</p>
          </div>
        </div>
      </div>
    `}attachEvents(e){e.querySelectorAll(".calc-tab-btn").forEach(T=>{T.addEventListener("click",()=>{E.playChime(),this.activeTab=T.getAttribute("data-tab"),this.render(e)})});const t=e.querySelector("#labor-basic");t&&t.addEventListener("input",()=>{this.laborInput.basicSalary=Number(t.value),this.render(e)});const i=e.querySelector("#labor-allowances");i&&i.addEventListener("input",()=>{this.laborInput.allowances=Number(i.value),this.render(e)});const a=e.querySelector("#labor-years");a&&a.addEventListener("input",()=>{this.laborInput.years=Number(a.value),this.render(e)});const n=e.querySelector("#labor-months");n&&n.addEventListener("input",()=>{this.laborInput.months=Number(n.value),this.render(e)});const r=e.querySelector("#labor-contract-type");r&&r.addEventListener("change",()=>{this.laborInput.contractType=r.value,this.render(e)});const o=e.querySelector("#labor-term-reason");o&&o.addEventListener("change",()=>{this.laborInput.terminationReason=o.value,this.render(e)});const c=e.querySelector("#labor-vacation-days");c&&c.addEventListener("input",()=>{this.laborInput.unusedLeaveDays=Number(c.value),this.render(e)});const m=e.querySelector("#labor-notice-days");m&&m.addEventListener("input",()=>{this.laborInput.unpaidNoticeDays=Number(m.value),this.render(e)});const p=e.querySelector("#court-claim-val");p&&p.addEventListener("input",()=>{this.courtCostsInput.claimValue=Number(p.value),this.render(e)});const d=e.querySelector("#court-case-type");d&&d.addEventListener("change",()=>{this.courtCostsInput.caseType=d.value,this.render(e)});const h=e.querySelector("#labor-exempt-check");h&&h.addEventListener("change",()=>{this.courtCostsInput.isLaborWorkerExempt=h.checked,this.render(e)});const S=e.querySelector("#m-gross");S&&S.addEventListener("input",()=>{this.inheritanceInput.estateGross=Number(S.value),this.render(e)});const b=e.querySelector("#m-wives");b&&b.addEventListener("change",()=>{this.inheritanceInput.heirs.wifeCount=Number(b.value),this.render(e)});const A=e.querySelector("#m-husband");A&&A.addEventListener("change",()=>{this.inheritanceInput.heirs.husband=A.value==="yes",this.render(e)});const $=e.querySelector("#m-father");$&&$.addEventListener("change",()=>{this.inheritanceInput.heirs.father=$.value==="yes",this.render(e)});const D=e.querySelector("#m-mother");D&&D.addEventListener("change",()=>{this.inheritanceInput.heirs.mother=D.value==="yes",this.render(e)});const x=e.querySelector("#m-sons");x&&x.addEventListener("input",()=>{this.inheritanceInput.heirs.sonsCount=Number(x.value),this.render(e)});const y=e.querySelector("#m-daughters");y&&y.addEventListener("input",()=>{this.inheritanceInput.heirs.daughtersCount=Number(y.value),this.render(e)});const N=e.querySelector("#m-fbrothers");N&&N.addEventListener("input",()=>{this.inheritanceInput.heirs.fullBrothersCount=Number(N.value),this.render(e)});const f=e.querySelector("#m-fsisters");f&&f.addEventListener("input",()=>{this.inheritanceInput.heirs.fullSistersCount=Number(f.value),this.render(e)});const w=e.querySelector("#damages-contract-val");w&&w.addEventListener("input",()=>{this.damagesInput.contractValue=Number(w.value),this.render(e)});const L=e.querySelector("#damages-days");L&&L.addEventListener("input",()=>{this.damagesInput.delayDays=Number(L.value),this.render(e)})}}function te(s,e=25e4){if(!s||s.length===0)return{aggregateScore:10,ratingTier:"weak",ratingLabelAr:"بينات منعدمة أو غير كافية",ratingLabelEn:"Insufficient or Non-existent Evidence",winProbabilityPercent:12,recommendationsAr:["يتعين تقديم دليل كتابي أو رقمي يثبت نشوء الالتزام وتاريخه بدقة.","طلب استجواب الخصم وتوجيه اليمين الحاسمة أو المتممة أمام الدائرة القضائية."],recommendationsEn:["Produce contemporaneous written or digital documentation of obligations.","Seek judicial interrogation of opposing party or tender decisive oath."],burdenOfProofAssessmentAr:"عبء الإثبات يقع على المدعي عملاً بالمادة (1) من نظام الإثبات؛ البينة على من ادعى واليمين على من أنكر.",burdenOfProofAssessmentEn:"Burden of proof rests on claimant pursuant to Article 1 Law of Evidence.",criticalMissingEvidencesAr:["محرر رسمي أو عادي موقع","مراسلات بريد رقمية موثقة"]};let t=0,i=0,a=!1,n=!1,r=!0;s.forEach(A=>{let $=1;A.status==="conclusive"&&($=1.2),A.status==="challenged"&&($=.65),A.type==="official_deed"&&(n=!0,r=!1),A.type==="digital"&&(a=!0,r=!1),(A.type==="ordinary_paper"||A.type==="expert_report")&&(r=!1);const D=A.probativeValue*$;t+=D,i+=100});let o=Math.min(100,Math.round(t/i*100));e>1e5&&r&&!n&&!a&&(o=Math.min(35,o*.4));let c="moderate",m="قوة إثبات متوسطة",p="Moderate Evidentiary Weight",d=Math.min(96,Math.max(15,o));o>=85?(c="conclusive",m="حجية قاطعة وقوة إثبات نافذة",p="Conclusive & High Judicial Probative Force"):o>=70?(c="strong",m="بينات راجحة ومقنعة قضائياً",p="Strong & Preponderant Evidence"):o<50&&(c="weak",m="بينات ضعيفة ومعرضة للدحض أو الدفع الشكلي",p="Vulnerable or Deficient Evidence");const h=[],S=[],b=[];return n&&(h.push("التمسك بالمادة (25) من نظام الإثبات؛ المحرر الرسمي حجة على الكافة ولا يُقبل نقضه إلا بادعاء التزوير رسمياً."),S.push("Assert Article 25 Law of Evidence: Notarized deed is conclusive erga omnes barring formal forgery challenge.")),a?(h.push("الاستناد للمادة (53) من نظام الإثبات لإلزام الدائرة بالاعتداد بالسجلات الرقمية كبينة كتابية كاملة."),S.push("Rely on Article 53 Law of Evidence: digital records possess full written evidentiary admissibility.")):b.push("مراسلات البريد الإلكتروني أو السجلات الرقمية للأنظمة السحابية الموثقة"),e>1e5&&!n&&!a&&(h.push("تنبيه: المطالبة تتجاوز 100,000 ر.س، وتمنع المادة (66) شهادة الشهود فيها؛ يجب تعزيز الموقف بيمين حاسمة أو إقرار قضائي."),S.push("Caution: Claim exceeds 100k SAR threshold under Article 66 barring witness-only proof.")),{aggregateScore:o,ratingTier:c,ratingLabelAr:m,ratingLabelEn:p,winProbabilityPercent:d,recommendationsAr:h,recommendationsEn:S,burdenOfProofAssessmentAr:"تم استيفاء عبء الإثبات بصورة مقنعة تحول عبء النفي أو إثبات البراءة إلى الخصم بموجب قواعد الإثبات الموضوعية.",burdenOfProofAssessmentEn:"Burden of proof successfully discharged shifting evidentiary onus onto counterparty.",criticalMissingEvidencesAr:b}}class ae{constructor(){u(this,"claimAmountSar",35e4);u(this,"evidencesList",[{id:"demo-ev-1",type:"digital",titleAr:"سجلات البريد الإلكتروني والاعتماد الرقمي للدفعة",titleEn:"Digital Email Records & Automated Milestone Approval",sourceAr:"البريد الرسمي للمدعى عليها ونظام ERP",sourceEn:"Corporate domain mailbox & ERP database logs",probativeValue:92,legalBasisAr:"المادة (53) من نظام الإثبات (حجية الدليل الرقمي)",legalBasisEn:"Article 53 Law of Evidence (Digital Evidence)",status:"conclusive",descriptionAr:"رسائل بريد إلكتروني صريحة تفيد فحص التوريد والموافقة على استحقاق الدفعة.",descriptionEn:"Explicit email thread acknowledging completed delivery and approving payment."},{id:"demo-ev-2",type:"ordinary_paper",titleAr:"عقد التوريد الموقع ومحاضر الاستلام الميداني",titleEn:"Executed Supply Contract & Field Handover Minutes",sourceAr:"مستند كتابي موقع ومختوم بسجل الشركة",sourceEn:"Written contract stamped with commercial registration",probativeValue:88,legalBasisAr:"المادة (29) من نظام الإثبات والمادة (94) معاملات مدنية",legalBasisEn:"Article 29 Law of Evidence & Article 94 Civil Transactions",status:"conclusive",descriptionAr:"يثبت التعاقد والشروط الجزائية ومواعيد استحقاق الفواتير.",descriptionEn:"Evidences binding contractual terms and milestone payment schedules."},{id:"demo-ev-3",type:"expert_report",titleAr:"تقرير الخبير القضائي المعتمد عبر منصة خبرة",titleEn:"Judicially Appointed Expert Report via Khebrah Platform",sourceAr:"منصة خبرة - وزارة العدل",sourceEn:"Khebrah Platform - Ministry of Justice",probativeValue:94,legalBasisAr:"المواد (110 - 120) من نظام الإثبات",legalBasisEn:"Articles 110 - 120 Law of Evidence",status:"conclusive",descriptionAr:"أكد التقرير إنجاز المدعية للأعمال بنسبة 98% وعدم صحة ادعاءات العيوب الجسيمة.",descriptionEn:"Expert report confirmed 98% completion, dismissing claims of substantial defect."}])}render(e){const t=v.lang==="ar",i=te(this.evidencesList,this.claimAmountSar);e.innerHTML=`
      <div class="evidence-wrapper fade-in">
        <!-- Top Summary Gauge Banner -->
        <div class="gauge-hero-card">
          <div class="gauge-left">
            <div class="speedometer-box">
              <svg class="speedometer-svg" viewBox="0 0 120 70">
                <path d="M 15 60 A 45 45 0 0 1 105 60" fill="none" stroke="#e2e8f0" stroke-width="12" stroke-linecap="round" />
                <path d="M 15 60 A 45 45 0 0 1 105 60" fill="none" stroke="url(#gauge-grad)" stroke-width="12" stroke-linecap="round"
                  stroke-dasharray="141.3" stroke-dashoffset="${141.3-141.3*(i.aggregateScore/100)}" />
                <defs>
                  <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ef4444" />
                    <stop offset="50%" stop-color="#f59e0b" />
                    <stop offset="100%" stop-color="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="gauge-center-text">
                <span class="gauge-score">${i.aggregateScore}%</span>
                <span class="gauge-label">${t?"قوة الإثبات":"Probative Power"}</span>
              </div>
            </div>
          </div>

          <div class="gauge-right">
            <span class="rating-badge tier-${i.ratingTier}">
              ⚖️ ${t?i.ratingLabelAr:i.ratingLabelEn}
            </span>
            <h3 class="gauge-title">${t?"احتمالية كسب الدعوى القضائية:":"Estimated Judicial Win Likelihood:"} ${i.winProbabilityPercent}%</h3>
            <p class="gauge-desc">${t?i.burdenOfProofAssessmentAr:i.burdenOfProofAssessmentEn}</p>
            <div class="claim-limit-row">
              <label>${t?"قيمة المطالبة محل الإثبات (ر.س):":"Claim Amount under Proof (SAR):"}</label>
              <input type="number" id="evidence-claim-amount" class="small-claim-input" value="${this.claimAmountSar}" min="0" step="25000" />
              ${this.claimAmountSar>1e5?`
                <span class="limit-warn-tag">⚠️ ${t?"تتجاوز 100 ألف (تطبق المادة 66)":"Exceeds 100k (Art 66 applies)"}</span>
              `:""}
            </div>
          </div>
        </div>

        <!-- Evidence List & Form Grid -->
        <div class="evidence-main-grid">
          <!-- Evidence Items List -->
          <div class="evidences-list-pane">
            <div class="pane-header-row">
              <h4>${t?"حزمة البينات والمستندات المودعة في الدعوى":"Filed Case Evidence Bundle"} (${this.evidencesList.length})</h4>
              <button id="add-new-evidence-btn" class="add-evidence-btn">
                + ${t?"إضافة بينة جديدة":"Add New Proof"}
              </button>
            </div>

            <div class="evidence-items-stack">
              ${this.evidencesList.map((a,n)=>`
                <div class="evidence-full-card" data-ev-id="${a.id}">
                  <div class="card-header">
                    <div class="ev-tag-row">
                      <span class="type-badge ${a.type}">
                        ${this.getTypeLabel(a.type,t)}
                      </span>
                      <span class="status-tag status-${a.status}">
                        ${a.status==="conclusive"?"قاطع ومنتج":a.status==="challenged"?"مطعون فيه":"مقبول شكلاً"}
                      </span>
                    </div>
                    <button class="delete-ev-btn" data-delete-idx="${n}" title="${t?"حذف البينة":"Delete Proof"}">✕</button>
                  </div>

                  <h4 class="ev-card-title">${t?a.titleAr:a.titleEn}</h4>
                  <p class="ev-card-desc">${t?a.descriptionAr:a.descriptionEn}</p>
                  
                  <div class="ev-footer-meta">
                    <span class="ev-source">📌 <strong>المصدر:</strong> ${t?a.sourceAr:a.sourceEn}</span>
                    <span class="ev-basis">⚖️ <strong>السند:</strong> ${t?a.legalBasisAr:a.legalBasisEn}</span>
                    <div class="probative-meter-block">
                      <span>القوة الثبوتية: <strong>${a.probativeValue}%</strong></span>
                      <div class="meter-bar"><div class="meter-fill" style="width: ${a.probativeValue}%"></div></div>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Strategic Advice & Recommendations -->
          <div class="evidence-advice-pane">
            <div class="advice-card">
              <h4 class="advice-title">💡 ${t?"التوجيهات القضائية لدعم عبء الإثبات:":"Evidentiary Strategic Recommendations:"}</h4>
              <ul class="advice-list">
                ${(t?i.recommendationsAr:i.recommendationsEn).map(a=>`
                  <li>✓ ${a}</li>
                `).join("")}
              </ul>
            </div>

            ${i.criticalMissingEvidencesAr.length>0?`
              <div class="missing-evidence-card">
                <h4 class="missing-title">⚠️ ${t?"مستندات حاسمة يوصى بإيداعها:":"Crucial Missing Evidence:"}</h4>
                <ul class="missing-list">
                  ${i.criticalMissingEvidencesAr.map(a=>`<li>• ${a}</li>`).join("")}
                </ul>
              </div>
            `:""}

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
    `,this.attachEvents(e)}getTypeLabel(e,t){var a,n;const i={digital:{ar:"دليل رقمي (م53)",en:"Digital Evidence (Art 53)"},official_deed:{ar:"محرر رسمي صادر من كاتب عدل (م25)",en:"Notarized Official Deed (Art 25)"},ordinary_paper:{ar:"محرر عادي موقع (م29)",en:"Customary Written Contract"},testimony:{ar:"شهادة شهود (م66)",en:"Witness Testimony"},expert_report:{ar:"تقرير خبرة قضائية (م110)",en:"Court Khebrah Expert Report"},decisive_oath:{ar:"يمين حاسمة / متممة (م93)",en:"Decisive Judicial Oath"}};return t?((a=i[e])==null?void 0:a.ar)||e:((n=i[e])==null?void 0:n.en)||e}attachEvents(e){const t=e.querySelector("#evidence-claim-amount");t&&t.addEventListener("input",()=>{this.claimAmountSar=Number(t.value),this.render(e)}),e.querySelectorAll(".delete-ev-btn").forEach(a=>{a.addEventListener("click",()=>{const n=Number(a.getAttribute("data-delete-idx"));isNaN(n)||(this.evidencesList.splice(n,1),E.playChime(),this.render(e))})});const i=e.querySelector("#add-new-evidence-btn");i&&i.addEventListener("click",()=>{E.playChime();const a={id:"ev-"+Date.now(),type:"digital",titleAr:"سجل تحويل مصرفي وإقرار استلام إلكتروني",titleEn:"Digital Bank Transfer Receipt & Electronic Confirmation",sourceAr:"كشف حساب مصرفي موثق ومنصة سداد",sourceEn:"Authenticated Bank Statement & SADAD platform receipt",probativeValue:90,legalBasisAr:"المادة (53) من نظام الإثبات",legalBasisEn:"Article 53 Law of Evidence",status:"conclusive",descriptionAr:"حوالة مصرفية صريحة بقيمة الالتزام مطابقة للسجلات المحاسبية.",descriptionEn:"Wire transfer receipt verifying partial payment performance."};this.evidencesList.push(a),this.render(e)})}}const ie={claim_commercial:{templateType:"claim_commercial",courtName:"المحكمة التجارية بالرياض",circuitName:"الدائرة التجارية السابعة",claimantName:"شركة الإمداد الرقمي للتقنية المحدودة",claimantId:"7001928341",claimantCapacity:"المدعية (المتعاقد والمورد الأساسي)",claimantAddress:"الرياض - طريق الملك فهد - برج التقنية",defendantName:"مؤسسة الرواد للتجارة والمقاولات",defendantId:"1010398241",defendantAddress:"الرياض - حي الملز - شارع الستين",caseNumber:"451082914",caseYear:"1445هـ",claimAmountSar:485e3,contractDate:"1444/08/15هـ",contractSubject:"توريد وتركيب أجهزة وخوادم سحابية وربط قواعد البيانات",factualBackground:"قامت موكلتي بإنجاز كافة أعمال التوريد المتفق عليها وتسليمها بموجب محاضر فحص واستلام رسمية موقعة ومختومة من الطرفين. وحيث إن المدعى عليها سددت الدفعة الأولى وامتنعت عن سداد باقي قيمة العقد دون مسوغ شرعي أو نظامي رغم التنبيه والإخطار.",formalDefenses:"",substantiveDefenses:"",requestedRelief:`1- إلزام المدعى عليها بأن تدفع للمدعية مبلغاً قدره (485,000) ريال سعودي المتبقي من قيمة العقد.
2- إلزامها بالتعويض عن أضرار التأخير وغرامة الإخلال بمبلغ (48,500) ريال.
3- إلزامها بأتعاب المحاماة ومصاريف الدعوى القضائية بمبلغ (35,000) ريال.`,statutoryArticles:"المادة (94) و(138) و(178) من نظام المعاملات المدنية، والمادة (53) من نظام الإثبات.",attorneyName:"المحامي / طارق ابوعشي",licenseNumber:"42/1098",retainerAmountSar:35e3,contingencyPercent:10},defense_pleading:{templateType:"defense_pleading",courtName:"المحكمة التجارية بجدة",circuitName:"الدائرة التجارية الرابعة",claimantName:"شركة البناء الحديث ش.م.م",claimantId:"7002819441",claimantCapacity:"المدعية",claimantAddress:"جدة - حي الأندلس",defendantName:"شركة التطوير المعماري للاستثمار",defendantId:"1010884920",defendantAddress:"جدة - طريق الملك عبدالعزيز",caseNumber:"442194012",caseYear:"1445هـ",claimAmountSar:125e4,contractDate:"1444/01/20هـ",contractSubject:"عقد مقاولة وتشييد أبراج سكنية",factualBackground:"أقامت المدعية دعواها مطالبة بمستخلصات ختامية، متجاهلة تقارير الاستشاري المشرف التي أثبتت وجود عيوب إنشائية جسيمة في العزل والتشطيبات تجاوزت تكلفتها قيمة المستخلص.",formalDefenses:"الدفع بعدم قبول الدعوى لرفعها قبل استنفاد شرط اللجوء إلى التوفيق والوساطة المنصوص عليه صراحة في البند (24) من العقد، استناداً للمادة (60) من نظام المحاكم التجارية.",substantiveDefenses:"ثبوت إخلال المدعية بالمواصفات القياسية لكود البناء السعودي ووجود تأخير غير مبرر لمدة 120 يوماً يوجب تطبيق غرامة التأخير التعاقدية وإعمال المقاصة القضائية طبقاً لنظام المعاملات المدنية.",requestedRelief:`أولاً: أصلياً، الحكم بعدم قبول الدعوى شكلاً لوجود شرط الوساطة الملزم.
ثانياً: احتياطياً، في الموضوع، رفض الدعوى لثبوت العيوب المانعة للاستحقاق والحكم بطلبنا العارض بإلزام المدعية بتعويض التأخير وأتعاب المحاماة.`,statutoryArticles:"المادة (60) نظام المحاكم التجارية، المواد (94، 178، 351) نظام المعاملات المدنية، والمادة (29) نظام الإثبات.",attorneyName:"المحامي / طارق ابوعشي",licenseNumber:"42/1098",retainerAmountSar:5e4,contingencyPercent:8},appeal_brief:{templateType:"appeal_brief",courtName:"محكمة الاستئناف بالرياض",circuitName:"دائرة الاستئناف التجارية الأولى",claimantName:"شركة سلاسل الإمداد اللوجستية ش.م.م",claimantId:"7003847291",claimantCapacity:"المستأنفة (المدعى عليها سابقاً)",claimantAddress:"الرياض - حي العليا",defendantName:"مؤسسة التقنية العالمية المحدودة",defendantId:"1010573829",defendantAddress:"الرياض - حي الصحافة",caseNumber:"441029341",caseYear:"1445هـ",claimAmountSar:89e4,contractDate:"1443/11/10هـ",contractSubject:"استئناف الحكم الابتدائي رقم (441029341) القاضي بإلزام المستأنفة",factualBackground:"أصدرت الدائرة الابتدائية حكمها بإلزام موكلتي بالمبلغ، وقد شابه القصور في التسبيب والفساد في الاستدلال، إذ التفتت الدائرة عن ندب خبير هندسي لفحص العيوب الجوهرية المدفوع بها، واكتفت بأوراق عادية مجردة لم يثبت توقيعها من المفوض نظاماً.",formalDefenses:"قيد الاستئناف خلال المهلة النظامية المقررة (ثلاثون يوماً) من تاريخ إيداع الصك بالنظام الإلكتروني عملاً بالمادة (187) مرافعات شرعية.",substantiveDefenses:`1- الخطأ في تطبيق نظام الإثبات (المادة 29 و66) بالاعتماد على بينة غير مكتملة.
2- إغفال حق الدفاع الجوهري بعدم إحالة ملف الدعوى إلى منصة (خبرة) لتقدير نسبة الإنجاز الفعلية.`,requestedRelief:`1- قبول الاستئناف شكلاً لوروده في الميعاد النظامي.
2- موضوعاً: نقض وإلغاء الحكم الابتدائي المستأنف، والقضاء مجدداً برفض دعوى المدعية، أو إعادة القضية للدائرة الابتدائية لندب خبير هندسي محايد.`,statutoryArticles:"المادة (187) و(188) من نظام المرافعات الشرعية، والمادة (110) من نظام الإثبات.",attorneyName:"المحامي / طارق ابوعشي",licenseNumber:"42/1098",retainerAmountSar:45e3,contingencyPercent:12},retainer_agreement:{templateType:"retainer_agreement",courtName:"المحاكم التجارية والعمالية والعامة بالرياض",circuitName:"كافة الدوائر القضائية ولجان الفصل وهيئات التحكيم",claimantName:"شركة الاستثمار القابضة للتطوير العقاري",claimantId:"7008492019",claimantCapacity:"الطرف الأول (الموكل)",claimantAddress:"الرياض - طريق الملك خالد",defendantName:"مكتب المحامي طارق ابوعشي للاستشارات القانونية والتمثيل القضائي",defendantId:"1029384756",defendantAddress:"أبها / الرياض - ترخيص رقم 42/1098",caseNumber:"اتفاقية تمثيل 1445-09",caseYear:"1445هـ",claimAmountSar:35e5,contractDate:"1445/07/01هـ",contractSubject:"عقد أتعاب محاماة وتمثيل قضائي وصياغة لوائح ومذكرات",factualBackground:"اتفق الطرفان بكامل الأهلية المعتبرة شرعاً ونظاماً على قيام الطرف الثاني بتمثيل الطرف الأول في النزاع القضائي المنعقد أمام المحاكم السعودية وتبادل المذكرات وحضور الجلسات حتى صدور حكم قطعي.",formalDefenses:"",substantiveDefenses:"",requestedRelief:"الالتزام ببذل العناية المهنية الواجبة طبقاً لنظام المحاماة ولائحته التنفيذية وميثاق السلوك المهني الصادر عن الهيئة السعودية للمحامين.",statutoryArticles:"نظام المحاماة ولائحته التنفيذية (مرسوم ملكي م/38)، ونظام المعاملات المدنية.",attorneyName:"المحامي / طارق ابوعشي",licenseNumber:"42/1098",retainerAmountSar:6e4,contingencyPercent:7.5}};function V(s){const e={claim_commercial:"صَحِيفَةُ دَعْوَى قَضَائِيَّةٍ (مُطَالَبَةٌ مَالِيَّةٌ تِجَارِيَّةٌ)",defense_pleading:"مُذَكِّرَةٌ جَوَابِيَّةٌ مُتَضَمِّنَةٌ دُفُوعاً شَكْلِيَّةً وَمَوْضُوعِيَّةً",appeal_brief:"لائِحَةُ اعْتِرَاضٍ بِطَلَبِ الاسْتِئْنَافِ مَسْبُوبَةٌ نِظَاماً",retainer_agreement:"عَقْدُ أَتْعَابِ مُحَامَاةٍ وَتَمْثِيلٍ قَضَائِيٍّ نَمُوذَجِيٍّ مُعْتَمَدٍ"},t=s.templateType==="retainer_agreement";return`
    <div class="judicial-doc-container" dir="rtl" style="font-family: 'Tajawal', 'Cairo', sans-serif; line-height: 1.8; color: #0f172a; padding: 2.5rem; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; max-width: 860px; margin: 0 auto; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);">
      <!-- Official Header -->
      <div style="border-bottom: 2px solid #064e3b; padding-bottom: 1.5rem; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 1.15rem; font-weight: 800; color: #064e3b;">المملكة العربية السعودية</div>
          <div style="font-size: 0.95rem; color: #334155;">وزارة العدل - منصة التقاضي الإلكتروني (ناجز)</div>
          <div style="font-size: 0.9rem; color: #64748b; margin-top: 0.25rem;">${s.courtName} - ${s.circuitName}</div>
        </div>
        <div style="text-align: left; font-size: 0.85rem; color: #475569; border: 1px solid #e2e8f0; padding: 0.5rem 1rem; border-radius: 8px; background: #f8fafc;">
          <div><strong>رقم القيد:</strong> ${s.caseNumber||"451082914"}</div>
          <div><strong>السنة:</strong> ${s.caseYear||"1445هـ"}</div>
          <div><strong>التاريخ:</strong> ${s.contractDate||"1445/07/15هـ"}</div>
        </div>
      </div>

      <!-- Document Title -->
      <div style="text-align: center; margin: 2rem 0;">
        <span style="display: inline-block; background: #f0fdf4; color: #064e3b; border: 1px solid #86efac; padding: 0.6rem 2rem; border-radius: 9999px; font-weight: 800; font-size: 1.25rem; letter-spacing: 0.5px;">
          ${e[s.templateType]}
        </span>
      </div>

      <!-- Parties Section -->
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; margin-bottom: 1.75rem;">
        <div style="margin-bottom: 0.75rem;">
          <strong style="color: #064e3b;">${t?"الطرف الأول (الموكل):":"المدعي (أو المستأنف):"}</strong>
          <span>${s.claimantName}</span> | <strong>الهوية / السجل:</strong> <span>${s.claimantId}</span>
          <div style="font-size: 0.9rem; color: #64748b; margin-top: 0.2rem;">العنوان الوطني: ${s.claimantAddress}</div>
        </div>
        <div style="border-top: 1px dashed #cbd5e1; padding-top: 0.75rem;">
          <strong style="color: #b45309;">${t?"الطرف الثاني (المحامي الوكيل):":"المدعى عليه (أو المستأنف ضده):"}</strong>
          <span>${s.defendantName}</span> | <strong>الهوية / السجل:</strong> <span>${s.defendantId}</span>
          <div style="font-size: 0.9rem; color: #64748b; margin-top: 0.2rem;">العنوان الوطني: ${s.defendantAddress}</div>
        </div>
        <div style="border-top: 1px dashed #cbd5e1; padding-top: 0.75rem; margin-top: 0.75rem; font-size: 0.95rem;">
          <strong style="color: #0f172a;">موضوع النزاع / العقد:</strong> <span>${s.contractSubject}</span> 
          ${s.claimAmountSar>0?`| <strong>قيمة المطالبة:</strong> <span style="font-weight: 700; color: #047857;">${s.claimAmountSar.toLocaleString("ar-SA")} ر.س</span>`:""}
        </div>
      </div>

      <!-- Facts Section -->
      <div style="margin-bottom: 1.75rem;">
        <h4 style="font-size: 1.1rem; color: #064e3b; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="width: 8px; height: 8px; background: #064e3b; border-radius: 50%; display: inline-block;"></span>
          أولاً: الوقائع والخلفية الموضوعية
        </h4>
        <p style="text-align: justify; color: #334155; line-height: 1.9; white-space: pre-line; background: #ffffff; padding: 0.5rem 0.25rem;">
          ${s.factualBackground}
        </p>
      </div>

      <!-- Formal & Substantive Defenses (if present) -->
      ${s.formalDefenses?`
        <div style="margin-bottom: 1.75rem;">
          <h4 style="font-size: 1.1rem; color: #b45309; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <span style="width: 8px; height: 8px; background: #b45309; border-radius: 50%; display: inline-block;"></span>
            ثانياً: الدفوع الشكلية الأولية
          </h4>
          <p style="text-align: justify; color: #334155; line-height: 1.9; white-space: pre-line;">
            ${s.formalDefenses}
          </p>
        </div>
      `:""}

      ${s.substantiveDefenses?`
        <div style="margin-bottom: 1.75rem;">
          <h4 style="font-size: 1.1rem; color: #047857; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <span style="width: 8px; height: 8px; background: #047857; border-radius: 50%; display: inline-block;"></span>
            ${s.formalDefenses?"ثالثاً:":"ثانياً:"} الأسانيد الموضوعية ودحض الدعوى
          </h4>
          <p style="text-align: justify; color: #334155; line-height: 1.9; white-space: pre-line;">
            ${s.substantiveDefenses}
          </p>
        </div>
      `:""}

      <!-- Statutory Grounding -->
      <div style="margin-bottom: 1.75rem; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1rem 1.25rem; border-radius: 8px;">
        <h4 style="font-size: 1rem; color: #064e3b; margin: 0 0 0.5rem 0; font-weight: 700;">الأسانيد والمواد النظامية المعتمدة:</h4>
        <div style="color: #14532d; font-size: 0.95rem; font-weight: 600;">${s.statutoryArticles}</div>
      </div>

      <!-- Relief Sought / Requests -->
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.1rem; color: #064e3b; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="width: 8px; height: 8px; background: #d97706; border-radius: 50%; display: inline-block;"></span>
          ${t?"التزامات الطرفين والأتعاب:":"الطلبات الختامية الجازمة:"}
        </h4>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 1.25rem; color: #0f172a; white-space: pre-line; line-height: 1.9;">
          ${s.requestedRelief}
        </div>
      </div>

      ${t?`
        <!-- Retainer Financial Schedule -->
        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 1.25rem; margin-bottom: 2rem;">
          <h4 style="color: #92400e; margin: 0 0 0.75rem 0; font-size: 1rem;">الجدول المالي للأتعاب المتفق عليها:</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div>الأتعاب المقدمة الثابتة: <strong>${s.retainerAmountSar.toLocaleString("ar-SA")} ر.س</strong></div>
            <div>نسبة أتعاب النجاح والتحصيل: <strong>${s.contingencyPercent}% من المبالغ المحصلة</strong></div>
          </div>
        </div>
      `:""}

      <!-- Signatures Footer -->
      <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 2px solid #064e3b; display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <div style="font-size: 0.95rem; font-weight: 700; color: #0f172a;">مقدمه لفضيلتكم /</div>
          <div style="font-size: 1rem; color: #064e3b; font-weight: 800; margin-top: 0.25rem;">${s.attorneyName}</div>
          <div style="font-size: 0.85rem; color: #64748b;">رخصة المحاماة رقم: ${s.licenseNumber} - الهيئة السعودية للمحامين</div>
        </div>
        <div style="text-align: center; border: 2px dashed #064e3b; border-radius: 8px; padding: 0.75rem 1.5rem; color: #064e3b; font-size: 0.85rem; background: #f0fdf4;">
          <div>خاتم التوقيع القضائي والتوثيق</div>
          <div style="margin-top: 0.25rem; font-weight: 800; font-size: 0.9rem;">منصة بَيّنة الذكية للتقاضي</div>
        </div>
      </div>
    </div>
  `}class ne{constructor(){u(this,"currentTemplate","claim_commercial");u(this,"formData");this.formData=JSON.parse(JSON.stringify(ie))}getCurrentData(){return this.formData[this.currentTemplate]}render(e){const t=v.lang==="ar",i=this.getCurrentData(),a=V(i);e.innerHTML=`
      <div class="drafter-wrapper fade-in">
        <!-- Top Toolbar & Template Switcher -->
        <div class="drafter-toolbar-card">
          <div class="template-selector-group">
            <span class="toolbar-label">📝 ${t?"اختر النموذج القضائي المعتمد:":"Select Standard Judicial Template:"}</span>
            <div class="template-buttons-row">
              <button class="template-btn ${this.currentTemplate==="claim_commercial"?"active":""}" data-tpl="claim_commercial">
                ⚖️ ${t?"صحيفة دعوى مالية وتجارية":"Commercial Financial Claim"}
              </button>
              <button class="template-btn ${this.currentTemplate==="defense_pleading"?"active":""}" data-tpl="defense_pleading">
                🛡️ ${t?"مذكرة جوابية بدفوع شكلية":"Pleading with Formal Defenses"}
              </button>
              <button class="template-btn ${this.currentTemplate==="appeal_brief"?"active":""}" data-tpl="appeal_brief">
                📜 ${t?"لائحة استئناف مسببة":"Reasoned Appellate Brief"}
              </button>
              <button class="template-btn ${this.currentTemplate==="retainer_agreement"?"active":""}" data-tpl="retainer_agreement">
                🤝 ${t?"عقد أتعاب محاماة معتمد":"Standard Bar Retainer Agreement"}
              </button>
            </div>
          </div>

          <div class="drafter-export-actions">
            <button id="print-pleading-btn" class="action-btn print-btn">
              🖨️ ${v.t.printDoc}
            </button>
            <button id="copy-pleading-btn" class="action-btn copy-btn">
              📋 ${t?"نسخ النص القضائي":"Copy Text"}
            </button>
          </div>
        </div>

        <!-- Split Screen: Form Editor on One Side, Live Judicial Preview on Other -->
        <div class="drafter-split-container">
          <!-- Editor Controls Pane -->
          <div class="drafter-form-pane">
            <div class="pane-title-box">
              <h4>${t?"تخصيص بيانات اللائحة والمرافعة":"Customize Pleading Fields & Parties"}</h4>
              <p>${t?"يتم تحديث الصك القضائي فوراً وبشكل تلقائي":"Instant real-time judicial formatting"}</p>
            </div>

            <div class="form-scrollable-body">
              <div class="form-row-2">
                <div class="form-group">
                  <label>${t?"المحكمة المختصة:":"Competent Court:"}</label>
                  <input type="text" id="df-court" class="form-input" value="${i.courtName}" />
                </div>
                <div class="form-group">
                  <label>${t?"الدائرة القضائية:":"Circuit:"}</label>
                  <input type="text" id="df-circuit" class="form-input" value="${i.circuitName}" />
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label>${t?"اسم المدعي / الموكل:":"Claimant / Client Name:"}</label>
                  <input type="text" id="df-claimant" class="form-input" value="${i.claimantName}" />
                </div>
                <div class="form-group">
                  <label>${t?"السجل التجاري / الهوية:":"CR / National ID:"}</label>
                  <input type="text" id="df-claimant-id" class="form-input" value="${i.claimantId}" />
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label>${t?"اسم المدعى عليه / الوكيل:":"Defendant Name:"}</label>
                  <input type="text" id="df-defendant" class="form-input" value="${i.defendantName}" />
                </div>
                <div class="form-group">
                  <label>${t?"سجل المدعى عليه / الهوية:":"Defendant CR / ID:"}</label>
                  <input type="text" id="df-defendant-id" class="form-input" value="${i.defendantId}" />
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label>${t?"موضوع النزاع / التعاقد:":"Contract / Dispute Subject:"}</label>
                  <input type="text" id="df-subject" class="form-input" value="${i.contractSubject}" />
                </div>
                <div class="form-group">
                  <label>${t?"قيمة المطالبة (ر.س):":"Claim Amount (SAR):"}</label>
                  <input type="number" id="df-amount" class="form-input" value="${i.claimAmountSar}" />
                </div>
              </div>

              <div class="form-group">
                <label>${t?"أولاً: الوقائع والخلفية الموضوعية:":"Factual Background & Context:"}</label>
                <textarea id="df-facts" class="form-textarea" rows="4">${i.factualBackground}</textarea>
              </div>

              ${i.templateType==="defense_pleading"||i.templateType==="appeal_brief"?`
                <div class="form-group">
                  <label>${t?"الدفوع الشكلية الأولية (إن وجدت):":"Preliminary Formal Defenses:"}</label>
                  <textarea id="df-formal" class="form-textarea" rows="2">${i.formalDefenses}</textarea>
                </div>
                <div class="form-group">
                  <label>${t?"الأسانيد والدفوع الموضوعية:":"Substantive Grounds & Defenses:"}</label>
                  <textarea id="df-substantive" class="form-textarea" rows="3">${i.substantiveDefenses}</textarea>
                </div>
              `:""}

              <div class="form-group">
                <label>${t?"الأسانيد والمواد النظامية المستشهد بها:":"Statutory Articles & Precedents Cited:"}</label>
                <input type="text" id="df-statutory" class="form-input" value="${i.statutoryArticles}" />
              </div>

              <div class="form-group">
                <label>${t?"الطلبات الختامية الجازمة:":"Definitive Relief Sought:"}</label>
                <textarea id="df-relief" class="form-textarea" rows="3">${i.requestedRelief}</textarea>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label>${t?"اسم المحامي الوكيل:":"Attorney Name:"}</label>
                  <input type="text" id="df-attorney" class="form-input" value="${i.attorneyName}" />
                </div>
                <div class="form-group">
                  <label>${t?"رقم رخصة المحاماة:":"Bar License Number:"}</label>
                  <input type="text" id="df-license" class="form-input" value="${i.licenseNumber}" />
                </div>
              </div>
            </div>
          </div>

          <!-- Live Document Preview Pane -->
          <div class="drafter-preview-pane">
            <div class="preview-badge-row">
              <span class="preview-badge">📜 ${t?"معاينة الصك القضائي المعتمد (جاهز للطباعة والتصدير)":"Official Judicial Preview (Print Ready)"}</span>
            </div>
            <div id="live-rendered-judicial-doc">
              ${a}
            </div>
          </div>
        </div>
      </div>
    `,this.attachEvents(e)}attachEvents(e){e.querySelectorAll(".template-btn").forEach(r=>{r.addEventListener("click",()=>{E.playGavel(),this.currentTemplate=r.getAttribute("data-tpl"),this.render(e)})});const t=(r,o)=>{const c=e.querySelector(r);c&&c.addEventListener("input",()=>{this.formData[this.currentTemplate][o]=c.value,this.updateLivePreview(e)})};t("#df-court","courtName"),t("#df-circuit","circuitName"),t("#df-claimant","claimantName"),t("#df-claimant-id","claimantId"),t("#df-defendant","defendantName"),t("#df-defendant-id","defendantId"),t("#df-subject","contractSubject"),t("#df-facts","factualBackground"),t("#df-formal","formalDefenses"),t("#df-substantive","substantiveDefenses"),t("#df-statutory","statutoryArticles"),t("#df-relief","requestedRelief"),t("#df-attorney","attorneyName"),t("#df-license","licenseNumber");const i=e.querySelector("#df-amount");i&&i.addEventListener("input",()=>{this.formData[this.currentTemplate].claimAmountSar=Number(i.value),this.updateLivePreview(e)});const a=e.querySelector("#print-pleading-btn");a&&a.addEventListener("click",()=>{E.playChime(),window.print()});const n=e.querySelector("#copy-pleading-btn");n&&n.addEventListener("click",()=>{const r=this.getCurrentData(),o=`
=== ${r.courtName} - ${r.circuitName} ===
موضوع النزاع: ${r.contractSubject}
المدعي: ${r.claimantName} (سجل: ${r.claimantId})
المدعى عليه: ${r.defendantName} (سجل: ${r.defendantId})
قيمة المطالبة: ${r.claimAmountSar.toLocaleString()} ريال

الوقائع:
${r.factualBackground}

الدفوع والأسانيد:
${r.statutoryArticles}

الطلبات:
${r.requestedRelief}

مقدمه: ${r.attorneyName} (ترخيص: ${r.licenseNumber})
        `.trim();navigator.clipboard.writeText(o).then(()=>{E.playChime(),n.textContent="✓ تم النسخ بنجاح!",setTimeout(()=>{n.textContent="📋 نسخ النص القضائي"},2e3)})})}updateLivePreview(e){const t=e.querySelector("#live-rendered-judicial-doc");t&&(t.innerHTML=V(this.getCurrentData()))}}class re{constructor(){u(this,"container");this.container=document.createElement("div"),this.container.id="bayyina-modal-root",document.body.appendChild(this.container)}showArticleModal(e,t){const i=v.lang==="ar",a={conclusive:{bg:"#dcfce7",text:"#15803d",labelAr:"حجية قاطعة ملزمة للكافة",labelEn:"Conclusive Force"},high:{bg:"#e0f2fe",text:"#0369a1",labelAr:"قوة إثبات راجحة ومقنعة",labelEn:"High Probative Weight"},medium:{bg:"#fef3c7",text:"#b45309",labelAr:"بينة استئناسية",labelEn:"Corroborative Evidence"},circumstantial:{bg:"#f1f5f9",text:"#475569",labelAr:"قرينة قضائية بسيطة",labelEn:"Circumstantial"}},n=a[e.evidentiaryWeight]||a.high;this.container.innerHTML=`
      <div class="modal-backdrop fade-in">
        <div class="modal-card">
          <div class="modal-header">
            <div class="modal-title-group">
              <span class="modal-badge">📜 ${i?t.nameAr:t.nameEn}</span>
              <h3 class="modal-title">
                ${i?`المادة (${e.articleNumber}): ${e.titleAr}`:`Article (${e.articleNumber}): ${e.titleEn}`}
              </h3>
            </div>
            <button class="modal-close-btn" id="modal-close-btn">✕</button>
          </div>

          <div class="modal-body">
            <!-- Royal Decree & Metadata Box -->
            <div class="statute-decree-box">
              <div><strong>المرسوم الملكي:</strong> ${i?t.royalDecreeAr:t.royalDecreeEn}</div>
              <div><strong>التاريخ:</strong> ${t.yearHijri} (${t.yearGregorian}) | <strong>التصنيف:</strong> ${i?t.category:t.categoryEn}</div>
            </div>

            <!-- Official Statutory Text -->
            <div class="modal-section">
              <h4 class="section-title">🏛️ ${i?"النص النظامي الرسمي المعتمد:":"Official Statutory Text:"}</h4>
              <div class="statutory-text-box">
                ${i?e.textAr:e.textEn}
              </div>
            </div>

            <!-- In-Depth Legal Commentary -->
            <div class="modal-section">
              <h4 class="section-title">⚖️ ${i?"التحليل والشرح القضائي والفقهي:":"Judicial Analysis & Commentary:"}</h4>
              <div class="commentary-box">
                ${i?e.commentaryAr:e.commentaryEn}
              </div>
            </div>

            <!-- Evidentiary Weight & Tags -->
            <div class="modal-section">
              <div class="weight-tags-row">
                <div class="weight-info-box">
                  <span class="weight-title">${i?"الحجية والقوة الثبوتية:":"Evidentiary Weight:"}</span>
                  <span class="weight-pill" style="background: ${n.bg}; color: ${n.text};">
                    ${i?n.labelAr:n.labelEn}
                  </span>
                </div>
                <div class="tags-info-box">
                  <span class="weight-title">${i?"الكلمات الدلالية:":"Keywords:"}</span>
                  <div class="tags-cluster">
                    ${e.tags.map(r=>`<span class="tag-pill">#${r}</span>`).join("")}
                  </div>
                </div>
              </div>
            </div>

            <!-- Related Judicial Precedents -->
            ${e.precedents&&e.precedents.length>0?`
              <div class="modal-section">
                <h4 class="section-title">⚖️ ${i?"المبادئ والسوابق القضائية المرتبطة:":"Related Judicial Precedents:"}</h4>
                <div class="precedents-list">
                  ${e.precedents.map(r=>`
                    <div class="precedent-card">
                      <div class="p-top">
                        <span class="p-court">${i?r.court:r.courtEn}</span>
                        <span class="p-number">صك رقم ${r.judgmentNumber} لسنة ${r.yearHijri}هـ</span>
                      </div>
                      <div class="p-principle">
                        <strong>المبدأ القضائي المستقر:</strong>
                        <p>${i?r.principleAr:r.principleEn}</p>
                      </div>
                      <div class="p-summary">
                        <strong>ملخص التطبيق:</strong>
                        <p>${i?r.summaryAr:r.summaryEn}</p>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
            `:""}
          </div>

          <div class="modal-footer">
            <button class="footer-close-btn" id="modal-footer-close-btn">${v.t.close}</button>
          </div>
        </div>
      </div>
    `,this.attachModalEvents()}showJudgmentDeedModal(e,t){v.lang,this.container.innerHTML=`
      <div class="modal-backdrop fade-in">
        <div class="modal-card wide-card">
          <div class="modal-header">
            <div class="modal-title-group">
              <span class="modal-badge">⚖️ صك حكم قضائي نهائي موثق (منصة ناجز)</span>
              <h3 class="modal-title">صك حكم رقم (${e.caseNumber})</h3>
            </div>
            <button class="modal-close-btn" id="modal-close-btn">✕</button>
          </div>

          <div class="modal-body printable-body">
            <div class="deed-seal-header">
              <div class="header-emblem">المملكة العربية السعودية<br>وزارة العدل - المجلس الأعلى للقضاء<br>${e.courtNameAr}</div>
              <div class="qr-placeholder">
                <div class="mock-qr">🔳 QR ناجز</div>
                <span>موثق رسمياً</span>
              </div>
            </div>

            <h3 class="deed-heading">صَكُّ حُكْمٍ قَضَائِيٍّ إِكْتَسَبَ الْقَطْعِيَّةَ</h3>

            <div class="deed-parties-summary">
              <div><strong>الدائرة القضائية:</strong> ${e.circuitAr}</div>
              <div><strong>تاريخ النطق بالحكم:</strong> 1445/05/20هـ</div>
              <div><strong>المدعي:</strong> ${e.plaintiffAr}</div>
              <div><strong>المدعى عليه:</strong> ${e.defendantAr}</div>
              <div><strong>موضوع الدعوى:</strong> ${e.legalSubjectAr}</div>
            </div>

            <div class="deed-section">
              <h4>أولاً: أسباب الحكم ومستنداته القضائية</h4>
              <p style="text-align: justify; line-height: 2;">
                حيث نظرت الدائرة الدعوى المقيدة برقم (${e.caseNumber})، وبسماع أقوال الطرفين، وتدقيق المستندات والمحررات الكتابية والرقمية المقدمة وفق المادة (53) من نظام الإثبات، وبناءً على ما انتهى إليه تقرير الخبير القضائي المعتمد، ولما كان العقد شريعة المتعاقدين وفق المادة (94) من نظام المعاملات المدنية، وحيث ثبت للدائرة إخلال المدعى عليها بالالتزام التعاقدي دون مسوغ شرعي أو نظامي، وحيث انقضت المهلة النظامية للاعتراض دون تقديم استئناف صحيح؛ فإن الحكم قد اكتسب القطعية وأصبح واجباً للنفاذ.
              </p>
            </div>

            <div class="deed-verdict-box">
              <h4>ثانياً: منطوق الحكم القضائي</h4>
              <p class="verdict-strong-text">
                ${t.judgmentText?t.judgmentText:e.stages[4].judgmentText||"حكمت الدائرة بإلزام المدعى عليها بدفع المبالغ المحكوم بها فوراً وتضمينها مصاريف الدعوى القضائية."}
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
            <button class="footer-close-btn" id="modal-footer-close-btn">${v.t.close}</button>
          </div>
        </div>
      </div>
    `,this.attachModalEvents();const i=this.container.querySelector("#modal-print-btn");i&&i.addEventListener("click",()=>{window.print()})}attachModalEvents(){const e=()=>{E.playChime(),this.container.innerHTML=""},t=this.container.querySelector("#modal-close-btn"),i=this.container.querySelector("#modal-footer-close-btn"),a=this.container.querySelector(".modal-backdrop");t&&t.addEventListener("click",e),i&&i.addEventListener("click",e),a&&a.addEventListener("click",n=>{n.target===a&&e()})}}class se{constructor(){u(this,"currentView","codex");u(this,"navHeader");u(this,"codexView");u(this,"simulatorView");u(this,"calculatorsView");u(this,"evidenceView");u(this,"drafterView");u(this,"modalView");u(this,"headerContainer");u(this,"mainContentContainer");this.modalView=new re,this.navHeader=new z(e=>{this.switchView(e)}),this.codexView=new U((e,t)=>{this.modalView.showArticleModal(e,t)}),this.simulatorView=new Q((e,t)=>{this.modalView.showJudgmentDeedModal(e,t)}),this.calculatorsView=new ee,this.evidenceView=new ae,this.drafterView=new ne,v.subscribe(()=>{this.renderAll()})}init(){const e=document.querySelector("#app");e&&(e.innerHTML=`
      <div id="header-mount"></div>
      <main id="app-main-content"></main>
    `,this.headerContainer=document.querySelector("#header-mount"),this.mainContentContainer=document.querySelector("#app-main-content"),this.renderAll())}switchView(e){this.currentView=e,this.navHeader.setActive(e),this.renderView()}renderAll(){this.navHeader.render(this.headerContainer),this.renderView()}renderView(){switch(this.mainContentContainer.innerHTML="",this.currentView){case"codex":this.codexView.render(this.mainContentContainer);break;case"simulator":this.simulatorView.render(this.mainContentContainer);break;case"calculators":this.calculatorsView.render(this.mainContentContainer);break;case"evidence":this.evidenceView.render(this.mainContentContainer);break;case"drafter":this.drafterView.render(this.mainContentContainer);break}}}document.addEventListener("DOMContentLoaded",()=>{new se().init()});
