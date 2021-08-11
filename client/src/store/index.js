import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupSlice';
import cardReducer from './cardSlice';
import signinReducer from './signinSlice'

export default configureStore({
  reducer: {
    cards: cardReducer,
    signup: signupReducer,
    signin: signinReducer
  },
});
