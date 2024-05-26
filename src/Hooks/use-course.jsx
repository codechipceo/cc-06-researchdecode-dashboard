import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse, selectAllCourses, selectCourseLoading, selectCourseError, selectCourseErrorMessage, selectCourseById } from "../Features/Slices/courseSlice";
import { getByIdCourse, updateCourse, deleteCourse, createCourse } from "../Features/Slices/courseSlice";

export const useCourse = () => {
  const dispatch = useDispatch();
  const courseData = useSelector(selectAllCourses);
  const courseById = useSelector(selectCourseById);
  const isLoading = useSelector(selectCourseLoading);
  const isError = useSelector(selectCourseError);
  const errorMessage = useSelector(selectCourseErrorMessage);

  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);

  const getById = (courseId) => {
    dispatch(getByIdCourse(courseId));
  };

  const update = (courseData) => {
    console.log("updating",courseData);
    dispatch(updateCourse(courseData));
  };

  const deleteCourseById = (courseId) => {
    dispatch(deleteCourse(courseId));
  };

  const create = (courseData) => {
    dispatch(createCourse(courseData));
  };

  return {
    courseData,
    courseById,
    isLoading,
    isError,
    errorMessage,
    getById,
    update,
    deleteCourseById,
    create,
  };
};