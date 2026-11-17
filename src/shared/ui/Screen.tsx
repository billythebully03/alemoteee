import type { ReactNode } from 'react';

// Общая обёртка экрана: занимает всю высоту и не даёт странице прокручиваться.
interface ScreenProps {
  children: ReactNode;
}

export function Screen({ children }: ScreenProps) {
  return <main className="screen">{children}</main>;
}
