import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createUtil: "",
  updateUtil: "",
  deleteUtil: "",
};
export const utilSlice = createSlice({
  name: "utilityFns",
  initialState,
  reducers: {
    create: (state, { payload }) => {
      state.createUtil = payload;
    },
  },
});

export const { create } = utilSlice.actions;
