// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const signupAxios = createAsyncThunk(
//   "auth/signupAxios",
//   async function (data, {rejectWithValue}) {
//     try {
//       const response = await axios.post("/auth/signup", data, {
//         withCredentials: true,
//       })
//       if (response.statusText !== 'OK') {
//         throw new Error('Server error!')
//       } else {
        
//         return response.data
//       }

//     } catch (error) {
//       return rejectWithValue(error.massage)
//     }
//   }
// );

// const setError = (state, action) => {
//   state.status = 'rejected';
//   state.error = action.payload;
// }

// const signupSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: {},
//     status: null,
//     error: null,
//     message: '',
//   },
//   reducers: {},

//   extraReducers: {
//     [signupAxios.pending]: (state) => {
//       state.status = 'loading';
//       state.error = null;
//     },
//     [signupAxios.fulfilled]: (state, action) => {
//       console.log(123);
//       state.status = 'resolve';
//       if(action.payload.error) {
//         console.log(action.payload.error);
//         state.message = action.payload.error
//       } else {
//         state.user = action.payload;
//         state.auth = true
//       }
//     },
//     [signupAxios.rejected]: setError,
//   },
// });


// export default signupSlice.reducer;
