import React, { useState } from "react";
import Navbar from "../components/organisms/Navbar";
import "../styles/home.css";
import imgCta1 from "../images/home-page/cta-1.jpg";
import imgCta2 from "../images/home-page/cta-2.jpg";
import imgCta3 from "../images/home-page/cta-3.jpg";
import mShowing1 from "../images/home-page/movies-showing-1.jpg";
import MonthTab from "../components/atoms/MonthTab";
import Footer from "../components/organisms/Footer";
import CardMovie from "../components/molecules/CardMovie";
import CardMovieData from "../components/molecules/CardMovieData";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as movieReducer from "../stores/movie/index";

function Home() {
  const navigate = useNavigate();
  const [showingMovies, setShowingMovies] = useState([]);
  const [showingMoviesLoading, setShowingMoviesLoading] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [upcomingMoviesLoading, setUpcomingMoviesLoading] = useState(false);
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  // now showing movie
  React.useEffect(() => {
    setShowingMoviesLoading(true);
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/movies/search-join/`)
      .then((res) => {
        setShowingMoviesLoading(false);

        const dataScheduleMovies = res?.data?.data;

        // data now showing movies
        const nowShowingMovies = dataScheduleMovies.filter((value) => {
          if (
            new Date(value.date_start) <= new Date() &&
            new Date(value.date_end) >= new Date()
          )
            return value;
        });

        let itemTempId = 0;
        setShowingMovies(
          nowShowingMovies
            .filter((item) => {
              if (item.movies_id !== itemTempId) {
                itemTempId = item.movies_id;
                return item;
              }
            })
            .slice(0, 7)
        );

        dispatch(
          movieReducer.setUpcomingMonthTab({
            upcomingMonthTab: new Date().getMonth(),
          })
        );
      })
      .catch((err) => {
        console.log(err);
        setShowingMoviesLoading(true);
      })
      .finally(() => {
        setShowingMoviesLoading(false);
      });
  }, []);

  // upcoming movie
  React.useEffect(() => {
    setUpcomingMoviesLoading(true);
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/movies/search-join/`)
      .then((res) => {
        setUpcomingMoviesLoading(false);

        //data schedules movie
        const dataScheduleMovies = res?.data?.data;

        // data upcoming showing movies
        const dataUpcomingMovies = dataScheduleMovies.filter((value) => {
          let checkDate =
            new Date(value.date_start) > new Date() &&
            new Date(value.date_start).getMonth() === movie.upcomingMonthTab;
          if (checkDate) return value;
        });

        let itemTempId = 0;
        setUpcomingMovies(
          dataUpcomingMovies
            .filter((item) => {
              if (item.movies_id !== itemTempId) {
                itemTempId = item.movies_id;
                return item;
              }
            })
            .slice(0, 7)
        );
      })
      .catch((err) => {
        console.log(err);
        setUpcomingMoviesLoading(true);
      })
      .finally(() => {
        setUpcomingMoviesLoading(false);
      });
  }, [movie.upcomingMonthTab]);

  return (
    <div id="home">
      <Navbar />

      {/* section-cta */}
      <section id="cta">
        <div className="container">
          <div className="row">
            {/* left-side */}
            <div className="col-lg-6 col-sm-12 col-md-12 col-12 text-center left-side-cta">
              <p>
                Nearest Cinema, Newest Movie, <br />{" "}
                <span className="title-cta"> Find out now!</span>
              </p>
            </div>

            {/* right-side */}
            <div className="col-lg-6 col-sm-12 col-md-12 col-12 right-side-cta">
              <div>
                <img src={imgCta1} alt="cta-1" className="img-cta-1" />
                <img src={imgCta2} alt="cta-2" className="img-cta-2" />
                <img src={imgCta3} alt="cta-3" className="img-cta-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end-section-cta */}

      {/* section-now-showing-movies */}
      <section id="movies-showing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-5 col-12">
              <div className="float-start">
                <h3 className="text-underline color-primary title-section">
                  Now Showing
                </h3>
              </div>
              <div className="float-end">
                <h6
                  className="color-primary click"
                  onClick={() => {
                    dispatch(movieReducer.setTypeView({ typeView: "now" }));
                    navigate("/view-movie");
                  }}
                >
                  View All
                </h6>
              </div>
            </div>
          </div>

          <div className="row row-horizontal-scroll p-3 mt-4">
            {showingMoviesLoading ? (
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
                  <CardMovie
                    id={value.movies_id}
                    srcImage={`https://res.cloudinary.com/daouvimjz/image/upload/${value.movie_picture}`}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>
      {/* end-section-now-showing-movies */}

      {/* section-upcoming-movies */}
      <section id="upcoming-movies">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-5 col-12">
              <div className="float-start">
                <h3 className="title-section">Upcoming Movies</h3>
              </div>
              <div className="float-end">
                <h6
                  className="color-primary click"
                  onClick={() => {
                    dispatch(movieReducer.setTypeView({ typeView: "now" }));
                    navigate("/view-movie");
                  }}
                >
                  View All
                </h6>
              </div>
            </div>
          </div>

          <div className="row row-horizontal-scroll p-3 mt-4">
            <MonthTab monthActive={movie.upcomingMonthTab} />
          </div>

          <div className="row row-horizontal-scroll p-3">
            {upcomingMoviesLoading ? (
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
            ) : upcomingMovies.length > 0 ? (
              upcomingMovies.map((value, key) => {
                return (
                  <CardMovieData
                    srcImage={`https://res.cloudinary.com/daouvimjz/image/upload/${value.movie_picture}`}
                    title={value.movie_name}
                    category={value.category}
                  />
                );
              })
            ) : (
              <div className="text-center">
                <h5>No available movie here!</h5>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* end-section-upcoming-movies */}

      {/* section-join-member */}
      <section id="join-member">
        <div className="container join-member">
          <div className="text-center w-join-member">
            <p className="mb-4">
              Be the vanguard of the <br />
              <span className="color-primary title-cta">Moviegoers</span>
            </p>
            <div className="row m-0 p-0">
              <div className="col-lg-9 ">
                <input
                  type="text"
                  className="form-control height-50 mb-2"
                  placeholder="Type your email"
                  name=""
                  id=""
                />
              </div>
              <div className="col-lg-3">
                <button className="btn height-50 w-100 btn-primary btn-join">
                  Join
                </button>
              </div>
            </div>
            <p className="description-join mt-4">
              By joining you as a Tickitz member, <br />
              we will always send you the latest updates via email .
            </p>
          </div>
        </div>
      </section>
      {/* end-section-join-member */}

      {/* footer */}
      <Footer />
      {/* end-footer */}
    </div>
  );
}

export default Home;
