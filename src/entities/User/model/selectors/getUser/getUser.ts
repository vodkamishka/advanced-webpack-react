import { StateSchema } from '@/app/providers/StoreProvider';

export const getUser= (state: Pick<StateSchema, 'user'>) => state.user;