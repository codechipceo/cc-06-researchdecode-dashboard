import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse, selectAllCourses } from "../Features/Slices/courseSlice";
export const useCourse = () => {
  const dispatch = useDispatch();
  const courseData = useSelector(selectAllCourses);

  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);
  return {
    courseData,
  };
};
