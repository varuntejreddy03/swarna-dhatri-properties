import React from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ShieldCheck, Info, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-14">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-[#D4A84D]/15 text-[#8E6219] border border-[#D4A84D]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Master-Planned Developments Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          Swarna Bindu Avenue Projects
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
          Explore our master-planned 50-acre plotted layouts strategically positioned in the high-growth Zaheerabad Smart City NIMZ corridor. Every phase delivers 100% Nala Conversion, clear freehold title, spot registration, and developer-paid LRS.
        </p>

        {/* Pricing Notice */}
        <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 flex items-center gap-2.5">
          <Info className="w-4 h-4 text-[#C89732] flex-shrink-0" />
          <span className="font-light">
            Notice: Rates reflect current launch offerings. Prices are subject to periodic revision based on corridor infrastructural progress.
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Interactive Layout Callout */}
      <div className="p-8 rounded-3xl bg-[#0A1C16] text-[#F5EBD4] border border-[#D4A84D]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4A84D] block">
            CAD Survey Navigator
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Need Guidance Choosing the Ideal Plot & Facing?
          </h3>
          <p className="text-xs text-stone-300 max-w-xl font-light">
            Use our interactive Masterplan CAD Explorer to inspect square yards, cardinal Vastu orientations, boulevard widths, and calculated EMIs.
          </p>
        </div>
        <Link
          to="/plot-explorer"
          className="relative z-10 px-6 py-3.5 rounded-xl bg-[#C89732] hover:bg-[#D4A84D] text-[#0A1C16] font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-gold transition-all"
        >
          Open Masterplan CAD
        </Link>
      </div>
    </div>
  );
};
