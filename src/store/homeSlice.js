import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/homeApi";

export const fetchHome = createAsyncThunk(
  "home/fetchHome",
  async (toggleLang) => {
    const language = toggleLang ? "en" : "ar";
    const response = await api.get(`/${language}`);
    return response;
  }
);
const initialState = {
  about: {},
  personal: {},
  courses: {},
  isLoading: true,
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: {
    [fetchHome.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchHome.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.about = payload.data.about;
      state.personal = payload.data.personal;
      state.courses = payload.data.courses;
    },
  },
});

export default homeSlice.reducer;
