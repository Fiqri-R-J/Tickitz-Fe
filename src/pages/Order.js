import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/order.css";
import Cineone21 from "../images/cineone21-icon.png";
import Ebuid from "../images/ebuid-icon.png";
import Hiflix from "../images/hiflix-icon.png";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <section id="order">
        <div class="container" style={{ marginTop: "100px" }}>
          <div class="row top">
            <div class="col-8 left-side">
              <h3>Movie Selected</h3>
              <div class="border-top">
                <div class=" text-center">
                  <div class="row justify-content-between">
                    <div class="col-6 left-top">Spider-Man: Homecoming</div>
                    <div class="col-4 right-top">
                      <button
                        type="button"
                        class="button-change"
                        onClick={() => navigate("/view-movie")}
                      >
                        Change Movie
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Choose Your Seat</h3>
              <div class="border-bot">
                <div class="container text-center">
                  <div class="row justify-content-center">
                    <div class="col-4">
                      <div class="dropdown">
                        <button
                          class="button-seat dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Choose Your Seat
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              A
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              B
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              C
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              D
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              E
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              F
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              G
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="dropdown">
                        <button
                          class="button-seat dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Choose Number Seat
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              1
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              2
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              3
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              4
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              5
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              6
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              7
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              8
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              9
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              10
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              11
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              12
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              13
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              14
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-4 screen">Screen</div>
                </div>
                <div class="container text-center">
                  <div class="row seat-mar">
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <p>A</p>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container text-center">
                  <div class="row seat-pos">
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <p>B</p>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container text-center">
                  <div class="row seat-pos">
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <p>C</p>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container text-center">
                  <div class="row seat-pos">
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <p>D</p>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container text-center">
                  <div class="row seat-pos">
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <p>E</p>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container text-center">
                  <div class="row seat-pos">
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <p>F</p>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container text-center">
                  <div class="row seat-pos">
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <p>G</p>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                        <div class="col seat"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container text-center">
                  <div class="row seat-pos">
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <p></p>
                        <div class="col seat-num">1</div>
                        <div class="col seat-num">2</div>
                        <div class="col seat-num">3</div>
                        <div class="col seat-num">4</div>
                        <div class="col seat-num">5</div>
                        <div class="col seat-num">6</div>
                        <div class="col seat-num">7</div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row justify-content-center row-cols-auto">
                        <div class="col seat-num">8</div>
                        <div class="col ">9</div>
                        <div class="col ">10</div>
                        <div class="col ">11</div>
                        <div class="col ">12</div>
                        <div class="col ">13</div>
                        <div class="col ">14</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container text-center">
                <div class="row justify-content-between but-checkout">
                  <div class="col-4">
                    <button
                      type="button"
                      class="checkout"
                      onClick={() => navigate("/view-movie")}
                    >
                      Change Your Movie
                    </button>
                  </div>
                  <div class="col-4">
                    <button
                      type="button"
                      class="checkout"
                      onClick={() => navigate("/payment")}
                    >
                      Checkout Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 right-side">
              <h3>Order Info</h3>
              <div class="border-right">
                <div class="container text-center">
                  <img src={Cineone21} alt="cinema" />
                  <h3>CineOne21 Cinema</h3>
                  <div class="row justify-content-between">
                    <div class="col-5 left-text">Movie selected</div>
                    <div class="col-7 right-text">Spider-Man: Homecoming</div>
                  </div>
                  <div class="row justify-content-between">
                    <div class="col-8 left-text">Tuesday, 07 July 2020</div>
                    <div class="col-3 right-text">02:00</div>
                  </div>
                  <div class="row justify-content-between">
                    <div class="col-8 left-text">One ticket price</div>
                    <div class="col-3 right-text">$10</div>
                  </div>
                  <div class="row justify-content-between">
                    <div class="col-6 left-text">Seat choosed</div>
                    <div class="col-4 right-text">C4, C5, C6</div>
                  </div>
                  <div class="border-line"></div>
                  <div class="row justify-content-between">
                    <div class="col-6 left-total">Total Payment</div>
                    <div class="col-3 right-total">$30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Order;
