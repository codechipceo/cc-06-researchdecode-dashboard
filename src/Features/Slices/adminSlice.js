import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("admin", "auth", axiosInstance);

// Async thunk for admin login
export const adminLogin = createAsyncThunk(
  "admin/login",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("login", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);


// Initial state for admin login slice
const initialState = {
  adminInfo: null,
  isLoading: false,
  isError: false,
  errorMessage: "",
  isLoggedIn: false,
  adminToken:""
};

// Create admin slice with reducers and extraReducers
export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logout: (state) => {
      state.adminInfo = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.adminInfo = payload.data;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(adminLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminLogin.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isError = true;
        state.isLoading = false;
      })
      
  },
}).reducer;

// Exporting all states
export const selectAdminInfo = (state) => state.admin.adminInfo;
export const selectAdminLoading = (state) => state.admin.isLoading;
export const selectAdminErrorMsg = (state) => state.admin.errorMessage;
export const selectAdminIsError = (state) => state.admin.isError;
export const selectAdminIsLoggedIn = (state) => state.admin.isLoggedIn;