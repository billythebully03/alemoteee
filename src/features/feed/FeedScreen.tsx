import { Screen } from '../../shared/ui/Screen';
import { appConfig } from '../../config/app';
import { SideMenuButton } from '../menu/SideMenuButton';
import { RecordButton } from '../recorder/RecordButton';

// Лента открывается сразу. Данных пока нет, поэтому показываем пустое состояние.
export function FeedScreen() {
  return (
    <Screen>
      <SideMenuButton />
      <div className="feed-empty">
        <p>{appConfig.emptyFeedText}</p>
      </div>
      <RecordButton />
    </Screen>
  );
}
