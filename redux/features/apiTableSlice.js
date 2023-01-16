import { createSlice } from '@reduxjs/toolkit';
import { API_TABLE } from '../../API_TABLE';

export const apiTableSlice = createSlice({
  name: 'apiTabel',
  initialState: API_TABLE,
});

export default apiTableSlice.reducer;
