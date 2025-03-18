import { getProfileIsLoading } from './getProfileIsLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileIsLoading selector', () => {

    test('must return profile isLoading', () => {

        const state: Pick<StateSchema, 'profile'> = {
            profile: {
                isLoading: true,
                error: 'the login is not correct',
                readonly: false,
            }
        };

        expect(getProfileIsLoading(state)).toBe(true);
    });

    test('must return undefined if state is empty', () => {
        const state = {} as StateSchema;
        expect(getProfileIsLoading(state)).toBeUndefined();
    });
});