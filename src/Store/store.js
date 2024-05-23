import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminSlice, courseSlice } from "../Features/indexSlice";

const reducers = combineReducers({
  admin: adminSlice,
  course: courseSlice,
});

export const store = configureStore({
  reducer: reducers,
});
