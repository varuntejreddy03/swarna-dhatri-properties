import React, { useState } from 'react';
import { BOOKING_OFFER } from '../data/offers';
import { Gift, Award, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

export const CouponReveal: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [voucherAmount] = useState<number>(25000);

  const handleReveal = () => {
    if (isRevealed) return;
    setIsRevealed(true);
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <div className="w-full bg-white border border-[#E8E4DF] rounded-lg p-8">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
        <span className="text-xs font-medium text-[#B8860B] uppercase tracking-wider block">
          Special Offer
        </span>
        <h3 className="text-2xl font-serif font-semibold text-[#2D2D2D]">
          Booking Privilege Certificate
        </h3>
        <p className="text-sm text-[#6B6B6B]">
          {BOOKING_OFFER.badge}. Unlock an assured credit consideration voucher awarded on every confirmed spot booking token of ₹20,000.
        </p>
      </div>

      {/* Reveal Card */}
      <div className="max-w-md mx-auto">
        <div
          onClick={handleReveal}
          className={`min-h-[220px] rounded-lg transition-all duration-200 select-none ${
            isRevealed
              ? 'bg-[#FAFAF8] border-2 border-[#B8860B] p-8 text-center space-y-4'
              : 'bg-[#1A1A1A] p-8 text-center flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01]'
          }`}
        >
          {isRevealed ? (
            /* Revealed Privilege Presentation */
            <>
              <Award className="w-8 h-8 text-[#B8860B] mx-auto" />
              <div>
                <span className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wider block">
                  Privilege Unlocked
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-semibold text-[#B8860B] mt-2">
                  ₹{voucherAmount.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-[#6B6B6B] mt-2">
                  Credited directly toward your plot consideration value at registration.
                </p>
              </div>

              <div className="pt-2 w-full">
                <Link
                  to="/book-visit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#1A1A1A] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#2D2D2D] transition-colors"
                >
                  <span>Claim with ₹20,000 Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </>
          ) : (
            /* Unrevealed Presentation */
            <div className="space-y-3">
              <Gift className="w-8 h-8 text-[#D4A574] mx-auto" />
              <div>
                <h4 className="text-lg font-serif font-medium text-white">
                  Tap to Reveal Your Privilege
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Guaranteed voucher value awarded on spot reservation
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-4">
          * {BOOKING_OFFER.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default CouponReveal;
