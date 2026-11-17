import { FeedScreen } from './features/feed/FeedScreen';

// Пока данных нет, лента показывает экран видео. Чтобы увидеть экран ошибки,
// поставьте status="unavailable".
export function App() {
  return (
    <div className="app">
      <FeedScreen status="video" />
    </div>
  );
}
