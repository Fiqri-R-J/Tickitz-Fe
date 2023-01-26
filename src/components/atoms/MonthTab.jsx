import React from "react";
import { useDispatch } from "react-redux";
import * as movieReducer from "../../stores/movie/";

function MonthTab(props) {
  const { monthActive } = props;
  const dispatch = useDispatch();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months.map((value, key) => {
    return (
      <h6
        key={key}
        className={`me-3 ${
          months[monthActive] === value ? "month-tab-active" : "month-tab"
        } `}
        onClick={() => {
          dispatch(
            movieReducer.setUpcomingMonthTab({
              upcomingMonthTab: key,
            })
          );
        }}
      >
        {value}
      </h6>
    );
  });
}

export default MonthTab;
