import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  adminSlice,
  courseSlice,
  researchPaperSlice,
  teacherSlice,
  videoSlice,
  consultancySlice,
  labSlice,
} from "../Features/indexSlice";

const reducers = combineReducers({
  admin: adminSlice,
  course: courseSlice,
  researchPaper: researchPaperSlice,
  teachers: teacherSlice,
  videos: videoSlice,
  consultancy: consultancySlice,
  labs: labSlice,
});

export const store = configureStore({
  reducer: reducers,
});
