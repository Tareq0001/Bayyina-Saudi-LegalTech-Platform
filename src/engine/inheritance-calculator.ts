import { InheritanceInput, InheritanceResult, HeirShareResult } from '../types';

export function calculateInheritance(input: InheritanceInput): InheritanceResult {
  const gross = Math.max(0, Number(input.estateGross || 0));
  const funeral = Math.max(0, Number(input.funeralCosts || 0));
  const debts = Math.max(0, Number(input.debts || 0));
  const preBequest = Math.max(0, gross - funeral - debts);
  
  // Bequest (الوصية) cannot exceed 1/3 of the estate after debts
  const maxAllowableBequest = preBequest / 3;
  const bequest = Math.min(Math.max(0, Number(input.bequestWill || 0)), maxAllowableBequest);
  const netEstate = Math.max(0, preBequest - bequest);

  const liabilitiesDeductions = funeral + debts + bequest;

  const h = input.heirs;
  const sons = Number(h.sonsCount || 0);
  const daughters = Number(h.daughtersCount || 0);
  const hasChildren = (sons + daughters) > 0;
  const hasMaleDescendant = sons > 0;

  const wives = Number(h.wifeCount || 0);
  const hasHusband = Boolean(h.husband);
  const hasFather = Boolean(h.father);
  const hasMother = Boolean(h.mother);
  const fullBrothers = Number(h.fullBrothersCount || 0);
  const fullSisters = Number(h.fullSistersCount || 0);
  const totalSiblings = fullBrothers + fullSisters;

  const shares: HeirShareResult[] = [];
  let assignedFurudFraction = 0;

  // 1. Spouse (Husband or Wives)
  if (hasHusband) {
    const fraction = hasChildren ? 0.25 : 0.5;
    const fracStr = hasChildren ? '1/4' : '1/2';
    assignedFurudFraction += fraction;
    shares.push({
      heirTitleAr: 'الزوج',
      heirTitleEn: 'Husband',
      count: 1,
      shareFractionAr: fracStr,
      shareFractionEn: fracStr,
      shareDecimal: fraction,
      totalAmountSar: 0,
      perPersonAmountSar: 0,
      reasonAr: hasChildren ? 'الربع لوجود الفرع الوارث للمتوفاة' : 'النصف لعدم وجود الفرع الوارث',
      reasonEn: hasChildren ? '1/4 due to presence of descendants' : '1/2 in absence of descendants',
      status: 'ashab_furud'
    });
  } else if (wives > 0) {
    const fraction = hasChildren ? 0.125 : 0.25;
    const fracStr = hasChildren ? '1/8' : '1/4';
    assignedFurudFraction += fraction;
    shares.push({
      heirTitleAr: wives > 1 ? `الزوجات (${wives})` : 'الزوجة',
      heirTitleEn: wives > 1 ? `Wives (${wives})` : 'Wife',
      count: wives,
      shareFractionAr: fracStr,
      shareFractionEn: fracStr,
      shareDecimal: fraction,
      totalAmountSar: 0,
      perPersonAmountSar: 0,
      reasonAr: hasChildren ? 'الثمن فرضاً لوجود الفرع الوارث يقسم بينهن بالتساوي' : 'الربع فرضاً لعدم وجود الفرع الوارث يقسم بينهن بالتساوي',
      reasonEn: hasChildren ? '1/8 Qur\'anic share shared equally due to descendants' : '1/4 shared equally in absence of descendants',
      status: 'ashab_furud'
    });
  }

  // 2. Mother
  if (hasMother) {
    const getsSixth = hasChildren || totalSiblings >= 2;
    const fraction = getsSixth ? (1 / 6) : (1 / 3);
    const fracStr = getsSixth ? '1/6' : '1/3';
    assignedFurudFraction += fraction;
    shares.push({
      heirTitleAr: 'الأم',
      heirTitleEn: 'Mother',
      count: 1,
      shareFractionAr: fracStr,
      shareFractionEn: fracStr,
      shareDecimal: fraction,
      totalAmountSar: 0,
      perPersonAmountSar: 0,
      reasonAr: getsSixth ? 'السدس لوجود الفرع الوارث أو جمع من الإخوة' : 'الثلث لعدم وجود الفرع الوارث وعدم جمع الإخوة',
      reasonEn: getsSixth ? '1/6 due to descendants or multiple siblings' : '1/3 in absence of descendants or multiple siblings',
      status: 'ashab_furud'
    });
  }

  // 3. Father
  let fatherIsAsabahOnly = false;
  let fatherHasMixedShare = false;
  if (hasFather) {
    if (hasMaleDescendant) {
      // Father gets 1/6 fard only
      const fraction = 1 / 6;
      assignedFurudFraction += fraction;
      shares.push({
        heirTitleAr: 'الأب',
        heirTitleEn: 'Father',
        count: 1,
        shareFractionAr: '1/6',
        shareFractionEn: '1/6',
        shareDecimal: fraction,
        totalAmountSar: 0,
        perPersonAmountSar: 0,
        reasonAr: 'السدس فرضاً لوجود الفرع الوارث المذكر (الابن)',
        reasonEn: '1/6 Qur\'anic share due to presence of male descendant (son)',
        status: 'ashab_furud'
      });
    } else if (daughters > 0) {
      // Father gets 1/6 fard + residual asabah
      fatherHasMixedShare = true;
      const fraction = 1 / 6;
      assignedFurudFraction += fraction;
      shares.push({
        heirTitleAr: 'الأب',
        heirTitleEn: 'Father',
        count: 1,
        shareFractionAr: '1/6 + عصبة',
        shareFractionEn: '1/6 + Residuary',
        shareDecimal: fraction,
        totalAmountSar: 0,
        perPersonAmountSar: 0,
        reasonAr: 'السدس فرضاً لوجود الفرع الوارث المؤنث + الباقي تعصيباً إن وجد',
        reasonEn: '1/6 Qur\'anic share plus residual asabah if remaining',
        status: 'asabah'
      });
    } else {
      // No children at all => Father takes as pure Asabah
      fatherIsAsabahOnly = true;
      shares.push({
        heirTitleAr: 'الأب',
        heirTitleEn: 'Father',
        count: 1,
        shareFractionAr: 'عصبة بالنفس',
        shareFractionEn: 'Residuary (Asabah)',
        shareDecimal: 0,
        totalAmountSar: 0,
        perPersonAmountSar: 0,
        reasonAr: 'يرث الباقي تعصيباً لعدم وجود الفرع الوارث',
        reasonEn: 'Inherits residue as sole prime agnatic residuary',
        status: 'asabah'
      });
    }
  }

  // 4. Daughters when NO sons exist
  if (sons === 0 && daughters > 0) {
    const fraction = daughters === 1 ? 0.5 : (2 / 3);
    const fracStr = daughters === 1 ? '1/2' : '2/3';
    assignedFurudFraction += fraction;
    shares.push({
      heirTitleAr: daughters === 1 ? 'البنت' : `البنات (${daughters})`,
      heirTitleEn: daughters === 1 ? 'Daughter' : `Daughters (${daughters})`,
      count: daughters,
      shareFractionAr: fracStr,
      shareFractionEn: fracStr,
      shareDecimal: fraction,
      totalAmountSar: 0,
      perPersonAmountSar: 0,
      reasonAr: daughters === 1 ? 'النصف فرضاً لانفرادها وعدم وجود المعصب' : 'الثلثان فرضاً لاشتراكهن وعدم وجود المعصب',
      reasonEn: daughters === 1 ? '1/2 Qur\'anic share for sole daughter' : '2/3 Qur\'anic share shared equally for 2+ daughters',
      status: 'ashab_furud'
    });
  }

  // 5. Sons & Daughters together (العصبة بالغير: للذكر مثل حظ الأنثيين)
  let childrenAsabahShare = 0;
  if (sons > 0) {
    const residualAfterFurud = Math.max(0, 1 - assignedFurudFraction);
    childrenAsabahShare = residualAfterFurud;
    const totalUnits = (sons * 2) + daughters;
    
    shares.push({
      heirTitleAr: sons === 1 ? 'الابن' : `الأبناء (${sons})`,
      heirTitleEn: sons === 1 ? 'Son' : `Sons (${sons})`,
      count: sons,
      shareFractionAr: daughters > 0 ? 'عصبة بالغير (للذكر مثل حظ الأنثيين)' : 'عصبة بالنفس (الباقي)',
      shareFractionEn: daughters > 0 ? 'Residuary with sisters (2:1 ratio)' : 'Prime Residuary',
      shareDecimal: (residualAfterFurud * (sons * 2)) / totalUnits,
      totalAmountSar: 0,
      perPersonAmountSar: 0,
      reasonAr: 'يرثون الباقي تعصيباً كأقوى عصبة بالنفس',
      reasonEn: 'Inherit residue as prime agnatic heirs',
      status: 'asabah'
    });

    if (daughters > 0) {
      shares.push({
        heirTitleAr: daughters === 1 ? 'البنت' : `البنات (${daughters})`,
        heirTitleEn: daughters === 1 ? 'Daughter' : `Daughters (${daughters})`,
        count: daughters,
        shareFractionAr: 'عصبة بالغير (مع الإخوة الذكور)',
        shareFractionEn: 'Residuary with brothers (2:1)',
        shareDecimal: (residualAfterFurud * daughters) / totalUnits,
        totalAmountSar: 0,
        perPersonAmountSar: 0,
        reasonAr: 'عصبة بالغير مع إخوتهن الذكور (للذكر مثل حظ الأنثيين)',
        reasonEn: 'Agnatic co-heirs with brothers receiving half male share',
        status: 'asabah'
      });
    }
  }

  // 6. Full Brothers / Sisters (if not blocked by Father or Son)
  if (hasFather || sons > 0) {
    if (fullBrothers > 0 || fullSisters > 0) {
      shares.push({
        heirTitleAr: 'الإخوة والأخوات الأشقاء',
        heirTitleEn: 'Full Siblings',
        count: totalSiblings,
        shareFractionAr: 'محجوبون حجب حرمان',
        shareFractionEn: 'Excluded (Hajb)',
        shareDecimal: 0,
        totalAmountSar: 0,
        perPersonAmountSar: 0,
        reasonAr: hasFather ? 'محجوبون حجب حرمان تام لوجود الأب' : 'محجوبون حجب حرمان لوجود الابن (الفرع الوارث المذكر)',
        reasonEn: hasFather ? 'Completely excluded by Father' : 'Excluded by Male Descendant (Son)',
        status: 'mahjoob'
      });
    }
  } else if (!hasChildren && !hasFather && totalSiblings > 0) {
    // Siblings inherit as asabah or furud
    const residualAfterFurud = Math.max(0, 1 - assignedFurudFraction);
    if (fullBrothers > 0) {
      const units = (fullBrothers * 2) + fullSisters;
      shares.push({
        heirTitleAr: `الإخوة الأشقاء (${fullBrothers})`,
        heirTitleEn: `Full Brothers (${fullBrothers})`,
        count: fullBrothers,
        shareFractionAr: 'عصبة بالنفس / بالغير',
        shareFractionEn: 'Residuary (Asabah)',
        shareDecimal: (residualAfterFurud * (fullBrothers * 2)) / units,
        totalAmountSar: 0,
        perPersonAmountSar: 0,
        reasonAr: 'يرثون الباقي تعصيباً لعدم وجود الأصل المذكر أو الفرع الوارث',
        reasonEn: 'Inherit residue in absence of father and descendants',
        status: 'asabah'
      });
      if (fullSisters > 0) {
        shares.push({
          heirTitleAr: `الأخوات الشقيقات (${fullSisters})`,
          heirTitleEn: `Full Sisters (${fullSisters})`,
          count: fullSisters,
          shareFractionAr: 'عصبة بالغير مع الإخوة',
          shareFractionEn: 'Residuary with brothers',
          shareDecimal: (residualAfterFurud * fullSisters) / units,
          totalAmountSar: 0,
          perPersonAmountSar: 0,
          reasonAr: 'عصبة بالغير مع الإخوة الأشقاء (للذكر مثل حظ الأنثيين)',
          reasonEn: 'Residuary with brothers (2:1)',
          status: 'asabah'
        });
      }
    } else {
      // Sisters only
      const frac = fullSisters === 1 ? 0.5 : (2 / 3);
      assignedFurudFraction += frac;
      shares.push({
        heirTitleAr: fullSisters === 1 ? 'الأخت الشقيقة' : `الأخوات الشقيقات (${fullSisters})`,
        heirTitleEn: fullSisters === 1 ? 'Full Sister' : `Full Sisters (${fullSisters})`,
        count: fullSisters,
        shareFractionAr: fullSisters === 1 ? '1/2' : '2/3',
        shareFractionEn: fullSisters === 1 ? '1/2' : '2/3',
        shareDecimal: frac,
        totalAmountSar: 0,
        perPersonAmountSar: 0,
        reasonAr: fullSisters === 1 ? 'النصف فرضاً لانفرادها' : 'الثلثان فرضاً لتعددهن',
        reasonEn: fullSisters === 1 ? '1/2 Qur\'anic share' : '2/3 Qur\'anic share shared',
        status: 'ashab_furud'
      });
    }
  }

  // Handle Father's residual share when only daughters exist
  if (fatherHasMixedShare) {
    const fIdx = shares.findIndex(s => s.heirTitleAr === 'الأب');
    if (fIdx !== -1) {
      const remainingAfterAll = Math.max(0, 1 - assignedFurudFraction);
      shares[fIdx].shareDecimal = (1 / 6) + remainingAfterAll;
      if (remainingAfterAll > 0) {
        shares[fIdx].reasonAr = 'السدس فرضاً (1/6) بالإضافة إلى الباقي تعصيباً بعد أصحاب الفروض.';
      }
    }
  }

  // Handle Father sole asabah
  if (fatherIsAsabahOnly) {
    const fIdx = shares.findIndex(s => s.heirTitleAr === 'الأب');
    if (fIdx !== -1) {
      shares[fIdx].shareDecimal = Math.max(0, 1 - assignedFurudFraction);
    }
  }

  // Determine Awl, Radd, or Fair Distribution
  let stateOfEstate: 'fair_distribution' | 'awl' | 'radd' = 'fair_distribution';
  let totalFractionSum = shares.reduce((acc, curr) => acc + curr.shareDecimal, 0);

  if (totalFractionSum > 1.0001) {
    stateOfEstate = 'awl';
    // Scale down all shares proportionally (العول)
    for (const item of shares) {
      if (item.shareDecimal > 0) {
        item.shareDecimal = item.shareDecimal / totalFractionSum;
      }
    }
  } else if (totalFractionSum < 0.9999 && !hasMaleDescendant && !hasFather && fullBrothers === 0) {
    // If there is surplus and no asabah, apply Radd (الرد) to non-spouse blood heirs
    stateOfEstate = 'radd';
    const nonSpouseShares = shares.filter(s => s.heirTitleAr !== 'الزوج' && !s.heirTitleAr.includes('الزوجة') && s.shareDecimal > 0);
    const nonSpouseSum = nonSpouseShares.reduce((a, b) => a + b.shareDecimal, 0);
    const spouseShare = shares.find(s => s.heirTitleAr === 'الزوج' || s.heirTitleAr.includes('الزوجة'))?.shareDecimal || 0;
    const surplusToDistribute = 1 - spouseShare;

    if (nonSpouseSum > 0) {
      for (const item of nonSpouseShares) {
        item.shareDecimal = (item.shareDecimal / nonSpouseSum) * surplusToDistribute;
      }
    }
  }

  // Compute final amounts in SAR
  for (const item of shares) {
    item.totalAmountSar = Math.round(netEstate * item.shareDecimal);
    item.perPersonAmountSar = item.count > 0 ? Math.round(item.totalAmountSar / item.count) : item.totalAmountSar;
  }

  let explanationAr = 'قسمة عادلة مطابقة للفروض والتعصيب الشرعي وفق نظام الأحوال الشخصية.';
  let explanationEn = 'Equitable distribution conforming to Islamic shares and agnatic priority.';
  if (stateOfEstate === 'awl') {
    explanationAr = 'دخلت المسألة في (العول) لزيادة مجموع السهام عن أصل المسألة، فنقص نصيب كل وارث بنسبة فرضه دون إسقاط أحد.';
    explanationEn = 'Awl doctrine applied: total shares exceeded 1.0, proportionally scaling down all entitlements.';
  } else if (stateOfEstate === 'radd') {
    explanationAr = 'دخلت المسألة في (الرد) لوجود فائض في التركة بعد أصحاب الفروض مع عدم وجود عصبة، فرُد الفائض على ذوي الفروض النسبية.';
    explanationEn = 'Radd doctrine applied: remaining estate surplus reallocated to blood Qur\'anic heirs.';
  }

  return {
    grossEstate: gross,
    liabilitiesDeductions,
    netDistributableEstate: netEstate,
    sharesTotalFraction: totalFractionSum,
    stateOfEstate,
    shares,
    explanationAr,
    explanationEn
  };
}
