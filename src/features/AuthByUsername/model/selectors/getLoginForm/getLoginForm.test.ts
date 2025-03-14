import { getLoginForm } from './getLoginForm';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
describe('getLoginForm selector', () => {

    const state: Pick<StateSchema, 'loginForm'> = {
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
        const state = {} as StateSchema;
        expect(getLoginForm(state)).toBeUndefined();
    });
});