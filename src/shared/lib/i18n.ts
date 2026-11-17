// Язык определяется один раз при старте.
// Сначала смотрим язык аккаунта Telegram, затем язык браузера.
// Если язык русский, берём русские строки. Для всех остальных языков — английские.

export type Locale = 'ru' | 'en';

export const strings = {
  ru: {
    unavailableTitle: 'Что ж ты будешь делать!',
    unavailableSubtitle: 'Похоже, по какой-то причине посмотреть видео сейчас не получится',
  },
  en: {
    unavailableTitle: 'Oh well!',
    unavailableSubtitle: "Guess you can't watch it right now for some reason",
  },
} as const;

interface TelegramWindow {
  Telegram?: {
    WebApp?: {
      initDataUnsafe?: { user?: { language_code?: string } };
    };
  };
}

function detectLocale(): Locale {
  const telegramLanguage = (window as unknown as TelegramWindow).Telegram?.WebApp?.initDataUnsafe?.user
    ?.language_code;
  const language = telegramLanguage ?? navigator.language ?? 'en';
  return language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

export const locale: Locale = detectLocale();

export const t = strings[locale];
