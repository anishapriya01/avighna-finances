import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  Building2, 
  PiggyBank, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Coins
} from 'lucide-react';
import { formatINR, formatCompactINR } from '../utils/formatters';

export default function CalculatorsPage({ onOpenCheckup }) {
  const [activeTab, setActiveTab] = useState('sip'); // 'sip', 'emi', 'retirement', 'insurance'

  // ================= 1. SIP CALCULATOR STATE =================
  const [sipMonthly, setSipMonthly] = useState(25000);
  const [sipRate, setSipRate] = useState(13);
  const [sipYears, setSipYears] = useState(15);

  const sipResults = useMemo(() => {
    const P = Number(sipMonthly);
    const i = Number(sipRate) / 12 / 100;
    const n = Number(sipYears) * 12;
    const totalInvested = P * n;
    const futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const estimatedReturns = Math.max(0, futureValue - totalInvested);

    // Milestones at 5, 10, 15, 20, 25, 30 years
    const milestones = [5, 10, 15, 20, 25, 30].filter(y => y <= sipYears).map(y => {
      const ny = y * 12;
      const fv = P * ((Math.pow(1 + i, ny) - 1) / i) * (1 + i);
      const inv = P * ny;
      return { year: y, invested: inv, corpus: fv };
    });

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      futureValue: Math.round(futureValue),
      investedPercent: Math.round((totalInvested / futureValue) * 100) || 0,
      returnsPercent: Math.round((estimatedReturns / futureValue) * 100) || 0,
      milestones
    };
  }, [sipMonthly, sipRate, sipYears]);

  // ================= 2. LOAN EMI STATE =================
  const [loanPrincipal, setLoanPrincipal] = useState(6500000); // 65 Lakhs
  const [loanRate, setLoanRate] = useState(8.5); // 8.5%
  const [loanTenureYears, setLoanTenureYears] = useState(20);

  const emiResults = useMemo(() => {
    const P = Number(loanPrincipal);
    const r = Number(loanRate) / 12 / 100;
    const n = Number(loanTenureYears) * 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    const principalPercent = Math.round((P / totalAmount) * 100) || 0;
    const interestPercent = Math.round((totalInterest / totalAmount) * 100) || 0;

    return {
      emi: isNaN(emi) ? 0 : Math.round(emi),
      totalInterest: isNaN(totalInterest) ? 0 : Math.round(totalInterest),
      totalAmount: isNaN(totalAmount) ? 0 : Math.round(totalAmount),
      principalPercent,
      interestPercent
    };
  }, [loanPrincipal, loanRate, loanTenureYears]);

  // ================= 3. RETIREMENT PLANNING STATE =================
  const [currentAge, setCurrentAge] = useState(32);
  const [retirementAge, setRetirementAge] = useState(58);
  const [currentMonthlyExpenses, setCurrentMonthlyExpenses] = useState(60000);
  const [inflationRate, setInflationRate] = useState(6);
  const lifeExpectancy = 82;

  const retirementResults = useMemo(() => {
    const yearsToRetire = Math.max(1, retirementAge - currentAge);
    const postRetirementYears = Math.max(1, lifeExpectancy - retirementAge);
    const inf = Number(inflationRate) / 100;

    // Monthly expenses at retirement age
    const futureMonthlyExpense = currentMonthlyExpenses * Math.pow(1 + inf, yearsToRetire);
    const futureAnnualExpense = futureMonthlyExpense * 12;

    // Corpus needed assuming conservative 7% post-retirement portfolio return (real rate = 1% after 6% inflation)
    const realRate = (0.07 - inf) / (1 + inf);
    const corpusMultiplier = (1 - Math.pow(1 + realRate, -postRetirementYears)) / (realRate || 0.01);
    const targetCorpus = futureAnnualExpense * corpusMultiplier;

    // Monthly SIP needed starting today (assuming 12% equity compounding pre-retirement)
    const equityMonthlyRate = 0.12 / 12;
    const nMonths = yearsToRetire * 12;
    const monthlySIPNeeded = targetCorpus / (((Math.pow(1 + equityMonthlyRate, nMonths) - 1) / equityMonthlyRate) * (1 + equityMonthlyRate));

    return {
      yearsToRetire,
      futureMonthlyExpense: Math.round(futureMonthlyExpense),
      futureAnnualExpense: Math.round(futureAnnualExpense),
      targetCorpus: Math.round(targetCorpus),
      monthlySIPNeeded: Math.round(monthlySIPNeeded)
    };
  }, [currentAge, retirementAge, currentMonthlyExpenses, inflationRate]);

  // ================= 4. TERM LIFE INSURANCE ESTIMATOR STATE =================
  const [annualIncome, setAnnualIncome] = useState(1800000); // 18 Lakhs
  const [currentLiabilities, setCurrentLiabilities] = useState(4500000); // 45L Home Loan
  const [childMilestonesGoal, setChildMilestonesGoal] = useState(3000000); // 30L college fund

  const insuranceResults = useMemo(() => {
    const incomeReplacement = annualIncome * 15;
    const totalRecommended = incomeReplacement + currentLiabilities + childMilestonesGoal;
    
    const roundedCover = Math.ceil(totalRecommended / 2500000) * 2500000;
    const approxMonthlyPremium = Math.round((roundedCover / 10000000) * 850); // ~₹850/mo per Cr

    return {
      incomeReplacement,
      totalRecommended: roundedCover,
      approxMonthlyPremium
    };
  }, [annualIncome, currentLiabilities, childMilestonesGoal]);

  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Coins className="w-3.5 h-3.5 text-blue-600" />
          <span>Institutional Math Engines</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Financial Advisory Calculators
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Run high-precision projections for wealth compounding, loan EMIs, retirement horizons, and insurance safety shields.
        </p>
      </div>

      {/* Calculator Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setActiveTab('sip')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
            activeTab === 'sip'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
              : 'bg-white text-slate-700 border-slate-200 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>1. SIP Wealth Estimator</span>
        </button>

        <button
          onClick={() => setActiveTab('emi')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
            activeTab === 'emi'
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : 'bg-white text-slate-700 border-slate-200 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>2. Loan EMI Calculator</span>
        </button>

        <button
          onClick={() => setActiveTab('retirement')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
            activeTab === 'retirement'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
              : 'bg-white text-slate-700 border-slate-200 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
          }`}
        >
          <PiggyBank className="w-4 h-4" />
          <span>3. Retirement & FIRE Planner</span>
        </button>

        <button
          onClick={() => setActiveTab('insurance')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
            activeTab === 'insurance'
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : 'bg-white text-slate-700 border-slate-200 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>4. Term Cover (HLV) Estimator</span>
        </button>
      </div>

      {/* CALCULATOR 1: SIP (Clean White Card) */}
      {activeTab === 'sip' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Systematic Investment Plan (SIP)</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Compound small monthly savings into multi-crore wealth with rupee-cost averaging.
                </p>
              </div>

              {/* Slider 1: Monthly amount */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Monthly Investment</span>
                  <span className="text-lg font-mono font-black text-emerald-600">{formatINR(sipMonthly)}</span>
                </div>
                <input 
                  type="range"
                  min="500"
                  max="2000000"
                  step="500"
                  value={sipMonthly}
                  onChange={(e) => setSipMonthly(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹500</span>
                  <span>₹50,000</span>
                  <span>₹5 Lakhs</span>
                  <span>₹20 Lakhs / mo</span>
                </div>
              </div>

              {/* Slider 2: Return Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Expected Annual Return (CAGR)</span>
                  <span className="text-lg font-mono font-black text-blue-600">{sipRate}% p.a.</span>
                </div>
                <input 
                  type="range"
                  min="5"
                  max="25"
                  step="0.5"
                  value={sipRate}
                  onChange={(e) => setSipRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>5% (Debt)</span>
                  <span>12% - 14% (Broad Market Equity)</span>
                  <span>18% (Alpha)</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Slider 3: Duration */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Investment Horizon</span>
                  <span className="text-lg font-mono font-black text-slate-900">{sipYears} Years</span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={sipYears}
                  onChange={(e) => setSipYears(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 Year</span>
                  <span>10 Years</span>
                  <span>20 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* 5-Year Milestone Matrix */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Milestone Wealth Projections</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {sipResults.milestones.map(m => (
                    <div key={m.year} className="p-2.5 rounded-xl bg-white border border-slate-200">
                      <span className="text-slate-500 block text-[10px]">At Year {m.year}:</span>
                      <span className="font-bold text-slate-900 font-mono">{formatCompactINR(m.corpus)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Display (Light canvas) */}
            <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6">
              <div className="text-center pb-6 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Estimated Total Wealth Corpus
                </span>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-600 mt-2 font-mono">
                  {formatCompactINR(sipResults.futureValue)}
                </p>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Exact: {formatINR(sipResults.futureValue)}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Capital Invested:</span>
                  <span className="font-bold text-slate-900 font-mono">{formatINR(sipResults.totalInvested)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Estimated Wealth Gain:</span>
                  <span className="font-bold text-emerald-600 font-mono">+{formatINR(sipResults.estimatedReturns)}</span>
                </div>
              </div>

              {/* Dynamic Percentage Bar Breakdown: Blue for principal, Emerald for returns */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-blue-700">Invested: {sipResults.investedPercent}%</span>
                  <span className="text-emerald-700">Returns: {sipResults.returnsPercent}%</span>
                </div>
                <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-blue-600 h-full transition-all duration-300"
                    style={{ width: `${sipResults.investedPercent}%` }}
                    title="Invested Capital"
                  ></div>
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{ width: `${sipResults.returnsPercent}%` }}
                    title="Compounded Gains"
                  ></div>
                </div>
              </div>

              <button
                onClick={() => onOpenCheckup(`SIP Plan: ${formatINR(sipMonthly)}/mo for ${sipYears} Yrs`)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>Setup This SIP Portfolio with Avighna</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 2: LOAN EMI */}
      {activeTab === 'emi' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Loan Equated Monthly Installment (EMI)</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Accurately calculate your monthly outflow across Home Loans, Business Capital, and LAP.
                </p>
              </div>

              {/* Slider 1: Principal */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Principal Loan Amount</span>
                  <span className="text-lg font-mono font-black text-blue-700">{formatINR(loanPrincipal)}</span>
                </div>
                <input 
                  type="range"
                  min="100000"
                  max="50000000"
                  step="100000"
                  value={loanPrincipal}
                  onChange={(e) => setLoanPrincipal(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹1 Lakh</span>
                  <span>₹1 Crore</span>
                  <span>₹3 Crores</span>
                  <span>₹5 Crores</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Interest Rate (p.a.)</span>
                  <span className="text-lg font-mono font-black text-emerald-600">{loanRate}%</span>
                </div>
                <input 
                  type="range"
                  min="6"
                  max="18"
                  step="0.05"
                  value={loanRate}
                  onChange={(e) => setLoanRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>6.0%</span>
                  <span>8.35% (Avighna Tier-1 Home)</span>
                  <span>12.0% (MSME)</span>
                  <span>18.0%</span>
                </div>
              </div>

              {/* Slider 3: Tenure */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Loan Tenure</span>
                  <span className="text-lg font-mono font-black text-slate-900">{loanTenureYears} Years</span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={loanTenureYears}
                  onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 Year</span>
                  <span>10 Years</span>
                  <span>20 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Balance Transfer Tip:</strong> If your current home loan rate exceeds 9.0%, transferring to an 8.35% slab can save over ₹15 Lakhs in interest over 20 years.
                </span>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6">
              <div className="text-center pb-6 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Monthly Installment (EMI)
                </span>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-700 mt-2 font-mono">
                  {formatINR(emiResults.emi)}
                </p>
                <p className="text-xs text-slate-500 mt-1">Payable for {loanTenureYears * 12} installments</p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Principal Amount:</span>
                  <span className="font-bold text-slate-900 font-mono">{formatINR(loanPrincipal)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Interest Payable:</span>
                  <span className="font-bold text-amber-600 font-mono">{formatINR(emiResults.totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-slate-200 pt-2 font-bold">
                  <span className="text-slate-700">Total Sum Payable:</span>
                  <span className="font-black text-slate-900 font-mono">{formatINR(emiResults.totalAmount)}</span>
                </div>
              </div>

              {/* Ratio breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-blue-700">Principal: {emiResults.principalPercent}%</span>
                  <span className="text-amber-700">Interest: {emiResults.interestPercent}%</span>
                </div>
                <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-blue-600 h-full transition-all duration-300"
                    style={{ width: `${emiResults.principalPercent}%` }}
                  ></div>
                  <div 
                    className="bg-amber-500 h-full transition-all duration-300"
                    style={{ width: `${emiResults.interestPercent}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => onOpenCheckup(`Loan Application: ${formatINR(loanPrincipal)} @ ${loanRate}%`)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>Apply for Sanction with 30+ Banks</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 3: RETIREMENT & FIRE */}
      {activeTab === 'retirement' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Retirement & Financial Independence (FIRE)</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Factors in Indian lifestyle inflation (6%) and longevity to pinpoint your freedom number.
                </p>
              </div>

              {/* Age Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-700">Current Age</span>
                    <span className="text-sm font-bold text-slate-900 font-mono">{currentAge} Yrs</span>
                  </div>
                  <input 
                    type="range"
                    min="20"
                    max="65"
                    step="1"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-700">Target Retirement Age</span>
                    <span className="text-sm font-bold text-emerald-600 font-mono">{retirementAge} Yrs</span>
                  </div>
                  <input 
                    type="range"
                    min={currentAge + 1}
                    max="75"
                    step="1"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Current Monthly Expenses */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Current Monthly Household Expenses</span>
                  <span className="text-lg font-mono font-black text-blue-700">{formatINR(currentMonthlyExpenses)}</span>
                </div>
                <input 
                  type="range"
                  min="15000"
                  max="500000"
                  step="5000"
                  value={currentMonthlyExpenses}
                  onChange={(e) => setCurrentMonthlyExpenses(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹15,000</span>
                  <span>₹1 Lakh</span>
                  <span>₹2.5 Lakhs</span>
                  <span>₹5 Lakhs / mo</span>
                </div>
              </div>

              {/* Inflation slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Expected Annual Inflation Rate</span>
                  <span className="text-sm font-mono font-bold text-slate-900">{inflationRate}%</span>
                </div>
                <input 
                  type="range"
                  min="4"
                  max="10"
                  step="0.5"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>4% (Optimistic)</span>
                  <span>6% (Standard Indian Urban CPI)</span>
                  <span>10% (High)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <p>• Time left to build corpus: <strong className="text-slate-900">{retirementResults.yearsToRetire} Years</strong></p>
                <p>• Future Monthly Expense at age {retirementAge}: <strong className="text-amber-700 font-mono">{formatINR(retirementResults.futureMonthlyExpense)} / month</strong></p>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6">
              <div className="text-center pb-6 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Required Retirement Corpus
                </span>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-600 mt-2 font-mono">
                  {formatCompactINR(retirementResults.targetCorpus)}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-mono">({formatINR(retirementResults.targetCorpus)})</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2 text-center">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Recommended Monthly SIP Today
                </span>
                <p className="text-2xl font-black text-emerald-600 font-mono">
                  {formatINR(retirementResults.monthlySIPNeeded)}
                  <span className="text-xs font-normal text-slate-500"> / month</span>
                </p>
                <p className="text-[11px] text-slate-600 font-medium">
                  Targeting 12% equity CAGR until age {retirementAge}.
                </p>
              </div>

              <button
                onClick={() => onOpenCheckup(`Retirement Goal: Target ${formatCompactINR(retirementResults.targetCorpus)} by age ${retirementAge}`)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>Design My Custom Retirement Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 4: TERM LIFE INSURANCE ESTIMATOR */}
      {activeTab === 'insurance' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Term Life Insurance (Human Life Value)</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Ensure your family and debts are 100% fortified in case of an unforeseen life event.
                </p>
              </div>

              {/* Slider 1: Annual Income */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Current Annual Take-Home Income</span>
                  <span className="text-lg font-mono font-black text-emerald-600">{formatINR(annualIncome)}</span>
                </div>
                <input 
                  type="range"
                  min="300000"
                  max="10000000"
                  step="100000"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹3 Lakhs</span>
                  <span>₹25 Lakhs</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Slider 2: Outstanding Liabilities */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Total Outstanding Loans (Home/Business/Car)</span>
                  <span className="text-lg font-mono font-black text-rose-600">{formatINR(currentLiabilities)}</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="30000000"
                  step="250000"
                  value={currentLiabilities}
                  onChange={(e) => setCurrentLiabilities(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹0 (Debt Free)</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1.5 Crores</span>
                  <span>₹3 Crores</span>
                </div>
              </div>

              {/* Slider 3: Child Education / Family Future Reserve */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">Future Milestone Provision (Children Education & Marriage)</span>
                  <span className="text-lg font-mono font-black text-blue-700">{formatINR(childMilestonesGoal)}</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="20000000"
                  step="500000"
                  value={childMilestonesGoal}
                  onChange={(e) => setChildMilestonesGoal(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹0</span>
                  <span>₹30 Lakhs</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crores</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6">
              <div className="text-center pb-6 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Recommended Term Sum Assured (Cover)
                </span>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-700 mt-2 font-mono">
                  {formatCompactINR(insuranceResults.totalRecommended)}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-mono">({formatINR(insuranceResults.totalRecommended)})</p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Family Income Replacement (15 Yrs):</span>
                  <span className="font-bold text-slate-900 font-mono">{formatCompactINR(insuranceResults.incomeReplacement)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Liabilities to Settle:</span>
                  <span className="font-bold text-rose-600 font-mono">{formatCompactINR(currentLiabilities)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Children Milestone Reserve:</span>
                  <span className="font-bold text-blue-700 font-mono">{formatCompactINR(childMilestonesGoal)}</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between items-center font-bold text-emerald-700">
                  <span>Estimated Premium:</span>
                  <span className="font-mono">~{formatINR(insuranceResults.approxMonthlyPremium)} / month</span>
                </div>
              </div>

              <button
                onClick={() => onOpenCheckup(`Term Insurance: ${formatCompactINR(insuranceResults.totalRecommended)} Cover`)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>Compare Term Quotes Across Top Insurers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
