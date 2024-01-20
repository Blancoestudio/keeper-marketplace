import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SocialNetwork {
  type: string;
  url: string;
}

interface StoreState {
  name: string | null;
  logo: string | null;
  address: string | null;
  socialNetworks: SocialNetwork[];
  shortDescription: string | null;
  description: string | null;
}

const initialState: StoreState = {
  name: null,
  logo: null,
  address: null,
  socialNetworks: [],
  shortDescription: null,
  description: null,
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStoreAction: (state, action: PayloadAction<StoreState>) => {
      console.log('state:', state);
      return action.payload;
    },
    clearStoreAction: () => {
      return initialState;
    },
  },
});

export const { setStoreAction, clearStoreAction } = storeSlice.actions;

export default storeSlice.reducer;