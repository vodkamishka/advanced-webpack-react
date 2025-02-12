import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';


interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(function ProfilePage ({ className }: ProfilePageProps)  {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('Профиль')}
        </div>
    );
});

export default ProfilePage;
