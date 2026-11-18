// Счётчики под действиями видео. Пока данных нет, все значения равны нулю.
// Когда появится бэкенд, эти значения придут из данных видео.

export interface VideoCounts {
  donates: number;
  comments: number;
  shares: number;
}

export const emptyCounts: VideoCounts = {
  donates: 0,
  comments: 0,
  shares: 0,
};

// Короткая запись числа: 0, 999, 1.2K и т.д. Локаль берётся из приложения.
export function formatCount(value: number, locale: string): string {
  if (value < 1000) return String(value);
  return new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}
