import { useState } from 'react';
import { t } from '../../../shared/lib/i18n';
import { Skeleton } from '../../../shared/ui/Skeleton';

// Круг над панелью действий с аватаркой автора. Пока картинка грузится, показываем заглушку.
// В будущем здесь будет аватарка креатора из данных видео.
const AVATAR_SRC = '/pictures/avatar-placeholder.svg';

export function CreatorAvatar() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="creator-avatar" role="img" aria-label={t.creatorAvatar}>
      {!isLoaded && <Skeleton width={46} height={46} radius="50%" />}
      <img
        src={AVATAR_SRC}
        alt=""
        className={`creator-avatar__image${isLoaded ? ' fade-in' : ' creator-avatar__image--hidden'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
