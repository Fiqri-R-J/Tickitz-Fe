import React, { useState } from "react";
import "../styles/View-movie.css";
import Navbar from "../components/organisms/Navbar.jsx";
import MonthTab from "../components/atoms/MonthTab.jsx";
import CardMovieData from "../components/molecules/CardMovieData.jsx";
import mShowing1 from "../images/home-page/movies-showing-1.jpg";
import Footer from "../components/organisms/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as movieReducer from "../stores/movie/index";

function ViewMovie() {
  const [showingMovies, setShowingMovies] = useState([]);
  const { typeView } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  const [isLoading, setIsLoading] = useState(false);

  // now showing movie
  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/movies/search-join/`)
      .then((res) => {
        const dataScheduleMovies = res?.data?.data;

        // data now showing movies
        const nowShowingMovies = dataScheduleMovies.filter((value) => {
          if (
            new Date(value.date_start) <= new Date() &&
            new Date(value.date_end) >= new Date()
          )
            return value;
        });

        // data upcoming showing movies
        const dataUpcomingMovies = dataScheduleMovies.filter((value) => {
          let checkDate =
            new Date(value.date_start) > new Date() &&
            new Date(value.date_start).getMonth() === movie.upcomingMonthTab;
          if (checkDate) return value;
        });

        let itemTempId = 0;
        if (typeView === "now") {
          setShowingMovies(
            nowShowingMovies.filter((item) => {
              if (item.movies_id !== itemTempId) {
                itemTempId = item.movies_id;
                return item;
              }
            })
          );
        } else {
          setShowingMovies(
            dataUpcomingMovies.filter((item) => {
              if (item.movies_id !== itemTempId) {
                itemTempId = item.movies_id;
                return item;
              }
            })
          );
        }

        dispatch(
          movieReducer.setUpcomingMonthTab({
            upcomingMonthTab: new Date().getMonth(),
          })
        );
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <div id="body-view-movie">
        <div class="container">
          <div>
            <Navbar />
          </div>
          <section id="bodyy">
            <div>
              <div class="row justify-content-between">
                <div class="col-4 list">
                  <h2>List Movie</h2>
                </div>
                <div class="col-4">
                  <div class="row row-cols-auto">
                    <div class="col">
                      <select
                        class="form-select sort"
                        aria-label="Default select example"
                      >
                        <option selected>Sort</option>
                        {/* <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option> */}
                      </select>
                    </div>
                    <div class="col">
                      <input
                        class="form-control sort"
                        type="text"
                        placeholder="Search Movie Name..."
                        aria-label=".form-control-sm example"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="row row-horizontal-scroll p-3 mt-4">
            <MonthTab />
          </div>
          <section id="movie">
            <div class="row p-5">
              {isLoading ? (
                <div className="text-center">
                  <div className="spinner-grow color-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow color-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow color-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow color-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow color-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                showingMovies.map((value, key) => {
                  return (
                    <div class="col-3 mb-4">
                      <CardMovieData
                        srcImage={`https://res.cloudinary.com/daouvimjz/image/upload/${value.movie_picture}`}
                        title={value.movie_name}
                        category={value.category}
                        id={value.movies_id}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </section>
          <div class="page">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="container">
        <Footer />
      </div>
    </div>
  );
}

export default ViewMovie;
