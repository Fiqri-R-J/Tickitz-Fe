import { createSlice } from "@reduxjs/toolkit";

const movie = createSlice({
  name: "movie",
  initialState: {
    upcomingMonthTab: new Date().getMonth(),
  },
  reducers: {
    setUpcomingMonthTab(state, action) {
      state.upcomingMonthTab = action.payload.upcomingMonthTab;
    },
  },
});

export const { setUpcomingMonthTab } = movie.actions;
export default movie.reducer;
