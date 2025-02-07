import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue selector', () => {
    test('must return counter state value', () => {
        const state: Pick<StoreSchema, 'counter'> = {
            counter: {  // Должно быть `counter`, а не `CounterSchema`
                value: 10,
            }
        };

        expect(getCounterValue(state)).toBe(10); // Исправленный тест
    });

    test('must return undefined if state is empty', () => {
        const state = {} as StoreSchema;
        expect(getCounterValue(state)).toBeUndefined(); // Исправленный тест
    });
});