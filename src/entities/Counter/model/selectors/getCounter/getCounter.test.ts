import { getCounter } from './getCounter';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounter selector', () => {
    test('must return counter state', () => {
        const state: Pick<StateSchema, 'counter'> = {
            counter: { value: 10 },
        };

        expect(getCounter(state)).toEqual({ value: 10 });
    });

    test('must return undefined, if state is empty', () => {
        const state = {} as StateSchema;
        expect(getCounter(state)).toBeUndefined();
    });
});