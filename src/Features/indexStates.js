// admin
import {
  selectAdminInfo,
  selectAdminLoading,
  selectAdminErrorMsg,
  selectAdminIsError,
  selectAdminIsLoggedIn,
  adminLogin,
} from "./Slices/adminSlice";
// researchPapers
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

// subject slice method
import {
  createSubject,
  getAllSubject,
  getByIdSubject,
  updateSubject,
  deleteSubject,
} from "./Slices/subjectSlice";
import {
  selectAllSubjects,
  selectSubjectById,
  selectSubjectError,
  selectSubjectErrorMessage,
  selectSubjectLoading,
} from "./Slices/subjectSlice";
import {
  createTeacher,
  updateTeacher,
  getAllTeachers,
  getByIdTeacher,
  deleteTeacher,
  selectTeacherById,
  selectTeacherErrorMessage,
  selectTeacherErrorStatus,
  selectTeachers,
  selectTeacherLoadingStatus,
  teacherTotalCount,
} from "./Slices/teacherSlice";

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
    selectAllSubjects,
    selectSubjectById,
    selectSubjectError,
    selectSubjectErrorMessage,
    selectSubjectLoading,
    selectTeacherById,
    selectTeacherErrorMessage,
    selectTeacherErrorStatus,
    selectTeachers,
    selectTeacherLoadingStatus,
    teacherTotalCount,
  },

  sliceMethods: {
    adminLogin,
    createResearchPaper,
    updateResearchPaper,
    getAllResearchPapers,
    getByIdResearchPaper,
    deleteResearchPaper,
    createSubject,
    getAllSubject,
    getByIdSubject,
    updateSubject,
    deleteSubject,
    createTeacher,
    updateTeacher,
    getAllTeachers,
    getByIdTeacher,
    deleteTeacher,
  },
};

export { reduxStore };
