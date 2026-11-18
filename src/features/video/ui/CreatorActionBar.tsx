import Lottie from 'lottie-react';
import starAnimation from '../../../assets/lottie/star.json';
import { locale, t } from '../../../shared/lib/i18n';
import { CreatorAvatar } from './CreatorAvatar';
import { emptyCounts, formatCount, type VideoCounts } from '../model/counts';

interface CreatorActionBarProps {
  counts?: VideoCounts;
}

// Правая панель: аватарка автора и три действия со счётчиками. Пока действия ничего не делают.
export function CreatorActionBar({ counts = emptyCounts }: CreatorActionBarProps) {
  return (
    <aside className="action-bar">
      <CreatorAvatar />

      <nav className="action-panel" aria-label="Действия с видео">
        <button type="button" className="action-button" aria-label={t.donate}>
          <Lottie
            animationData={starAnimation}
            loop={false}
            autoplay={false}
            style={{ width: 30, height: 30 }}
          />
          <span className="action-button__count">{formatCount(counts.donates, locale)}</span>
        </button>

        <button type="button" className="action-button" aria-label={t.comment}>
          <img src="/pictures/comment.png" alt="" className="action-button__icon" />
          <span className="action-button__count">{formatCount(counts.comments, locale)}</span>
        </button>

        <button type="button" className="action-button" aria-label={t.share}>
          <img src="/pictures/share.png" alt="" className="action-button__icon" />
          <span className="action-button__count">{formatCount(counts.shares, locale)}</span>
        </button>
      </nav>
    </aside>
  );
}
