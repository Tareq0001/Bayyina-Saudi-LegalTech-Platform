import { DelayDamagesInput, DelayDamagesResult } from '../types';

export function calculateContractDamages(input: DelayDamagesInput): DelayDamagesResult {
  const contractVal = Math.max(0, Number(input.contractValue || 0));
  const days = Math.max(0, Number(input.delayDays || 0));
  const dailyRate = Math.max(0, Number(input.dailyRatePercent || 0.1)) / 100;
  const maxCap = Math.max(0, Number(input.maxCapPercent || 10)) / 100;

  const rawDelayPenalty = contractVal * dailyRate * days;
  const capThreshold = contractVal * maxCap;
  const isCapped = rawDelayPenalty > capThreshold;
  const effectivePenalty = isCapped ? capThreshold : rawDelayPenalty;

  const directLoss = Math.max(0, Number(input.directMaterialLoss || 0));
  const lostProfit = Math.max(0, Number(input.lossOfProfitExpected || 0));
  const totalDirectDamages = directLoss + lostProfit;

  const totalAssessed = Math.round(effectivePenalty + totalDirectDamages);

  const legalAnalysisAr = isCapped 
    ? `تم تطبيق السقف النظامي لغرامة التأخير (${input.maxCapPercent}%) بقيمة ${Math.round(capThreshold)} ر.س وفق المادة (178) من نظام المعاملات المدنية لمنع الغبن والإجحاف، مع إضافة الضرر المباشر المحقق البالغ ${Math.round(totalDirectDamages)} ر.س.`
    : `الغرامة المحتسبة بنسبة ${input.dailyRatePercent}% يومياً لمدة ${days} يوماً بلغت ${Math.round(effectivePenalty)} ر.س ولم تتجاوز السقف المتفق عليه، تضاف إليها التعويضات عن الخسارة الفعلية طبقاً للمادة (138).`;

  const legalAnalysisEn = isCapped
    ? `Liquidated damages statutory cap of ${input.maxCapPercent}% applied (${Math.round(capThreshold)} SAR) pursuant to Article 178 Civil Transactions Law, plus proven direct damages (${Math.round(totalDirectDamages)} SAR).`
    : `Accrued delay penalty for ${days} days is ${Math.round(effectivePenalty)} SAR within statutory limits, alongside proven consequential damages under Article 138.`;

  return {
    delayPenaltyAmount: Math.round(rawDelayPenalty),
    cappedPenaltyAmount: Math.round(effectivePenalty),
    isCapped,
    provenDirectDamages: Math.round(totalDirectDamages),
    totalAssessedAwardSar: totalAssessed,
    legalAnalysisAr,
    legalAnalysisEn
  };
}
