import { createSlice } from "@reduxjs/toolkit";

const movie = createSlice({
  name: "movie",
  initialState: {
    upcomingMonthTab: new Date().getMonth(),
    detail: null,
    typeView: "now",
  },
  reducers: {
    setUpcomingMonthTab(state, action) {
      state.upcomingMonthTab = action.payload.upcomingMonthTab;
    },
    setDetail(state, action) {
      state.detail = action.payload.detail;
    },
    setTypeView(state, action) {
      state.typeView = action.payload.typeView;
    },
  },
});

export const { setUpcomingMonthTab, setDetail, setTypeView } = movie.actions;
export default movie.reducer;
