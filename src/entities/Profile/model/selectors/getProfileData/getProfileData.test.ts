import { getProfileData } from './getProfileData';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'shared/const/common';


describe('getProfileData selector', () => {
    test('must return profile data', () => {

        const data = {
            'first': 'andrey',
            'lastname': 'gr',
            'age': 22,
            'currency': Currency.RUB,
            'country': Country.Russia,
            'city': 'Moscow',
            'username': 'cd',
            'avatar': '',
        }

        const state: Pick<StateSchema, 'profile'> = {
            profile: {
                data,
                isLoading: false,
                readonly: false,
            }
        };

        expect(getProfileData(state)).toEqual(data);
    });

    test('must return undefined if state is empty', () => {
        const state = {} as StateSchema;
        expect(getProfileData(state)).toBeUndefined();
    });
});