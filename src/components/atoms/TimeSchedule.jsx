import React from "react";

function TimeSchedule(props) {
  const { detail, value } = props;
  const [order, setOrder] = useState({ movies_id: null, schedules_id: null });

  const checkout = (item) => {
    setOrder({ movies_id: item.value, schedules_id: item.schedules_id });
  };
  {
    detail.reverse().map((item) => {
      if (item.cinema === value.cinema) {
        return (
          <div className="col-lg-3 col-3 time" onClick={checkout(item)}>
            {item.time}
          </div>
        );
      }
    });
  }
}

export default TimeSchedule;
