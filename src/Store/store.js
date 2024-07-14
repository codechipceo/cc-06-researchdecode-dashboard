import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  adminSlice,
  courseSlice,
  researchPaperSlice,
  teacherSlice,
  videoSlice,
} from "../Features/indexSlice";

const reducers = combineReducers({
  admin: adminSlice,
  course: courseSlice,
  researchPaper: researchPaperSlice,
  teachers: teacherSlice,
  videos: videoSlice,
});

export const store = configureStore({
  reducer: reducers,
});
