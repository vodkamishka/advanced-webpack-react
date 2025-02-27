import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import { ProfileCard, profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileDataById } from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import {  useSelector } from 'react-redux';
import { getProfileFormData } from 'entities/Profile';
import { getProfileIsLoading } from 'entities/Profile';
import { getProfileReadonly } from 'entities/Profile';
import { getProfileError } from 'entities/Profile';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ui/ProfilePageHeader';

import cls from './ProfilePage.module.scss';
import {  updateProfile } from 'entities/Profile/model/slice/profileSlice';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { useParams } from 'react-router-dom';



const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(function ProfilePage ({ className }: ProfilePageProps)  {

    const { id } = useParams<{ id: string }>();
    
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const error = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfileDataById(id));
    }, [dispatch, id]);

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(updateProfile({ first: value }));
    }, [dispatch])

    const onChangeLastname = useCallback((value: string) => {
        dispatch(updateProfile({ lastname: value }));
    }, [dispatch])

    const onChangeAge = useCallback((value: number) => {
        dispatch(updateProfile({ age: value }));
    }, [dispatch])

    const onChangeCity = useCallback((value: string) => {
        dispatch(updateProfile({ city: value }));
    }, [dispatch])

    const onChangeUsername = useCallback((value: string) => {
        dispatch(updateProfile({ username: value }));
    }, [dispatch])

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(updateProfile({ avatar: value }));
    }, [dispatch])

    const onChangeCountry = useCallback((value: Country) => {
        dispatch(updateProfile({ country: value }));
    }, [dispatch])

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(updateProfile({ currency: value }));
    }, [dispatch])
    
    return (
        <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.profilePage, {}, [className])}>
                <ProfilePageHeader
                    readonly={readonly}
                    data={formData}
                />
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
    );
});

export default ProfilePage;
