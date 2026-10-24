import { EvidenceItem } from '../types';

export interface EvidenceEvaluationResult {
  aggregateScore: number; // 0 to 100
  ratingTier: 'conclusive' | 'strong' | 'moderate' | 'weak';
  ratingLabelAr: string;
  ratingLabelEn: string;
  winProbabilityPercent: number;
  recommendationsAr: string[];
  recommendationsEn: string[];
  burdenOfProofAssessmentAr: string;
  burdenOfProofAssessmentEn: string;
  criticalMissingEvidencesAr: string[];
}

export function evaluateEvidenceMatrix(evidences: EvidenceItem[], claimAmountSar: number = 250000): EvidenceEvaluationResult {
  if (!evidences || evidences.length === 0) {
    return {
      aggregateScore: 10,
      ratingTier: 'weak',
      ratingLabelAr: 'بينات منعدمة أو غير كافية',
      ratingLabelEn: 'Insufficient or Non-existent Evidence',
      winProbabilityPercent: 12,
      recommendationsAr: [
        'يتعين تقديم دليل كتابي أو رقمي يثبت نشوء الالتزام وتاريخه بدقة.',
        'طلب استجواب الخصم وتوجيه اليمين الحاسمة أو المتممة أمام الدائرة القضائية.'
      ],
      recommendationsEn: [
        'Produce contemporaneous written or digital documentation of obligations.',
        'Seek judicial interrogation of opposing party or tender decisive oath.'
      ],
      burdenOfProofAssessmentAr: 'عبء الإثبات يقع على المدعي عملاً بالمادة (1) من نظام الإثبات؛ البينة على من ادعى واليمين على من أنكر.',
      burdenOfProofAssessmentEn: 'Burden of proof rests on claimant pursuant to Article 1 Law of Evidence.',
      criticalMissingEvidencesAr: ['محرر رسمي أو عادي موقع', 'مراسلات بريد رقمية موثقة']
    };
  }

  let totalWeightedScore = 0;
  let maxWeight = 0;
  let hasDigital = false;
  let hasOfficialDeed = false;
  let hasWitnessOnly = true;

  evidences.forEach(ev => {
    let multiplier = 1.0;
    if (ev.status === 'conclusive') multiplier = 1.2;
    if (ev.status === 'challenged') multiplier = 0.65;

    if (ev.type === 'official_deed') {
      hasOfficialDeed = true;
      hasWitnessOnly = false;
    }
    if (ev.type === 'digital') {
      hasDigital = true;
      hasWitnessOnly = false;
    }
    if (ev.type === 'ordinary_paper' || ev.type === 'expert_report') {
      hasWitnessOnly = false;
    }

    const itemContribution = ev.probativeValue * multiplier;
    totalWeightedScore += itemContribution;
    maxWeight += 100;
  });

  let normalizedScore = Math.min(100, Math.round((totalWeightedScore / maxWeight) * 100));

  // Penalty if claim > 100,000 SAR and only witness testimony without writing (Art 66)
  if (claimAmountSar > 100000 && hasWitnessOnly && !hasOfficialDeed && !hasDigital) {
    normalizedScore = Math.min(35, normalizedScore * 0.4);
  }

  let ratingTier: 'conclusive' | 'strong' | 'moderate' | 'weak' = 'moderate';
  let ratingLabelAr = 'قوة إثبات متوسطة';
  let ratingLabelEn = 'Moderate Evidentiary Weight';
  let winProb = Math.min(96, Math.max(15, normalizedScore));

  if (normalizedScore >= 85) {
    ratingTier = 'conclusive';
    ratingLabelAr = 'حجية قاطعة وقوة إثبات نافذة';
    ratingLabelEn = 'Conclusive & High Judicial Probative Force';
  } else if (normalizedScore >= 70) {
    ratingTier = 'strong';
    ratingLabelAr = 'بينات راجحة ومقنعة قضائياً';
    ratingLabelEn = 'Strong & Preponderant Evidence';
  } else if (normalizedScore < 50) {
    ratingTier = 'weak';
    ratingLabelAr = 'بينات ضعيفة ومعرضة للدحض أو الدفع الشكلي';
    ratingLabelEn = 'Vulnerable or Deficient Evidence';
  }

  const recommendationsAr: string[] = [];
  const recommendationsEn: string[] = [];
  const criticalMissingAr: string[] = [];

  if (hasOfficialDeed) {
    recommendationsAr.push('التمسك بالمادة (25) من نظام الإثبات؛ المحرر الرسمي حجة على الكافة ولا يُقبل نقضه إلا بادعاء التزوير رسمياً.');
    recommendationsEn.push('Assert Article 25 Law of Evidence: Notarized deed is conclusive erga omnes barring formal forgery challenge.');
  }

  if (hasDigital) {
    recommendationsAr.push('الاستناد للمادة (53) من نظام الإثبات لإلزام الدائرة بالاعتداد بالسجلات الرقمية كبينة كتابية كاملة.');
    recommendationsEn.push('Rely on Article 53 Law of Evidence: digital records possess full written evidentiary admissibility.');
  } else {
    criticalMissingAr.push('مراسلات البريد الإلكتروني أو السجلات الرقمية للأنظمة السحابية الموثقة');
  }

  if (claimAmountSar > 100000 && !hasOfficialDeed && !hasDigital) {
    recommendationsAr.push('تنبيه: المطالبة تتجاوز 100,000 ر.س، وتمنع المادة (66) شهادة الشهود فيها؛ يجب تعزيز الموقف بيمين حاسمة أو إقرار قضائي.');
    recommendationsEn.push('Caution: Claim exceeds 100k SAR threshold under Article 66 barring witness-only proof.');
  }

  return {
    aggregateScore: normalizedScore,
    ratingTier,
    ratingLabelAr,
    ratingLabelEn,
    winProbabilityPercent: winProb,
    recommendationsAr,
    recommendationsEn,
    burdenOfProofAssessmentAr: 'تم استيفاء عبء الإثبات بصورة مقنعة تحول عبء النفي أو إثبات البراءة إلى الخصم بموجب قواعد الإثبات الموضوعية.',
    burdenOfProofAssessmentEn: 'Burden of proof successfully discharged shifting evidentiary onus onto counterparty.',
    criticalMissingEvidencesAr: criticalMissingAr
  };
}
