import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useCallback, useMemo } from 'react';
import { cancelEdit, setReadonly } from 'entities/Profile/model/slice/profileSlice';
import { Profile } from 'entities/Profile/model/types/profileTypes';
import { Avatar } from 'shared/ui/Avatar';
import { updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getAuthData } from 'entities/User';
import { useSelector } from 'react-redux';

interface ProfilePageHeaderProps {
    className?: string
    readonly?: boolean;
    data?: Profile;
}

export const ProfilePageHeader = ({ className, readonly, data }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSave = useCallback(() => dispatch(setReadonly(false)), [dispatch]);
    const onCancelEdit = useCallback(() => dispatch(cancelEdit()), [dispatch]);
    const onUpdate = useCallback(() => dispatch(updateProfileData()), [dispatch]);
    
    const user = useSelector(getAuthData);
    
    const isEdit = useMemo(() => {
        return data?.id === user?.id
    }, [data, user])
    
    
    const renderButtons = useMemo(() => {

        if (!isEdit) {
            return <></>
        }
        
        return (
            readonly ?

                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                >
                    {t('Редактировать')}
                </Button>

                :

                <div className={cls.buttons}>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onUpdate}
                    >
                        {t('Сохранить')}
                    </Button>
                </div>

        )
        
    }, [isEdit, onCancelEdit, onSave, onUpdate, readonly, t])

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            <Avatar src={data?.avatar}/>
            {renderButtons}
        </div>
    );
};
