import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { setAuthData } from '../../../../../entities/User';


interface LoginPayload {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk(
    'login/loginByUsername',
    async ({ username, password }: LoginPayload, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/login', { username, password });

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(setAuthData(response.data));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Login failed');
        }
    }
);