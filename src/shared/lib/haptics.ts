// Лёгкая вибрация при нажатии. В Telegram используем его собственный отклик,
// в обычном браузере — стандартную вибрацию, если устройство её поддерживает.

interface TelegramWindow {
  Telegram?: {
    WebApp?: {
      HapticFeedback?: {
        impactOccurred: (style: 'light' | 'medium' | 'heavy') => void;
      };
    };
  };
}

export function lightHaptic(): void {
  const haptic = (window as unknown as TelegramWindow).Telegram?.WebApp?.HapticFeedback;
  if (haptic) {
    haptic.impactOccurred('light');
  } else {
    navigator.vibrate?.(10);
  }
}
