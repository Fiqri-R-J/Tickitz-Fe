import React from "react";
import { Link } from "react-router-dom";

function CardMovie(props) {
  const { srcImage } = props;
  return (
    <div className="card card-movies">
      <Link to="/detail/1">
        <div className="card-body">
          <img src={srcImage} className="d-block" alt="..." />
        </div>
      </Link>
    </div>
  );
}

export default CardMovie;
