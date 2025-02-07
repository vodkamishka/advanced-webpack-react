import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getUser= (state: Pick<StoreSchema, 'user'>) => state.user;