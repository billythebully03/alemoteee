import { Screen } from '../../shared/ui/Screen';
import { SideMenuButton } from '../menu/SideMenuButton';
import { RecordButton } from '../recorder/RecordButton';
import { FeedUnavailable } from './ui/FeedUnavailable';

// Лента открывается сразу. Пока видео не подключены, показываем экран
// «не удалось получить видео». Когда появятся данные, здесь будет выбор состояния.
export function FeedScreen() {
  return (
    <Screen>
      <SideMenuButton />
      <FeedUnavailable />
      <RecordButton />
    </Screen>
  );
}
