import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from '../../types/profileTypes';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { AxiosError } from 'axios';

export const fetchProfileData = createAsyncThunk<Profile, void, { extra: ThunkExtraArg }>(
    'profile/fetchProfileData',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (error) {
            if (error  instanceof AxiosError) {
                return rejectWithValue(error.response?.data || 'Fetch data failed');
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);