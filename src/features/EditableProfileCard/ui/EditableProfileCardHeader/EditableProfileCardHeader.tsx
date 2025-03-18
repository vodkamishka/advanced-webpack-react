import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import cls from './EditableProfileCardHeader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { cancelEdit, setReadonly } from '@/entities/Profile/model/slice/profileSlice';
import { getProfileFormData, getProfileReadonly, updateProfileData } from '@/entities/Profile';
import { getAuthData } from '@/entities/User';
import { Button, ButtonTheme } from '@/shared/ui/Button';


interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSave = useCallback(() => dispatch(setReadonly(false)), [dispatch]);
    const onCancelEdit = useCallback(() => dispatch(cancelEdit()), [dispatch]);
    const onUpdate = useCallback(() => dispatch(updateProfileData()), [dispatch]);

    const authData = useSelector(getAuthData);
    const profileData = useSelector(getProfileFormData);
    const readonly = useSelector(getProfileReadonly);

    const isEdit = authData?.id === profileData?.id;


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
        <div className={classNames(cls.editableProfileCardHeader, {}, [className])}>
            {renderButtons}
        </div>
    );
};
