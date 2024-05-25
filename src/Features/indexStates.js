import {
  selectAdminInfo,
  selectAdminLoading,
  selectAdminErrorMsg,
  selectAdminIsError,
  selectAdminIsLoggedIn,
  adminLogin,
} from "./Slices/adminSlice";
import {
  createResearchPaper,
  deleteResearchPaper,
  getAllResearchPapers,
  getByIdResearchPaper,
  updateResearchPaper,
} from "./Slices/researchPaperSlice";
import {
  selectAllResearchPapers,
  selectResearchPaperById,
  selectResearchPaperError,
  selectResearchPaperErrorMessage,
  selectResearchPaperLoading,
  selectTotalCount,
} from "./Slices/researchPaperSlice";
const reduxStore = {
  states: {
    adminInfo: selectAdminInfo,
    adminLoading: selectAdminLoading,
    adminErrorMsg: selectAdminErrorMsg,
    adminIsError: selectAdminIsError,
    adminIsLoggedIn: selectAdminIsLoggedIn,
    selectAllResearchPapers,
    selectResearchPaperById,
    selectResearchPaperError,
    selectResearchPaperErrorMessage,
    selectResearchPaperLoading,
    selectTotalCount,
  },

  sliceMethods: {
    adminLogin,
    createResearchPaper,
    updateResearchPaper,
    getAllResearchPapers,
    getByIdResearchPaper,
    deleteResearchPaper,
  },
};

export { reduxStore };
