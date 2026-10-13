import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { FAQS } from '../data/faqs';
import { COMPANY } from '../data/company';
import { PlotExplorer } from '../components/PlotExplorer';
import { EmiCalculator } from '../components/EmiCalculator';
import { GoldenCorridorMap } from '../components/GoldenCorridorMap';
import { NimzTimeline } from '../components/NimzTimeline';
import { CouponReveal } from '../components/CouponReveal';
import { BookVisitForm } from '../components/BookVisitForm';
import { DocumentTrustVault } from '../components/DocumentTrustVault';
import { RealPlotGallery } from '../components/RealPlotGallery';
import { ProjectCard } from '../components/ProjectCard';
import {
  Gift,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Trees,
  Zap,
  Droplets,
  Compass,
  Building2,
  Calendar,
  Car,
  ChevronRight,
} from 'lucide-react';
import { getWhatsAppGeneralInquiryUrl } from '../utils/whatsapp';

export const HomePage: React.FC = () => {
  const amenitiesList = [
    { title: "Grand Entrance Arch", desc: "40-ft architectural gateway with 24/7 security cabin", icon: Building2 },
    { title: "33 & 30 Ft Boulevards", desc: "Wide internal roads with precast kerbing and integrated drains", icon: Compass },
    { title: "Red Sandalwood Plantation", desc: "High-yield Pterocarpus santalinus along boundaries for long-term wealth", icon: Trees },
    { title: "3-Phase Power Supply", desc: "Dedicated transformer and illuminated street poles throughout", icon: Zap },
    { title: "Borewell & Water Network", desc: "Deep water source with underground distribution pipelines", icon: Droplets },
    { title: "Perimeter Fencing", desc: "Secured layout with stone boundary pillars and demarcated corners", icon: ShieldCheck }
  ];

  const buyingSteps = [
    { step: "01", title: "Advisory & Selection", desc: "Review available plots, road widths, and Vastu facings with our team." },
    { step: "02", title: "Site Visit", desc: "Tour the 50-acre layout. Free AC pickup from Miyapur (Wed–Mon)." },
    { step: "03", title: "Ground Survey", desc: "Inspect corner stones, boulevards, and red sandalwood on-site." },
    { step: "04", title: "Reserve with ₹20,000", desc: "Lock your chosen plot with a token advance and claim your privilege." },
    { step: "05", title: "50% Spot Registration", desc: "Instant deed registration. Structure the balance via flexible EMI." }
  ];

  return (
    <div className="pb-20">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[#1A1A1A] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Swarna Bindu Avenue"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/95 to-[#1A1A1A]/75" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>50-Acre Plotted Township · Zaheerabad NIMZ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-[1.1] tracking-tight">
                <span className="text-[#D4A574]">Golden Earth</span>
                <br />
                For Your Family's
                <br />
                Enduring Future.
              </h1>

              <p className="text-base text-gray-300 max-w-xl leading-relaxed">
                Strategically located in Telangana's 12,618-acre National Investment & Manufacturing Zone.
                100% Nala converted open plots with clear freehold title, tree-lined avenues, and guaranteed spot registration.
              </p>

              {/* Key Numbers */}
              <div className="flex flex-wrap gap-6 pt-2">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-semibold text-[#D4A574]">₹3,300</div>
                  <div className="text-xs text-gray-400 mt-1">per sq. yard</div>
                </div>
                <div className="w-px bg-gray-700" />
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-semibold text-white">₹20,000</div>
                  <div className="text-xs text-gray-400 mt-1">token to reserve</div>
                </div>
                <div className="w-px bg-gray-700" />
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-semibold text-green-400">50%</div>
                  <div className="text-xs text-gray-400 mt-1">spot registration</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/book-visit"
                  className="px-6 py-3.5 bg-[#B8860B] hover:bg-[#96690A] text-white rounded-lg font-medium text-sm transition-colors text-center"
                >
                  Schedule Site Visit
                </Link>
                <Link
                  to="/plot-explorer"
                  className="px-6 py-3.5 border border-gray-600 hover:border-gray-400 text-white rounded-lg font-medium text-sm transition-colors text-center"
                >
                  Explore Masterplan
                </Link>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hidden sm:flex items-center gap-2 px-5 py-3.5 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY.phoneFormatted}
                </a>
              </div>

              <p className="text-xs text-gray-500">
                * LRS charges 100% paid by company. No hidden buyer liabilities.
              </p>
            </div>

            {/* Right Column — Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#242424] border border-gray-700 rounded-lg p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#D4A574]">Swarna Bindu Avenue-2</span>
                  <span className="text-xs text-green-400 font-medium">Nala Converted</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white leading-snug">
                  50-Acre Master Layout in Zaheerabad NIMZ
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Along the prime industrial axis of Mahindra & Mahindra, Triton EV facility, and proposed Mumbai–Hyderabad bullet train stoppage.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Plot sizes</span>
                    <span className="text-white font-medium">150–400 sq. yards</span>
                  </div>
                  <div className="h-px bg-gray-700" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Road widths</span>
                    <span className="text-white font-medium">33 & 30 ft</span>
                  </div>
                  <div className="h-px bg-gray-700" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">LRS charges</span>
                    <span className="text-green-400 font-medium">Paid by company</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 p-3 bg-[#1A1A1A] rounded-lg border border-gray-700">
                  <Gift className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                  <span className="text-sm text-gray-300">₹10,000–₹1 Lakh privilege on booking</span>
                  <Link to="/offers" className="text-sm text-[#D4A574] font-medium ml-auto hover:underline">Reveal</Link>
                </div>

                <Link
                  to="/plot-explorer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#B8860B] hover:bg-[#96690A] text-white rounded-lg font-medium text-sm transition-colors"
                >
                  <span>Open Masterplan Explorer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST METRICS STRIP ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6 relative z-10">
        <div className="bg-white border border-[#E8E4DF] rounded-lg shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-[#E8E4DF]">
            {[
              { value: "50 Acres", label: "Master Township" },
              { value: "100% Nala", label: "Converted Land" },
              { value: "₹20,000", label: "Token Advance" },
              { value: "50% Spot", label: "Registration" },
              { value: "₹0 LRS", label: "Company Paid" },
              { value: "Custom EMI", label: "Flexible Plans" }
            ].map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 text-center">
                <div className="text-lg sm:text-xl font-serif font-semibold text-[#2D2D2D]">{item.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED DEVELOPMENTS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D]">
              Our Developments
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-lg">
              Master-planned plotted layouts with road access, water connectivity, and red sandalwood plantations.
            </p>
          </div>
          <Link to="/projects" className="flex items-center gap-1.5 text-sm font-medium text-[#B8860B] hover:text-[#96690A] transition-colors">
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </section>

      {/* ─── MASTERPLAN EXPLORER ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20 space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D]">
            Masterplan Explorer
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Filter by facing, corner positions, or budget. Click any plot to preview dimensions and EMI plans.
          </p>
        </div>
        <PlotExplorer />
      </section>

      {/* ─── WHY ZAHEERABAD NIMZ ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D]">
              Why Zaheerabad NIMZ
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-lg">
              Commute times and manufacturing anchors driving capital appreciation along the NH-65 corridor.
            </p>
          </div>
          <Link to="/why-zaheerabad-nimz" className="flex items-center gap-1.5 text-sm font-medium text-[#B8860B] hover:text-[#96690A] transition-colors">
            Full NIMZ dossier <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <GoldenCorridorMap />
      </section>

      {/* ─── AMENITIES ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D]">
            Infrastructure & Amenities
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Built for immediate construction readiness and long-term value appreciation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenitiesList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 bg-white border border-[#E8E4DF] rounded-lg flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-2.5 rounded-lg bg-[#4A7C59]/10 flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#4A7C59]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2D2D2D]">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── SITE PHOTOS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <RealPlotGallery />
      </section>

      {/* ─── BUYING JOURNEY ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2D2D2D]">
            How to Buy
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            From initial advisory to verified spot registration at the Sub-Registrar Office.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {buyingSteps.map((step, idx) => (
            <div key={idx} className="p-5 bg-white border border-[#E8E4DF] rounded-lg space-y-3 hover:shadow-md transition-shadow">
              <div className="text-2xl font-serif font-semibold text-[#B8860B]">{step.step}</div>
              <h4 className="text-sm font-semibold text-[#2D2D2D]">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DOCUMENT VAULT ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <DocumentTrustVault />
      </section>

      {/* ─── EMI CALCULATOR ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <EmiCalculator />
      </section>

      {/* ─── BOOKING PRIVILEGE ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <CouponReveal />
      </section>

      {/* ─── BOOK VISIT ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-20">
        <div className="bg-white border border-[#E8E4DF] rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left info panel */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-[#1A1A1A] text-white flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold leading-snug">
                Visit Swarna Bindu Avenue
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Walk the 50-acre layout, inspect boulevards and red sandalwood plantations. Free AC pickup from Miyapur.
              </p>
            </div>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Car className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <span>Free AC cab pickup from Miyapur or Hyderabad</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <span>Wednesday–Monday (Tuesday holiday)</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <span>Dedicated relationship manager for your tour</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <span className="text-xs text-gray-500 block">Direct line</span>
              <a href={`tel:${COMPANY.phone}`} className="text-base font-medium text-[#D4A574] hover:underline">
                {COMPANY.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Right form panel */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-[#FAFAF8]">
            <BookVisitForm />
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 mt-20 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-semibold text-[#2D2D2D]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 4).map((faq) => (
            <div key={faq.id} className="p-5 bg-white border border-[#E8E4DF] rounded-lg space-y-2">
              <h4 className="text-sm font-semibold text-[#2D2D2D]">{faq.question}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/faqs" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#B8860B] hover:text-[#96690A] transition-colors">
            View all FAQs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
