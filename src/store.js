import { configureStore } from '@reduxjs/toolkit'
import surahReducer from './reducer/surahSlice';
import readerReducer from './reducer/readerSlice';
import audioReducer from './reducer/audioSlice';
import ahadethReducer from './reducer/ahadethSlice';
export const store = configureStore({
  reducer: {
    surah:surahReducer,
    reader:readerReducer,
    audio:audioReducer,
    ahadeth:ahadethReducer
  },
})