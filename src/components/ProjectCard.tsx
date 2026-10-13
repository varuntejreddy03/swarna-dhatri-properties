import React from 'react';
import { Project } from '../types';
import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, ArrowRight, Share2 } from 'lucide-react';
import { COMPANY } from '../data/company';

export interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const shareText = `${COMPANY.name} - ${project.name}: Plotted layout in ${project.location}. Plots from ₹${project.pricePerSqYd.toLocaleString('en-IN')}/sq.yd. Token booking ₹${project.bookingAmount.toLocaleString('en-IN')}. 50% spot registration. View project details: https://swarnadhatri.com/projects/${project.slug}`;
  const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const imageSrc =
    project.id === 'avenue-2'
      ? 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
      : 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="bg-white rounded-lg border border-[#E8E4DF] shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col justify-between">
      <div>
        {/* Image Header with Gradient Overlay */}
        <div className="relative h-56 w-full overflow-hidden bg-stone-100">
          <img
            src={imageSrc}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
            <div>
              {project.isFlagship && (
                <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-[#FAFAF8] text-[#B8860B] border border-[#E8E4DF] shadow-sm">
                  Flagship
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#FAFAF8]/95 text-[#2D2D2D] border border-[#E8E4DF] backdrop-blur-sm">
                Nala Converted
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#FAFAF8]/95 text-[#2D2D2D] border border-[#E8E4DF] backdrop-blur-sm">
                {project.totalAcres} Acres
              </span>
            </div>
          </div>

          {/* Project Name and Location Overlay at Bottom */}
          <div className="absolute bottom-3.5 left-4 right-4 text-white">
            <h3 className="font-serif text-xl font-semibold leading-tight text-white drop-shadow-sm">
              {project.name}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-stone-200 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4A574] flex-shrink-0" />
              <span className="line-clamp-1">{project.location}</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 space-y-4">
          <p className="text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Pricing Block */}
          <div className="p-3.5 rounded-lg bg-[#FAFAF8] border border-[#E8E4DF] flex items-center justify-between gap-3">
            <div>
              <span className="text-xs text-[#6B6B6B] block">Price per Sq. Yd</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-serif text-2xl font-bold text-[#B8860B]">
                  ₹{project.pricePerSqYd.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#6B6B6B]">/ sq.yd</span>
              </div>
              {(project.pricePerSqYdEast || project.pricePerSqYdWest) && (
                <span className="text-[11px] text-[#6B6B6B] block mt-0.5">
                  {project.pricePerSqYdEast && `East: ₹${project.pricePerSqYdEast.toLocaleString('en-IN')}`}
                  {project.pricePerSqYdEast && project.pricePerSqYdWest && ' · '}
                  {project.pricePerSqYdWest && `West: ₹${project.pricePerSqYdWest.toLocaleString('en-IN')}`}
                </span>
              )}
            </div>

            <div className="text-right">
              <span className="text-xs text-[#6B6B6B] block">Token Advance</span>
              <span className="text-sm font-semibold text-[#2D2D2D] block mt-0.5">
                ₹{project.bookingAmount.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-[#4A7C59] font-medium block mt-0.5">
                50% Spot Registration
              </span>
            </div>
          </div>

          {/* Highlights Checklist */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {project.highlights.slice(0, 4).map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#2D2D2D] leading-snug line-clamp-1">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 flex items-center gap-2.5">
        <Link
          to={`/projects/${project.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#1A1A1A] hover:bg-[#2D2D2D] text-[#B8860B] font-medium text-sm transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </Link>

        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share ${project.name} on WhatsApp`}
          className="p-2.5 rounded-lg border border-[#E8E4DF] bg-white hover:bg-[#FAFAF8] text-[#6B6B6B] hover:text-[#2D2D2D] transition-colors flex-shrink-0"
          title="Share on WhatsApp"
        >
          <Share2 className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
