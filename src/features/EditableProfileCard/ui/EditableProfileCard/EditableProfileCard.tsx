import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';

import { ValidateProfileErrors } from '../../model/types/types';
import { EditableProfileCardHeader } from '../../ui/EditableProfileCardHeader/EditableProfileCardHeader';

import cls from './EditableProfileCard.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import {
    fetchProfileDataById,
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadonly,
    ProfileCard,
    profileReducer,
} from '@/entities/Profile';
import { updateProfile } from '@/entities/Profile/model/slice/profileSlice';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Page } from '@/shared/ui/Page';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getProfileValidateErrors } from '@/entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { Text, TextTheme } from '@/shared/ui/Text/ui/Text';

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = ({
    className,
    id,
}: EditableProfileCardProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileErrors.SERVER_ERROR]: t(
            'Серверная ошибка при сохранении',
        ),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t(
            'Имя и фамилия обязательны',
        ),
        [ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    useEffect(() => {
        dispatch(fetchProfileDataById(id));
    }, [dispatch, id]);

    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(updateProfile({ first: value }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(updateProfile({ lastname: value }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value: number) => {
            dispatch(updateProfile({ age: value }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(updateProfile({ city: value }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(updateProfile({ username: value }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(updateProfile({ avatar: value }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (value: Country) => {
            dispatch(updateProfile({ country: value }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (value: Currency) => {
            dispatch(updateProfile({ currency: value }));
        },
        [dispatch],
    );

    return (
        <Page>
            <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
                <div
                    className={classNames(cls.editableProfileCard, {}, [
                        className,
                    ])}
                >
                    <EditableProfileCardHeader />
                    {validateErrors?.length &&
                        validateErrors.map((err) => (
                            <Text
                                key={err}
                                theme={TextTheme.ERROR}
                                text={validateErrorTranslates[err]}
                            />
                        ))}
                    <ProfileCard
                        data={formData}
                        isLoading={isLoading}
                        readonly={readonly}
                        error={error}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeUsername={onChangeUsername}
                        onChangeAvatar={onChangeAvatar}
                        onChangeCountry={onChangeCountry}
                        onChangeCurrency={onChangeCurrency}
                    />
                </div>
            </DynamicModuleLoader>
        </Page>
    );
};
