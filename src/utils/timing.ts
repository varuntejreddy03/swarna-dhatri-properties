/**
 * Time utility for Indian Standard Time (IST) calculations
 * Corporate & Site Operations: 10:00 AM - 6:00 PM IST
 * Weekly Holiday: Tuesday (Closed)
 */

export interface OfficeStatus {
  isOpen: boolean;
  isTuesday: boolean;
  statusBadgeEn: string;
  nextOpenMessageEn: string;
  currentIstTime: string;
}

export function getIstDate(mockDate?: Date): Date {
  const now = mockDate || new Date();
  // IST is UTC + 5:30
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (3600000 * 5.5));
}

export function getOfficeStatus(mockDate?: Date): OfficeStatus {
  const ist = getIstDate(mockDate);
  const day = ist.getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
  const hour = ist.getHours();
  const minutes = ist.getMinutes();
  const currentTimeVal = hour + minutes / 60;

  const isTuesday = day === 2;
  const isBusinessHours = currentTimeVal >= 10 && currentTimeVal < 18;
  const isOpen = !isTuesday && isBusinessHours;

  const timeStr = ist.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  if (isTuesday) {
    const badge = "Office Closed Today (Tuesday)";
    const msg = "Opens tomorrow (Wednesday) at 10:00 AM IST";
    return {
      isOpen: false,
      isTuesday: true,
      statusBadgeEn: badge,
      nextOpenMessageEn: msg,
      currentIstTime: timeStr
    };
  }

  if (currentTimeVal < 10) {
    const badge = "Opens at 10:00 AM IST";
    const msg = "Opens today at 10:00 AM IST";
    return {
      isOpen: false,
      isTuesday: false,
      statusBadgeEn: badge,
      nextOpenMessageEn: msg,
      currentIstTime: timeStr
    };
  }

  if (currentTimeVal >= 18) {
    const isTomorrowTuesday = (day + 1) % 7 === 2;
    const nextDayName = isTomorrowTuesday ? "Wednesday" : "Tomorrow";
    const badge = "Closed for Today";
    const msg = `Opens ${nextDayName} at 10:00 AM IST`;
    return {
      isOpen: false,
      isTuesday: false,
      statusBadgeEn: badge,
      nextOpenMessageEn: msg,
      currentIstTime: timeStr
    };
  }

  const badge = "Concierge Desk Open (10 AM – 6 PM)";
  const msg = "Open until 6:00 PM IST today";
  return {
    isOpen: true,
    isTuesday: false,
    statusBadgeEn: badge,
    nextOpenMessageEn: msg,
    currentIstTime: timeStr
  };
}

export function getIstTodayDateString(mockDate?: Date): string {
  const ist = getIstDate(mockDate);
  const year = ist.getFullYear();
  const month = String(ist.getMonth() + 1).padStart(2, '0');
  const day = String(ist.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function isDateTuesday(dateString: string): boolean {
  if (!dateString) return false;
  const parts = dateString.split('-');
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    return d.getDay() === 2;
  }
  const d = new Date(dateString);
  return d.getDay() === 2;
}
