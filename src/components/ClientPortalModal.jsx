import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Download, 
  PieChart, 
  Home, 
  HeartPulse 
} from 'lucide-react';

export default function ClientPortalModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' or 'login'
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobileNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length >= 4) {
      setActiveTab('demo');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center border border-blue-200">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Avighna Client Wealth Portal</h3>
                <span className="text-[10px] font-bold text-blue-800 bg-blue-100 border border-blue-200 px-2 py-0.5 rounded-full">
                  256-Bit Encrypted
                </span>
              </div>
              <p className="text-xs text-slate-500">Consolidated Mutual Funds, Loans & Insurance Tracking</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 bg-slate-100/60 px-6 pt-2">
          <button
            onClick={() => setActiveTab('demo')}
            className={`pb-2.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === 'demo'
                ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-lg border-t border-x border-b-transparent shadow-sm'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Interactive Portal Preview
          </button>
          <button
            onClick={() => setActiveTab('login')}
            className={`pb-2.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === 'login'
                ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-lg border-t border-x border-b-transparent shadow-sm'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Client Login (OTP)
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
          {activeTab === 'demo' ? (
            <div className="space-y-6">
              {/* Client Welcome Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-blue-700 font-bold uppercase tracking-wider">Verified High Networth Client</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span className="text-xs text-slate-500">ID: AV-8921-PN</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">Vikram Deshmukh (Family Folio)</h4>
                  <p className="text-xs text-slate-600">Advisor Assigned: Shrikant Kulkarni, CFP (Baner Desk)</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => alert('Downloading FY 2025-26 Capital Gains & Loan Interest Certificate (Simulated)')}
                    className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 border border-slate-300 shadow-sm transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-600" />
                    <span>Tax Certificates</span>
                  </button>
                </div>
              </div>

              {/* Metric Cards Grid (White cards, crisp borders) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500 font-semibold">Mutual Funds & SIP Corpus</span>
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-xl font-black text-slate-900">₹78,42,910</p>
                  <p className="text-xs text-emerald-700 mt-1 flex items-center gap-1 font-bold">
                    <span>+14.8% XIRR</span>
                    <span className="text-slate-500 font-normal">| Monthly SIP: ₹85,000</span>
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500 font-semibold">Active Home Loan (SBI)</span>
                    <Home className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-xl font-black text-slate-900">₹1,18,50,000</p>
                  <p className="text-xs text-blue-700 mt-1 flex items-center gap-1 font-bold">
                    <span>8.35% ROI</span>
                    <span className="text-slate-500 font-normal">| EMI: ₹99,480</span>
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500 font-semibold">Total Insurance Shield</span>
                    <HeartPulse className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xl font-black text-slate-900">₹3.50 Crore</p>
                  <p className="text-xs text-emerald-700 mt-1 flex items-center gap-1 font-bold">
                    <span>100% Active</span>
                    <span className="text-slate-500 font-normal">| Next renewal: Dec 2026</span>
                  </p>
                </div>
              </div>

              {/* Asset Allocation Breakdown */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-emerald-600" />
                    <span>Goal-Based Portfolio Distribution</span>
                  </h5>
                  <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">Target: Balanced Growth</span>
                </div>

                <div className="space-y-3 pt-1">
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>Large & Flexi-Cap Equity (Parag Parikh, Nippon, HDFC)</span>
                      <span className="font-bold text-slate-900">62% (₹48.6L)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>Mid & Small Cap Growth Engines (Quant, Tata)</span>
                      <span className="font-bold text-slate-900">23% (₹18.0L)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '23%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>Arbitrage, Liquid & Sovereign Gold Bonds</span>
                      <span className="font-bold text-slate-900">15% (₹11.8L)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advisory Concierge Contact */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Next Bi-Annual Portfolio Rebalancing Scheduled: Dec 15, 2026</span>
                </div>
                <a 
                  href="tel:+919823045890" 
                  className="text-white bg-emerald-600 hover:bg-emerald-700 px-3.5 py-1.5 rounded-lg font-bold transition-colors shadow-sm"
                >
                  Call Advisor
                </a>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto py-8 space-y-5">
              <div className="text-center">
                <h4 className="text-xl font-bold text-slate-900">Sign In to Your Portfolio</h4>
                <p className="text-xs text-slate-500 mt-1">Enter your registered 10-digit mobile number</p>
              </div>

              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Registered Mobile Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="e.g. 9823045890"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-xl py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2"
                  >
                    <span>Generate OTP</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                    OTP sent to +91 {mobileNumber}. For demo access, enter <strong>1234</strong>.
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Enter 4-Digit OTP</label>
                    <input
                      type="text"
                      maxLength="4"
                      placeholder="1234"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full tracking-widest text-center font-mono text-lg font-bold bg-white border border-slate-300 rounded-xl py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25"
                  >
                    Verify & Unlock Dashboard
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
