import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { COMPANY } from '../data/company';
import { getWhatsAppGeneralInquiryUrl } from '../utils/whatsapp';

export const FaqsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFaqs = selectedCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-14">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Investor Clarifications
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16]">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto font-light">
          Transparent answers regarding legal title, Nala conversion sanctions, developer-borne LRS, spot registrations, and financing structures.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {['all', 'booking', 'legal', 'location', 'emi', 'vastu'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
              selectedCategory === cat
                ? 'bg-[#0A1C16] text-[#D4A84D] shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {cat === 'all' ? 'All Questions' : cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => (
          <details
            key={faq.id}
            className="group p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm open:border-[#D4A84D] transition-colors cursor-pointer"
          >
            <summary className="font-bold text-sm sm:text-base text-[#0A1C16] list-none flex justify-between items-center">
              <span>{faq.question}</span>
              <span className="text-[#C89732] text-xl font-mono transition-transform group-open:rotate-45 ml-4 flex-shrink-0">
                +
              </span>
            </summary>
            <p className="text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed border-t border-stone-100 pt-3.5 font-light">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      {/* Still have questions? Help Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1C16] text-[#F5EBD4] shadow-xl text-center space-y-4 border border-[#D4A84D]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <h3 className="text-2xl font-bold font-serif text-white relative z-10">
          Have a Specific Title, Survey, or Boundary Question?
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto font-light relative z-10">
          Our senior property directors in Miyapur are available to walk through original link deeds, survey maps, and custom EMI plans.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2 relative z-10">
          <a
            href={`tel:${COMPANY.phone}`}
            className="px-6 py-3 rounded-xl bg-[#C89732] hover:bg-[#D4A84D] text-[#0A1C16] font-bold text-xs uppercase tracking-wider shadow-gold transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call {COMPANY.phoneFormatted}</span>
          </a>
          <a
            href={getWhatsAppGeneralInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
