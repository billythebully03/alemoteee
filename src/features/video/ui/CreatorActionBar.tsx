import Lottie from 'lottie-react';
import starAnimation from '../../../assets/lottie/star.json';
import { t } from '../../../shared/lib/i18n';
import { CreatorAvatar } from './CreatorAvatar';

// Правая панель: аватарка автора и три действия. Пока действия ничего не делают.
export function CreatorActionBar() {
  return (
    <aside className="action-bar">
      <CreatorAvatar />

      <nav className="action-panel" aria-label="Действия с видео">
        <button type="button" className="action-button" aria-label={t.like}>
          <Lottie
            animationData={starAnimation}
            loop={false}
            autoplay={false}
            style={{ width: 30, height: 30 }}
          />
        </button>

        <button type="button" className="action-button" aria-label={t.comment}>
          <img src="/pictures/comment.png" alt="" className="action-button__icon" />
        </button>

        <button type="button" className="action-button" aria-label={t.share}>
          <img src="/pictures/share.png" alt="" className="action-button__icon" />
        </button>
      </nav>
    </aside>
  );
}
