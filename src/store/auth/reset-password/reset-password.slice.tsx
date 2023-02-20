import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI, AuthResetPasswordResponseDto } from '../../../api/auth/auth.api';

export const resetPasswordQuery: any = createAsyncThunk(
  'resetPassword/resetPasswordQuery',
  async (
    data: AuthResetPasswordResponseDto,
    { rejectWithValue },
  ) => {
    try {
      return await authAPI.resetPassword(data);
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  },
);

export const resetPassword = createSlice({
  name: 'resetPassword',
  initialState: {
    isLoading: false,
    isPasswordUpdated: '',
    error: null,
  },

  reducers: {},

  extraReducers: {
    [resetPasswordQuery.pending.type]: (state) => {
      state.isLoading = true;
    },
    [resetPasswordQuery.fulfilled.type]: (state, action) => {
      state.isPasswordUpdated = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    [resetPasswordQuery.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default resetPassword.reducer;
