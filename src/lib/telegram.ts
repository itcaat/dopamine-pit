/**
 * Telegram Mini App integration.
 * Detects if the app is running inside Telegram and extracts user data.
 */

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
}

interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    user?: TelegramUser;
    auth_date?: number;
    hash?: string;
  };
  ready: () => void;
  expand: () => void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

/** Check if we're running inside a Telegram Mini App */
export function isInTelegramMiniApp(): boolean {
  return !!window.Telegram?.WebApp?.initData;
}

/** Get the Telegram user if available */
export function getTelegramUser(): TelegramUser | null {
  return window.Telegram?.WebApp?.initDataUnsafe?.user ?? null;
}

/**
 * Get a display name from Telegram user data.
 * Prefers username, falls back to first_name.
 */
export function getTelegramNickname(): string | null {
  const user = getTelegramUser();
  if (!user) return null;
  return user.username || user.first_name || null;
}

/** Notify Telegram that the Mini App is ready */
export function telegramReady(): void {
  window.Telegram?.WebApp?.ready();
}

/** Expand the Mini App to full height */
export function telegramExpand(): void {
  window.Telegram?.WebApp?.expand();
}
