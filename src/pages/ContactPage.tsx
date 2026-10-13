import React from 'react';
import { COMPANY } from '../data/company';
import { BookVisitForm } from '../components/BookVisitForm';
import { getOfficeStatus } from '../utils/timing';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { getWhatsAppGeneralInquiryUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const officeStatus = getOfficeStatus();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-14">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Concierge & Headquarters
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          Connect with Swarna Dhatri Properties
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
          Visit our corporate office in Miyapur to review link deeds, CAD masterplans, and coordinate your private chauffeur site inspection.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info & Hours Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-[#0A1C16] text-[#F5EBD4] shadow-xl space-y-6 border border-[#D4A84D]/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

            <div className="relative z-10 space-y-1">
              <span className="text-[10px] font-bold text-[#D4A84D] uppercase tracking-widest block">
                Corporate Headquarters
              </span>
              <h3 className="text-xl font-bold font-serif text-white">
                {COMPANY.name}
              </h3>
            </div>

            <div className="space-y-4 text-xs text-stone-300 relative z-10 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A84D] flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY.address.line1}, {COMPANY.address.landmark}, {COMPANY.address.city}, {COMPANY.address.state} - {COMPANY.address.pincode}.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4A84D] flex-shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-[#D4A84D] font-semibold">
                  {COMPANY.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4A84D] flex-shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-[#D4A84D] break-all font-semibold">
                  {COMPANY.email}
                </a>
              </div>
            </div>

            {/* Office Timing Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#EBD4A4] font-bold">
                  <Clock className="w-4 h-4 text-[#D4A84D]" />
                  <span>Working Hours</span>
                </div>
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                  officeStatus.isOpen ? 'bg-emerald-900 text-emerald-300 border border-emerald-500/30' : 'bg-amber-950 text-amber-300'
                }`}>
                  {officeStatus.statusBadgeEn}
                </span>
              </div>
              <div className="text-stone-300 font-light">
                10:00 AM – 6:00 PM IST (Wednesday to Monday)
              </div>
              <div className="text-amber-300 font-bold pt-1 border-t border-white/10 text-[11px]">
                ★ Weekly Holiday: Tuesday Closed
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-2.5 pt-2 relative z-10">
              <a
                href={`tel:${COMPANY.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#C89732] hover:bg-[#D4A84D] text-[#0A1C16] font-bold text-xs uppercase tracking-wider shadow-gold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Concierge: {COMPANY.phoneFormatted}</span>
              </a>

              <a
                href={getWhatsAppGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp Chat</span>
              </a>

              <a
                href={COMPANY.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-stone-200 font-semibold text-xs border border-white/15 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4A84D]" />
                <span>Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Site Visit Request Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm">
          <BookVisitForm />
        </div>
      </div>
    </div>
  );
};
