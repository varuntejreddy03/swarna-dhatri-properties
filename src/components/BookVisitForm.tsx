import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mic,
  MicOff,
  MessageCircle,
  AlertCircle,
  Car,
} from 'lucide-react';
import { isDateTuesday, getIstTodayDateString } from '../utils/timing';
import { getWhatsAppSiteVisitUrl } from '../utils/whatsapp';
import { isSpeechRecognitionSupported, startSpeechRecognition } from '../utils/voice';
import { COMPANY } from '../data/company';

export interface BookVisitFormProps {
  /** Plot number as printed on the sheet, e.g. "12" */
  prefilledPlot?: string;
  /** Layout label, e.g. "Phase 2" */
  prefilledPhase?: string;
}

export const BookVisitForm: React.FC<BookVisitFormProps> = ({ prefilledPlot, prefilledPhase }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM - 01:00 PM');
  const [pickupRequired, setPickupRequired] = useState(false);
  const [notes, setNotes] = useState(prefilledPlot ? `Inquiring about Plot #${prefilledPlot}${prefilledPhase ? ` (${prefilledPhase})` : ''}` : '');
  const [isTuesdaySelected, setIsTuesdaySelected] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speechSupported = isSpeechRecognitionSupported();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSelectedDate(val);
    if (isDateTuesday(val)) {
      setIsTuesdaySelected(true);
    } else {
      setIsTuesdaySelected(false);
    }
  };

  const toggleVoiceInput = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    setIsListening(true);
    startSpeechRecognition({
      lang: 'en-IN',
      onResult: (transcript) => {
        setNotes((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsListening(false);
      },
      onError: () => setIsListening(false),
      onEnd: () => setIsListening(false),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isTuesdaySelected) return;

    const url = getWhatsAppSiteVisitUrl({
      name,
      phone: phoneNumber,
      date: selectedDate,
      slot: selectedSlot,
      pickupRequired,
      notes,
    });

    window.open(url, '_blank');
  };

  const minDate = getIstTodayDateString();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label htmlFor="visit-name" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            id="visit-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rajesh Sharma"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#E8E4DF] bg-white text-sm text-[#2D2D2D] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-colors"
          />
        </div>
      </div>

      {/* Phone Number Field */}
      <div>
        <label htmlFor="visit-phone" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
          Phone Number (WhatsApp) <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            id="visit-phone"
            type="tel"
            required
            pattern="[0-9]{10}"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
            placeholder="10-digit mobile number"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#E8E4DF] bg-white text-sm text-[#2D2D2D] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-colors"
          />
        </div>
      </div>

      {/* Date & Time Slot Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="visit-date" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
            Tour Date (Wed – Mon) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              id="visit-date"
              type="date"
              required
              min={minDate}
              value={selectedDate}
              onChange={handleDateChange}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-white text-sm text-[#2D2D2D] focus:outline-none transition-colors ${
                isTuesdaySelected
                  ? 'border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-1 focus:ring-red-200'
                  : 'border-[#E8E4DF] focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20'
              }`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="visit-slot" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">
            Preferred Time Slot <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <select
              id="visit-slot"
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#E8E4DF] bg-white text-sm text-[#2D2D2D] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-colors"
            >
              <option value="10:00 AM - 12:00 PM">10:00 AM – 12:00 PM (Morning)</option>
              <option value="11:00 AM - 01:00 PM">11:00 AM – 01:00 PM (Mid-Day)</option>
              <option value="02:00 PM - 04:00 PM">02:00 PM – 04:00 PM (Afternoon)</option>
              <option value="04:00 PM - 06:00 PM">04:00 PM – 06:00 PM (Sunset)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tuesday Warning Alert */}
      {isTuesdaySelected && (
        <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-xs text-red-900">Tuesday Weekly Holiday</p>
            <p className="text-xs text-red-700 mt-0.5 leading-relaxed">
              Our corporate office and site operations are closed on Tuesdays. Please pick any other day (Wednesday through Monday).
            </p>
          </div>
        </div>
      )}

      {/* Pickup Request Checkbox */}
      <label
        htmlFor="pickup-required"
        className="flex items-start gap-3 p-3.5 rounded-lg border border-[#E8E4DF] bg-[#FAFAF8] cursor-pointer hover:border-[#D4A574]/60 transition-colors"
      >
        <input
          type="checkbox"
          id="pickup-required"
          checked={pickupRequired}
          onChange={(e) => setPickupRequired(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-[#E8E4DF] text-[#B8860B] focus:ring-[#B8860B]/30 accent-[#B8860B] cursor-pointer"
        />
        <div className="flex-1 text-sm">
          <div className="flex items-center gap-1.5 font-medium text-[#2D2D2D]">
            <Car className="w-4 h-4 text-[#B8860B]" />
            <span>Request complimentary site visit chauffeur</span>
          </div>
          <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed">
            Doorstep or Miyapur metro station pickup arranged with the {COMPANY.name} team.
          </p>
        </div>
      </label>

      {/* Notes & Voice Input */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="visit-notes" className="text-sm font-medium text-[#2D2D2D]">
            Plot Preference & Notes
          </label>
          {speechSupported && (
            <button
              type="button"
              onClick={toggleVoiceInput}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${
                isListening
                  ? 'bg-red-50 border-red-300 text-red-600 animate-pulse'
                  : 'bg-[#FAFAF8] border-[#E8E4DF] text-[#6B6B6B] hover:text-[#2D2D2D] hover:bg-white'
              }`}
            >
              {isListening ? (
                <>
                  <MicOff className="w-3.5 h-3.5 text-red-600" />
                  <span>Listening...</span>
                </>
              ) : (
                <>
                  <Mic className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Voice Input</span>
                </>
              )}
            </button>
          )}
        </div>
        <textarea
          id="visit-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. Looking for 200 Gajam East-facing plot with immediate registration..."
          className="w-full rounded-lg border border-[#E8E4DF] bg-white px-4 py-3 text-sm text-[#2D2D2D] placeholder:text-[#6B6B6B]/60 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isTuesdaySelected}
        className={`w-full py-3.5 px-6 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors ${
          isTuesdaySelected
            ? 'bg-[#E8E4DF] text-[#6B6B6B] cursor-not-allowed'
            : 'bg-[#1A1A1A] text-white hover:bg-[#2D2D2D] active:bg-black'
        }`}
      >
        <MessageCircle className="w-4 h-4" />
        <span>Book Site Visit via WhatsApp</span>
      </button>

      {/* Helper text */}
      <p className="text-xs text-[#6B6B6B] text-center">
        Direct confirmation with senior team on WhatsApp. Zero obligations.
      </p>
    </form>
  );
};

export default BookVisitForm;
