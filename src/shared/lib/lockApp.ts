// Закрепляем приложение: без выделения, перетаскивания, масштабирования,
// меню по долгому нажатию и без сворачивания вертикальным свайпом.
// Если появятся поля ввода (комментарии, поиск), их надо будет исключить
// из правил выделения и контекстного меню.

interface TelegramWindow {
  Telegram?: {
    WebApp?: {
      disableVerticalSwipes?: () => void;
    };
  };
}

const BLOCKED_EVENTS = [
  'selectstart',
  'contextmenu',
  'dragstart',
  'gesturestart',
  'gesturechange',
  'gestureend',
] as const;

const ZOOM_KEYS = ['+', '-', '=', '0'];

export function lockApp(): void {
  for (const type of BLOCKED_EVENTS) {
    document.addEventListener(type, (event) => event.preventDefault(), { passive: false });
  }

  // Зум колёсиком и сочетаниями клавиш, если открыто в браузере на компьютере.
  document.addEventListener(
    'wheel',
    (event) => {
      if (event.ctrlKey) event.preventDefault();
    },
    { passive: false },
  );

  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && ZOOM_KEYS.includes(event.key)) {
      event.preventDefault();
    }
  });

  // Telegram не даёт закрыть приложение случайным вертикальным свайпом.
  (window as unknown as TelegramWindow).Telegram?.WebApp?.disableVerticalSwipes?.();
}
