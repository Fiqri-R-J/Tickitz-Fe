import React from "react";
import { Link } from "react-router-dom";

function CardMovie(props) {
  const { srcImage, id } = props;
  return (
    <div className="card card-movies">
      <Link to={`/detail/${id}`}>
        <div className="card-body">
          <img src={srcImage} className="d-block" alt="..." />
        </div>
      </Link>
    </div>
  );
}

export default CardMovie;
