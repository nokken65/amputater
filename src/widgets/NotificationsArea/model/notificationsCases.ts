import { sample } from 'effector';

import {
  AddNotificationParams,
  notificationModel,
} from '@/entities/Notification';
import { contactUsModel } from '@/features/contactUs';
import { createShortLinkModel } from '@/features/createShortLink';
import { deleteShortLinkModel } from '@/features/deleteShortLink';
import { updateShortLinkLabelModel } from '@/features/updateShortLinkLabel';

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

sample({
  clock: contactUsModel.effects.contactUsFx.fail,
  fn: ({ error }) =>
    ({
      type: 'error',
      text: `Error: ${error.message}`,
    } as AddNotificationParams),
  target: notificationModel.events.addNotification,
});

sample({
  clock: contactUsModel.effects.contactUsFx.doneData,
  fn: ({ email }) =>
    ({
      type: 'info',
      text: `Thank you for your feedback. We will contact you soon by mail: ${email}`,
      duration: 8000,
    } as AddNotificationParams),
  target: notificationModel.events.addNotification,
});
