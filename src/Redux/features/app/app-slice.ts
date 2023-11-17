import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppState = {
  route: string;
};

const initialState: AppState = {
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
