import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';
import { getUser } from './getUser';

describe('getUser selector', () => {
    test('must return user state', () => {
        const state: Pick<StoreSchema, 'user'> = {
            user: {
                authData: {
                    username: 'username',
                    id: 'id'
                }
            },
        };

        expect(getUser(state)).toEqual({
            authData: {
                username: 'username',
                id: 'id'
            }
        });
    });

    test('must return undefined, if state is empty', () => {
        const state = {} as StoreSchema;
        expect(getUser(state)).toBeUndefined();
    });
});