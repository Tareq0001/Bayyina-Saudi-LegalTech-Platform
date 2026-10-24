import { LaborCalcInput, LaborCalcResult } from '../types';

export function calculateLaborEntitlements(input: LaborCalcInput): LaborCalcResult {
  const totalWage = Number(input.basicSalary) + Number(input.allowances);
  const totalYears = Number(input.years) + (Number(input.months) / 12);
  
  // 1. End of Service Gratuity (Article 84)
  let rawGratuity = 0;
  if (totalYears <= 5) {
    rawGratuity = (totalWage * 0.5) * totalYears;
  } else {
    const firstFive = (totalWage * 0.5) * 5;
    const remainingYears = totalYears - 5;
    rawGratuity = firstFive + (totalWage * 1.0 * remainingYears);
  }

  let finalGratuity = rawGratuity;
  const statutoryBasisAr: string[] = [];
  const statutoryBasisEn: string[] = [];
  const breakdownAr: { title: string; amount: number; note: string }[] = [];

  // Apply Article 85 resignation tiers or Article 80 forfeiture
  if (input.terminationReason === 'employee_resignation_85') {
    statutoryBasisAr.push('المادة 85 من نظام العمل (استقالة العامل)');
    statutoryBasisEn.push('Article 85 Labor Law (Voluntary Resignation)');
    if (totalYears < 2) {
      finalGratuity = 0;
      breakdownAr.push({
        title: 'مكافأة نهاية الخدمة (استقالة أقل من سنتين)',
        amount: 0,
        note: 'لا يستحق العامل مكافأة إذا كانت خدمته أقل من سنتين متتاليتين.'
      });
    } else if (totalYears >= 2 && totalYears < 5) {
      finalGratuity = rawGratuity * (1 / 3);
      breakdownAr.push({
        title: 'مكافأة نهاية الخدمة (استقالة من 2 إلى 5 سنوات)',
        amount: Math.round(finalGratuity),
        note: 'استحقاق ثلث المكافأة النظامية (1/3).'
      });
    } else if (totalYears >= 5 && totalYears < 10) {
      finalGratuity = rawGratuity * (2 / 3);
      breakdownAr.push({
        title: 'مكافأة نهاية الخدمة (استقالة من 5 إلى 10 سنوات)',
        amount: Math.round(finalGratuity),
        note: 'استحقاق ثلثي المكافأة النظامية (2/3).'
      });
    } else {
      finalGratuity = rawGratuity;
      breakdownAr.push({
        title: 'مكافأة نهاية الخدمة (استقالة 10 سنوات فأكثر)',
        amount: Math.round(finalGratuity),
        note: 'استحقاق كامل المكافأة بنسبة 100%.'
      });
    }
  } else if (input.terminationReason === 'employer_article_80') {
    finalGratuity = 0;
    statutoryBasisAr.push('المادة 80 من نظام العمل (فصل تأديبي دون مكافأة)');
    statutoryBasisEn.push('Article 80 Labor Law (Summary Dismissal for Cause)');
    breakdownAr.push({
      title: 'مكافأة نهاية الخدمة (المادة 80)',
      amount: 0,
      note: 'تسقط المكافأة بالكامل في حالات الفصل التأديبي المنصوص عليها بالمادة 80.'
    });
  } else {
    // 100% gratuity under Art 84, Art 77, Art 81, or contract completion
    statutoryBasisAr.push('المادة 84 من نظام العمل (مكافأة نهاية الخدمة الكاملة)');
    statutoryBasisEn.push('Article 84 Labor Law (Full End of Service Gratuity)');
    breakdownAr.push({
      title: 'مكافأة نهاية الخدمة (المادة 84)',
      amount: Math.round(finalGratuity),
      note: 'نصف شهر عن كل سنة من الخمس الأولى وشهر كامل عن كل سنة تالية.'
    });
  }

  // 2. Article 77 Unlawful Termination Compensation
  let article77Compensation = 0;
  if (input.terminationReason === 'employer_unlawful_77') {
    statutoryBasisAr.push('المادة 77 من نظام العمل (التعويض عن الإنهاء غير المشروع)');
    statutoryBasisEn.push('Article 77 Labor Law (Unlawful Termination Damages)');
    
    if (input.contractType === 'indefinite') {
      // 15 days wage per year, min 2 months wage
      const calculated = (totalWage * 0.5) * totalYears;
      const minFloor = totalWage * 2;
      article77Compensation = Math.max(calculated, minFloor);
      breakdownAr.push({
        title: 'تعويض المادة 77 (عقد غير محدد المدة)',
        amount: Math.round(article77Compensation),
        note: `أجر 15 يوماً عن كل سنة (${Math.round(calculated)} ر.س)، والحد الأدنى النظامي أجر شهرين (${Math.round(minFloor)} ر.س).`
      });
    } else {
      // Fixed contract: remaining wage for contract term, min 2 months
      const remainingMonths = Number(input.remainingContractMonths || 0);
      const calculated = totalWage * remainingMonths;
      const minFloor = totalWage * 2;
      article77Compensation = Math.max(calculated, minFloor);
      breakdownAr.push({
        title: 'تعويض المادة 77 (عقد محدد المدة)',
        amount: Math.round(article77Compensation),
        note: `أجر المدة المتبقية (${remainingMonths} أشهر = ${Math.round(calculated)} ر.س)، والحد الأدنى أجر شهرين (${Math.round(minFloor)} ر.س).`
      });
    }
  }

  // 3. Leave Encashment (رصيد الإجازات المتبقي)
  let leaveEncashment = 0;
  const leaveDays = Number(input.unusedLeaveDays || 0);
  if (leaveDays > 0) {
    leaveEncashment = (totalWage / 30) * leaveDays;
    statutoryBasisAr.push('المادة 111 من نظام العمل (التعويض عن رصيد الإجازات السنوية)');
    statutoryBasisEn.push('Article 111 Labor Law (Annual Leave Encashment)');
    breakdownAr.push({
      title: 'بدل رصيد الإجازات المستحقة',
      amount: Math.round(leaveEncashment),
      note: `تعويض عن (${leaveDays}) يوماً بناءً على آخر أجر فعلي شامل.`
    });
  }

  // 4. Notice Period Compensation (بدل مهلة الإشعار - مادة 75/76)
  let noticeCompensation = 0;
  const noticeDays = Number(input.unpaidNoticeDays || 0);
  if (noticeDays > 0 && input.terminationReason === 'employer_unlawful_77') {
    noticeCompensation = (totalWage / 30) * noticeDays;
    statutoryBasisAr.push('المادة 76 من نظام العمل (التعويض عن عدم مراعاة مهلة الإشعار)');
    statutoryBasisEn.push('Article 76 Labor Law (Notice Period Indemnity)');
    breakdownAr.push({
      title: 'بدل مهلة الإشعار',
      amount: Math.round(noticeCompensation),
      note: `تعويض عن مهلة إشعار غير مدفوعة قدرها (${noticeDays}) يوماً.`
    });
  }

  const totalEntitlements = Math.round(finalGratuity + article77Compensation + leaveEncashment + noticeCompensation);

  return {
    totalWage,
    eosGratuity: Math.round(finalGratuity),
    article77Compensation: Math.round(article77Compensation),
    leaveEncashment: Math.round(leaveEncashment),
    noticeCompensation: Math.round(noticeCompensation),
    totalEntitlements,
    statutoryBasisAr,
    statutoryBasisEn,
    breakdownAr
  };
}
