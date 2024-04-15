import { createSlice } from "@reduxjs/toolkit";

interface UserDataState {
  contactid: string;
  given_name: string;
  accountid: string;
  user_country: string;
  user_region: string;
  user_job_title: string;
  oda_member: string;
  csp: string;
  account_level: string;
  account_type: string;
  communication_opt_in: string;
  company_industry_1: string;
  company_industry_2: string;
  role: string;
  family_name: string;
}

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {} as UserDataState,
  reducers: {
    setUserData: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
