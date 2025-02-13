import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from '../../types/profileTypes';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema'; 

export const fetchProfileData = createAsyncThunk<Profile, void, { extra: ThunkExtraArg }>(
    'profile/fetchProfileData',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Fetch data failed');
        }
    }
);