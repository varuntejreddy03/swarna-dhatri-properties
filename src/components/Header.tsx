import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '../data/company';
import { getOfficeStatus, OfficeStatus } from '../utils/timing';
import { getWhatsAppGeneralInquiryUrl } from '../utils/whatsapp';

export const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<OfficeStatus>(getOfficeStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getOfficeStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Location', href: '/why-zaheerabad-nimz' },
    { name: 'Plot Explorer', href: '/plot-explorer' },
    { name: 'EMI Calculator', href: '/tools' },
    { name: 'Offers', href: '/offers' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAF8] border-b border-[#E8E4DF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Left */}
          <Link
            to="/"
            className="flex items-center flex-shrink-0"
            aria-label={COMPANY.name}
          >
            <Logo size="md" variant="horizontal" />
          </Link>

          {/* Desktop Nav Links Center */}
          <nav
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 border-b-2 pb-0.5 ${
                    isActive
                      ? 'text-[#1A1A1A] border-[#B8860B]'
                      : 'text-[#2D2D2D] hover:text-[#1A1A1A] border-transparent hover:border-[#D4A574]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Right */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-[#2D2D2D] hover:text-[#B8860B] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B8860B]" />
              <span>{COMPANY.phoneFormatted}</span>
            </a>

            <Link
              to="/book-visit"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-[#1A1A1A] text-white text-sm font-medium rounded-lg hover:bg-[#2D2D2D] transition-colors shadow-sm"
            >
              Schedule Visit
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-lg border border-[#E8E4DF] bg-white text-[#2D2D2D] hover:bg-stone-50 transition-colors focus:outline-none"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#FAFAF8] flex flex-col lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Overlay Top Bar */}
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 border-b border-[#E8E4DF]">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={COMPANY.name}
            >
              <Logo size="md" variant="horizontal" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 rounded-lg border border-[#E8E4DF] bg-white text-[#2D2D2D] hover:bg-stone-50 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Clean List of Nav Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <nav className="divide-y divide-[#E8E4DF]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-4 text-base font-medium transition-colors ${
                      isActive
                        ? 'text-[#B8860B] font-semibold'
                        : 'text-[#2D2D2D] hover:text-[#1A1A1A]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        isActive ? 'text-[#B8860B]' : 'text-[#6B6B6B]'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Overlay Footer & Action Buttons */}
          <div className="p-6 border-t border-[#E8E4DF] bg-[#FAFAF8] space-y-4">
            {/* Office Status */}
            <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  status.isOpen ? 'bg-[#4A7C59]' : 'bg-[#D4A574]'
                }`}
              />
              <span>{status.statusBadgeEn}</span>
              <span>•</span>
              <span>Miyapur, Hyderabad</span>
            </div>

            {/* Quick Contact CTAs */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#E8E4DF] text-[#2D2D2D] text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B8860B]" />
                <span>Call Desk</span>
              </a>
              <a
                href={getWhatsAppGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#E8E4DF] text-[#2D2D2D] text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            <Link
              to="/book-visit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 px-4 bg-[#1A1A1A] text-white text-sm font-medium rounded-lg hover:bg-[#2D2D2D] transition-colors shadow-sm"
            >
              Schedule Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
