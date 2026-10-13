import React from 'react';
import { Phone, MessageCircle, Calendar, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../data/company';
import { getWhatsAppGeneralInquiryUrl } from '../utils/whatsapp';

export const BottomMobileNav: React.FC = () => {
  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E8E4DF] shadow-[0_-2px_8px_rgba(0,0,0,0.06)] px-2 py-2 md:hidden"
    >
      <div className="grid grid-cols-4 items-center gap-1">
        {/* Call */}
        <a
          href={`tel:${COMPANY.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 text-[#2D2D2D] hover:text-[#B8860B] transition-colors"
          aria-label="Call Swarna Dhatri Properties"
        >
          <Phone className="w-5 h-5 text-[#B8860B]" />
          <span className="text-[10px] font-medium mt-1">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getWhatsAppGeneralInquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-[#2D2D2D] hover:text-[#25D366] transition-colors"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          <span className="text-[10px] font-medium mt-1">WhatsApp</span>
        </a>

        {/* Masterplan / Plots */}
        <Link
          to="/plot-explorer"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-[#2D2D2D] hover:text-[#4A7C59] transition-colors"
          aria-label="View Plots Masterplan"
        >
          <Map className="w-5 h-5 text-[#4A7C59]" />
          <span className="text-[10px] font-medium mt-1">Plots</span>
        </Link>

        {/* Book Visit */}
        <Link
          to="/book-visit"
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#2D2D2D] transition-colors"
          aria-label="Book a Site Visit"
        >
          <Calendar className="w-5 h-5 text-white" />
          <span className="text-[10px] font-medium mt-1 text-white">Book Visit</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomMobileNav;
