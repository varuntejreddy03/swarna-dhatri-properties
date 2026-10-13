import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { PlotExplorer } from '../components/PlotExplorer';
import { EmiCalculator } from '../components/EmiCalculator';
import { BookVisitForm } from '../components/BookVisitForm';
import { DocumentTrustVault } from '../components/DocumentTrustVault';
import { 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  ArrowLeft, 
  Calendar, 
  Share2, 
  Printer, 
  Sparkles, 
  Building2,
  Trees,
  Compass,
  Zap,
  Droplets
} from 'lucide-react';
import { formatIndianCurrency } from '../utils/emi';
import { COMPANY } from '../data/company';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];

  const handlePrint = () => {
    window.print();
  };

  const shareText = `Swarna Dhatri Properties - ${project.name}: ${project.tagline}. Rates from ₹${project.pricePerSqYd.toLocaleString('en-IN')}/sq.yd. Book with ₹20,000 only. View: https://swarnadhatri.com/projects/${project.slug}`;
  const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const heroImage = project.id === 'avenue-2'
    ? 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80'
    : 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-14">
      {/* Printable Brochure Header */}
      <div className="hidden print:block border-b-2 border-stone-800 pb-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold font-serif text-black">{COMPANY.name}</h1>
            <p className="text-xs text-stone-600">Official Development Brochure & Survey Specification</p>
            <p className="text-xs text-stone-600 mt-1">
              305, 3rd Floor, Sai Ranga Bhaskar Residency, Miyapur, Hyderabad | Phone: +91 63048 04450
            </p>
          </div>
          <div className="text-right text-xs text-stone-600">
            <span className="font-bold text-black">{project.name}</span>
            <p>Zaheerabad Smart City NIMZ Corridor</p>
            <p className="font-semibold text-emerald-800">100% Nala Converted • 50-Acre Master Layout</p>
          </div>
        </div>
      </div>

      {/* Navigation & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 no-print">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-[#0A1C16] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#C89732]" />
          <span>Back to Developments</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <Printer className="w-3.5 h-3.5 text-[#C89732]" />
            <span>Print Specification</span>
          </button>

          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Hero Visual Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
        <div className="h-80 sm:h-96 w-full relative">
          <img
            src={heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C16] via-[#0A1C16]/50 to-transparent" />
        </div>

        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-[#C89732] text-[#0A1C16] text-[10px] font-bold uppercase tracking-widest shadow-gold">
              {project.phase}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold backdrop-blur-md">
              100% Nala Converted
            </span>
            <span className="px-3 py-1 rounded-full bg-black/60 text-stone-200 border border-white/20 text-[10px] font-semibold backdrop-blur-md">
              {project.totalAcres} Acres
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            {project.name}
          </h1>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-amber-200/90 font-light">
            <MapPin className="w-4 h-4 text-[#D4A84D] flex-shrink-0" />
            <span>{project.location}</span>
          </div>
        </div>
      </div>

      {/* Pricing & Guarantees Highlight Band */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl bg-[#0A1C16] text-[#F5EBD4] border border-[#D4A84D]/30 shadow-md space-y-1">
          <span className="text-[10px] text-stone-400 block uppercase tracking-widest font-semibold">
            Launch Rate
          </span>
          <div className="text-3xl font-bold font-serif text-[#D4A84D]">
            ₹{project.pricePerSqYd.toLocaleString('en-IN')}
            <span className="text-xs font-sans font-normal text-stone-300 ml-1">/ sq.yd (Gajam)</span>
          </div>
          {project.pricePerSqYdEast && (
            <span className="text-xs text-stone-300 block pt-1 font-light">
              East Facing: ₹{project.pricePerSqYdEast.toLocaleString('en-IN')} • West: ₹{project.pricePerSqYdWest?.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
          <span className="text-[10px] text-stone-500 block uppercase tracking-widest font-semibold">
            Reservation Token
          </span>
          <div className="text-3xl font-bold font-serif text-[#0A1C16]">
            ₹{project.bookingAmount.toLocaleString('en-IN')}
            <span className="text-xs font-sans font-normal text-stone-500 ml-1">only</span>
          </div>
          <span className="text-xs text-emerald-700 block pt-1 font-semibold">
            50% Spot Registration at Sub-Registrar
          </span>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
          <span className="text-[10px] text-stone-500 block uppercase tracking-widest font-semibold">
            Statutory LRS Guarantee
          </span>
          <div className="text-3xl font-bold font-serif text-emerald-800">
            100% Free
          </div>
          <span className="text-xs text-stone-500 block pt-1 font-light">
            All regularisation charges borne by Swarna Dhatri Properties
          </span>
        </div>
      </div>

      {/* Narrative & Highlights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h3 className="text-2xl font-bold font-serif text-[#0A1C16] mb-3">
              Master-Planned Development Overview
            </h3>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Key Specifications Checklist */}
          <div className="p-6 rounded-3xl bg-[#FCFBF7] border border-stone-200 space-y-4">
            <h4 className="text-base font-bold font-serif text-[#0A1C16] uppercase tracking-wider text-xs">
              Key Development Guarantees & Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {project.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Specification */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif text-[#0A1C16]">
              Engineered Infrastructure & Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1.5"
                >
                  <h5 className="font-bold font-serif text-stone-900 text-sm">
                    {item.name}
                  </h5>
                  <p className="text-xs text-stone-600 font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick VIP Site Visit Booking Sidebar */}
        <div className="lg:col-span-4 no-print">
          <div className="sticky top-28 p-6 rounded-3xl bg-white border border-stone-200/90 shadow-xl space-y-5">
            <div>
              <span className="text-[10px] font-bold text-[#8E6219] uppercase tracking-widest block">
                VIP Private Tour
              </span>
              <h4 className="text-xl font-bold font-serif text-[#0A1C16] mt-0.5">
                Visit {project.name}
              </h4>
              <p className="text-xs text-stone-500 font-light mt-1">
                Complimentary chauffeur pickup available from Miyapur, Hyderabad.
              </p>
            </div>

            <BookVisitForm />
          </div>
        </div>
      </div>

      {/* Embedded CAD Masterplan Explorer */}
      <div className="no-print space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A1C16]">
          Interactive Masterplan CAD Explorer
        </h3>
        <PlotExplorer />
      </div>

      {/* Embedded Clear Title Vault */}
      <div className="no-print">
        <DocumentTrustVault />
      </div>

      {/* Embedded EMI Calculator */}
      <div className="no-print">
        <EmiCalculator />
      </div>
    </div>
  );
};
