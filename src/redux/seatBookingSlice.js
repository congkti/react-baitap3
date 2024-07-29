import { createSlice } from "@reduxjs/toolkit";
import data from "./../components/CinemaSeatBooking/seatData.json";

const initialState = {
  seatsData: data.map((rowItem) => ({
    hang: rowItem.hang,
    danhSachGhe: rowItem.danhSachGhe.map((seat) => ({
      ...seat,
      selectClass: false,
    })),
  })),
  seatReserved: [],
};

const seatBookingSlice = createSlice({
  name: "Seats",
  initialState,
  reducers: {
    updateReserved: (state, action) => {
      console.log(state.seatReserved);
      state.seatsData = action.payload.map((item) => ({ ...item }));
    },
    seatSelected: (state, action) => {
      state.seatReserved.push(action.payload);
    },
    seatDeSelected: (state, action) => {
      state.seatReserved.splice(action.payload, 1);
    },
    seatReset: (state) => {
      state.seatReserved = [];
    },
    seatCancel: (state, action) => {
      state.seatReserved.splice(action.payload, 1);
    },
  },
});

export const {
  updateReserved,
  seatSelected,
  seatDeSelected,
  seatReset,
  seatCancel,
} = seatBookingSlice.actions;

export default seatBookingSlice.reducer;
