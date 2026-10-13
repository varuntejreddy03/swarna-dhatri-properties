import React from 'react';
import { BookOpen, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GuidesPage: React.FC = () => {
  const guides = [
    {
      id: "lrs-guide",
      title: "What is LRS (Layout Regularisation Scheme) in Telangana?",
      excerpt: "Understand how LRS regularises open plots, why unauthorized layouts face penalties, and how Swarna Dhatri pays 100% of LRS charges so buyers face zero hidden liabilities.",
      readTime: "4 min read",
      category: "Legal & Approvals"
    },
    {
      id: "gajam-vs-sqft",
      title: "Gajam vs Square Feet vs Guntha: Telangana Plot Math Explained",
      excerpt: "1 Gajam = 9 Sq.Ft; 1 Guntha = 121 Gajam. Learn how to convert plot areas instantly and avoid confusing area calculations when negotiating open plot purchases.",
      readTime: "3 min read",
      category: "Measurement Guide"
    },
    {
      id: "nimz-zaheerabad-guide",
      title: "NIMZ Zaheerabad Master Plan: Companies, Infrastructure & Connectivity",
      excerpt: "Deep-dive into the 12,618-acre National Investment and Manufacturing Zone. Which industrial leaders are expanding, where the bullet train station is proposed, and why NH-65 matters.",
      readTime: "5 min read",
      category: "Growth & Infrastructure"
    },
    {
      id: "nala-conversion-guide",
      title: "What is Nala Conversion and Why is it Critical for Open Plots?",
      excerpt: "Why agricultural land must be formally converted to Non-Agricultural (Nala) status under Telangana Revenue law before layout sale and legal registration.",
      readTime: "4 min read",
      category: "Legal Verification"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-14">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Investor Advisory & Due Diligence
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          Open Plot Buyer’s Knowledge Guides
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
          Essential legal and market intelligence for purchasing open plots in Telangana. Master LRS regularisation, Nala conversion, and land area mathematics before committing your savings.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:border-[#D4A84D]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-stone-400">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0A1C16] text-[#D4A84D] font-mono font-bold uppercase tracking-wider text-[10px]">
                  {guide.category}
                </span>
                <span>{guide.readTime}</span>
              </div>

              <h3 className="text-xl font-bold font-serif text-[#0A1C16] leading-snug">
                {guide.title}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed font-light">
                {guide.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8E6219] hover:text-[#0A1C16] transition-colors"
              >
                <span>Read Document Vault Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Guarantee Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1C16] text-[#F5EBD4] shadow-xl border border-[#D4A84D]/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="space-y-2 relative z-10">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4A84D] block">
            Advisory Assistance
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Have a Specific Revenue or Title Question?
          </h3>
          <p className="text-xs text-stone-300 max-w-xl font-light">
            Bring your surveyor or family advocate to our Miyapur corporate office to inspect certified revenue maps and Nala conversion orders.
          </p>
        </div>
        <Link
          to="/contact"
          className="relative z-10 px-6 py-3.5 rounded-xl bg-[#C89732] hover:bg-[#D4A84D] text-[#0A1C16] font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-gold transition-all"
        >
          Consult Legal Advisory Desk
        </Link>
      </div>
    </div>
  );
};
