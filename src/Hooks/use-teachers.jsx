import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxStore } from "../Features/indexStates";
import { HooksClass } from "./HooksClass";
export const useTeachers = () => {
  const { createTeacher, updateTeacher, deleteTeacher } =
    reduxStore.sliceMethods;
  /*
  ########################################################################
          STATES
  ########################################################################
 */
  const dispatch = useDispatch();
  const teacherLoading = useSelector(
    reduxStore.states.selectTeacherLoadingStatus
  );
  const teacherById = useSelector(reduxStore.states.selectTeacherById);
  const teachersData = useSelector(reduxStore.states.selectTeachers);
  const teacherErrorMessage = useSelector(
    reduxStore.states.selectTeacherErrorMessage
  );
  const teacherErrorStatus = useSelector(
    reduxStore.states.selectTeacherErrorStatus
  );
  const teacherCount = useSelector(reduxStore.states.teacherTotalCount);

  /*
  ########################################################################
          CLASS INSTANCE
  ########################################################################
 */
  const hookInstance = new HooksClass(
    dispatch,
    createTeacher,
    updateTeacher,
    deleteTeacher
  );

  useEffect(() => {
    dispatch(reduxStore.sliceMethods.getAllTeachers());
  }, [dispatch]);

  return {
    teacherById,
    teachersData,
    teacherErrorMessage,
    teacherErrorStatus,
    teacherCount,
    teacherLoading,
    hookInstance,
  };
};
