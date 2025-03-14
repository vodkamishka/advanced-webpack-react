import { StateSchema } from '@/app/providers/StoreProvider';

export const getCounter = (state: Pick<StateSchema, 'counter'>) => state.counter;