import { Notification } from '@/shared/types';

export type AddNotificationParams = Omit<Notification, 'id'>;
export type RemoveNotificationParams = Pick<Notification, 'id'>;
