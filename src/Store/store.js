import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  adminSlice } from "../Features/indexSlice";

const reducers = combineReducers({
  admin: adminSlice,
});

export const store = configureStore({
  reducer: reducers,
});