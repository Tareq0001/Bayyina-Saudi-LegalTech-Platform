export type Language = 'ar' | 'en';

export type CourtTier = 
  | 'commercial_first'
  | 'labor_first'
  | 'general_first'
  | 'enforcement'
  | 'appeal'
  | 'supreme'
  | 'grievances';

export interface CasePrecedent {
  id: string;
  judgmentNumber: string;
  yearHijri: string;
  court: string;
  courtEn: string;
  principleAr: string;
  principleEn: string;
  summaryAr: string;
  summaryEn: string;
}

export interface LawArticle {
  id: string;
  statuteId: string;
  articleNumber: number;
  titleAr: string;
  titleEn: string;
  textAr: string;
  textEn: string;
  commentaryAr: string;
  commentaryEn: string;
  evidentiaryWeight: 'conclusive' | 'high' | 'medium' | 'circumstantial';
  category: string;
  tags: string[];
  precedents?: CasePrecedent[];
}

export interface Statute {
  id: string;
  nameAr: string;
  nameEn: string;
  royalDecreeAr: string;
  royalDecreeEn: string;
  yearHijri: string;
  yearGregorian: string;
  category: string;
  categoryEn: string;
  descriptionAr: string;
  descriptionEn: string;
  articlesCount: number;
  articles: LawArticle[];
}

export type EvidenceType = 
  | 'digital'
  | 'official_deed'
  | 'ordinary_paper'
  | 'testimony'
  | 'expert_report'
  | 'decisive_oath';

export interface EvidenceItem {
  id: string;
  type: EvidenceType;
  titleAr: string;
  titleEn: string;
  sourceAr: string;
  sourceEn: string;
  probativeValue: number; // 0 to 100
  legalBasisAr: string;
  legalBasisEn: string;
  status: 'admitted' | 'challenged' | 'conclusive';
  descriptionAr: string;
  descriptionEn: string;
}

export interface SessionMinute {
  sessionNumber: number;
  dateHijri: string;
  dateGregorian: string;
  judgeName: string;
  circuitName: string;
  remarksAr: string;
  remarksEn: string;
  transcriptAr: string;
  transcriptEn: string;
}

export interface CaseStage {
  stageNumber: number;
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  proceduralDeadlineDays?: number;
  deadlineWarningAr?: string;
  deadlineWarningEn?: string;
  requiredActionsAr?: string[];
  requiredActionsEn?: string[];
  minutes?: SessionMinute[];
  evidences?: EvidenceItem[];
  judgmentText?: string;
  judicialOutcomeAr?: string;
  judicialOutcomeEn?: string;
}

export interface CaseScenario {
  id: string;
  titleAr: string;
  titleEn: string;
  caseNumber: string;
  courtTier: CourtTier;
  courtNameAr: string;
  courtNameEn: string;
  circuitAr: string;
  circuitEn: string;
  claimValueSar: number;
  filingDateHijri: string;
  plaintiffAr: string;
  plaintiffEn: string;
  defendantAr: string;
  defendantEn: string;
  legalSubjectAr: string;
  legalSubjectEn: string;
  factsSummaryAr: string;
  factsSummaryEn: string;
  governingLawsAr: string[];
  governingLawsEn: string[];
  currentStageNumber: number;
  stages: CaseStage[];
}

// Legal Calculators Types
export type ContractType = 'fixed' | 'indefinite';
export type TerminationReason = 
  | 'employer_unlawful_77'
  | 'employee_resignation_85'
  | 'employer_article_80'
  | 'employee_article_81'
  | 'contract_expiry'
  | 'mutual_consent';

export interface LaborCalcInput {
  contractType: ContractType;
  years: number;
  months: number;
  basicSalary: number;
  allowances: number;
  terminationReason: TerminationReason;
  remainingContractMonths?: number; // for fixed contract art 77
  unusedLeaveDays?: number;
  unpaidNoticeDays?: number;
}

export interface LaborCalcResult {
  totalWage: number;
  eosGratuity: number;
  article77Compensation: number;
  leaveEncashment: number;
  noticeCompensation: number;
  totalEntitlements: number;
  statutoryBasisAr: string[];
  statutoryBasisEn: string[];
  breakdownAr: { title: string; amount: number; note: string }[];
}

export interface CourtCostInput {
  claimValue: number;
  caseType: 'commercial' | 'general' | 'labor' | 'appeal' | 'petition_reconsideration' | 'urgent_inquiries' | 'enforcement';
  isFirstInstance: boolean;
  isLaborWorkerExempt: boolean;
}

export interface CourtCostResult {
  claimValue: number;
  feePercentage: number;
  calculatedFee: number;
  statutoryCap: number;
  finalFee: number;
  isExempt: boolean;
  exemptionReasonAr: string;
  exemptionReasonEn: string;
  legalRefAr: string;
  legalRefEn: string;
}

export interface InheritanceInput {
  estateGross: number;
  funeralCosts: number;
  debts: number;
  bequestWill: number; // Max 1/3
  heirs: {
    husband?: boolean;
    wifeCount?: number;
    father?: boolean;
    mother?: boolean;
    sonsCount?: number;
    daughtersCount?: number;
    fullBrothersCount?: number;
    fullSistersCount?: number;
    paternalGrandmother?: boolean;
    paternalGrandfather?: boolean;
  };
}

export interface HeirShareResult {
  heirTitleAr: string;
  heirTitleEn: string;
  count: number;
  shareFractionAr: string;
  shareFractionEn: string;
  shareDecimal: number;
  totalAmountSar: number;
  perPersonAmountSar: number;
  reasonAr: string;
  reasonEn: string;
  status: 'ashab_furud' | 'asabah' | 'hajb' | 'mahjoob';
}

export interface InheritanceResult {
  grossEstate: number;
  liabilitiesDeductions: number;
  netDistributableEstate: number;
  sharesTotalFraction: number;
  stateOfEstate: 'fair_distribution' | 'awl' | 'radd';
  shares: HeirShareResult[];
  explanationAr: string;
  explanationEn: string;
}

export interface DelayDamagesInput {
  contractValue: number;
  delayDays: number;
  dailyRatePercent: number; // standard e.g. 0.1% or 0.05%
  maxCapPercent: number; // typically 10% under Gov Procurement or Civil Transactions
  directMaterialLoss: number;
  lossOfProfitExpected: number;
}

export interface DelayDamagesResult {
  delayPenaltyAmount: number;
  cappedPenaltyAmount: number;
  isCapped: boolean;
  provenDirectDamages: number;
  totalAssessedAwardSar: number;
  legalAnalysisAr: string;
  legalAnalysisEn: string;
}

export type TemplateType = 
  | 'claim_commercial'
  | 'defense_pleading'
  | 'appeal_brief'
  | 'retainer_agreement';

export interface PleadingFormData {
  templateType: TemplateType;
  courtName: string;
  circuitName: string;
  claimantName: string;
  claimantId: string;
  claimantCapacity: string;
  claimantAddress: string;
  defendantName: string;
  defendantId: string;
  defendantAddress: string;
  caseNumber?: string;
  caseYear?: string;
  claimAmountSar: number;
  contractDate: string;
  contractSubject: string;
  factualBackground: string;
  formalDefenses: string;
  substantiveDefenses: string;
  requestedRelief: string;
  statutoryArticles: string;
  attorneyName: string;
  licenseNumber: string;
  retainerAmountSar: number;
  contingencyPercent: number;
}
