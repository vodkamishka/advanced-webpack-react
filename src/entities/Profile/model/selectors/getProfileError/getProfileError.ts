import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileError = (state: Pick<StateSchema, 'profile'>) => state.profile?.error;