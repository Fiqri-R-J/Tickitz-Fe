import React from "react";

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
        <button className="btn-details btn btn-outline-primary mt-2">
          Details
        </button>
      </div>
    </div>
  );
}

export default CardMovieData;
