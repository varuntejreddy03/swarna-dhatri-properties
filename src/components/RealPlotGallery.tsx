import React, { useState } from 'react';
import { Camera, Eye, MapPin, CheckCircle2, Trees, Sparkles, ChevronRight, X } from 'lucide-react';

export interface SitePhoto {
  id: string;
  src: string;
  thumb: string;
  title: string;
  category: 'plantation' | 'survey' | 'layout' | 'groundwork';
  caption: string;
  highlight: string;
}

export const SITE_PHOTOS: SitePhoto[] = [
  {
    id: 'photo-1',
    src: '/enhanced-site-photos/site-photo-1.webp',
    thumb: '/enhanced-site-photos/site-photo-1.webp',
    title: 'Boulevard Boundary & Kerb Demarcation',
    category: 'groundwork',
    caption: 'Finished internal 33-foot layout road level with stone markers and precast kerbing alignment in progress.',
    highlight: '33 Ft Boulevard'
  },
  {
    id: 'photo-2',
    src: '/enhanced-site-photos/site-photo-2.webp',
    thumb: '/enhanced-site-photos/site-photo-2.webp',
    title: 'Red Sandalwood Plantation Growth',
    category: 'plantation',
    caption: 'Thriving red sandalwood saplings planted along designated plot perimeters with drip-irrigation support.',
    highlight: 'Commercial Red Sandalwood'
  },
  {
    id: 'photo-3',
    src: '/enhanced-site-photos/site-photo-3.webp',
    thumb: '/enhanced-site-photos/site-photo-3.webp',
    title: 'Plot Survey Pegs & Clear Demarcation',
    category: 'survey',
    caption: 'Individual plot corners flagged with yellow survey number markers and total-station boundaries.',
    highlight: 'Peg Marked Plots'
  },
  {
    id: 'photo-4',
    src: '/enhanced-site-photos/site-photo-4.webp',
    thumb: '/enhanced-site-photos/site-photo-4.webp',
    title: 'Underground Irrigation & Water Feeder Lines',
    category: 'groundwork',
    caption: 'Dedicated continuous borewell pipeline laid through trenches feeding every avenue plot.',
    highlight: 'Continuous Water Grid'
  },
  {
    id: 'photo-5',
    src: '/enhanced-site-photos/site-photo-5.webp',
    thumb: '/enhanced-site-photos/site-photo-5.webp',
    title: 'Tree-Lined Avenues & Soil Health',
    category: 'plantation',
    caption: 'Rich fertile black-cotton & red soil beds supporting robust organic tree cultivation.',
    highlight: 'Fertile Soil'
  },
  {
    id: 'photo-6',
    src: '/enhanced-site-photos/site-photo-6.webp',
    thumb: '/enhanced-site-photos/site-photo-6.webp',
    title: 'Active On-Site Land Development',
    category: 'groundwork',
    caption: 'Civil engineering crew working on soil levelling, drainage trenches, and corner fencing pillars.',
    highlight: 'Live Development'
  },
  {
    id: 'photo-7',
    src: '/enhanced-site-photos/site-photo-8.webp',
    thumb: '/enhanced-site-photos/site-photo-8.webp',
    title: 'Secured Layout Boundary & Compound Fencing',
    category: 'layout',
    caption: 'High perimeter wall pillars and barbed security wire securing the 50-acre gated master community.',
    highlight: 'Perimeter Secured'
  },
  {
    id: 'photo-8',
    src: '/enhanced-site-photos/site-photo-10.webp',
    thumb: '/enhanced-site-photos/site-photo-10.webp',
    title: 'Panoramic Boulevard Vista',
    category: 'layout',
    caption: 'Expansive open sky and clean countryside environment just 15 minutes from Zaheerabad NIMZ entrance.',
    highlight: 'Pollution-Free Horizon'
  },
  {
    id: 'photo-9',
    src: '/enhanced-site-photos/site-photo-11.webp',
    thumb: '/enhanced-site-photos/site-photo-11.webp',
    title: 'Happy Plot Patrons On-Site',
    category: 'survey',
    caption: 'Investors inspecting their demarcated plot corner stones and red sandalwood trees on location.',
    highlight: 'Verified Patrons'
  }
];

export const RealPlotGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<SitePhoto | null>(null);

  const filteredPhotos = activeCategory === 'all'
    ? SITE_PHOTOS
    : SITE_PHOTOS.filter(p => p.category === activeCategory);

  return (
    <section className="space-y-8" id="real-site-photos">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#55AA2A]/10 text-[#2E7D1A] border border-[#55AA2A]/30 text-[11px] font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-[#55AA2A]" />
            <span>Unfiltered Ground Reality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1C16]">
            Real Site Progress & Plantation Gallery
          </h2>
          <p className="text-sm text-stone-600 max-w-2xl mt-1.5 font-light">
            Genuine photographs captured directly on-site at Swarna Bindu Avenue, Zaheerabad. Inspect actual ground levelling, red sandalwood trees, and plot corner demarcations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'plantation', label: 'Red Sandalwood' },
            { id: 'survey', label: 'Plot Demarcations' },
            { id: 'groundwork', label: 'Boulevards & Water' },
            { id: 'layout', label: 'Compound Security' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === tab.id
                  ? 'bg-[#0A1C16] text-[#EBD4A4] shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid with Nano-banana Enhanced Visuals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group cursor-pointer rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image Container with Luxury Overlay */}
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-medium flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#EBD4A4]" />
                  <span>Click to expand high-res view</span>
                </span>
              </div>

              {/* Verified Ground Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>On-Site Oct 2026</span>
              </div>

              {/* Highlight Badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#C89732] text-[#0A1C16] text-[10px] font-extrabold shadow-sm">
                {photo.highlight}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 flex-grow flex flex-col justify-between space-y-2">
              <div>
                <h4 className="font-serif font-bold text-base text-[#0A1C16] group-hover:text-[#C89732] transition-colors">
                  {photo.title}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed font-light">
                  {photo.caption}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#55AA2A] font-bold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#55AA2A]" />
                  <span>Physical Plot Verification</span>
                </span>
                <span className="text-stone-400 group-hover:text-[#0A1C16] group-hover:translate-x-0.5 transition-all">
                  Inspect →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0A1C16] rounded-3xl overflow-hidden shadow-2xl border border-white/20 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-Res Image Display */}
            <div className="relative max-h-[65vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>

            {/* Modal Metadata */}
            <div className="p-6 sm:p-8 bg-gradient-to-t from-[#0A1C16] to-[#0E2820] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C89732] text-[#0A1C16] font-extrabold text-xs">
                    {selectedPhoto.highlight}
                  </span>
                  <span className="text-xs text-stone-400">
                    Swarna Bindu Avenue, Zaheerabad
                  </span>
                </div>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified On-Site Ground Reality
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
