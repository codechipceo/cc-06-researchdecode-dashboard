import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  adminSlice,
  courseSlice,
  researchPaperSlice,
  utilSlice,
} from "../Features/indexSlice";

const reducers = combineReducers({
  admin: adminSlice,
  course: courseSlice,
  researchPaper: researchPaperSlice,
  utility: utilSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
