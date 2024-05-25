import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxStore } from "../Features/indexStates";
import { HooksClass } from "./HooksClass";
export const useResearchPaper = () => {
  const dispatch = useDispatch();
  const { states, sliceMethods } = reduxStore;

  // method hook initialise.
  const hooksInstance = new HooksClass(
    dispatch,
    sliceMethods.createResearchPaper,
    sliceMethods.updateResearchPaper,
    sliceMethods.deleteResearchPaper
    );

    // states
  const researchPaperData = useSelector(states.selectAllResearchPapers);
  const researchPaperById = useSelector(states.selectResearchPaperById);
  const isResearchError = useSelector(states.selectResearchPaperError);
  const researchPaperErrorMsg = useSelector(
    states.selectResearchPaperErrorMessage
  );
  const isResearchLoading = useSelector(states.selectResearchPaperLoading);
  const researchCount = useSelector(states.selectTotalCount);

    // get all
  useEffect(() => {
    dispatch(sliceMethods.getAllResearchPapers());
  }, [dispatch]);
  return {
    researchPaperData,
    researchPaperById,
    isResearchError,
    researchPaperErrorMsg,
    isResearchLoading,
    researchCount,
    hooksInstance,
  };
};
