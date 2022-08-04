import {
  AddNotificationParams,
  notificationModel,
} from '@/entities/Notification';
import { createShortLinkModel } from '@/features/createShortLink';
import { deleteShortLinkModel } from '@/features/deleteShortLink';
import { updateShortLinkLabelModel } from '@/features/updateShortLinkLabel';
import { sample } from 'effector';

sample({
  clock: createShortLinkModel.effects.createShortLinkFx.fail,
  fn: ({ error }) =>
    ({
      type: 'error',
      text: `Error: ${error.message}`,
    } as AddNotificationParams),
  target: notificationModel.events.addNotification,
});

sample({
  clock: deleteShortLinkModel.effects.deleteShortLinkFx.fail,
  fn: ({ error }) =>
    ({
      type: 'error',
      text: `Error: ${error.message}`,
    } as AddNotificationParams),
  target: notificationModel.events.addNotification,
});

sample({
  clock: updateShortLinkLabelModel.effects.updateShortLinkLabelFx.fail,
  fn: ({ error }) =>
    ({
      type: 'error',
      text: `Error: ${error.message}`,
    } as AddNotificationParams),
  target: notificationModel.events.addNotification,
});
