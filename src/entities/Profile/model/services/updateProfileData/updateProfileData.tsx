import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from '../../types/profileTypes';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';


export const updateProfileData = createAsyncThunk<Profile, Profile, { extra: ThunkExtraArg }>(
    'profile/updateProfileData',
    async (data, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.put<Profile>('/profile', data);

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Fetch data failed');
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);