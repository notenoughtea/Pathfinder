import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosAuth = createAsyncThunk(
  "auth/axiosAuth",
  async function (data) {
    try {
      const response = await axios.post("/auth", data, {
        withCredentials: true,
      })
      
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signUp: {},
    status: null,
    error: null,
  },
  reducers: {},

  extraReducers: {
    [axiosAuth.pending]: (state) => {
      state.status = 'loading'
    },

  },
});


export default authSlice.reducer;
