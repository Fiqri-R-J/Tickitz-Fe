import React from "react";

function MonthTab() {
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
        className="me-3"
        style={{
          border: "1px solid #5f2eea",
          padding: "10px 30px 10px 30px",
          width: "130px",
          textAlign: "center",
          borderRadius: "5px",
          // backgroundColor: "#5f2eea",
          // color: "white",
          color: "#5f2eea",
        }}
      >
        {value}
      </h6>
    );
  });
}

export default MonthTab;
