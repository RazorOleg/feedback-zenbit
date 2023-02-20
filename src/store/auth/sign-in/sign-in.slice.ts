import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI, AuthSignInDto } from '../../../api/auth/auth.api';

export const signInQuery: any = createAsyncThunk(
  'signIn/signInQuery',
  async (data: AuthSignInDto, { rejectWithValue }) => {
    try {
      return await authAPI.login(data);
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  },
);

export const signIn = createSlice({
  name: 'signIn',
  initialState: {
    isLoading: false,
    token: JSON.parse(<string>localStorage.getItem('token')),
    error: null,
  },

  reducers: {
    logout(state) {
      state.token = '';
      state.error = null;
      state.isLoading = false;
      localStorage.clear();
    },
  },

  extraReducers: {
    [signInQuery.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signInQuery.fulfilled.type]: (state, action) => {
      state.token = action.payload.accessToken;
      localStorage.setItem('token', JSON.stringify(state.token));
      state.error = null;
      state.isLoading = false;
    },
    [signInQuery.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { logout } = signIn.actions;

export default signIn.reducer;
