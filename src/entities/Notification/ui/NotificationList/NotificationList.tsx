import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string
}

export const NotificationList = ({ className }: NotificationListProps) => {
    const { data } = useNotifications(null, {
        pollingInterval: 10000,
    });

    return (
        <div className={classNames(cls.notificationList, {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </div>
    );
};
