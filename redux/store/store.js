import { configureStore } from '@reduxjs/toolkit';
import apiTableSlice from '../features/apiTableSlice';

export const store = configureStore({
  reducer: {
    apiTable: apiTableSlice,
  },
});
