import React from 'react';
import { 
  TrendingUp, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Lock
} from 'lucide-react';

export default function Footer({ setCurrentPage, onOpenCheckup }) {
  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyrightYear = 2026;

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-700 pt-16 pb-12 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 flex items-center justify-center shadow-md shadow-emerald-500/20">
                <TrendingUp className="w-6 h-6 text-white stroke-[2.5]" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-slate-900">AVIGHNA</span>
                <span className="text-gold-500 font-bold ml-1 text-xl">.</span>
                <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">
                  Financial Services • Pune
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pr-4">
              Pune’s premier fiduciary financial advisory firm. We architect bespoke solutions across Home & Business Loans, Mutual Funds, Disciplined SIPs, Risk Protection, and Prime Real Estate. Transparent, unbiased, and engineered for your real life.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> AMFI Registered ARN-284910
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-800">
                <Lock className="w-3.5 h-3.5 text-blue-600" /> Fiduciary Zero-Conflict Model
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-emerald-600 font-medium transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-emerald-600 font-medium transition-colors">
                  All 4 Advisory Verticals
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('calculators')} className="hover:text-emerald-600 font-medium transition-colors">
                  Interactive Financial Calculators
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('why-us')} className="hover:text-emerald-600 font-medium transition-colors">
                  Why Us & Partner Ecosystem
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-emerald-600 font-medium transition-colors">
                  Contact & Pune Office Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Advisory Verticals */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Core Offerings</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-emerald-600 font-medium transition-colors"
                >
                  Home Loans (from 8.35%)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-emerald-600 font-medium transition-colors"
                >
                  Business & MSME Capital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-emerald-600 font-medium transition-colors"
                >
                  Direct Mutual Funds & SIPs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-emerald-600 font-medium transition-colors"
                >
                  Term Life & Health Cover
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-emerald-600 font-medium transition-colors"
                >
                  Pune Property Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Pune Registered Office */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Pune Headquarters</h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Level 4, Amar Paradigm, Baner Road, near Balewadi High Street, Pune, MH 411045
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+919823045890" className="hover:text-slate-900 font-semibold transition-colors">
                  +91 98230 45890 / 020-67894500
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:consult@avighnafinancial.com" className="hover:text-slate-900 font-semibold transition-colors">
                  consult@avighnafinancial.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenCheckup()}
                className="w-full py-2 px-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Schedule Pune Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimers as required by regulatory compliance */}
        <div className="pt-8 pb-6 border-b border-slate-200 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p className="font-bold text-slate-700">
            Regulatory Disclosure & Disclaimer:
          </p>
          <p>
            Avighna Financial Services acts as an authorized distributor and referral advisor for Mutual Funds (AMFI Registered ARN-284910), Corporate Fixed Deposits, and Channel Partner for leading Scheduled Commercial Banks, Housing Finance Companies (HFCs), and NBFCs. 
            <strong className="text-slate-700"> Mutual Fund investments are subject to market risks, read all scheme related documents carefully before investing.</strong>
          </p>
          <p>
            Loan sanctions, disbursals, and applicable interest rates are at the sole discretion of the respective financing institutions and are governed by borrower eligibility, CIBIL credit parameters, and institutional lending policies. Insurance is the subject matter of solicitation; policies are underwritten by IRDAI-registered insurers.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {copyrightYear} Avighna Financial Services LLP. All Rights Reserved. Pune, Maharashtra.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-800 cursor-pointer">Terms of Advisory</span>
            <span>•</span>
            <span className="hover:text-slate-800 cursor-pointer">Fair Practice Code</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
