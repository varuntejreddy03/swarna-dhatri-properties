import React from 'react';
import { TRUST_VAULT_ITEMS } from '../data/faqs';
import { ShieldCheck, CheckCircle2, Clock, HelpCircle, FileText, Lock } from 'lucide-react';
import { COMPANY } from '../data/company';

export const DocumentTrustVault: React.FC = () => {
  const renderStatusIndicator = (status: string) => {
    switch (status) {
      case 'verified':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4A7C59]">
            <CheckCircle2 className="w-4 h-4 text-[#4A7C59] flex-shrink-0" />
            <span>Verified</span>
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600">
            <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>In Progress</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B6B6B]">
            <HelpCircle className="w-4 h-4 text-[#6B6B6B] flex-shrink-0" />
            <span>Under Review</span>
          </span>
        );
    }
  };

  return (
    <div className="w-full bg-white border border-[#E8E4DF] rounded-lg p-6 sm:p-8">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B8860B] flex-shrink-0" />
            <span className="text-xs font-medium text-[#B8860B] uppercase tracking-wider">
              Legal & Title
            </span>
          </div>
          <h3 className="text-2xl font-serif font-semibold text-[#2D2D2D]">
            Document Trust Vault
          </h3>
          <p className="text-sm text-gray-500 mt-1 max-w-2xl font-light">
            Every title document, Nala conversion sanction, and municipal clearance is fully accessible for physical inspection prior to financial commitment.
          </p>
        </div>

        <div className="bg-[#FAFAF8] border border-[#E8E4DF] rounded-lg p-4 text-xs text-[#2D2D2D] self-start lg:self-auto flex-shrink-0">
          <p className="text-xs text-[#2D2D2D]">
            <span className="text-[#6B6B6B] font-medium">Inspection Office:</span> Sai Ranga Bhaskar Residency, Miyapur, Hyderabad
          </p>
        </div>
      </div>

      {/* Document Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TRUST_VAULT_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-[#FAFAF8] border border-[#E8E4DF] rounded-lg p-5 flex flex-col justify-between"
          >
            <div>
              {/* Top Row: badge + status indicator */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#6B6B6B] bg-white border border-[#E8E4DF] px-2.5 py-0.5 rounded">
                  {item.badge}
                </span>
                {renderStatusIndicator(item.status)}
              </div>

              {/* Title */}
              <h4 className="text-base font-semibold text-[#2D2D2D] mb-1.5 leading-snug">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                {item.description}
              </p>
            </div>

            {/* Bottom: thin border-t, status note with FileText icon */}
            <div className="mt-4 pt-3.5 border-t border-[#E8E4DF] flex items-center gap-2 text-xs text-[#6B6B6B]">
              <FileText className="w-3.5 h-3.5 text-[#B8860B] flex-shrink-0" />
              <span className="truncate">{item.statusNote}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 bg-[#1A1A1A] rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <Lock className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs text-[#E8E4DF] leading-relaxed">
            <span className="font-semibold text-white block sm:inline mr-1">
              Statutory Clear-Title Warranty:
            </span>
            <span>
              Swarna Dhatri Properties guarantees 100% legal indemnity and bears all statutory LRS charges on Swarna Bindu Avenue developments.
            </span>
          </div>
        </div>
        <a
          href={`tel:${COMPANY.phone}`}
          className="px-4 py-2.5 bg-[#B8860B] hover:bg-[#96690A] text-white text-xs font-medium rounded-lg transition-colors flex-shrink-0 whitespace-nowrap"
        >
          Consult Legal Desk
        </a>
      </div>
    </div>
  );
};
