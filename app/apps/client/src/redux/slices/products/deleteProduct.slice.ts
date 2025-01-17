import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

type deleteProduct = {
   id: string;
   token: string;
};

export const deleteOneProduct = createAsyncThunk('deleteProduct/deleteOneProduct', async (args: deleteProduct) => {
   const instance = axios.create({
      // headers: {
      //    Authorization: 'Bearer ' + args.token,
      // },
   });
   const { data } = await instance.put(`http://localhost:3000/api/products/delete/${args.id}`);
   return data;
});

interface IOneProduct {
   productTitle: { _id: string; name: string } | null;
   deleteStatus: 'loading' | 'success' | 'error';
}

const initialState: IOneProduct = {
   productTitle: null,
   deleteStatus: 'loading', // loading | success | error
};

export const deleteProductSlice = createSlice({
   name: 'deleteProduct',
   initialState,
   reducers: {
      updateDeleteStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
         state.deleteStatus = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(deleteOneProduct.pending, (state) => {
         state.deleteStatus = 'loading';
         state.productTitle = null;
      });
      builder.addCase(deleteOneProduct.fulfilled, (state, action) => {
         state.deleteStatus = 'success';
         state.productTitle = action.payload;
      });
      builder.addCase(deleteOneProduct.rejected, (state) => {
         state.deleteStatus = 'error';
         state.productTitle = null;
      });
   },
});

//Alternative to useSelector
export const deleteStatus = (state: RootState) => state.deleteProduct.deleteStatus;
export const productTitle = (state: RootState) => state.deleteProduct.productTitle;

export const { updateDeleteStatus } = deleteProductSlice.actions;

export default deleteProductSlice.reducer;
