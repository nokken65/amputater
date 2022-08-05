import { reflect } from '@effector/reflect';

import {
  AddNotificationParams,
  notificationModel,
} from '@/entities/Notification';
import { CopyShortLink } from '@/entities/ShortLink';
import { ShortLink } from '@/shared/types';

import { selectors } from '../model';

type CopyCreatedShortLinkProps = {
  link: ShortLink | null;
  notify: (props: AddNotificationParams) => void;
};

const CopyCreatedShortLinkView = ({
  link,
  notify,
}: CopyCreatedShortLinkProps) => {
  return link ? (
    <CopyShortLink
      url={link.url}
      onClick={() =>
        notify({
          text: `Copied: ${link.fullUrl}`,
          type: 'info',
          duration: 8000,
        })
      }
    />
  ) : null;
};

export const CopyCreatedShortLink = reflect({
  view: CopyCreatedShortLinkView,
  bind: {
    link: selectors.$createdShortLinkUrl,
    notify: notificationModel.events.addNotification,
  },
});
