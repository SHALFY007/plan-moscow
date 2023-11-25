import { configureStore } from '@reduxjs/toolkit'
import countSlice from './store/countSlice'

export const store = configureStore({
  reducer: {
    counter: countSlice
  },
})