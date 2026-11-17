import { FeedScreen } from './features/feed/FeedScreen';

// Пока единственный экран — лента. Вход, профиль и настройки добавятся позже,
// каждый в своей папке внутри features/.
export function App() {
  return (
    <div className="app">
      <FeedScreen />
    </div>
  );
}
