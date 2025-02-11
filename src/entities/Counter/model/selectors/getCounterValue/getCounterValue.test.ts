import { getCounterValue } from './getCounterValue';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getCounterValue selector', () => {
    test('must return counter state value', () => {
        const state: Pick<StateSchema, 'counter'> = {
            counter: {  // Должно быть `counter`, а не `CounterSchema`
                value: 10,
            }
        };

        expect(getCounterValue(state)).toBe(10); // Исправленный тест
    });

    test('must return undefined if state is empty', () => {
        const state = {} as StateSchema;
        expect(getCounterValue(state)).toBeUndefined(); // Исправленный тест
    });
});