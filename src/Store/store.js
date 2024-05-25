import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  adminSlice,
  courseSlice,
  researchPaperSlice,
} from "../Features/indexSlice";

const reducers = combineReducers({
  admin: adminSlice,
  course: courseSlice,
  researchPaper: researchPaperSlice,
});

export const store = configureStore({
  reducer: reducers,
});
