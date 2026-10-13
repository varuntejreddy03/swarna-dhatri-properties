import React from 'react';
import { COMPANY } from '../data/company';
import { ShieldCheck, FileText, AlertCircle } from 'lucide-react';

export const LegalPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Compliance & Corporate Governance
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16]">
          Legal Terms, Disclaimers & Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
          Swarna Dhatri Properties Private Limited operates with total statutory compliance under the laws of Telangana and India.
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm font-light">
        {/* 1. Artistic Impression Disclaimer */}
        <section className="space-y-2">
          <h3 className="text-base font-bold font-serif text-[#0A1C16] uppercase tracking-wide">
            1. Artistic Impressions & Project Renders
          </h3>
          <p>
            All architectural layouts, 3D renderings, aerial impressions, landscaping elements, and amenities presented on this website are conceptual illustrations for visualization purposes. Actual survey demarcations, physical boundary stones, road widths, and plantation spacing are governed by the approved layout drawing copies available at our registered office.
          </p>
        </section>

        {/* 2. Public Infrastructure & NIMZ */}
        <section className="space-y-2">
          <h3 className="text-base font-bold font-serif text-[#0A1C16] uppercase tracking-wide">
            2. Macroeconomic & Infrastructure Information
          </h3>
          <p>
            Information concerning third-party infrastructure projects — including the National Investment & Manufacturing Zone (NIMZ), TSIIC notifications, the Mumbai–Hyderabad Bullet Train corridor, and the Regional Ring Road (RRR) — is compiled from publicly published government gazettes, news reports, and Draft Project Reports (DPRs). Swarna Dhatri Properties Private Limited does not guarantee completion dates or operational parameters of government infrastructure.
          </p>
        </section>

        {/* 3. Pricing & Market Appreciation */}
        <section className="space-y-2">
          <h3 className="text-base font-bold font-serif text-[#0A1C16] uppercase tracking-wide">
            3. Pricing & Growth Potential Notice
          </h3>
          <p>
            Plotted land rates (starting from ₹3,300 per sq.yd for Swarna Bindu Avenue-2 and facing-wise rates for earlier phases) are subject to revision without prior notice. Real estate investments involve market dynamics. We strictly do not claim or promise speculative guaranteed returns. Land values appreciate subject to regional infrastructure and overall market conditions.
          </p>
        </section>

        {/* 4. Document Verification Prerequisite */}
        <section className="space-y-2">
          <h3 className="text-base font-bold font-serif text-[#0A1C16] uppercase tracking-wide">
            4. Buyer Document Due Diligence
          </h3>
          <p>
            We encourage all prospective buyers to personally inspect our 30-year link documents, certified copies of Nala conversion orders, and municipal receipts at our Miyapur office. Buyers are invited to engage independent legal advocates to review title chains prior to execution of sale deeds.
          </p>
        </section>

        {/* 5. Privacy & Data Handling */}
        <section className="space-y-2">
          <h3 className="text-base font-bold font-serif text-[#0A1C16] uppercase tracking-wide">
            5. Privacy Policy & Communication Consent
          </h3>
          <p>
            When you submit your contact number or WhatsApp details for booking a site visit or calculating EMI schedules, your details are utilized solely by Swarna Dhatri Properties sales representatives to provide requested plot details and coordinate appointments. We never sell, lease, or share your contact credentials with third-party telemarketers.
          </p>
        </section>

        {/* 6. RERA & Corporate Identifier */}
        <section className="p-5 rounded-2xl bg-[#FCFBF7] border border-stone-200 text-xs space-y-1">
          <span className="font-bold text-[#0A1C16] block uppercase tracking-wider text-[11px]">Corporate Registry:</span>
          <div>Swarna Dhatri Properties Private Limited</div>
          <div>Registration: Registered under Companies Act, ROC Hyderabad</div>
          <div>Title Compliance: 100% Nala Converted Freehold Land</div>
          <div>Corporate Headquarters: 305, 3rd Floor, Sai Ranga Bhaskar Residency, Miyapur, Hyderabad 500049.</div>
        </section>
      </div>
    </div>
  );
};
