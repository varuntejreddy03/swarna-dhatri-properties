import React from 'react';
import { Logo } from '../components/Logo';
import { Sparkles, CheckCircle2, Phone, MessageCircle, Calendar } from 'lucide-react';

export const StyleguidePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      {/* Header */}
      <div>
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Design System & Brand Tokens
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] mt-2">
          Swarna Dhatri Component Styleguide
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 font-light">
          Visual tokens, luxury editorial typography, champagne gold accents, and high-conversion UI elements.
        </p>
      </div>

      {/* 1. Brand Logo Suite */}
      <section className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
        <h3 className="text-lg font-bold font-serif text-[#0A1C16]">1. Brand Logo Sizes</h3>
        <div className="flex flex-wrap items-center gap-8 p-6 bg-[#FCFBF7] rounded-2xl border border-stone-200">
          <div className="text-center">
            <Logo size="sm" />
            <span className="text-[11px] text-stone-500 block mt-2">Small (Compact Header)</span>
          </div>
          <div className="text-center">
            <Logo size="md" />
            <span className="text-[11px] text-stone-500 block mt-2">Medium (Default Nav)</span>
          </div>
          <div className="text-center">
            <Logo size="lg" />
            <span className="text-[11px] text-stone-500 block mt-2">Large (About & Footer)</span>
          </div>
        </div>
      </section>

      {/* 2. Color Palette Tokens */}
      <section className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
        <h3 className="text-lg font-bold font-serif text-[#0A1C16]">2. Luxury Brand Colour Tokens</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-[#C89732] text-[#0A1C16] font-bold shadow-sm">
            <span>Champagne Gold</span>
            <span className="block text-[11px] opacity-80 font-mono mt-1">#C89732</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#0A1C16] text-[#F5EBD4] font-bold shadow-sm">
            <span>Obsidian Forest</span>
            <span className="block text-[11px] opacity-80 font-mono mt-1">#0A1C16</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#2C573F] text-white font-bold shadow-sm">
            <span>Estate Verdant</span>
            <span className="block text-[11px] opacity-80 font-mono mt-1">#2C573F</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#FCFBF7] text-[#0A1C16] font-bold border border-stone-200 shadow-sm">
            <span>Alabaster Canvas</span>
            <span className="block text-[11px] opacity-80 font-mono mt-1">#FCFBF7</span>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#C89732] via-[#D4A84D] to-[#B07E23] text-[#0A1C16] font-bold shadow-gold">
            <span>Gold Shimmer</span>
            <span className="block text-[11px] opacity-80 font-mono mt-1">Primary Gradient</span>
          </div>
        </div>
      </section>

      {/* 3. Typography Scale */}
      <section className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
        <h3 className="text-lg font-bold font-serif text-[#0A1C16]">3. Typography Hierarchy</h3>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-stone-400 block font-mono">Display Serif (Cormorant Garamond):</span>
            <div className="text-4xl font-serif font-bold text-[#0A1C16]">
              Golden Earth For Your Family’s Enduring Future
            </div>
          </div>
          <div>
            <span className="text-xs text-stone-400 block font-mono">Editorial UI Body (Plus Jakarta Sans):</span>
            <p className="text-sm text-stone-600 max-w-xl font-light">
              50-Acre Master-Planned Plotted Development with 100% Nala Conversion, spot registration, and high-yield red sandalwood plantation in Zaheerabad Smart City NIMZ.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Action Buttons & Badges */}
      <section className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
        <h3 className="text-lg font-bold font-serif text-[#0A1C16]">4. Interactive Buttons & Badges</h3>
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C89732] via-[#D4A84D] to-[#B07E23] text-[#0A1C16] font-bold text-xs uppercase tracking-wider shadow-gold hover:brightness-105">
            Gold Shimmer Primary CTA
          </button>
          <button className="px-6 py-3 rounded-xl bg-[#0A1C16] text-[#D4A84D] font-bold text-xs uppercase tracking-wider hover:bg-[#14382C]">
            Forest Dark Secondary
          </button>
          <button className="px-6 py-3 rounded-xl bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-600 flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp CTA</span>
          </button>
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            100% Nala Converted
          </span>
          <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            50% Spot Registration
          </span>
        </div>
      </section>
    </div>
  );
};
