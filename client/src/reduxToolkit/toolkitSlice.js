import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const getSignup = (formData) => async(dispatch) => {
  axios.post('/auth',{formData},{withCredentials: true})
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signUp: {},
  },
  reducers: {
     signUp(state, action) {

        console.log(action.payload);
        return async (dispatch) => {
          axios.post('/auth',{data: action.payload},{withCredentials: true})
        }
        
      
    }
  },
  extraReducers: {

  }
})

export default authSlice.reducer
export const { signUp } = authSlice.actions
