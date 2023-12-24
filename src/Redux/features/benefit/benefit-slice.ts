import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Benefit = {
  id: number;
  title: string;
  text: string;
  icon: string;
};

const initialState: Benefit = {
  id: 0,
  title: '',
  text: '',
  icon: ''
};

const benefitSlice = createSlice({
  name: 'benefit',
  initialState: initialState,
  reducers: {
    changeBenefitId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    changeBenefitTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    changeBenefitText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    changeBenefitIcon(state, action: PayloadAction<string>) {
      state.icon = action.payload;
    }
  }
});

export default benefitSlice.reducer;
export const {
  changeBenefitId,
  changeBenefitTitle,
  changeBenefitText,
  changeBenefitIcon
} = benefitSlice.actions;
