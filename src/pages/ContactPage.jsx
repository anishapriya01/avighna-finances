import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  Building,
  ShieldCheck
} from 'lucide-react';
import { faqData } from '../data/faqData';

export default function ContactPage({ onOpenCheckup }) {
  // Contact Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('Home Loan Consultation');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaqCategory, setActiveFaqCategory] = useState('Loans & Mortgages');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formName && formPhone) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormName('');
    setFormEmail('');
    setFormPhone('');
    setFormMessage('');
    setIsSubmitted(false);
  };

  const currentFaqCategory = faqData.find(f => f.category === activeFaqCategory) || faqData[0];

  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          <span>Pune Central Headquarters</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Connect with Our Advisory Desk
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Visit our registered Baner headquarters, book a private doorstep visit across Pune, or reach out through our direct WhatsApp line.
        </p>
      </div>

      {/* Main Grid: Form & Pune Office Card (Bright White Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-2xl font-black text-slate-900">Send Us a Direct Message</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Our relationship director will respond within 2 business hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Phadke"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98230 XXXXX"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="anand@company.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Service Interest</label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="Home Loan Consultation">Home Loan (New / Balance Transfer)</option>
                    <option value="Business / MSME Capital">Business / MSME Growth Capital</option>
                    <option value="Mutual Funds & SIP Planning">Mutual Funds & SIP Portfolio</option>
                    <option value="Term & Health Insurance Shield">Term & Health Insurance Shield</option>
                    <option value="Pune Commercial Property Advisory">Pune Real Estate Advisory</option>
                    <option value="General Financial Audit">General Financial Health Audit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Requirements or Questions</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirement, current bank interest rate, or portfolio goal..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry to Baner Advisory Desk</span>
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Inquiry Received Successfully!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formName}</strong>. Our senior consultant has been notified and will reach out to <strong>{formPhone}</strong> shortly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition-colors shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Pune Office Location Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Building className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Registered Pune Office</h3>
                <p className="text-xs text-slate-500">Level 4, Amar Paradigm Corporate Park</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Physical Address</p>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Avighna Financial Services, Level 4, Amar Paradigm, Baner Road, near Balewadi High Street, Pune, Maharashtra 411045, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Direct Advisory Helplines</p>
                  <div className="text-slate-600 mt-0.5">
                    <a href="tel:+919823045890" className="text-emerald-700 hover:underline font-bold block">
                      +91 98230 45890 (Mobile / WhatsApp)
                    </a>
                    <a href="tel:+912067894500" className="text-slate-600 hover:underline block font-medium">
                      +91 (020) 6789 4500 (Board Desk)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Email Communications</p>
                  <a href="mailto:consult@avighnafinancial.com" className="text-slate-600 hover:underline mt-0.5 block">
                    consult@avighnafinancial.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Consultation Hours</p>
                  <p className="text-slate-600 mt-0.5">Monday to Saturday: 9:30 AM – 7:00 PM IST</p>
                  <p className="text-[11px] text-slate-400">Sunday: By Pre-Booked Appointment Only</p>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919823045890?text=Hi%20Avighna%20Financial,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenCheckup()}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold text-center border border-slate-300 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Book Checkup</span>
              </button>
            </div>
          </div>

          {/* Pune Corridor Service Map Card */}
          <div className="p-5 rounded-3xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 space-y-2 shadow-sm">
            <p className="font-bold text-blue-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Doorstep Pickup & In-Person Coverage Zones</span>
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              We provide free doorstep documentation pickup and high-court title searches across <strong>Baner, Balewadi, Aundh, Kothrud, Hinjewadi Phase 1-3, Wakad, Pimple Saudagar, Kharadi, Kalyani Nagar, Viman Nagar, Magarpatta, and Senapati Bapat Road</strong>.
            </p>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions (FAQ) Accordion on Clean White Canvas */}
      <div className="space-y-8 pt-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Clear Answers
          </span>
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-500">Everything you need to know about our advisory model and turnaround times.</p>
        </div>

        {/* FAQ Category Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {faqData.map((f) => (
            <button
              key={f.category}
              onClick={() => {
                setActiveFaqCategory(f.category);
                setExpandedFaq(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeFaqCategory === f.category
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-sm'
              }`}
            >
              {f.category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List (White Cards) */}
        <div className="max-w-3xl mx-auto space-y-3">
          {currentFaqCategory.items.map((item, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
