import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { setAuthData } from '../../../../../entities/User';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User } from '@/entities/User';
import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';

interface LoginPayload {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginPayload,
    { extra: ThunkExtraArg }
>(
    'common/loginByUsername',
    async (
        { username, password }: LoginPayload,
        { extra, dispatch, rejectWithValue },
    ) => {
        try {
            const response = await extra.api.post<User>('/login', {
                username,
                password,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(response.data),
            );
            dispatch(setAuthData(response.data));
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                return rejectWithValue(error.response?.data || 'Login failed');
            }
            return rejectWithValue('An unknown error occurred');
        }
    },
);
