import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as movieReducer from "../../stores/movie/index";

function CardMovie(props) {
  const { srcImage, id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getDetailMovie = () => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/movies/search-join/`)
      .then((res) => {
        const dataScheduleMovies = res?.data?.data;

        // data now showing movies
        const dataMovie = dataScheduleMovies.filter(
          (item) => item.movies_id === id
        );

        dispatch(
          movieReducer.setDetail({
            detail: dataMovie,
          })
        );

        navigate(`/detail/${id}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  return (
    <div className="card card-movies" onClick={getDetailMovie}>
      {/* <Link to={`/detail/${id}`}> */}
      <div className="card-body">
        <img src={srcImage} className="d-block" alt="..." />
      </div>
      {/* </Link> */}
    </div>
  );
}

export default CardMovie;
