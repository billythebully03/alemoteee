import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { t } from '../../../shared/lib/i18n';
import { Skeleton } from '../../../shared/ui/Skeleton';

// Один из трёх случайных роликов. Каждый загружается отдельным чанком,
// поэтому пока он не готов, показываем заглушку.
const ANIMATION_LOADERS = [
  () => import('../../../assets/lottie/cat-sad-1.json'),
  () => import('../../../assets/lottie/cat-sad-2.json'),
  () => import('../../../assets/lottie/dog-sad.json'),
];

// Экран, когда видео получить не удалось: нет контента или нет соединения.
export function FeedUnavailable() {
  const [index] = useState(() => Math.floor(Math.random() * ANIMATION_LOADERS.length));
  const [animation, setAnimation] = useState<object | null>(null);

  useEffect(() => {
    let cancelled = false;
    ANIMATION_LOADERS[index]().then((module) => {
      if (!cancelled) setAnimation(module.default);
    });
    return () => {
      cancelled = true;
    };
  }, [index]);

  const isReady = animation !== null;

  return (
    <div className="unavailable">
      <div className="unavailable__media">
        {isReady ? (
          <div className="fade-in">
            <Lottie animationData={animation} loop autoplay style={{ width: 240, height: 240 }} />
          </div>
        ) : (
          <Skeleton width={240} height={240} radius={24} />
        )}
      </div>

      <div className="unavailable__text">
        {isReady ? (
          <div className="fade-in">
            <h2 className="unavailable__title">{t.unavailableTitle}</h2>
            <p className="unavailable__subtitle">{t.unavailableSubtitle}</p>
          </div>
        ) : (
          <div className="unavailable__text-skeleton">
            <Skeleton width={200} height={24} radius={8} />
            <Skeleton width={280} height={12} radius={6} />
            <Skeleton width={220} height={12} radius={6} />
          </div>
        )}
      </div>
    </div>
  );
}
