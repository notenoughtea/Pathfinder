import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Link } from "react-router"

export const axiosAuth = createAsyncThunk(
  "auth/axiosAuth",
  async function (data, {rejectWithValue}) {
    try {
      const response = await axios.post("/auth", data, {
        withCredentials: true,
      })
      if (response.statusText !== 'OK') {
        throw new Error('Server error!')
      } else {
        // browserHistory.push('/')
        return response.data
      }

    } catch (error) {
      return rejectWithValue(error.massage)
    }
  }
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    status: null,
    error: null,
  },
  reducers: {},

  extraReducers: {
    [axiosAuth.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [axiosAuth.fulfilled]: (state, action) => {
      state.status = 'resolve';
      state.user = action.payload;
    },
    [axiosAuth.rejected]: setError,

  },
});


export default authSlice.reducer;
