import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupSlice';
import cardReducer from './cardSlice';
import signinReducer from './signinSlice'
import galleryReducer from './gallerySlice'

export default configureStore({
  reducer: {
    cards: cardReducer,
    signup: signupReducer,
    signin: signinReducer,
    gallery: galleryReducer
  },
});
