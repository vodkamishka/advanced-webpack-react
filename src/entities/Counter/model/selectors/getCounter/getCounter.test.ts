import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';
import { getCounter } from './getCounter';

describe('getCounter selector', () => {
    test('must return counter state', () => {
        const state: Pick<StoreSchema, 'counter'> = {
            counter: { value: 10 },
        };

        expect(getCounter(state)).toEqual({ value: 10 });
    });

    test('must return undefined, if state is empty', () => {
        const state = {} as StoreSchema;
        expect(getCounter(state)).toBeUndefined();
    });
});