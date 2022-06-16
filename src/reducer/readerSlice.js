import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const getFetchReader = createAsyncThunk(
  "reader/getFetchReader",
  async (name, ThunkApi) => {
    const response = await axios(`https://qurani-api.herokuapp.com/api/reciters`)
    return response.data
  }
);


const initialState = {
  readers:[],
  loading: true,
  favReader:[],
  newData: [],
  info:"",
  option:"الكل"
};

export const readerSlice = createSlice({
  name: "reader",
  initialState,
  reducers: {
    setSurahName : (state, action) => {
      state.readers = []
    },
    handleCheck: (state, action) => {
      let info = state.info;
      let option = state.option
      state.info = action.payload
      let data = state.readers.filter(item => {
        if (item.name.includes(info) && item.rewaya == option) {
          return item
        } else if (item.name.includes(info) && option == "الكل") {
          return item
        } else {
          return 
        }
      })
      state.newData = data
    },
    handleCheckOption: (state, action) => {
      let info = state.info;
      let option = state.option
      state.option = action.payload
      let data = state.readers.filter(item => {
        if (item.name.includes(info) && item.rewaya == action.payload ) {
          return item
        } else if (item.name.includes(info) && action.payload  == "الكل") {
          return item
        } else {
          return 
        }
      })
      state.newData = data
    }
  },
  extraReducers: {
    [getFetchReader.pending] : (state) => {
      state.loading =  true
    },
    [getFetchReader.fulfilled] : (state, action) => {
      state.loading =  false;
      state.readers = action.payload
      state.newData = action.payload
    },
    [getFetchReader.rejected] : (state) => {
      state.loading =  false
    }
  }
});

// Action creators are generated for each case reducer function
export const { setSurahName, addToFav, handleCheck, handleCheckOption} = readerSlice.actions;

export default readerSlice.reducer;
