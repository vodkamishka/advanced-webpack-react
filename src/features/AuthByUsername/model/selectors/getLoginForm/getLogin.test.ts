import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';
import { getLoginForm } from './getLoginForm';
describe('getLoginForm selector', () => {

    const state: Pick<StoreSchema, 'loginForm'> = {
        loginForm: {
            username: 'username' ,
            password: 'password',
            isLoading: false,
        },
    };

    test('must return loginForm state', () => {
        expect(getLoginForm(state)).toEqual({
            username: 'username' ,
            password: 'password',
            isLoading: false,
        });
    });

    test('must return undefined, if state is empty', () => {
        const state = {} as StoreSchema;
        expect(getLoginForm(state)).toBeUndefined();
    });
});