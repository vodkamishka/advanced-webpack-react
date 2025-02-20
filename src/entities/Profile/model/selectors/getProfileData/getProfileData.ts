import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileData = (state: Pick<StateSchema, 'profile'>) => state.profile?.data;