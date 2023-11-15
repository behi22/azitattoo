import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AccountState = {
  route: string;
};

const initialState: AccountState = {
  route: '/'
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    changeRoute(state, action: PayloadAction<string>) {
      state.route = action.payload;
    }
  }
});
export default appSlice.reducer;
export const { changeRoute } = appSlice.actions;
