import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiFeatures } from "../../Api/ApiRepo";
import { axiosInstance } from "../../axios/axios";

const apiFeature = new ApiFeatures("admin", "video", axiosInstance);

// ########### ASYNC THUNK FN ###############
export const createVideos = createAsyncThunk(
  "videos/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("create", payload);
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllVideos = createAsyncThunk(
  "videos/getAll",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.create("getAll", payload);
      return { data, msg, count };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  totalCount: 0,
  videosData: [],
  videobyId: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createVideos.fulfilled, (state, { payload }) => {
        state.videosData = payload.data;
      })
      .addCase(getAllVideos.fulfilled, (state, { payload }) => {
        state.videosData = payload.data;
        state.totalCount = payload.count;
      });
  },
});

// ###################### STATES
export const selectTotalCount = (state) => state.videos.totalCount;
export const selectVideosData = (state) => state.videos.videosData;
export const selectVideoById = (state) => state.videos.videobyId;
export const selectIsLoading = (state) => state.videos.isLoading;
export const selectIsError = (state) => state.videos.isError;
export const selectErrorMessage = (state) => state.videos.errorMessage;


export default videoSlice.reducer;
