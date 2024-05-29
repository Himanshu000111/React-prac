import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from './Authslice'
const store = configureStore({
  reducer: {
    authSliceReducer
  }
})

export default store;