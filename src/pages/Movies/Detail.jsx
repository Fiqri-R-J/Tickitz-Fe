import React from "react";
import CardMovie from "../../components/molecules/CardMovie";
import Navbar from "../../components/organisms/Navbar";
import mShowing1 from "../../images/home-page/movies-showing-1.jpg";
import Footer from "../../components/organisms/Footer";
import iconEbuid from "../../images/ebuid-icon.png";
import iconCineone21 from "../../images/cineone21-icon.png";
import iconHiflix from "../../images/hiflix-icon.png";

import "../../styles/detail.css";
import CardMovieData from "../../components/molecules/CardMovieData";

function Detail() {
  return (
    <div id="detail-movie">
      <Navbar />

      {/* section-data-movie */}
      <section id="data-movie">
        <div className="container">
          <div className="row">
            {/* left-side */}
            <div className="col-lg-4 image-movie-data">
              <CardMovie srcImage={mShowing1} />
            </div>

            {/* right-side */}
            <div className="col-lg-8 data-movie-description">
              <div>
                <h2>Spider-Man: Homecoming</h2>
                <h5>Adventure, Action</h5>
              </div>

              <div className="mt-5">
                <div className="row">
                  <div className="col-lg-3">
                    <p className="mini-title">Release Date</p>
                    <p> June 28, 2017</p>
                  </div>
                  <div className="col-lg-9">
                    <p className="mini-title">Directed by</p>
                    <p>John Watss</p>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-lg-3">
                    <p className="mini-title">Duration</p>
                    <p className="mini-desc">2 hours 13 minutes</p>
                  </div>
                  <div className="col-lg-9">
                    <p className="mini-title">Casts</p>
                    <p className="mini-desc">
                      Tom Holland, Michael Keaton, Robert Downey Jr., Sumanto
                    </p>
                  </div>
                </div>

                <hr />

                <div className="synopsis mt-4">
                  <h5>
                    <b>Synopsis</b>
                  </h5>
                  <p className="synopsis-description">
                    Thrilled by his experience with the Avengers, Peter returns
                    home, where he lives with his Aunt May, under the watchful
                    eye of his new mentor Tony Stark, Peter tries to fall back
                    into his normal daily routine - distracted by thoughts of
                    proving himself to be more than just your friendly
                    neighborhood Spider-Man - but when the Vulture emerges as a
                    new villain, everything that Peter holds most important will
                    be threatened.
                  </p>
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
                  <input type="date" className="form-control m-2" />
                  <div class="input-group m-2">
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
            {[...new Array(6)].map((value, key) => {
              return (
                <div className="col-lg-4 mb-3">
                  <div className="card card-schedule">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-5 d-flex justify-content-center align-items-center ">
                          <img
                            src={iconEbuid}
                            className="icon-cinema"
                            alt="icon-cinema"
                          />
                        </div>
                        <div className="col-lg-7">
                          <div className="row">
                            <h4 className="title-cinema">ebv.id</h4>
                            <p className="address-cinema">
                              Whatever street No. 12, South Purwokerto
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                        <div className="col-lg-3 col-3 time">08:30am</div>
                        <div className="col-lg-3 col-3 time">10:00am</div>
                        <div className="col-lg-3 col-3 time">12:00pm</div>
                        <div className="col-lg-3 col-3 time">02:00pm</div>
                        <div className="col-lg-3 col-3 time">04:00pm</div>
                        <div className="col-lg-3 col-3 time">06:00pm</div>
                        <div className="col-lg-3 col-3 time">08:00pm</div>
                      </div>
                      <div className="row mt-4">
                        <div className="d-flex justify-content-between">
                          <h5 className="ps-2">Price</h5>
                          <h5 className="">$10.00/seat</h5>
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
