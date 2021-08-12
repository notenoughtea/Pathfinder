import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import signinReducer from './signinSlice'
import galleryReducer from './gallerySlice'
import commentReducer from './commentsSlice';

export default configureStore({
  reducer: {
    cards: cardReducer,
    signin: signinReducer,
    gallery: galleryReducer,
    comments: commentReducer
  },
});
