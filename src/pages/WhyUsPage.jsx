import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Scale, 
  Building2, 
  HeartHandshake, 
  Sparkles
} from 'lucide-react';
import { partnerInstitutions } from '../data/partnersData';

export default function WhyUsPage({ onOpenCheckup }) {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Goal Mapping',
      desc: 'We start with a thorough 45-minute confidential session to map your family’s balance sheet, existing debts, lifestyle ambitions, and risk capacity.',
      detail: 'No pushy sales pitches. Just raw, objective listening to understand where your family stands today and where you want to be in 5, 10, and 20 years.'
    },
    {
      num: '02',
      title: '360° Forensic Financial Audit',
      desc: 'Our certified planners dissect your current home loan interest rates, check CIBIL reports, evaluate AMC expense ratios, and stress-test your insurance covers.',
      detail: 'We uncover hidden processing fees, suboptimal traditional insurance policies, and over-leveraged borrowing that bleed family wealth silently.'
    },
    {
      num: '03',
      title: 'Custom Institutional Blueprint',
      desc: 'We engineer a mathematical, unbiased roadmap matching your requirements with 30+ top partner banks, housing finance companies, and mutual fund AMCs.',
      detail: 'You receive clear side-by-side comparative quotes, transparent EMI calculations, and step-up SIP projections with zero undisclosed commissions.'
    },
    {
      num: '04',
      title: 'Doorstep Execution & Continuous Monitoring',
      desc: 'Our Pune operational team coordinates complete document pickup, PMC legal search, bank underwriter sanctioning, and portfolio auto-debit setups.',
      detail: 'We conduct bi-annual portfolio reviews, dynamic debt refinancing when RBI cuts rates, and stand beside your family during medical or term claims.'
    }
  ];

  const values = [
    {
      icon: Scale,
      title: 'Strict Fiduciary Duty',
      desc: 'We represent you, the client — never the product manufacturer. We prioritize what maximizes your wealth, not what generates broker kickbacks.'
    },
    {
      icon: Eye,
      title: '100% Fee Transparency',
      desc: 'Zero undisclosed trailing commissions or backdoor markups. Every basis point of interest and AMC expense ratio is disclosed upfront in writing.'
    },
    {
      icon: Target,
      title: 'Goal-Centric Architecture',
      desc: 'We never sell standalone products in a vacuum. Every loan sanction, SIP allocation, or term cover serves a defined real-world family milestone.'
    },
    {
      icon: HeartHandshake,
      title: 'End-to-End Pune Handholding',
      desc: 'From Baner to Kharadi, our senior advisors visit your residence or corporate office, ensuring white-glove doorstep document handling.'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>The Avighna Standard</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Why Discerning Pune Families Choose Avighna
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          In an industry plagued by opaque commissions and aggressive push-sales, we built an independent fiduciary firm dedicated to pure client alignment.
        </p>
      </div>

      {/* Mission & Vision Cards (Bright White Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">Our Mission</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To empower 50,000 Indian families and entrepreneurs with institutional-grade financial guidance, lowest-cost debt structuring, disciplined wealth compounding, and ironclad insurance shielding — eliminating anxiety from financial decision making.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">Our Vision</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To be recognized as Western India’s most ethical, technologically advanced, and transparent private wealth and debt advisory firm — setting the golden benchmark for fiduciary excellence in financial services.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Uncompromising Ethics
          </span>
          <h2 className="text-3xl font-black text-slate-900">Our Four Operating Tenets</h2>
          <p className="text-sm text-slate-500">The core principles guiding every client recommendation we deliver.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div 
                key={i} 
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-slate-900">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4-Step Process Workflow */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-12 shadow-sm">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Structured Execution
          </span>
          <h2 className="text-3xl font-black text-slate-900">The 4-Step Avighna Advisory Process</h2>
          <p className="text-sm text-slate-500">How we take you from financial complexity to complete clarity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st) => (
            <div 
              key={st.num}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative space-y-4 hover:border-emerald-400 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-mono text-emerald-600">{st.num}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>
              <h4 className="text-lg font-black text-slate-900">{st.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 italic">
                {st.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Ecosystem on Bright White Cards */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Institutional Network
          </span>
          <h2 className="text-3xl font-black text-slate-900">Our 30+ Partner Ecosystem</h2>
          <p className="text-sm text-slate-500">We work across top tier-1 public & private banks, AMCs, and insurers without proprietary bias.</p>
        </div>

        <div className="space-y-8">
          {partnerInstitutions.map((grp, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>{grp.category}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {grp.partners.map((p, pIdx) => (
                  <div key={pIdx} className="p-3.5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-emerald-300 transition-colors shadow-none hover:shadow-sm">
                    <p className="text-xs font-bold text-slate-900">{p.name}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{p.tag}</p>
                    {p.rate && <p className="text-[10px] text-emerald-700 font-bold mt-1">{p.rate}</p>}
                    {p.specialty && <p className="text-[10px] text-blue-700 font-bold mt-1">{p.specialty}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA (Vibrant Gradient) */}
      <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 border border-emerald-400/30 text-white shadow-xl space-y-5">
        <h3 className="text-2xl sm:text-3xl font-black text-white">Experience True Fiduciary Advisory</h3>
        <p className="text-emerald-50 text-sm max-w-xl mx-auto">
          Schedule your complimentary consultation with our senior Pune wealth planners today.
        </p>
        <button
          onClick={() => onOpenCheckup()}
          className="px-8 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-900 font-bold text-sm shadow-md inline-flex items-center gap-2 transition-all hover:scale-105"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Book Free Financial Checkup</span>
        </button>
      </div>

    </div>
  );
}
