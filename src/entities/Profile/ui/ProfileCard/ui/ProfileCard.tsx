import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Profile } from '../../../model/types/profileTypes';
import { getProfileValidateErrors } from '../../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';

import cls from './ProfileCard.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { TextAlign, TextTheme } from '@/shared/ui/Text/ui/Text';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';

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
    onChangeCountry?: (value: Country) => void;
    onChangeCurrency?: (value: Currency) => void;
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
    onChangeCountry,
    onChangeCurrency,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const validateErrors = useSelector(getProfileValidateErrors);

    if (isLoading) {
        return <Text title={t('Загрузка...')} align={TextAlign.CENTER} />;
    }

    if (error) {
        return (
            <Text
                theme={TextTheme.ERROR}
                title={error}
                align={TextAlign.CENTER}
            />
        );
    }

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            {validateErrors?.length &&
                validateErrors.map((error) => (
                    <div className={cls.error} key={error}>
                        {error}
                    </div>
                ))}

            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше первое имя')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                    data-testid="ProfileCard.firstname"
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                    data-testid="ProfileCard.lastname"
                />
                <Input
                    value={data?.age}
                    type="number"
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
                <CountrySelect
                    value={data?.country}
                    disabled={readonly}
                    onChange={onChangeCountry}
                />
                <CurrencySelect
                    value={data?.currency}
                    disabled={readonly}
                    onChange={onChangeCurrency}
                />
            </div>
        </div>
    );
};
