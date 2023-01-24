import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    data: null,
    isAuth: false,
  },
  reducers: {
    setAuth(state, action) {
      state.data = action.payload.data;
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const { setAuth } = auth.actions;
export default auth.reducer;
