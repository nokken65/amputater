export type Notification = {
  id: string;
  type: 'error' | 'warn' | 'info';
  text: string;
  duration?: number;
};
