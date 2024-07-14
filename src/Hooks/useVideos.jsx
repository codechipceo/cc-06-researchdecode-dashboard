import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllVideos,
  selectVideosData
} from "../Features/Slices/videoSlice";

/*
  ########################################################################
         HOOK DEFINED
  ########################################################################
 */

export const useVideos = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */
  const dispatch = useDispatch();
  const videosData = useSelector(selectVideosData);

  /*
  ########################################################################
          CLASS INSTANCE
  ########################################################################
 */
  //   const hooksInstance = new HooksClass(
  //     dispatch,
  //     createCourse,
  //     updateCourse,
  //     deleteCourse
  //   );

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch]);

  return {
    videosData,
  };
};
