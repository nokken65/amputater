import { reflect } from '@effector/reflect';
import { memo } from 'react';

import {
  AddNotificationParams,
  notificationModel,
} from '@/entities/Notification';
import { CopyShortLink } from '@/entities/ShortLink';
import { copyToClipBoard } from '@/shared/utils/copyToClipboard';

type DummyCopyCreatedShortLinkProps = {
  notify: (props: AddNotificationParams) => void;
};

const DummyCopyCreatedShortLinkView = memo(
  ({ notify }: DummyCopyCreatedShortLinkProps) => {
    const url = 'ampr.unknown65182.workers.dev/nBLqhodB9t';

    return (
      <CopyShortLink
        url={url}
        onClick={() =>
          copyToClipBoard(url, () =>
            notify({
              text: `Copied: ${url}`,
              type: 'info',
              duration: 8000,
            }),
          )
        }
      />
    );
  },
);

export const DummyCopyCreatedShortLink = reflect({
  view: DummyCopyCreatedShortLinkView,
  bind: {
    notify: notificationModel.events.addNotification,
  },
});
