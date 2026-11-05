import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Star, 
  Award, 
  Calculator, 
  ArrowUpRight, 
  Check, 
  X as CloseIcon, 
  ChevronRight, 
  BadgeCheck 
} from 'lucide-react';
import { formatINR, formatCompactINR } from '../utils/formatters';
import { serviceCategories } from '../data/servicesData';
import { testimonials, comparisonPoints } from '../data/testimonialsData';
import { trustHighlights } from '../data/partnersData';

export default function HomePage({ setCurrentPage, onOpenCheckup, onSelectServiceCategory }) {
  // Quick Calculator Preview Widget State
  const [calcTab, setCalcTab] = useState('sip'); // 'sip' or 'emi'
  
  // Quick SIP states
  const [quickSipAmount, setQuickSipAmount] = useState(15000);
  const [quickSipYears, setQuickSipYears] = useState(15);
  const quickSipRate = 13.5; // Benchmark equity rate

  // Quick EMI states
  const [quickLoanAmount, setQuickLoanAmount] = useState(5000000); // 50 Lakhs
  const [quickLoanTenure, setQuickLoanTenure] = useState(20); // 20 years
  const [quickLoanRate, setQuickLoanRate] = useState(8.4); // 8.4%

  // Computations for Quick SIP
  const quickSipResults = useMemo(() => {
    const P = Number(quickSipAmount);
    const i = quickSipRate / 12 / 100;
    const n = Number(quickSipYears) * 12;
    const totalInvested = P * n;
    const futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const estimatedReturns = Math.max(0, futureValue - totalInvested);
    return {
      totalInvested,
      estimatedReturns,
      futureValue
    };
  }, [quickSipAmount, quickSipYears, quickSipRate]);

  // Computations for Quick EMI
  const quickEmiResults = useMemo(() => {
    const P = Number(quickLoanAmount);
    const r = quickLoanRate / 12 / 100;
    const n = Number(quickLoanTenure) * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;
    return {
      emi: isNaN(emi) ? 0 : Math.round(emi),
      totalInterest: isNaN(totalInterest) ? 0 : Math.round(totalInterest),
      totalAmount: isNaN(totalAmount) ? 0 : Math.round(totalAmount)
    };
  }, [quickLoanAmount, quickLoanTenure, quickLoanRate]);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* 1. HERO SECTION (Subtle light gradient) */}
      <section className="relative pt-32 sm:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-emerald-50/30 border-b border-slate-200/80">
        {/* Soft Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[380px] h-[300px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-800 text-xs font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>AMFI Registered & Pune’s Top-Rated Advisory Desk</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.14]">
                Build Your Wealth, <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Secure Your Future
                </span>{' '}
                — Simply.
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                Comprehensive solutions across Home/Business Loans, Mutual Funds, SIPs, Insurance, and Property Advisory. Designed around your real life, not a product pitch.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenCheckup()}
                  className="px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group"
                >
                  <Sparkles className="w-5 h-5 text-gold-300 group-hover:rotate-12 transition-transform" />
                  <span>Start Free Financial Checkup</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-4 rounded-xl text-base font-bold text-blue-700 hover:text-blue-800 bg-white hover:bg-blue-50/70 border-2 border-blue-600 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Services</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-600" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-slate-900">₹500 Cr+</p>
                  <p className="text-xs text-slate-500 font-medium">Assets Facilitated</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-emerald-600">99.2%</p>
                  <p className="text-xs text-slate-500 font-medium">Loan Approval Rate</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-blue-700">10,000+</p>
                  <p className="text-xs text-slate-500 font-medium">Happy Families</p>
                </div>
              </div>

            </div>

            {/* Right Hero Graphic: Clean Light Glassmorphic Interactive Stat Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Central Dashboard Card */}
                <div className="glass-panel-light rounded-3xl p-6 sm:p-7 shadow-xl relative z-10 space-y-5 bg-white/95">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Avighna Fiduciary Index</h4>
                        <p className="text-[11px] text-slate-500">Live Client Performance Snapshot</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 rounded-full">
                      ● Active
                    </span>
                  </div>

                  {/* Highlight stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Home Loan Desk</span>
                      <p className="text-lg font-black text-emerald-600 mt-1">From 8.35%</p>
                      <p className="text-[10px] text-slate-500">SBI • HDFC • ICICI</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">SIP Growth XIRR</span>
                      <p className="text-lg font-black text-blue-600 mt-1">14.6% Avg</p>
                      <p className="text-[10px] text-slate-500">10-Yr Equity Blend</p>
                    </div>
                  </div>

                  {/* Verified Process Bar */}
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-700 font-semibold">Fiduciary Transparency</span>
                      <span className="text-emerald-700 font-bold">100% Roadmap</span>
                    </div>
                    <div className="w-full h-2.5 bg-emerald-200/60 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-full"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>Zero Hidden Trailing Broker Fees</span>
                      <span className="font-semibold text-emerald-700">AMFI Certified</span>
                    </div>
                  </div>

                  {/* Bottom reassurance */}
                  <div className="flex items-center justify-between text-xs pt-1 text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>30+ Bank & AMC Partners</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-slate-800">4.9 / 5 Rating</span>
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: Top Right */}
                <div className="absolute -top-6 -right-4 sm:-right-6 bg-white border border-slate-200 rounded-2xl p-3.5 shadow-lg z-20 flex items-center gap-2.5 animate-bounce-short">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">0 Hidden Fees</p>
                    <p className="text-[10px] text-slate-500">Pure Fiduciary Model</p>
                  </div>
                </div>

                {/* Floating Card 2: Bottom Left */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white border border-slate-200 rounded-2xl p-3.5 shadow-lg z-20 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">₹500 Cr+ Facilitated</p>
                    <p className="text-[10px] text-slate-500">Pune & Maharashtra</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. QUICK CALCULATOR PREVIEW WIDGET (Bright white card container) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 mb-2">
                <Calculator className="w-3.5 h-3.5 text-amber-600" />
                <span>Instant Estimator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Simulate Your Wealth & Loan Numbers
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Toggle between SIP growth and Home Loan EMI calculators for real-time projections.
              </p>
            </div>

            {/* Toggle Switcher */}
            <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shrink-0">
              <button
                onClick={() => setCalcTab('sip')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  calcTab === 'sip' 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>SIP Wealth Estimator</span>
              </button>
              <button
                onClick={() => setCalcTab('emi')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  calcTab === 'emi' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Loan EMI Calculator</span>
              </button>
            </div>
          </div>

          {/* Quick Calculator Body */}
          <div className="pt-8">
            {calcTab === 'sip' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Sliders */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Slider 1: Monthly Investment */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm font-bold text-slate-700">
                        Monthly Investment Amount
                      </label>
                      <span className="text-base sm:text-lg font-black text-emerald-600 font-mono">
                        {formatINR(quickSipAmount)}
                      </span>
                    </div>
                    <input 
                      type="range"
                      min="1000"
                      max="200000"
                      step="1000"
                      value={quickSipAmount}
                      onChange={(e) => setQuickSipAmount(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>₹1,000 / mo</span>
                      <span>₹50,000</span>
                      <span>₹1,00,000</span>
                      <span>₹2,00,000 / mo</span>
                    </div>
                  </div>

                  {/* Slider 2: Investment Duration */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm font-bold text-slate-700">
                        Investment Horizon
                      </label>
                      <span className="text-base sm:text-lg font-black text-slate-900 font-mono">
                        {quickSipYears} Years
                      </span>
                    </div>
                    <input 
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={quickSipYears}
                      onChange={(e) => setQuickSipYears(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>1 Year</span>
                      <span>10 Years</span>
                      <span>20 Years</span>
                      <span>30 Years</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500">
                    *Based on benchmark diversified equity CAGR expectation of {quickSipRate}% p.a.
                  </p>
                </div>

                {/* Results Card */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                  <div className="text-center pb-4 border-b border-slate-200">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      Total Expected Corpus
                    </p>
                    <p className="text-3xl sm:text-4xl font-black text-emerald-600 mt-1 font-mono">
                      {formatCompactINR(quickSipResults.futureValue)}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      ({formatINR(quickSipResults.futureValue)})
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Total Invested Amount:</span>
                      <span className="font-bold text-slate-800 font-mono">{formatINR(quickSipResults.totalInvested)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Estimated Wealth Gain:</span>
                      <span className="font-bold text-emerald-600 font-mono">+{formatINR(quickSipResults.estimatedReturns)}</span>
                    </div>
                  </div>

                  {/* Visual ratio bar */}
                  <div className="space-y-1">
                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-300"
                        style={{ width: `${(quickSipResults.totalInvested / quickSipResults.futureValue) * 100}%` }}
                        title="Invested"
                      ></div>
                      <div 
                        className="h-full bg-emerald-500 transition-all duration-300"
                        style={{ width: `${(quickSipResults.estimatedReturns / quickSipResults.futureValue) * 100}%` }}
                        title="Wealth Gain"
                      ></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Principal
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Compounded Growth
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setCurrentPage('calculators');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Open Full Calculator Suite (All 4 Tools)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Quick EMI Body */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Sliders */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Slider 1: Loan Amount */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm font-bold text-slate-700">
                        Loan Amount Required
                      </label>
                      <span className="text-base sm:text-lg font-black text-blue-700 font-mono">
                        {formatINR(quickLoanAmount)}
                      </span>
                    </div>
                    <input 
                      type="range"
                      min="500000"
                      max="30000000"
                      step="250000"
                      value={quickLoanAmount}
                      onChange={(e) => setQuickLoanAmount(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>₹5 Lakhs</span>
                      <span>₹1 Crore</span>
                      <span>₹2 Crores</span>
                      <span>₹3 Crores</span>
                    </div>
                  </div>

                  {/* Slider 2: Interest Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm font-bold text-slate-700">
                        Interest Rate (p.a.)
                      </label>
                      <span className="text-base sm:text-lg font-black text-emerald-600 font-mono">
                        {quickLoanRate}%
                      </span>
                    </div>
                    <input 
                      type="range"
                      min="8"
                      max="14"
                      step="0.1"
                      value={quickLoanRate}
                      onChange={(e) => setQuickLoanRate(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>8.0% (Tier 1 Home)</span>
                      <span>9.5% (LAP)</span>
                      <span>12.0% (Business)</span>
                      <span>14.0%</span>
                    </div>
                  </div>

                  {/* Slider 3: Tenure */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs sm:text-sm font-bold text-slate-700">
                        Loan Tenure
                      </label>
                      <span className="text-base sm:text-lg font-black text-slate-900 font-mono">
                        {quickLoanTenure} Years
                      </span>
                    </div>
                    <input 
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={quickLoanTenure}
                      onChange={(e) => setQuickLoanTenure(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>1 Year</span>
                      <span>10 Years</span>
                      <span>20 Years</span>
                      <span>30 Years</span>
                    </div>
                  </div>
                </div>

                {/* Results Card */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                  <div className="text-center pb-4 border-b border-slate-200">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      Monthly Equated Installment (EMI)
                    </p>
                    <p className="text-3xl sm:text-4xl font-black text-blue-700 mt-1 font-mono">
                      {formatINR(quickEmiResults.emi)}
                      <span className="text-sm font-normal text-slate-500"> / mo</span>
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Principal Loan:</span>
                      <span className="font-bold text-slate-800 font-mono">{formatINR(quickLoanAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Total Interest Payable:</span>
                      <span className="font-bold text-amber-600 font-mono">{formatINR(quickEmiResults.totalInterest)}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2 font-bold">
                      <span className="text-slate-700">Total Amount Payable:</span>
                      <span className="font-black text-slate-900 font-mono">{formatINR(quickEmiResults.totalAmount)}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenCheckup('Home Loan')}
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Check Sanction Eligibility (Free)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>


      {/* 3. CORE SERVICES OVERVIEW (4 Clean White Cards with Hover Lift) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Full-Spectrum Fiduciary Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Four Core Pillars. One Trusted Pune Partner.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Whether securing credit, compounding savings, guarding family longevity, or investing in Pune real estate, we handle every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {serviceCategories.map((cat) => {
            return (
              <div
                key={cat.id}
                className="group relative p-7 rounded-3xl bg-white hover:bg-white border border-slate-200 hover:border-emerald-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-all duration-300">
                      {cat.id === 'loans' && <Building2 className="w-6 h-6" />}
                      {cat.id === 'wealth' && <TrendingUp className="w-6 h-6" />}
                      {cat.id === 'insurance' && <ShieldCheck className="w-6 h-6" />}
                      {cat.id === 'property' && <Compass className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs font-bold text-emerald-700 mt-1">
                    {cat.tagline}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="mt-5 space-y-2.5 text-xs text-slate-600">
                    {cat.services.slice(0, 3).map((sub) => (
                      <li key={sub.id} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong className="text-slate-800">{sub.title}</strong> — {sub.interestRate}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectServiceCategory) {
                        onSelectServiceCategory(cat.id);
                      }
                      setCurrentPage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs sm:text-sm font-bold text-blue-700 group-hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Detailed Vertical</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenCheckup(cat.name)}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-emerald-600 text-slate-700 hover:text-white border border-slate-200 hover:border-emerald-600 transition-all"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* 4. COMPARISON MATRIX ("TRADITIONAL ADVISORY" VS "THE AVIGHNA WAY") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Transparent Benchmark
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Traditional Sales Agents vs. The Avighna Fiduciary Standard
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See the structural difference between commission-driven push sales and genuine, goal-aligned financial planning.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider w-1/4">
                    Key Differentiator
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider w-3/8">
                    Traditional Bank DSA / Agent
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-wider w-3/8 bg-emerald-50/60">
                    The Avighna Financial Way
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonPoints.map((item, idx) => (
                  <tr key={idx} className={item.highlight ? 'bg-slate-50/40' : 'bg-white'}>
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      {item.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <div className="flex items-start gap-2">
                        <CloseIcon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800 bg-emerald-50/20 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-900 font-bold">{item.avighna}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* 5. TRUST METRICS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm mb-16">
          {trustHighlights.map((stat, idx) => (
            <div key={idx} className="text-center p-3">
              <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {stat.metric}
              </p>
              <p className="text-xs font-bold text-slate-800 mt-1">{stat.label}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Verified Client Stories
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Trusted by 10,000+ Pune Professionals & Entrepreneurs
            </h2>
            <p className="text-sm text-slate-500">
              Real families who transformed their liabilities into compounding wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      {t.metric}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <BadgeCheck className="w-4 h-4 text-emerald-600" />
                    </h4>
                    <p className="text-[11px] text-slate-500">{t.role}</p>
                    <p className="text-[10px] text-blue-700 font-bold">{t.location} • {t.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* 6. PARTNER INSTITUTIONS STRIP (Bright white badges) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-100/70 border border-slate-200 text-center space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Direct Syndication & Distribution Access Across 30+ Leading Indian Institutions
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra', 'Nippon India AMC', 'Tata Mutual Fund', 'Max Life'].map((bank) => (
              <div 
                key={bank}
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 shadow-sm transition-all"
              >
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. BOTTOM HIGH-CONVERTING CTA BANNER (Vibrant Emerald/Blue gradient) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 border border-emerald-500/30 overflow-hidden shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-200 bg-white/15 px-3 py-1 rounded-full border border-white/20">
                Zero Upfront Cost • In-Person or Virtual
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Take Control of Your Financial Future Today.
              </h2>
              <p className="text-emerald-50 text-sm sm:text-base max-w-xl">
                Get a comprehensive review of your existing home loan rate, mutual fund portfolio health, and family insurance protection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={() => onOpenCheckup()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-900 bg-white hover:bg-emerald-50 shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Book Free Financial Checkup</span>
              </button>

              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all"
              >
                Contact Pune Desk
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
