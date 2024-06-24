import { CSSProperties } from 'react';

export type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom';

export type Position =
  | 'top-center'
  | 'top-left'
  | 'bottom-left'
  | 'bottom-center'
  | 'top-right'
  | 'bottom-right';

export interface Toast {
  type: ToastType;
  id: string;
  message: string;
  icon?: JSX.Element;
  duration?: number;
  pauseDuration: number;
  position?: Position;

  ariaProps: {
    role: 'status' | 'alert';
    'aria-live': 'assertive' | 'off' | 'polite';
  };

  style?: CSSProperties;
  className?: string;
  // iconTheme?: IconTheme;

  createdAt: number;
  visible: boolean;
  height?: number;
}
