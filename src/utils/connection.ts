import { useState, useEffect } from 'react';

export interface NetworkStatus {
  isLowBandwidth: boolean;
  saveData: boolean;
  effectiveType: string;
}

export function getNetworkStatus(): NetworkStatus {
  if (typeof navigator === 'undefined') {
    return { isLowBandwidth: false, saveData: false, effectiveType: '4g' };
  }

  const conn = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  if (!conn) {
    return { isLowBandwidth: false, saveData: false, effectiveType: '4g' };
  }

  const saveData = Boolean(conn.saveData);
  const effectiveType = conn.effectiveType || '4g';
  const isSlow = effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g';

  return {
    isLowBandwidth: saveData || isSlow,
    saveData,
    effectiveType
  };
}

export function useNetworkStatus(): NetworkStatus {
  const [status, setStatus] = useState<NetworkStatus>(getNetworkStatus);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const conn = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (!conn || !conn.addEventListener) return;

    const handleNetworkChange = () => {
      setStatus(getNetworkStatus());
    };

    conn.addEventListener('change', handleNetworkChange);
    return () => {
      conn.removeEventListener('change', handleNetworkChange);
    };
  }, []);

  return status;
}
