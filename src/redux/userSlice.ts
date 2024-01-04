import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Phone {
  countryCode: number;
  number: number | null;
}

interface UserState {
  email: string | null;
  name: string | null;
  phone: Phone;
  rol: string[];
  store: string | null;
}

const initialState: UserState = {
  email: null,
  name: null,
  phone: {
    countryCode: 56,
    number: null,
  },
  rol: [],
  store: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    clearUserAction: () => {
      return initialState;
    },
  },
});

export const { setUserAction, clearUserAction } = userSlice.actions;

export default userSlice.reducer;