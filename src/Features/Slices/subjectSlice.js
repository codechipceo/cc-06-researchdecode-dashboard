import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("admin", "subject", axiosInstance);

// Async thunk for creating subject
export const createSubject = createAsyncThunk(
  "subject/create",
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
// GET ALL SUBJECTS
export const getAllSubject = createAsyncThunk(
  "subject/getall",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.getAll("getAll", payload);
      return { data, msg, count };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// GET BY ID
export const getByIdSubject = createAsyncThunk(
  "subject/getById",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.getById("getById", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// UPDATE SUBJECT
export const updateSubject = createAsyncThunk(
  "subject/update",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.update("update", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// DELETE SUBJECT
export const deleteSubject = createAsyncThunk(
  "subject/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.delete("delete", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

const initialState = {
  totalCount: 0,
  subjects: [],
  subjectById: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const subjectSlice = createSlice({
  name: "subjectSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // createSubject
      .addCase(createSubject.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createSubject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subjects.push(action.payload.data);
      })
      .addCase(createSubject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // getAllsubject
      .addCase(getAllSubject.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getAllSubject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subjects = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(getAllSubject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // getByIdSubject
      .addCase(getByIdSubject.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getByIdSubject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subjectById = action.payload.data;
      })
      .addCase(getByIdSubject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // updateSubject
      .addCase(updateSubject.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(updateSubject.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.subjects.findIndex(
          (subject) => subject._id === action.payload.data._id
        );
        if (index !== -1) {
          state.subjects[index] = action.payload.data;
        }
      })
      .addCase(updateSubject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // deletesubject


      .addCase(deleteSubject.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(deleteSubject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subjects = state.subjects.filter(
          (subject) => subject._id !== action.payload.data._id
        );
      })
      .addCase(deleteSubject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });



  },
}).reducer;

// Selectors
export const selectAllSubjects = (state) => state.subject.subjects;
export const selectSubjectById = (state) => state.subject.subjectById;
export const selectSubjectLoading = (state) => state.subject.isLoading;
export const selectSubjectError = (state) => state.subject.isError;
export const selectSubjectErrorMessage = (state) => state.subject.errorMessage;
export const selectTotalCount = (state) => state.subject.totalCount;
