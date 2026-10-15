import React, { useState } from 'react';
import { Play, Image as ImageIcon, Video, Sparkles, X, Maximize2, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RealPlotGallery } from '../components/RealPlotGallery';

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'layout' | 'amenities' | 'drone'>('all');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "50-Acre Master Layout Aerial Landscape",
      category: "layout",
      caption: "Sprawling open plots land with clean demarcated internal roads and avenue boundary.",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      badge: "Aerial Drone Masterplan"
    },
    {
      id: 2,
      title: "Grand Entrance Arch & Security Gate",
      category: "amenities",
      caption: "Secured main layout entrance structure along the connecting approach road.",
      imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
      badge: "Architectural Entryway"
    },
    {
      id: 3,
      title: "30-Ft Wide Internal Roads with Kerbing",
      category: "amenities",
      caption: "Compacted engineered road network with precast kerbing stones installed along plot boundaries.",
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      badge: "Boulevard Infrastructure"
    },
    {
      id: 4,
      title: "Commercial Red Sandalwood Avenue Plantation",
      category: "amenities",
      caption: "Mature red sandalwood saplings planted along avenue boundaries providing exponential long-term timber wealth.",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      badge: "Agro-Timber Plantation"
    },
    {
      id: 5,
      title: "Zaheerabad Smart City NIMZ Economic Axis",
      category: "drone",
      caption: "High-altitude overview showing direct proximity to NH-65 Mumbai Highway and Mahindra & Mahindra industrial hub.",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80",
      badge: "Regional Highway Axis"
    },
    {
      id: 6,
      title: "Dedicated Electrical Transformer & Illuminated Poles",
      category: "amenities",
      caption: "Dedicated infrastructure readiness ensuring immediate 3-phase power access for construction.",
      imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
      badge: "Power Grid Sanctioned"
    },
    {
      id: 7,
      title: "Underground Borewell & Water Pipeline Network",
      category: "amenities",
      caption: "Central high-yield sweet water borewell supplying continuous water pipelines across all surveyed sectors.",
      imageUrl: "https://images.unsplash.com/photo-1558441719-75f85072049e?auto=format&fit=crop&w=1200&q=80",
      badge: "Water Connectivity"
    },
    {
      id: 8,
      title: "Sunset Golden Hour Over Swarna Bindu Avenue-2",
      category: "layout",
      caption: "Dusk vista over demarcated Vastu-aligned residential plots in the fertile Zaheerabad plateau.",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      badge: "Estate Horizon"
    }
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-14">
      {/* Page Header */}
      <div className="max-w-3xl space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-[#55AA2A]/15 text-[#2E7D1A] border border-[#55AA2A]/30 text-[10px] font-bold uppercase tracking-widest inline-block">
          Estate Visual Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0A1C16] leading-tight">
          Swarna Bindu Avenue Ground Portfolio
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
          Real unfiltered field photographs and masterplan visuals from our 50-acre plotted development in Zaheerabad Smart City NIMZ.
        </p>
      </div>

      {/* 1. ACTUAL ON-SITE ENHANCED PLOT PHOTOS GALLERY */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm">
        <RealPlotGallery />
      </div>

      {/* 2. ARCHITECTURAL PERSPECTIVES & CONCEPT RENDERS */}
      <div className="pt-8 border-t border-stone-200 space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1C16]">
            Architectural Masterplan & Conceptual Perspectives
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-light">
            High-definition 3D design visions and regional highway corridor maps.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
        {[
          { id: 'all', label: 'All Media' },
          { id: 'layout', label: 'Master Layout' },
          { id: 'amenities', label: 'Infrastructure & Amenities' },
          { id: 'drone', label: 'Aerial & Corridor' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === tab.id
                ? 'bg-[#0A1C16] text-[#D4A84D] shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item.imageUrl)}
            className="group rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-60 w-full overflow-hidden bg-stone-900">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md text-[10px] font-bold uppercase tracking-wider border border-white/20">
                {item.badge}
              </span>

              <div className="absolute bottom-4 right-4 p-2 rounded-xl bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            <div className="p-5 space-y-1.5">
              <h4 className="text-base font-bold font-serif text-[#0A1C16] group-hover:text-[#C89732] transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImage}
              alt="Preview"
              className="w-full h-auto max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
      </div>

      {/* Bottom Visit Callout */}
      <div className="p-8 rounded-3xl bg-[#0A1C16] text-[#F5EBD4] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4A84D]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="space-y-1 relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Experience the Layout in Person
          </h3>
          <p className="text-xs text-stone-300 font-light">
            Photos only tell part of the story. Tour Swarna Bindu Avenue with complimentary AC chauffeur pickup.
          </p>
        </div>
        <Link
          to="/book-visit"
          className="relative z-10 px-6 py-3.5 rounded-xl bg-[#C89732] hover:bg-[#D4A84D] text-[#0A1C16] font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-gold transition-all"
        >
          Schedule VIP Visit
        </Link>
      </div>
    </div>
  );
};
