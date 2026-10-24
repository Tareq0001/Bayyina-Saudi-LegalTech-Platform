import { CourtCostInput, CourtCostResult } from '../types';

export function calculateCourtCosts(input: CourtCostInput): CourtCostResult {
  const claim = Math.max(0, Number(input.claimValue || 0));
  const STATUTORY_CAP = 1000000; // 1M SAR cap

  // Check statutory exemptions under Article 17
  if (input.caseType === 'labor' && input.isLaborWorkerExempt) {
    return {
      claimValue: claim,
      feePercentage: 0,
      calculatedFee: 0,
      statutoryCap: STATUTORY_CAP,
      finalFee: 0,
      isExempt: true,
      exemptionReasonAr: 'معفى بقوة النظام وفق الفقرة (4) من المادة (17) من نظام تكاليف الدعاوى القضائية (دعاوى العمال الخاضعين لنظام العمل).',
      exemptionReasonEn: 'Statutorily exempt under Article 17(4) of the Judicial Costs Law (Claims filed by employees).',
      legalRefAr: 'المادة (17) من نظام تكاليف الدعاوى القضائية',
      legalRefEn: 'Article 17, Law of Judicial Costs'
    };
  }

  // Petition for Reconsideration fixed fee
  if (input.caseType === 'petition_reconsideration') {
    const fee = 10000;
    return {
      claimValue: claim,
      feePercentage: 0,
      calculatedFee: fee,
      statutoryCap: fee,
      finalFee: fee,
      isExempt: false,
      exemptionReasonAr: '',
      exemptionReasonEn: '',
      legalRefAr: 'المادة (7) من نظام تكاليف الدعاوى القضائية (رسم ثابت لطلب التماس إعادة النظر 10,000 ريال)',
      legalRefEn: 'Article 7, Law of Judicial Costs (Fixed fee of 10,000 SAR for Petition for Reconsideration)'
    };
  }

  // Appeals
  if (input.caseType === 'appeal') {
    const fee = Math.min(10000, Math.max(2000, claim * 0.02));
    return {
      claimValue: claim,
      feePercentage: 2,
      calculatedFee: Math.round(fee),
      statutoryCap: 10000,
      finalFee: Math.round(fee),
      isExempt: false,
      exemptionReasonAr: '',
      exemptionReasonEn: '',
      legalRefAr: 'المادة (6) من نظام تكاليف الدعاوى القضائية ولائحته (رسم الاستئناف والتدقيق)',
      legalRefEn: 'Article 6, Law of Judicial Costs (Appellate & Cassation Review Fees)'
    };
  }

  // Standard Commercial & General Court First-Instance Tariffs (Sliding scale up to 5% with 1M SAR Cap)
  let percentage = 5;
  let rawFee = 0;

  if (claim <= 100000) {
    percentage = 5;
    rawFee = claim * 0.05;
  } else if (claim <= 500000) {
    percentage = 4;
    rawFee = 5000 + (claim - 100000) * 0.04;
  } else if (claim <= 1000000) {
    percentage = 3;
    rawFee = 21000 + (claim - 500000) * 0.03;
  } else {
    percentage = 2;
    rawFee = 36000 + (claim - 1000000) * 0.02;
  }

  const finalFee = Math.min(rawFee, STATUTORY_CAP);

  return {
    claimValue: claim,
    feePercentage: percentage,
    calculatedFee: Math.round(rawFee),
    statutoryCap: STATUTORY_CAP,
    finalFee: Math.round(finalFee),
    isExempt: false,
    exemptionReasonAr: '',
    exemptionReasonEn: '',
    legalRefAr: 'المادة (3) والمادة (4) من نظام تكاليف الدعاوى القضائية (مرسوم ملكي م/16)',
    legalRefEn: 'Articles 3 & 4, Law of Judicial Costs (Royal Decree M/16)'
  };
}
