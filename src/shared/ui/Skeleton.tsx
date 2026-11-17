import type { CSSProperties } from 'react';

// Заглушка на время загрузки: слегка светлее фона и мягко мигает.
interface SkeletonProps {
  width: number | string;
  height: number | string;
  radius?: number | string;
  style?: CSSProperties;
}

export function Skeleton({ width, height, radius = 12, style }: SkeletonProps) {
  return (
    <div
      className="skeleton"
      aria-hidden="true"
      style={{ width, height, borderRadius: radius, ...style }}
    />
  );
}
