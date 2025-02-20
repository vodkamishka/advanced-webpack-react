import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileReadonly = (state: Pick<StateSchema, 'profile'>) => state.profile?.readonly;