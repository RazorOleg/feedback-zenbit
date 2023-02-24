import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI, AuthSignInDto } from '@auth/auth.api';

export const signUpQuery: any = createAsyncThunk(
  'signUp/signUpQuery',
  async (data: AuthSignInDto, { rejectWithValue }) => {
    try {
      return await authAPI.signUp(data);
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  },
);

export const signUp = createSlice({
  name: 'signUp',
  initialState: {
    isLoading: false,
    token: JSON.parse(<string>localStorage.getItem('token')),
    error: null,
  },

  reducers: {},

  extraReducers: {
    [signUpQuery.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signUpQuery.fulfilled.type]: (state, action) => {
      state.token = action.payload.accessToken;

      localStorage.setItem('token', JSON.stringify(state.token));
      state.error = null;
      state.isLoading = false;
    },
    [signUpQuery.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default signUp.reducer;
