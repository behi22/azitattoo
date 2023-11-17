import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export type BookingState = {
  service: string;
  date: string;
  time: string;
};

const initialState: BookingState = {
  service: null,
  date: dayjs().add(1, 'day').format('YYYY-MM-DD'),
  time: null
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialState,
  reducers: {
    changeService(state, action: PayloadAction<string>) {
      state.service = action.payload;
    },
    changeDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    changeTime(state, action: PayloadAction<string>) {
      state.time = action.payload;
    }
  }
});
export default bookingSlice.reducer;
export const { changeService, changeDate, changeTime } = bookingSlice.actions;
