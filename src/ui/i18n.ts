import { Language } from '../types';

export interface Translations {
  appName: string;
  appSub: string;
  courtTiers: string;
  navCodex: string;
  navSimulator: string;
  navCalculators: string;
  navEvidence: string;
  navDrafter: string;
  gavelBtn: string;
  langBtn: string;
  soundBtn: string;
  searchPlaceholder: string;
  statutesCount: string;
  articlesCount: string;
  precedentsCount: string;
  caseScenariosCount: string;
  printDoc: string;
  exportMarkdown: string;
  calculate: string;
  viewDetails: string;
  close: string;
  back: string;
  stageCompleted: string;
  stageInProgress: string;
  stageUpcoming: string;
  executeStageAction: string;
  nextStage: string;
  previousStage: string;
  verdictIssued: string;
  evidenceStrength: string;
}

export const I18N_DICT: Record<Language, Translations> = {
  ar: {
    appName: 'بَيّنة',
    appSub: 'المنصة القضائية الذكية للأنظمة السعودية وإدارة القضايا والمحاماة',
    courtTiers: 'التدرج القضائي والمحاكم',
    navCodex: 'مدونة الأنظمة الذكية',
    navSimulator: 'محاكي التقاضي وناجز',
    navCalculators: 'الحاسبات القضائية',
    navEvidence: 'مصفوفة الإثبات والبينات',
    navDrafter: 'محرر اللوائح والعقود',
    gavelBtn: 'قرع مطرقة القضاء',
    langBtn: 'English',
    soundBtn: 'الصوت',
    searchPlaceholder: 'ابحث في نصوص الأنظمة، المواد، المراسيم الملكية، أو الكلمات الدلالية...',
    statutesCount: 'الأنظمة المقننة',
    articlesCount: 'المواد المستوفاة',
    precedentsCount: 'المبادئ القضائية',
    caseScenariosCount: 'قضايا نموذجية',
    printDoc: 'طباعة بصيغة صك قضائي',
    exportMarkdown: 'تصدير Markdown',
    calculate: 'احسب المستحقات الآن',
    viewDetails: 'عرض التفاصيل والسوابق',
    close: 'إغلاق',
    back: 'رجوع',
    stageCompleted: 'مكتملة نظاماً',
    stageInProgress: 'قيد المداولة والنظر',
    stageUpcoming: 'مرحلة لاحقة',
    executeStageAction: 'تنفيذ الإجراء القضائي',
    nextStage: 'المرحلة التالية',
    previousStage: 'المرحلة السابقة',
    verdictIssued: 'صك الحكم قطعي وواجب النفاذ',
    evidenceStrength: 'مؤشر قوة الدليل وحجيته'
  },
  en: {
    appName: 'Bayyina',
    appSub: 'Saudi Judicial Intelligence & LegalTech Platform',
    courtTiers: 'Judicial Hierarchy & Courts',
    navCodex: 'Regulatory Codex',
    navSimulator: 'Najiz Litigation Simulator',
    navCalculators: 'Judicial Calculators',
    navEvidence: 'Evidence & Proof Matrix',
    navDrafter: 'Pleadings & Contract Drafter',
    gavelBtn: 'Strike Judicial Gavel',
    langBtn: 'العربية',
    soundBtn: 'Audio',
    searchPlaceholder: 'Search statutes, royal decrees, articles, legal keywords...',
    statutesCount: 'Codified Laws',
    articlesCount: 'Key Statutory Articles',
    precedentsCount: 'Judicial Precedents',
    caseScenariosCount: 'Landmark Cases',
    printDoc: 'Print Judicial Deed',
    exportMarkdown: 'Export Markdown',
    calculate: 'Calculate Entitlements',
    viewDetails: 'View Details & Precedents',
    close: 'Close',
    back: 'Back',
    stageCompleted: 'Statutorily Completed',
    stageInProgress: 'In Progress / Hearing',
    stageUpcoming: 'Subsequent Stage',
    executeStageAction: 'Execute Judicial Step',
    nextStage: 'Next Stage',
    previousStage: 'Previous Stage',
    verdictIssued: 'Final Executable Judgment',
    evidenceStrength: 'Probative Force Meter'
  }
};

class I18nManager {
  private currentLang: Language = 'ar';
  private listeners: ((lang: Language) => void)[] = [];

  get lang(): Language {
    return this.currentLang;
  }

  get t(): Translations {
    return I18N_DICT[this.currentLang];
  }

  setLanguage(lang: Language) {
    this.currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.listeners.forEach(fn => fn(lang));
  }

  toggle() {
    this.setLanguage(this.currentLang === 'ar' ? 'en' : 'ar');
  }

  subscribe(listener: (lang: Language) => void) {
    this.listeners.push(listener);
  }
}

export const i18n = new I18nManager();
