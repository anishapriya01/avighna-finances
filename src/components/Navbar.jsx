import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Menu, 
  X, 
  UserCheck, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onOpenCheckup, onOpenPortal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'calculators', label: 'Calculators' },
    { id: 'why-us', label: 'Why Avighna' },
    { id: 'contact', label: 'Contact & Advisory' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-3' 
          : 'bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Upward Growth Icon */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-white stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                  AVIGHNA
                </span>
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              </div>
              <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-500">
                Financial Services • Pune
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90 shadow-inner">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 relative ${
                    isActive 
                      ? 'text-emerald-800 bg-white shadow-sm border border-emerald-200/60' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-emerald-600 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Client Portal Button (Slate border outline) */}
            <button
              onClick={onOpenPortal}
              className="px-3.5 py-2 text-xs lg:text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400 rounded-xl bg-white hover:bg-slate-50 shadow-sm transition-all flex items-center gap-1.5 group"
            >
              <UserCheck className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>Client Portal</span>
            </button>

            {/* Free Financial Checkup CTA (Vibrant Emerald with hover pulse) */}
            <button
              onClick={() => onOpenCheckup()}
              className="relative group overflow-hidden px-4 py-2 lg:px-5 lg:py-2.5 rounded-xl text-xs lg:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/35 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-gold-300 animate-spin-slow" />
              <span>Free Financial Checkup</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenCheckup()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg shadow-sm"
            >
              Checkup
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Clean White) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200' 
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-blue-600" />
              <span>Access Client Portal</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckup();
              }}
              className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-gold-300" />
              <span>Get Free Financial Checkup</span>
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>AMFI Registered & Verified Pune Advisory</span>
          </div>
        </div>
      )}
    </header>
  );
}
