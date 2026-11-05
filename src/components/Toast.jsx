import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-emerald-300 shadow-xl text-slate-800 animate-fadeIn">
      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
      <span className="text-xs sm:text-sm font-semibold text-slate-800">{message}</span>
      <button 
        onClick={onClose}
        className="p-1 text-slate-400 hover:text-slate-600 rounded-lg transition-colors ml-2"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
