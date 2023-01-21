import React, { useState } from "react";
import Navbar from "../components/organisms/Navbar";
import "../styles/home.css";
import imgCta1 from "../images/home-page/cta-1.jpg";
import imgCta2 from "../images/home-page/cta-2.jpg";
import imgCta3 from "../images/home-page/cta-3.jpg";
import mShowing1 from "../images/home-page/movies-showing-1.jpg";
import MonthTab from "../components/atoms/MonthTab";
import Footer from "../components/organisms/Footer";

function Home() {
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
                <h3 className="text-underline color-primary">Now Showing</h3>
              </div>
              <div className="float-end">
                <h6 className="color-primary">View All</h6>
              </div>
            </div>
          </div>

          <div className="row row-horizontal-scroll p-3 mt-4">
            {[...new Array(8)].map((value, key) => {
              return (
                <div key={key} className="card card-movies">
                  <div className="card-body">
                    <img src={mShowing1} className="d-block" alt="..." />
                  </div>
                </div>
              );
            })}
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
                <h3 className="">Upcoming Movies</h3>
              </div>
              <div className="float-end">
                <h6 className="color-primary">View All</h6>
              </div>
            </div>
          </div>

          <div className="row row-horizontal-scroll p-3 mt-4">
            <MonthTab />
          </div>

          <div className="row row-horizontal-scroll p-3">
            {[...new Array(8)].map((value, key) => {
              return (
                <div key={key} className="card card-movies">
                  <div className="card-body">
                    <img src={mShowing1} className="d-block" alt="..." />
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
            })}
          </div>
        </div>
      </section>
      {/* end-section-upcoming-movies */}

      {/* section-join-member */}
      <section id="join-member">
        <div className="container join-member">
          <div className="text-center w-join-member">
            <p className="mb-4">
              Be the vanguard of the <br />{" "}
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
