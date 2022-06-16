import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const getFetchAhadeth = createAsyncThunk(
  "ahadeth/getFetchAhadeth",
  async (name, ThunkApi) => {
    const response = await axios(`https://api.hadith.sutanlab.id/books`)
    return response.data
  }
);


const initialState = {
  loading: true,
  books:[],
};

export const ahadethSlice = createSlice({
  name: "ahadeth",
  initialState,
  reducers: {
    increment : (state) => {
      state.loading = true
    }
  },
  extraReducers: {
    [getFetchAhadeth.pending] : (state) => {
      state.loading =  true
    },
    [getFetchAhadeth.fulfilled] : (state, action) => {
      state.loading =  false;
      state.books = action.payload.data
    },
    [getFetchAhadeth.rejected] : (state) => {
      state.loading =  false
    }
  }
});

// Action creators are generated for each case reducer function
export const {increment} = ahadethSlice.actions;

export default ahadethSlice.reducer;
