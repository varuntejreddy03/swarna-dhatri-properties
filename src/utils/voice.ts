/**
 * Progressive enhancement helper for Web Speech API
 */

export function isSpeechRecognitionSupported(): boolean {
  return typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
}

export function startSpeechRecognition({
  lang = 'en-IN',
  onResult,
  onError,
  onEnd
}: {
  lang?: string;
  onResult: (transcript: string) => void;
  onError?: (error: any) => void;
  onEnd?: () => void;
}): (() => void) | null {
  if (!isSpeechRecognitionSupported()) return null;

  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = lang;

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.onerror = (err: any) => {
    if (onError) onError(err);
  };

  recognition.onend = () => {
    if (onEnd) onEnd();
  };

  recognition.start();

  return () => {
    try {
      recognition.stop();
    } catch (e) {
      // ignore
    }
  };
}
