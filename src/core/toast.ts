import type { Toast, ToastType } from './types';

// TODO: переписать или удалить
const createToast = (message: string, type: ToastType = 'blank'): Toast => ({
  id: new Date().toISOString(),
  createdAt: Date.now(),
  visible: true,
  type,
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
  message,
  pauseDuration: 0,
});

const createHandler = (message: string, type?: ToastType) => {
  const toast = createToast(message, type);

  // TODO: тут должен быть notify() обсервера или dispatch - экшн UPSERT_TOAST
  // dispatch()

  return toast.id;
};

const toast = (message: string) => createHandler(message, 'blank');

toast.error = createHandler('error');
toast.success = createHandler('success');
toast.loading = createHandler('loading');
toast.custom = createHandler('custom');

export { toast };
