import { CreatorActionBar } from './ui/CreatorActionBar';
import { emptyCounts } from './model/counts';

// Экран видео. Центр пока чёрный: сюда позже встанет проигрыватель.
// Счётчики пока нулевые; когда появится бэкенд, сюда придут реальные значения.
export function VideoScreen() {
  return (
    <div className="video-screen">
      <CreatorActionBar counts={emptyCounts} />
    </div>
  );
}
