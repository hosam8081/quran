import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getFetchAudio = createAsyncThunk(
  "audio/getFetchAudio",
  async (name, ThunkApi) => {
    console.log(name);
    const response = await axios(
      `https://qurani-api.herokuapp.com/api/reciters/${name}`
    ).catch((error) => console.log(error));
    return response.data;
  }
);

let audioLoacalStorage = () => {
  let audioFav;
  if (localStorage.getItem("audioFav")) {
    return (audioFav = JSON.parse(localStorage.getItem("audioFav")));
  } else {
    return (audioFav = []);
  }
};

let LastaudioLoacalStorage = () => {
  let audioUrl;
  if (localStorage.getItem("audioUrl")) {
    return (audioUrl = JSON.parse(localStorage.getItem("audioUrl")));
  } else {
    return (audioUrl = []);
  }
};

let LastaudioNameStorage = () => {
  let audioName;
  if (localStorage.getItem("audioName")) {
    return (audioName = JSON.parse(localStorage.getItem("audioName")));
  } else {
    return (audioName = ["لا يوجد"]);
  }
};

const initialState = {
  loading: true,
  reader: [],
  start: "",
  audioFav: audioLoacalStorage(),
  audioName: LastaudioNameStorage(),
  audioUrl: LastaudioLoacalStorage(),
};

export const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.loading = true;
    },
    audioStart: (state, action) => {
      state.start = action.payload.url;
      state.audioName = action.payload.name;
      state.audioUrl = action.payload.url;
      localStorage.setItem("audioUrl", JSON.stringify(action.payload.url))
      localStorage.setItem("audioName", JSON.stringify(action.payload.name))
    },
    addAudioFav: (state, action) => {
      let audioFind = state.audioFav.find(
        (item) => item.url == action.payload.url
      );
      if (!audioFind) {
        state.audioFav.push(action.payload);
        localStorage.setItem("audioFav", JSON.stringify(state.audioFav));
      } else {
        state.audioFav = state.audioFav.filter(item => item.url !== action.payload.url)
        localStorage.setItem("audioFav", JSON.stringify(state.audioFav));
      }
    },
    audioLast: (state, action) => {
      state.start = action.payload;
    },
  },
  extraReducers: {
    [getFetchAudio.pending]: (state) => {
      state.loading = true;
    },
    [getFetchAudio.fulfilled]: (state, action) => {
      state.loading = false;
      state.reader = action.payload;
    },
    [getFetchAudio.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, audioStart, addAudioFav, audioLast } =
  audioSlice.actions;

export default audioSlice.reducer;
