import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/components/navbar.css";
import icon_navbar from "../../images/icon-navbar-tickitz.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  // console.log(showNavbar);
  return (
    <div id="navbar-home">
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              if (showNavbar) {
                setShowNavbar(false);
              } else {
                setShowNavbar(true);
              }
            }}
            data-bs-toggle="collapse"
            // data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={` ${
              showNavbar
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item me-5">
                <Link to="/" className="nav-link" aria-current="page">
                  <img
                    src={icon_navbar}
                    alt="icon"
                    className="img-icon-navbar"
                  />
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="" className="nav-link">
                  List Movie
                </Link>
              </li>
            </ul>

            <div className="nav-link">
              <button
                className="btn btn-login"
                // onClick={() => {
                //   navigate("/login");
                // }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
