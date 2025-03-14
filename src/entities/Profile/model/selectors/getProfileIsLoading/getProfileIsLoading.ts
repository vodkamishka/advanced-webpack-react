import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileIsLoading = (state: Pick<StateSchema, 'profile'>) => state.profile?.isLoading;