import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { t } from '../../../shared/lib/i18n';
import { lightHaptic } from '../../../shared/lib/haptics';
import { Skeleton } from '../../../shared/ui/Skeleton';
import { loadVideo } from '../api/loadVideo';

// Один из трёх случайных роликов. Каждый загружается отдельным чанком,
// поэтому пока он не готов, показываем заглушку.
const ANIMATION_LOADERS = [
  () => import('../../../assets/lottie/cat-sad-1.json'),
  () => import('../../../assets/lottie/cat-sad-2.json'),
  () => import('../../../assets/lottie/dog-sad.json'),
];

const MEDIA_SIZE = 140;

interface FeedUnavailableProps {
  onRetrySuccess?: () => void;
}

// Экран, когда видео получить не удалось: нет контента или нет соединения.
export function FeedUnavailable({ onRetrySuccess }: FeedUnavailableProps) {
  const [index] = useState(() => Math.floor(Math.random() * ANIMATION_LOADERS.length));
  const [animation, setAnimation] = useState<object | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);

  useEffect(() => {
    let cancelled = false;
    ANIMATION_LOADERS[index]().then((module) => {
      if (!cancelled) setAnimation(module.default);
    });
    return () => {
      cancelled = true;
    };
  }, [index]);

  async function handleRetry() {
    lightHaptic();
    setIsRetrying(true);
    const success = await loadVideo();
    if (success) {
      onRetrySuccess?.();
    } else {
      setIsRetrying(false);
    }
  }

  const isReady = animation !== null;

  return (
    <div className="unavailable">
      <div className="unavailable__media">
        {isReady ? (
          <div className="fade-in">
            <Lottie
              animationData={animation}
              loop
              autoplay
              style={{ width: MEDIA_SIZE, height: MEDIA_SIZE }}
            />
          </div>
        ) : (
          <Skeleton width={MEDIA_SIZE} height={MEDIA_SIZE} radius={20} />
        )}
      </div>

      <div className="unavailable__text">
        {isReady ? (
          <div className="fade-in">
            <h2 className="unavailable__title">{t.unavailableTitle}</h2>
            <p className="unavailable__subtitle">{t.unavailableSubtitle}</p>
            <div className="unavailable__action">
              <button
                type="button"
                className={`retry-button${isRetrying ? ' retry-button--loading' : ''}`}
                onClick={handleRetry}
                disabled={isRetrying}
              >
                {isRetrying ? <span className="spinner" role="status" aria-label={t.loading} /> : t.retry}
              </button>
            </div>
          </div>
        ) : (
          <div className="unavailable__text-skeleton">
            <Skeleton width={150} height={16} radius={6} />
            <Skeleton width={290} height={14} radius={6} />
            <Skeleton width={230} height={14} radius={6} />
          </div>
        )}
      </div>
    </div>
  );
}
