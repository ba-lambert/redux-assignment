import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productSlices'
export default configureStore({
  reducer: {
    product: productReducer,
  },
})