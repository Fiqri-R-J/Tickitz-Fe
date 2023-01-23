import React from "react";
import "../styles/View-movie.css";
import Navbar from "../components/organisms/Navbar.jsx";
import MonthTab from "../components/atoms/MonthTab.jsx";
import CardMovieData from "../components/molecules/CardMovieData.jsx";
import mShowing1 from "../images/home-page/movies-showing-1.jpg";
import Footer from "../components/organisms/Footer.jsx";

function ViewMovie() {
  return (
    <div>
      <div id="body">
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
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
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
            <div class="row">
              {[...new Array(8)].map((value, key) => {
                return (
                  <div class="col-3 card">
                    {" "}
                    <CardMovieData srcImage={mShowing1} />
                  </div>
                );
              })}
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
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
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
