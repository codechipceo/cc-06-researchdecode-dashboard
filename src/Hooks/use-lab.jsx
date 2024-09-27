import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HooksClass } from "./HooksClass";
import {
  createLab,
  getAllLabs,
  getByIdLab,
  updateLab,
  deleteLab,
} from "../Features/Slices/labSlice";
export const useLab = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */
  const dispatch = useDispatch();
  const { totalCount, labs, labsById, isLoading, isError, errorMessage } =
    useSelector((state) => state.labs);

  /*
  ########################################################################
          CLASS INSTANCE
  ########################################################################
 */
  const hookInstance = new HooksClass(
    dispatch,
    createLab,
    updateLab,
    deleteLab,
    getByIdLab
  );

  useEffect(() => {
    dispatch(getAllLabs());
  }, [dispatch]);

  return {
    labsById,
    labs,
    isError,
    errorMessage,
    totalCount,
    isLoading,
    hookInstance,
  };
};
