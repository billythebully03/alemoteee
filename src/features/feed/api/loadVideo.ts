// Заглушка запроса видео. Пока сервера нет, запрос всегда завершается неудачей.
// Возвращает true, если видео получено.
export function loadVideo(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(false), 1200);
  });
}
