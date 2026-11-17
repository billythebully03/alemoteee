import { Screen } from '../../shared/ui/Screen';
import { VideoScreen } from '../video/VideoScreen';
import { FeedUnavailable } from './ui/FeedUnavailable';

interface FeedScreenProps {
  // 'video' — показываем экран видео, 'unavailable' — экран «не получилось».
  // Позже это значение будет приходить из данных ленты.
  status: 'video' | 'unavailable';
}

export function FeedScreen({ status }: FeedScreenProps) {
  return <Screen>{status === 'video' ? <VideoScreen /> : <FeedUnavailable />}</Screen>;
}
