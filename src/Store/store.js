import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "../Features/indexSlice";

const reducers = combineReducers({
  categories: categorySlice,
});
export const store = configureStore({
  reducer: reducers,
});
