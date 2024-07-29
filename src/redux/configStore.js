import { configureStore } from "@reduxjs/toolkit";
import seatBookingSlice from "./seatBookingSlice";

export const store = configureStore({
  reducer: {
    seatBookingSlice,
  },
});
