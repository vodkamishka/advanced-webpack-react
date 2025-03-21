import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '@/shared/ui/Page/ui/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard';

const ProfilePage = memo(function ProfilePage() {
    const { id } = useParams<{ id: string }>();

    return (
        <Page>
            <div data-testid="ProfilePage"></div>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
