import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from '../../types/profileTypes';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';


export const fetchProfileDataById = createAsyncThunk<Profile, string, { extra: ThunkExtraArg }>(
    'profile/fetchProfileDataById',
    async (id, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Profile>(`/profile/${id}`);

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Fetch data failed');
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);