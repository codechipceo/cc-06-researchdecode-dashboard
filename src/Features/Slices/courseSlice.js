import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("admin", "course", axiosInstance);

// Async thunk for  creating course
export const createCourse = createAsyncThunk(
  "course/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("create", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);
// GET ALL COURSE
export const getAllCourse = createAsyncThunk(
  "course/getall",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.create("getAll", payload);
      return { data, msg, count };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// GET BY ID
export const getByIdCourse = createAsyncThunk(
  "course/getById",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("getById", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// UPDATE COURSE
export const updateCourse = createAsyncThunk(
  "course/update",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("update", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// DELETE COURSE
export const deleteCourse = createAsyncThunk(
  "course/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("delete", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

const initialState = {
  totalCount: 0,
  courses: [],
  courseById: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // createCourse
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses.push(action.payload.data);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // getAllCourse
      .addCase(getAllCourse.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getAllCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(getAllCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // getByIdCourse
      .addCase(getByIdCourse.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getByIdCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courseById = action.payload.data;
      })
      .addCase(getByIdCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // updateCourse
      .addCase(updateCourse.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.courses.findIndex(
          (course) => course._id === action.payload.data._id
        );
        if (index !== -1) {
          state.courses[index] = action.payload.data;
        }
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // deleteCourse


      .addCase(deleteCourse.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = state.courses.filter(
          (course) => course._id !== action.payload.data._id
        );
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });



  },
}).reducer;

// Selectors
export const selectAllCourses = (state) => state.course.courses;
export const selectCourseById = (state) => state.course.courseById;
export const selectCourseLoading = (state) => state.course.isLoading;
export const selectCourseError = (state) => state.course.isError;
export const selectCourseErrorMessage = (state) => state.course.errorMessage;
export const selectTotalCount = (state) => state.course.totalCount;
