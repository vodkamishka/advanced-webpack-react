import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Profile } from '../../types/profileTypes';
import { validateProfileData } from '../../services/validateProfileData/validateProfileData';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';

import {
    StateSchema,
    ThunkExtraArg,
} from '@/app/providers/StoreProvider/config/StateSchema';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    { extra: ThunkExtraArg; state: StateSchema }
>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const formData = getProfileFormData(getState());

        const errors = validateProfileData(formData);

        if (errors?.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(
                `/profile/${formData.id}`,
                formData,
            );

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(
                    error.response?.data?.message || 'Fetch data failed',
                );
            }
            return rejectWithValue('An unknown error occurred');
        }
    },
);
