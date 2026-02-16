import { useState, useEffect, useCallback } from 'react';

const LS_DISMISSED = 'ikanban_pwa_dismissed';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

function isMobile(): boolean {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isIOS(): boolean {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isStandalone(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator && (navigator as Record<string, unknown>).standalone === true)
  );
}

export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOSDevice, setIsIOSDevice] = useState(false);

  useEffect(() => {
    // Never show if already installed or not mobile or previously dismissed
    if (isStandalone() || !isMobile() || localStorage.getItem(LS_DISMISSED) === '1') return;

    setIsIOSDevice(isIOS());

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  /** Call this to reveal the install banner (e.g. after first game) */
  const triggerBanner = useCallback(() => {
    if (isStandalone() || !isMobile() || localStorage.getItem(LS_DISMISSED) === '1') return;
    setShowBanner(true);
  }, []);

  /** Native install (Android / Chrome) */
  const install = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  }, [deferredPrompt]);

  /** Dismiss banner forever */
  const dismiss = useCallback(() => {
    localStorage.setItem(LS_DISMISSED, '1');
    setShowBanner(false);
  }, []);

  return {
    showBanner,
    isIOSDevice,
    canInstallNative: deferredPrompt !== null,
    triggerBanner,
    install,
    dismiss,
  };
}
