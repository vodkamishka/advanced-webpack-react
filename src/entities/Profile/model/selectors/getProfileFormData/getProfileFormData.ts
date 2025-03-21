import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileFormData = (state: Pick<StateSchema, 'profile'>) =>
    state.profile?.formData;
