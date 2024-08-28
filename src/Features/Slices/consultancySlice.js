import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const consultancyApi = new ApiFeatures("admin", "consultancy", axiosInstance);
const chatsApi = new ApiFeatures("user", "chats", axiosInstance);

// async thunk

export const getInbox = createAsyncThunk(
  "getinbox",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await chatsApi.create("getinbox", payload);
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error.msg);
    }
  }
);

export const getConversation = createAsyncThunk(
  "getConvo",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await chatsApi.create("twouserchats", payload);
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error.msg);
    }
  }
);

const initialState = {
  chats: [],
  consultancy: [],
  inbox: [],
  consultancyById: "",
};

const consultancySlice = createSlice({
  name: "consultancy",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getInbox.fulfilled, (state, { payload }) => {
      state.inbox = payload.data;
    }).addCase(getConversation.fulfilled, (state, { payload }) => {
      state.chats = payload.data;
    });
  },
});

export const selectChats = (state) => state.consultancy.chats;
export const selectConsultancy = (state) => state.consultancy.consultancy;
export const selectInbox = (state) => state.consultancy.inbox;

export default consultancySlice.reducer;
