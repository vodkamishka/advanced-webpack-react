import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileValidateErrors = (state: Pick<StateSchema, 'profile'>) => state.profile?.validateErrors;