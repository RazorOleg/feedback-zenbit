import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../../../api/auth/auth.api';


export const forgotPasswordQuery: any = createAsyncThunk(
  'forgotPassword/forgotPasswordQuery',
  async (email: string, { rejectWithValue }) => {
    try {
      return await authAPI.forgotPassword(email);
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  },
);

export const forgotPassword = createSlice({
  name: 'forgotPassword',
  initialState: {
    isLoading: false,
    isMailSend: '',
    error: null,
  },

  reducers: {},

  extraReducers: {
    [forgotPasswordQuery.pending.type]: (state) => {
      state.isLoading = true;
    },
    [forgotPasswordQuery.fulfilled.type]: (state, action) => {
      state.isMailSend = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    [forgotPasswordQuery.rejected.type]: (state, action) => {
      state.error = action.paylod;
      state.isLoading = false;
    },
  },
});

export default forgotPassword.reducer;
