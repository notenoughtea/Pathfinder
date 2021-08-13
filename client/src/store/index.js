import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import signinReducer from './signinSlice'
import galleryReducer from './gallerySlice'
import myCardsSliceReducer from './myCardsSlice'

export default configureStore({
  reducer: {
    cards: cardReducer,
    // signup: signupReducer,
    signin: signinReducer,
    gallery: galleryReducer,
    myCards: myCardsSliceReducer
  },
});
