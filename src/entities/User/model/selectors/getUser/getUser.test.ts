import { getUser } from './getUser';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getUser selector', () => {
    test('must return user state', () => {
        const state: Pick<StateSchema, 'user'> = {
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
        const state = {} as StateSchema;
        expect(getUser(state)).toBeUndefined();
    });
});