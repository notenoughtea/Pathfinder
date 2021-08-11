import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import signinReducer from './signinSlice'

export default configureStore({
  reducer: {
    cards: cardReducer,
    signin: signinReducer
  },
});
