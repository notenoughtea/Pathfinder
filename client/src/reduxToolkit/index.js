import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './toolkitSlice'

const rootReducer = combineReducers({
  toolkit: authSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})


