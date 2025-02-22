import { getProfileFormData } from './getProfileFormData';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'shared/const/common';


describe('getProfileFormData selector', () => {
    test('must return profile data', () => {

        const formData = {
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
                formData,
                isLoading: false,
                readonly: false,
            }
        };

        expect(getProfileFormData(state)).toEqual(formData);
    });

    test('must return undefined if state is empty', () => {
        const state = {} as StateSchema;
        expect(getProfileFormData(state)).toBeUndefined();
    });
});