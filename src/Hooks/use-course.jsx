import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCourse,
  selectAllCourses,
  selectCourseLoading,
  selectCourseError,
  selectCourseErrorMessage,
  selectCourseById,
} from "../Features/Slices/courseSlice";
import {
  getByIdCourse,
  updateCourse,
  deleteCourse,
  createCourse,
} from "../Features/Slices/courseSlice";
import { HooksClass } from "./HooksClass";

/*
  ########################################################################
         HOOK DEFINED
  ########################################################################
 */

export const useCourse = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */
  const dispatch = useDispatch();
  const courseData = useSelector(selectAllCourses);
  const courseById = useSelector(selectCourseById);
  const isLoading = useSelector(selectCourseLoading);
  const isError = useSelector(selectCourseError);
  const errorMessage = useSelector(selectCourseErrorMessage);

  /*
  ########################################################################
          CLASS INSTANCE
  ########################################################################
 */
  const hooksInstance = new HooksClass(
    dispatch,
    createCourse,
    updateCourse,
    deleteCourse
  );

  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);

  const getById = (courseId) => {
    dispatch(getByIdCourse(courseId));
  };

  return {
    courseData,
    courseById,
    isLoading,
    isError,
    errorMessage,
    getById,
    hooksInstance,
  };
};
