import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    data: null,
    username: null,
    email: null,
    phoneNumber: null,
    isAuth: false,
  },
  reducers: {
    setAuth(state, action) {
      state.data = action.payload.data;
      state.isAuth = action.payload.isAuth;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export const { setAuth } = auth.actions;
export default auth.reducer;
