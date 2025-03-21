import { getProfileError } from './getProfileError';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileError selector', () => {
    test('must return profile error', () => {
        const state: Pick<StateSchema, 'profile'> = {
            profile: {
                isLoading: false,
                error: 'the common is not correct',
                readonly: false,
            },
        };

        expect(getProfileError(state)).toBe('the common is not correct');
    });

    test('must return  error to be null', () => {
        const state: Pick<StateSchema, 'profile'> = {
            profile: {
                isLoading: false,
                error: null,
                readonly: false,
            },
        };

        expect(getProfileError(state)).toBe(null);
    });

    test('must return undefined if state is empty', () => {
        const state = {} as StateSchema;
        expect(getProfileError(state)).toBeUndefined();
    });
});
