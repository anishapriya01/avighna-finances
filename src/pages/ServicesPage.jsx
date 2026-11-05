import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  ArrowRight, 
  Sparkles, 
  BadgeCheck,
  ChevronDown
} from 'lucide-react';
import { serviceCategories } from '../data/servicesData';

export default function ServicesPage({ onOpenCheckup, defaultCategory = 'loans' }) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [expandedDocService, setExpandedDocService] = useState(null);

  const currentCategoryData = serviceCategories.find(c => c.id === activeCategory) || serviceCategories[0];

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'loans': return Building2;
      case 'wealth': return TrendingUp;
      case 'insurance': return ShieldCheck;
      case 'property': return Compass;
      default: return Building2;
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Institutional Open-Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Comprehensive Financial Verticals
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Unbiased, transparent, and structured around your family’s balance sheet. Explore interest rates, eligibility criteria, and required documentation below.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {serviceCategories.map((cat) => {
          const Icon = getCategoryIcon(cat.id);
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                isActive 
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Vertical Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 inline-block">
            {currentCategoryData.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{currentCategoryData.tagline}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{currentCategoryData.description}</p>
        </div>
      </div>

      {/* Services Grid for Active Category (Crisp White Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentCategoryData.services.map((srv) => (
          <div 
            key={srv.id}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between space-y-6 transition-all"
          >
            <div className="space-y-5">
              
              {/* Header Title & Key Metric */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-black text-slate-900">{srv.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{srv.idealFor}</p>
                </div>
                <div className="shrink-0 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-right">
                  <span className="text-[10px] text-emerald-800 block font-bold uppercase">Pricing / Return</span>
                  <span className="text-sm font-black text-emerald-700">{srv.interestRate}</span>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Strategic Highlights
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {srv.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility Criteria */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <BadgeCheck className="w-4 h-4" />
                  <span>Eligibility Checklist</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-600">
                  {srv.eligibility.map((el, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Collapsible Documents Required */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedDocService(expandedDocService === srv.id ? null : srv.id)}
                  className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Documentation Checklist ({srv.documents.length} Items)</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedDocService === srv.id ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                </button>

                {expandedDocService === srv.id && (
                  <div className="p-3.5 bg-white border-t border-slate-200 text-xs text-slate-600 space-y-1.5">
                    {srv.documents.map((doc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>{doc}</span>
                      </div>
                    ))}
                    <p className="text-[11px] text-emerald-700 font-semibold pt-1">
                      ✓ Free doorstep pickup available in Pune & PCMC.
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Meta & Consultation CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5 self-start sm:self-center font-medium">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Turnaround: {srv.processingTime}</span>
              </div>

              <button
                onClick={() => onOpenCheckup(srv.title)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>Book Consultation for this Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cross-Service Advisory Guidance Note (Light Canvas) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-white to-emerald-50 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl font-black text-slate-900">Uncertain which debt or investment structure suits your FY 2025-26?</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Our Senior Financial Planners will review your tax bracket, liabilities, and liquid reserves to build a tailored blueprint.
          </p>
        </div>

        <button
          onClick={() => onOpenCheckup('Comprehensive Financial Audit')}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm whitespace-nowrap transition-all"
        >
          Request Full Balance Sheet Audit
        </button>
      </div>

    </div>
  );
}
