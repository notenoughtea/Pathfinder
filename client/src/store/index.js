import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cardReducer from './cardSlice';

export default configureStore({
  reducer: {
    cards: cardReducer,
    auth: authReducer,
  },
});
