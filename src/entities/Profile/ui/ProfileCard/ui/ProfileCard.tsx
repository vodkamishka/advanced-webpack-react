import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import cls from './ProfileCard.module.scss';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Profile } from '../../../model/types/profileTypes';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string | null;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: number) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
}

export const ProfileCard = ({
    className,
    isLoading,
    error,
    readonly,
    data,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return(
            <Text
                title={t('Загрузка...')}
                align={TextAlign.CENTER}
            />
        )
    }
    
    if (error) {
        return (
            <Text
                theme={TextTheme.ERROR}
                title={error}
                align={TextAlign.CENTER}
            />
        )
    }

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше первое имя')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.age}
                    type='number'
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Ваше изображение')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
            </div>
        </div>
    );
};
