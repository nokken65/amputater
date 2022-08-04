import { createEvent, createStore, sample } from 'effector';
import { delay } from 'patronum/delay';
import { v4 as uuidv4 } from 'uuid';

import { Notification } from '@/shared/types';

import { AddNotificationParams, RemoveNotificationParams } from './models';

const addNotification = createEvent<AddNotificationParams>();
const removeNotification = createEvent<RemoveNotificationParams>();
const removeAllNotifications = createEvent<void>();

const addNotificationWithId = sample({
  clock: addNotification,
  fn: (props) => ({ ...props, id: uuidv4(), duration: props.duration ?? 2000 }),
});

const removeNotificationAuto = delay({
  source: addNotificationWithId,
  timeout: (payload) => payload.duration,
});

const $notifications = createStore<Notification[]>([])
  .on(addNotificationWithId, (state, payload) => [payload, ...state])
  .on([removeNotificationAuto, removeNotification], (state, payload) =>
    state.filter(({ id }) => id !== payload.id),
  )
  .on(removeAllNotifications, () => []);

const $notificationsIsEmpty = $notifications.map((n) => !!n.length);

export const events = {
  addNotification,
  removeNotification,
  removeAllNotifications,
};

export const selectors = {
  $notifications,
  $notificationsIsEmpty,
};
