import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/components/navbar.css";
import icon_navbar from "../../images/icon-navbar-tickitz.png";
import { useDispatch, useSelector } from "react-redux";
import * as authReducer from "../../stores/auth/index";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

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
                <Link to="/view-movie" className="nav-link">
                  List Movie
                </Link>
              </li>
            </ul>

            {auth.isAuth ? (
              <div className="nav-link nav-user">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="me-2 mx-auto user-profile-picture"
                      src={`https://res.cloudinary.com/daouvimjz/image/upload/${auth?.data?.profilePicture}`}
                      width={"40px"}
                      height={"40px"}
                      alt="profile"
                    />
                    <span>{auth?.data?.name}</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li className="m-2 ms-2">
                      <span
                        className="logout"
                        onClick={() => {
                          navigate("/profile");
                        }}
                      >
                        Profile
                      </span>
                    </li>
                    <li className="m-2">
                      <span
                        className="logout"
                        onClick={() => {
                          dispatch(
                            authReducer.setAuth({
                              data: null,
                              id: null,
                            })
                          );
                          localStorage.clear();
                          navigate("/");
                        }}
                      >
                        Logout
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="nav-link text-center">
                <button
                  className="btn btn-login"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
