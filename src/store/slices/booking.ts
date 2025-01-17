import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carType: 'SEDAN',
  serviceType: 'POLISH',
};

const appSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setCarType: (state, action) => {
      state.carType = action.payload;
    },
    setServiceType: (state, action) => {
      state.serviceType = action.payload;
    },
  },
});

export const { setCarType, setServiceType } = appSlice.actions;
export default appSlice.reducer;
