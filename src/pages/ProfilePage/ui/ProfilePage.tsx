import { memo } from 'react';

import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/ui/Page';
import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard';


interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(function ProfilePage ({ className }: ProfilePageProps)  {

    const { id } = useParams<{ id: string }>();

    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
