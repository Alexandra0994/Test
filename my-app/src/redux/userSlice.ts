import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
  id: number | null;
}

const initialState: UserState = {
  username: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ username: string; id: number }>) => {
      state.username = action.payload.username;
      state.id = action.payload.id;
    },
    clearUser: (state) => {
      state.username = null;
      state.id = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
