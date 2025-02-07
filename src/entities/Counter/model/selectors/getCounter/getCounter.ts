
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getCounter = (state: Pick<StoreSchema, 'counter'>) => state.counter;