import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { ProfileCard, profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';


const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(function ProfilePage ({ className }: ProfilePageProps)  {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    
    return (
        <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
