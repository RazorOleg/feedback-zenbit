import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {cityAPI} from "../../api/city/city.api";

export const getCityQuery: any = createAsyncThunk(
    'city/getCityQuery',
    async (data: {}, thunkAPI) => {
        try {
            return await cityAPI.getCity();
        } catch (err: any) {
            return thunkAPI.rejectWithValue(
                err.response ? err?.response?.data?.message : 'Login Error',
            );
        }
    },
);

export const city = createSlice({
    name: 'city',
    initialState: {
        isLoading: true,
        totalCount: 0,
        perPage: 20,
        currentPage: 1,
        cities: [],
        city: {},
        errorGetAll: null
    },

    reducers: {},

    extraReducers: {
        [getCityQuery.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getCityQuery.fulfilled.type]: (state, action) => {
            state.cities = action.payload.data;
            state.errorGetAll = null;
            state.isLoading = false;
        },
        [getCityQuery.rejected.type]: (state, action) => {
            state.errorGetAll = action.payload;
            state.isLoading = false;
        },
    },
});

export default city.reducer;