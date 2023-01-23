import React from "react";

function CardMovie(props) {
  const { srcImage } = props;
  return (
    <div className="card card-movies">
      <div className="card-body">
        <img src={srcImage} className="d-block" alt="..." />
      </div>
    </div>
  );
}

export default CardMovie;
