import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get("http://localhost:3000/api/v1/products/public")
  console.log(response.data);
  return response.data.products
})
export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.products = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default productSlice.reducer