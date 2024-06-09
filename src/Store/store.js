import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  adminSlice,
  courseSlice,
  researchPaperSlice,
  teacherSlice,
} from "../Features/indexSlice";

const reducers = combineReducers({
  admin: adminSlice,
  course: courseSlice,
  researchPaper: researchPaperSlice,
  teachers: teacherSlice,
});

export const store = configureStore({
  reducer: reducers,
});
