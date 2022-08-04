import { notificationModel, NotificationToast } from '@/entities/Notification';
import { Portal } from '@/shared/lib/Portal';
import { Notification } from '@/shared/types';
import { list, reflect } from '@effector/reflect';

type NotificationsItemProps = Notification & {
  onClose: (props: Pick<Notification, 'id'>) => void;
};

const NotificationsItemView = ({ ...props }: NotificationsItemProps) => {
  return (
    <li>
      <NotificationToast {...props} />
    </li>
  );
};

const NotificationsItems = list({
  source: notificationModel.selectors.$notifications,
  view: NotificationsItemView,
  getKey: ({ id }) => id,
  bind: {
    onClose: notificationModel.events.removeNotification,
  },
});

type NotificationsAreaProps = {
  notificationsIsEmpty: boolean;
};

const NotificationsAreaView = ({
  notificationsIsEmpty,
}: NotificationsAreaProps) => {
  return (
    <>
      {notificationsIsEmpty && (
        <Portal containerId='notify-root'>
          <ul className='flex flex-col gap-2 p-2 lg:gap-0.5 lg:p-0'>
            <NotificationsItems />
          </ul>
        </Portal>
      )}
    </>
  );
};

export const NotificationArea = reflect({
  view: NotificationsAreaView,
  bind: {
    notificationsIsEmpty: notificationModel.selectors.$notificationsIsEmpty,
  },
});
