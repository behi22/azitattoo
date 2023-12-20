import { configureStore } from '@reduxjs/toolkit';
import appReducer from './features/app/app-slice';
import bookingReducer from './features/booking/booking-slice';
import locationReducer from './features/location/location-slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    booking: bookingReducer,
    location: locationReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
