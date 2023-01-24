import React from "react";
import { Link } from "react-router-dom";

function CardMovieData(props) {
  const { srcImage } = props;
  return (
    <div className="card card-movies">
      <div className="card-body">
        <img src={srcImage} className="d-block" alt="..." />
      </div>
      <div className="card-footer">
        <h6>Black Widow</h6>
        <p>Action, Adventure, Sci-Fi</p>
        <Link to="/detail/1">
          <button className="btn-details btn btn-outline-primary mt-2">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardMovieData;
