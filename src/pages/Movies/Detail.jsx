import React, { useState } from "react";
import CardMovie from "../../components/molecules/CardMovie";
import Navbar from "../../components/organisms/Navbar";
import mShowing1 from "../../images/home-page/movies-showing-1.jpg";
import Footer from "../../components/organisms/Footer";
import iconEbuid from "../../images/ebuid-icon.png";
import iconCineone21 from "../../images/cineone21-icon.png";
import iconHiflix from "../../images/hiflix-icon.png";
import "../../styles/detail.css";
import { useSelector } from "react-redux";

function Detail() {
  const { detail } = useSelector((state) => state.movie);
  const [cinema, setCinema] = useState([]);
  const [order, setOrder] = useState({ movies_id: null, schedules_id: null });
  const month = [
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

  const convertDate = (date) => {
    let newDate = new Date(date);
    return `${newDate.getDate()} ${
      month[newDate.getMonth()]
    }, ${newDate.getFullYear()}`;
  };

  const checkout = (item) => {
    setOrder({ movies_id: item.value, schedules_id: item.schedules_id });
  };

  React.useEffect(() => {
    const cinemas = [];
    const dataCinema = [];

    detail.map((item) => {
      if (cinemas.indexOf(item.cinema) === -1) {
        cinemas.push(item.cinema);
        dataCinema.push(item);
      }
    });

    setCinema(dataCinema);
  }, []);

  return (
    <div id="detail-movie">
      <Navbar />

      {/* section-data-movie */}
      <section id="data-movie">
        <div className="container">
          <div className="row">
            {/* left-side */}
            <div className="col-lg-4 image-movie-data">
              <CardMovie
                srcImage={`https://res.cloudinary.com/daouvimjz/image/upload/${detail?.[0].movie_picture}`}
              />
            </div>

            {/* right-side */}
            <div className="col-lg-8 data-movie-description">
              <div>
                <h2>{detail?.[0].movie_name}</h2>
                <h5>{detail?.[0].category}</h5>
              </div>

              <div className="mt-5">
                <div className="row">
                  <div className="col-lg-3">
                    <p className="mini-title">Release Date</p>
                    <p> {convertDate(detail?.[0].release_date)}</p>
                  </div>
                  <div className="col-lg-9">
                    <p className="mini-title">Directed by</p>
                    <p>{detail?.[0].director}</p>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-lg-3">
                    <p className="mini-title">Duration</p>
                    <p className="mini-desc">
                      {detail?.[0].duration_hour} hours{" "}
                      {detail?.[0].duration_mins} minutes
                    </p>
                  </div>
                  <div className="col-lg-9">
                    <p className="mini-title">Casts</p>
                    <p className="mini-desc">{detail?.[0].casts}</p>
                  </div>
                </div>

                <hr />

                <div className="synopsis mt-4">
                  <h5>
                    <b>Synopsis</b>
                  </h5>
                  <p className="synopsis-description">{detail?.[0].synopsis}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end-section-data-movie */}

      {/* section-showtime-movie */}
      <section id="showtime-movie">
        <div className="container">
          <div className="showtime">
            <div>
              <h4>
                <b> Showtimes and Tickets</b>
              </h4>
            </div>
          </div>
          <div className="row mt-2">
            <div className="d-flex justify-content-center">
              <div className="col-lg-4">
                <div className="d-flex justify-content-center">
                  <select name="" id="" className="form-control m-2 w-100">
                    <option value="10:00am">10:00am</option>
                    <option value="12:00pm">12:00pm</option>
                    <option value="14:00pm">14:00pm</option>
                    <option value="16:00pm">16:00pm</option>
                    <option value="18:00pm">18:00pm</option>
                    <option value="20:00pm">20:00pm</option>
                  </select>
                  <div className="input-group m-2">
                    <select name="" id="" className="form-control w-100">
                      <option value="" selected disabled>
                        Location
                      </option>
                      <option value="Palembang">Palembang</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Jambi">Jambi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {cinema.map((value, key) => {
              return (
                <div className="col-lg-4 mb-3">
                  <div className="card card-schedule">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-5 d-flex justify-content-center align-items-center ">
                          <img
                            src={
                              value.cinema === "ebv.id"
                                ? iconEbuid
                                : value.cinema === "hiflix"
                                ? iconHiflix
                                : iconCineone21
                            }
                            className="icon-cinema"
                            alt="icon-cinema"
                          />
                        </div>
                        <div className="col-lg-7">
                          <div className="row">
                            <h4 className="title-cinema">{value.cinema}</h4>
                            <p className="address-cinema">{value.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                        {/* {detail.reverse().map((item) => {
                          if (item.cinema === value.cinema) {
                            return (
                              <div
                                className="col-lg-3 col-3 time"
                                onClick={checkout(item)}
                              >
                                {item.time}
                              </div>
                            );
                          }
                        })} */}
                      </div>
                      <div className="row mt-4">
                        <div className="d-flex justify-content-between">
                          <h5 className="ps-2">Price</h5>
                          <h5 className="">{value.price}</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-sm btn-booking">
                            Book now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* end-section-showtime-movie */}

      <Footer />
    </div>
  );
}

export default Detail;
