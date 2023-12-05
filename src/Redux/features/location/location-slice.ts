import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { location1, location2 } from '../../../Util/constants';

// there is another type in redux called location so I am naming this LocationT!
export type LocationT = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  hours: string[];
  address: string;
  link: string;
};

export type LocationHoursState = {
  location: LocationT[];
};

const initialState: LocationHoursState = {
  location: [location1, location2]
};

const locationSlice = createSlice({
  name: 'location',
  initialState: initialState,
  reducers: {
    fetchLocation(state, action: PayloadAction<LocationT[]>) {
      state.location = action.payload;
    }
  }
});

export default locationSlice.reducer;
export const { fetchLocation } = locationSlice.actions;
