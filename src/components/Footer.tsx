import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { COMPANY } from '../data/company';
import { getWhatsAppGeneralInquiryUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-16 pb-24 md:pb-12 border-t border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#2D2D2D]">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link to="/" className="inline-block" aria-label={COMPANY.name}>
              <Logo size="md" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Swarna Dhatri Properties develops master-planned plotted residential communities across the Hyderabad–Zaheerabad NIMZ growth corridor, focused on clear land titles and long-term value.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#4A7C59] hover:bg-[#3D674A] text-white text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Our Developments */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4A574] mb-4">
              Our Developments
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/projects/swarna-bindu-avenue-2" className="text-gray-400 hover:text-white transition-colors">
                  Swarna Bindu Avenue-2
                </Link>
              </li>
              <li>
                <Link to="/projects/swarna-bindu-avenue" className="text-gray-400 hover:text-white transition-colors">
                  Swarna Bindu Avenue-1
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  All Developments
                </Link>
              </li>
              <li>
                <Link to="/plot-explorer" className="text-gray-400 hover:text-white transition-colors">
                  Interactive Plot Explorer
                </Link>
              </li>
              <li>
                <Link to="/why-zaheerabad-nimz" className="text-gray-400 hover:text-white transition-colors">
                  Zaheerabad NIMZ Corridor
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-400 hover:text-white transition-colors">
                  Current Offers & Schemes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4A574] mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Swarna Dhatri
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-white transition-colors">
                  EMI & Land Calculator
                </Link>
              </li>
              <li>
                <Link to="/book-visit" className="text-gray-400 hover:text-white transition-colors">
                  Schedule Site Visit
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-400 hover:text-white transition-colors">
                  Buyer's Due Diligence Guide
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">
                  Legal & Title Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4A574] mb-4">
              Contact
            </h3>
            <div className="space-y-3.5 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY.address.line1}, {COMPANY.address.landmark}, {COMPANY.address.city} - {COMPANY.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
                  {COMPANY.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <span>Operating Hours: 10:00 AM – 6:00 PM IST</span>
                  <span className="block text-gray-400 mt-0.5">
                    Wednesday – Monday (Tuesday Holiday)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 pb-6 text-xs text-gray-500 leading-relaxed border-b border-[#2D2D2D]/60">
          <p>
            Disclaimer: Visual representations, layouts, dimensions, and specifications presented on this website are conceptual in nature and intended for informational purposes. Final details are subject to sanctioned approvals and legal documentation. Prospective buyers are encouraged to inspect official revenue records, Nala conversion certificates, and sanction plans at our corporate office before booking.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/legal" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal" className="hover:text-white transition-colors">
              Statutory Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
