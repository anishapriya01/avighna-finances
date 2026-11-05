import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  TrendingUp, 
  Home, 
  PiggyBank, 
  Calculator,
  Phone,
  Mail,
  User,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';

const GOALS = [
  { id: 'Home Loan', label: 'Home Loan & Transfer', desc: 'Lowest interest rates from 8.35%', icon: Home },
  { id: 'Wealth Creation', label: 'Wealth Creation & SIP', desc: 'Disciplined long-term compounding', icon: TrendingUp },
  { id: 'Business Loan', label: 'Business & MSME Capital', desc: 'Working capital & machinery loans', icon: Building2 },
  { id: 'Retirement Planning', label: 'Retirement & FIRE', desc: 'Inflation-adjusted corpus roadmaps', icon: PiggyBank },
  { id: 'Term Insurance', label: 'Term Life & Health Cover', desc: 'High-value claim settlement protection', icon: ShieldCheck },
  { id: 'Property Advisory', label: 'Property & Commercial', desc: 'Vetted Pune acquisitions & yields', icon: Calculator },
];

const INCOME_RANGES = [
  '₹50,000 - ₹1,00,000 / month',
  '₹1,00,000 - ₹2,50,000 / month',
  '₹2,50,000 - ₹5,00,000 / month',
  '₹5,00,000+ / month'
];

const TICKET_SIZES = [
  '₹10 Lakh - ₹25 Lakh',
  '₹25 Lakh - ₹50 Lakh',
  '₹50 Lakh - ₹1 Crore',
  '₹1 Crore - ₹5 Crore+'
];

export default function CheckupModal({ isOpen, onClose, initialGoal = '', onComplete }) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState(initialGoal || 'Home Loan');
  const [incomeRange, setIncomeRange] = useState(INCOME_RANGES[1]);
  const [ticketSize, setTicketSize] = useState(TICKET_SIZES[1]);
  const [timeline, setTimeline] = useState('Immediate (Within 1-2 weeks)');
  
  // Contact details
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Baner / Balewadi, Pune');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState({});
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateStep3 = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    // Generate random reference code e.g. AVS-8492
    const refCode = `AVS-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setStep(4);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    if (onComplete) {
      onComplete({
        goal,
        incomeRange,
        ticketSize,
        timeline,
        fullName,
        phone,
        email,
        location,
        refCode
      });
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>Free Financial Checkup</span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full">
                  100% Complimentary
                </span>
              </h3>
              <p className="text-xs text-slate-500">Personalized Audit by Pune Senior Advisors</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (Visible for steps 1-3) */}
        {step <= 3 && (
          <div className="px-6 pt-4 pb-2 bg-white">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
              <span className={step >= 1 ? 'text-emerald-700 font-bold' : ''}>1. Financial Goal</span>
              <span className={step >= 2 ? 'text-emerald-700 font-bold' : ''}>2. Scope & Budget</span>
              <span className={step >= 3 ? 'text-emerald-700 font-bold' : ''}>3. Pune Scheduling</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 rounded-full"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
          {/* STEP 1: GOAL SELECTION */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">What is your primary financial objective?</h4>
                <p className="text-sm text-slate-500">Select the area where you want our certified team to conduct a deep-dive audit.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {GOALS.map((item) => {
                  const Icon = item.icon;
                  const isSelected = goal === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3 ${
                        isSelected 
                          ? 'border-emerald-500 bg-emerald-50/60 shadow-md ring-1 ring-emerald-500/50' 
                          : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                          <span>{item.label}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <span>Continue to Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SCOPE & BUDGET */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Scope & Investment Parameters</h4>
                <p className="text-sm text-slate-500">Help us match you with the right bank tier or fund distribution bracket.</p>
              </div>

              {/* Monthly Income Bracket */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Monthly Household Income / Net Revenue
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {INCOME_RANGES.map((inc) => (
                    <button
                      key={inc}
                      type="button"
                      onClick={() => setIncomeRange(inc)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border text-left transition-all ${
                        incomeRange === inc 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-500/30' 
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {inc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Requirement */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Target Size (Estimated Loan Amount or Investment Corpus)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TICKET_SIZES.map((ticket) => (
                    <button
                      key={ticket}
                      type="button"
                      onClick={() => setTicketSize(ticket)}
                      className={`p-2.5 rounded-xl text-xs text-center border font-medium transition-all ${
                        ticketSize === ticket 
                          ? 'border-blue-500 bg-blue-50 text-blue-900 font-bold ring-1 ring-blue-500/30' 
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {ticket}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Execution Horizon
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Immediate (Within 1-2 weeks)', 'Within 1 to 3 months', 'Planning for next FY'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        timeline === t 
                          ? 'bg-blue-600 text-white font-bold shadow-sm' 
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center gap-2 transition-all"
                >
                  <span>Next: Contact Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT & PUNE ADVISORY DESK */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Where should we deliver your Audit Blueprint?</h4>
                <p className="text-sm text-slate-500">Our senior advisor will prepare a comparative roadmap before calling.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full bg-white border rounded-xl py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.fullName ? 'border-rose-400' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="e.g. 98230 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full bg-white border rounded-xl py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.phone ? 'border-rose-400' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      placeholder="rahul@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-white border rounded-xl py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.email ? 'border-rose-400' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Preferred Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Location / Area</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl py-2.5 pl-9 pr-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="Baner / Balewadi, Pune">Baner / Balewadi, Pune</option>
                      <option value="Hinjewadi / Wakad, Pune">Hinjewadi / Wakad, Pune</option>
                      <option value="Kothrud / Karve Road, Pune">Kothrud / Karve Road, Pune</option>
                      <option value="Kalyani Nagar / Viman Nagar, Pune">Kalyani Nagar / Viman Nagar, Pune</option>
                      <option value="Aundh / S.B. Road, Pune">Aundh / S.B. Road, Pune</option>
                      <option value="Pimpri-Chinchwad / MIDC">Pimpri-Chinchwad / MIDC</option>
                      <option value="Virtual Consultation (Google Meet / Zoom)">Virtual Video Consultation</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Any Specific Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Query or Existing Loan Bank (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Looking to balance transfer existing HDFC loan at 9.2% or plan SIP for child overseas MBA."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs text-slate-600">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>We maintain strict NDAs. Zero spam guarantee — your information is never shared with third-party telemarketers.</span>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md shadow-emerald-600/30 flex items-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <span>Book Free Consultation</span>
                  <Sparkles className="w-4 h-4 text-gold-300" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION */}
          {step === 4 && (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto animate-bounce-short">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                  Request Confirmed • Desk Assigned
                </span>
                <h4 className="text-2xl font-black text-slate-900 mt-3">
                  Thank You, {fullName || 'Valued Client'}!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                  Your Free Financial Audit dossier has been queued for our Senior Pune Advisory team.
                </p>
              </div>

              {/* Reference Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Consultation Reference:</span>
                  <span className="font-mono font-bold text-emerald-700 text-sm">{bookingRef}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Selected Focus:</span>
                  <span className="font-bold text-slate-900">{goal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Assigned Branch:</span>
                  <span className="font-semibold text-emerald-700">Baner HQ, Pune</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Expected Advisor Call:</span>
                  <span className="font-bold text-slate-900">Within 2 Business Hours</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors shadow-md shadow-emerald-600/25"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
