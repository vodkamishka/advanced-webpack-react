import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfileData = createAsyncThunk(
    'profile/fetchProfileData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/profile');

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Fetch data failed');
        }
    }
);