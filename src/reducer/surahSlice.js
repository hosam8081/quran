import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getFetchSurah = createAsyncThunk(
  "surah/getFetchSurah",
  async (name, ThunkApi) => {
    console.log(name, ThunkApi)
    const response = await axios(`https://quran-search-api.herokuapp.com/api/getSurah/${name}`)
    return response.data
  }
);

let  getLocalSorage = () => {
  let surahName;
  if (localStorage.getItem("surah")) {
    return surahName = localStorage.getItem("surah")
  }else {
    return surahName = 'لايوجد'
  }
}
let  getLocalID = () => {
  let id;
  if (localStorage.getItem("surahid")) {
    return id = localStorage.getItem("surahid")
  }else {
    return id = ''
  }
}
let  getLocalFav = () => {
  let favSurah;
  if (localStorage.getItem("favSurah")) {
    return favSurah = localStorage.getItem("favSurah")
  }else {
    return favSurah = ''
  }
}

const initialState = {
  ayat:[],
  surahName:getLocalSorage(),
  id:getLocalID(),
  loading: true,
  favSurah:getLocalFav(),
  isActive:false
};

export const surahSlice = createSlice({
  name: "surah",
  initialState,
  reducers: {
    setSurahName : (state, action) => {
      state.surahName = action.payload.name;
      state.id = action.payload.id;
      localStorage.setItem("surah", state.surahName)
      localStorage.setItem("surahid", state.id)
    },
    addToFav: (state, action) => {
      console.log(action.payload)
      state.favSurah = [...state.favSurah, action.payload]
      localStorage.setItem("favSurah", JSON.stringify(state.favSurah))
    },
    onActive: (state) => {
      state.isActive = true 
    },
    ofActive: (state) => {
      state.isActive = false 
    }
  },
  extraReducers: {
    [getFetchSurah.pending] : (state) => {
      state.loading =  true
    },
    [getFetchSurah.fulfilled] : (state, action) => {
      state.loading =  false;
      console.log(action)
      state.ayat = action.payload.data
    },
    [getFetchSurah.rejected] : (state) => {
      state.loading =  false
    }
  }
});

// Action creators are generated for each case reducer function
export const { setSurahName, addToFav, onActive, ofActive } = surahSlice.actions;

export default surahSlice.reducer;
