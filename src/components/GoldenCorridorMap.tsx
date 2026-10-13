import React, { useState } from 'react';
import { LANDMARKS } from '../data/landmarks';
import { Landmark } from '../types';
import { MapPin, Navigation, ExternalLink, Info, CheckCircle2, Train, Building2, GraduationCap, Compass } from 'lucide-react';
import { COMPANY } from '../data/company';

export const GoldenCorridorMap: React.FC = () => {
  const [activeLandmark, setActiveLandmark] = useState<Landmark>(LANDMARKS[0]);
  const [showGoogleMap, setShowGoogleMap] = useState<boolean>(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'industry': return <Building2 className="w-3.5 h-3.5 text-blue-600" />;
      case 'transport': return <Train className="w-3.5 h-3.5 text-amber-600" />;
      case 'education': return <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />;
      default: return <MapPin className="w-3.5 h-3.5 text-purple-600" />;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Existing': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Under development': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'MoU signed': return 'bg-purple-100 text-purple-800 border-purple-300';
      default: return 'bg-amber-100 text-amber-800 border-amber-300';
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200/90 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-[#0A1C16] text-[#F5EBD4] border-b border-[#D4A84D]/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="px-3 py-0.5 rounded-full bg-[#D4A84D]/20 text-[#EBD4A4] border border-[#D4A84D]/30 font-bold text-[10px] uppercase tracking-widest">
              NH-65 Mumbai Growth Axis
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1.5">
              The Golden Industrial Corridor & Connectivity
            </h3>
            <p className="text-xs text-stone-300 mt-1 max-w-2xl font-light">
              Direct high-speed expressway connectivity from Miyapur, Hyderabad directly into the 12,618-acre Zaheerabad NIMZ corridor.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setShowGoogleMap(!showGoogleMap)}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold backdrop-blur-sm border border-white/15 transition-all flex items-center gap-2"
            >
              <Navigation className="w-3.5 h-3.5 text-[#D4A84D]" />
              <span>{showGoogleMap ? 'Show Strategic Corridor CAD' : 'View Live Google Maps'}</span>
            </button>
            <a
              href="https://maps.google.com/?q=Zaheerabad+Telangana"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#C89732] hover:bg-[#D4A84D] text-[#0A1C16] text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <span>Route Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Corridor Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Interactive Visual / Map (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-[#06130E] relative flex flex-col justify-between min-h-[460px] border-b lg:border-b-0 lg:border-r border-stone-200">
          <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

          {showGoogleMap ? (
            /* Live Embedded Google Map */
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 relative z-10">
              <iframe
                title="Zaheerabad NIMZ Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60814.77093223126!2d77.58197775820314!3d17.683401799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9077227e7f1ab%3A0xe67db509b5585b0f!2sZaheerabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            /* Bespoke Strategic Corridor CAD Vector Diagram */
            <div className="w-full h-full flex flex-col justify-between relative z-10 space-y-6">
              {/* Corridor Axis Header */}
              <div className="flex justify-between items-center text-xs text-stone-300">
                <span className="font-mono text-[#D4A84D]">HYDERABAD ORR / MIYAPUR (KM 0)</span>
                <span className="font-mono text-emerald-400">ZAHEERABAD NIMZ HUB (KM 90)</span>
              </div>

              {/* Highway Arterial Line with Interactive Milestones */}
              <div className="py-4 sm:py-6 space-y-4">
                <div className="relative">
                  <div className="h-3 w-full bg-[#141E28] rounded-full border border-[#D4A84D]/30 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#C89732] via-[#D4A84D] to-emerald-400 rounded-full" />
                  </div>
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-1 sm:px-2">
                    {LANDMARKS.map((lm, idx) => {
                      const isSelected = activeLandmark.id === lm.id;
                      return (
                        <button
                          key={lm.id}
                          onClick={() => setActiveLandmark(lm)}
                          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all transform ${
                            isSelected
                              ? 'bg-[#D4A84D] text-[#0A1C16] scale-125 ring-2 sm:ring-4 ring-[#D4A84D]/30'
                              : 'bg-[#0A1C16] border border-white/40 text-white hover:scale-110'
                          }`}
                          title={lm.name}
                        >
                          <span className="text-[9px] sm:text-[10px] font-bold">{idx + 1}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Milestone quick pills: Horizontal scroll on mobile */}
                <div className="flex sm:grid sm:grid-cols-4 gap-2 pt-3 overflow-x-auto pb-1 no-scrollbar">
                  {LANDMARKS.slice(0, 4).map((lm) => (
                    <button
                      key={lm.id}
                      onClick={() => setActiveLandmark(lm)}
                      className={`p-2.5 sm:p-3 rounded-xl text-left transition-all border flex-shrink-0 w-36 sm:w-auto ${
                        activeLandmark.id === lm.id
                          ? 'bg-[#D4A84D]/20 border-[#D4A84D] text-white'
                          : 'bg-[#0A1C16]/80 border-white/10 text-stone-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="text-[10px] text-[#D4A84D] font-mono block">{lm.distanceMinutes}</span>
                      <span className="text-xs font-bold line-clamp-1 mt-0.5">{lm.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300">
                <p>
                  <span className="font-bold text-[#D4A84D]">Strategic Advantage: </span>
                  Swarna Bindu Avenue-2 is positioned immediately contiguous to the 12,618-acre NIMZ manufacturing hub, capturing exponential spillover growth from ongoing infrastructure execution.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Landmark Details Sidebar (5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#FCFBF7] flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-stone-200 text-stone-800">
                  {activeLandmark.category}
                </span>

                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusBadgeClass(activeLandmark.statusTag)}`}>
                  {activeLandmark.statusTag}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold font-serif text-[#0A1C16]">
                {activeLandmark.name}
              </h4>
            </div>

            {/* Travel Times Band */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200">
                <span className="text-[10px] text-stone-400 block uppercase font-bold tracking-wider">Drive Duration</span>
                <span className="text-lg font-bold font-serif text-[#0A1C16]">{activeLandmark.distanceMinutes}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200">
                <span className="text-[10px] text-stone-400 block uppercase font-bold tracking-wider">Distance from Site</span>
                <span className="text-lg font-bold font-serif text-[#C89732]">{activeLandmark.distanceKm}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              {activeLandmark.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#0A1C16] text-[#F5EBD4] space-y-2 text-xs border border-[#D4A84D]/30">
              <span className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold block">
                Corridor Landmark Milestone
              </span>
              <p className="text-stone-300 font-light">
                Directly accessible via all-weather 33-ft layout approach boulevards with direct access to NH-65.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(activeLandmark.name + ' Zaheerabad')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#0A1C16] font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Inspect on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
