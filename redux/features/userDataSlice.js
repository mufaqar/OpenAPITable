import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {},
  reducers: {
    setUserData: (state, { payload }) => {
      console.log('payload', payload);
      return (state = payload);
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
