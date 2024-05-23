import {
  selectAdminInfo,
  selectAdminLoading,
  selectAdminErrorMsg,
  selectAdminIsError,
  selectAdminIsLoggedIn,
  adminLogin,
  
} from "./Slices/adminSlice";

const reduxStore = {
  states: {
    adminInfo: selectAdminInfo,
    adminLoading: selectAdminLoading,
    adminErrorMsg: selectAdminErrorMsg,
    adminIsError: selectAdminIsError,
    adminIsLoggedIn: selectAdminIsLoggedIn,
  },

  sliceMethods: {
    adminLogin,
  
  },
};

export { reduxStore };