import { getProfileReadonly } from './getProfileReadonly';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileIsLoading selector', () => {

    test('must return profile readonly', () => {

        const state: Pick<StateSchema, 'profile'> = {
            profile: {
                isLoading: true,
                error: 'the login is not correct',
                readonly: true,
            }
        };

        expect(getProfileReadonly(state)).toBe(true);
    });

    test('must return undefined if state is empty', () => {
        const state = {} as StateSchema;
        expect(getProfileReadonly(state)).toBeUndefined();
    });
});