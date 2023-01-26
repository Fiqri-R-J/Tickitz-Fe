import React, { useState } from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/profile.css";
import { useDispatch, useSelector } from "react-redux";
import * as authReducer from "../stores/auth/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import iconCineone21 from "../images/cineone21-icon.png";

function Profile() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [username, setUsername] = useState(auth.username);
  const [email, setEmail] = useState(auth.email);
  const [phone_number, setPhoneNumber] = useState(auth.phoneNumber);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [tab, setTab] = useState("account");

  const update = () => {
    setSuccess(false);
    const data = {
      username,
      email,
      phone_number,
    };

    const config = {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${auth.data.accessToken}`,
      },
    };

    axios
      .patch(
        `${process.env.REACT_APP_URL_BACKEND}/users/edit/${auth.data.users_id}`,
        data,
        config
      )
      .then((res) => {
        setSuccess(true);
        console.log(res);
        // store data auth to redux
        // dispatch(
        //   authReducer.setAuth({
        //     data: res?.data?.data,
        //     email: res?.data?.data?.email,
        //     username: res?.data?.data?.username,
        //     phoneNumber: res?.data?.data?.phone_number,
        //     isAuth: true,
        //   })
        // );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    dispatch(
      authReducer.setAuth({
        data: null,
        isAuth: null,
      })
    );
    localStorage.clear();
    navigate("/");
  };

  React.useEffect(() => {
    {
      if (window.location.hash === "#order-history") setTab("order-history");

      if (!auth.isAuth) {
        navigate("/login");
      }
    }
  }, []);

  return (
    <div id="profile">
      <Navbar />
      <div id="content">
        <div className="container">
          <div className="row profile">
            {/* leftside-content */}
            <div className="col-lg-3">
              <div className="card card-profile">
                <div className="card-body">
                  <label className="p-2 info">INFO</label>
                  <div className="profile-data mt-2">
                    <img
                      src={
                        auth?.data?.profilePicture.includes("https")
                          ? `${auth?.data?.profilePicture}`
                          : `https://res.cloudinary.com/daouvimjz/image/upload/${auth?.data?.profilePicture}`
                      }
                      alt="profile-image"
                    />
                    <h5 className="mt-4">{auth?.data?.username}</h5>
                    <p>Moviegoers</p>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-primary btn-logout mt-2 mb-2"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* rightside-content */}
            <div className="col-lg-9 ps-4 right-side">
              <div className="row bg-white rounded">
                <div className="menu-profile">
                  <button
                    className={`me-4 color-aaa ${
                      tab === "account" ? "tab-active" : ""
                    }`}
                    onClick={() => setTab("account")}
                  >
                    Account Settings
                  </button>
                  <button
                    className={`color-aaa ${
                      tab === "order-history" ? "tab-active" : ""
                    }`}
                    onClick={() => setTab("order-history")}
                  >
                    Order History
                  </button>
                </div>
              </div>

              {tab === "order-history" ? (
                <div>
                  <div className="row bg-white rounded mt-3">
                    <div className="card">
                      <div className="card-body d-flex">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-6">
                              <p>Tuesday, 07 July 2022 - 04:30pm</p>
                              <h5>
                                <b>Black Widow</b>
                              </h5>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-end">
                              <img
                                src={iconCineone21}
                                alt="icon-cinema-profile"
                                style={{ width: "120px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-white">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-6">
                              <div className="bg-success p-2 col-lg-4 col-12 text-center text-white rounded mt-2 mb-2">
                                Ticket in active
                              </div>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-end">
                              <p
                                style={{ cursor: "pointer" }}
                                onClick={() => navigate("/ticket")}
                              >
                                See Details
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row bg-white rounded mt-3">
                    <div className="card">
                      <div className="card-body d-flex">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-6">
                              <p>Tuesday, 07 May 2022 - 04:30pm</p>
                              <h5>
                                <b>Thor: Ragnarok</b>
                              </h5>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-end">
                              <img
                                src={iconCineone21}
                                alt="icon-cinema-profile"
                                style={{ width: "120px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-white">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-6">
                              <div className="bg-secondary p-2 col-lg-4 col-12 text-center text-white rounded mt-2 mb-2">
                                Ticket Used
                              </div>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-end">
                              <p style={{ cursor: "pointer" }}>See Details</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {success ? (
                    <div
                      class="alert alert-success alert-dismissible fade show mt-4"
                      role="alert"
                    >
                      Data berhasil diubah!
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                        onClick={() => setSuccess(false)}
                      ></button>
                    </div>
                  ) : (
                    ""
                  )}

                  <div>
                    <div className="row bg-white rounded mt-4">
                      <div className="detail-information p-3">
                        <div>
                          <p>Detail Information</p>
                          <hr />

                          <div>
                            <div className="row mt-4">
                              <div className="form-group col-lg-6 mb-3">
                                <label htmlFor="">Username</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={auth?.data?.username}
                                  onChange={(event) =>
                                    setUsername(event.target.value)
                                  }
                                />
                              </div>
                              <div className="form-group col-lg-6 mb-3">
                                <label htmlFor="">E-mail</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={auth?.data?.email}
                                  onChange={(event) =>
                                    setEmail(event.target.value)
                                  }
                                />
                              </div>
                              <div className="form-group col-lg-6 ">
                                <label htmlFor="">Phone Number</label>
                                <div className="input-group mb-3">
                                  <span className="input-group-text">+62</span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={auth?.data?.phoneNumber}
                                    onChange={(event) =>
                                      setPhoneNumber(event.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-update-information mt-2"
                      onClick={update}
                    >
                      Update changes
                    </button>
                  </div>

                  <div className="mt-5">
                    <div className="row bg-white rounded mt-4">
                      <div className="detail-information p-3">
                        <div>
                          <p>Account and Privacy</p>
                          <hr />

                          <div>
                            <div className="row mt-4">
                              <div className="form-group col-lg-6">
                                <label htmlFor="">New Password</label>
                                <input
                                  type={isShowPassword ? "text" : "password"}
                                  className="form-control mt-2"
                                  placeholder="Write your password"
                                />
                                <div className="form-check form-switch mt-1">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                    onChange={(event) =>
                                      setIsShowPassword(event.target.checked)
                                    }
                                  />
                                  <label
                                    className="form-check-label label-show-password"
                                    htmlFor="flexSwitchCheckDefault"
                                  >
                                    Show Password
                                  </label>
                                </div>
                              </div>

                              <div className="form-group col-lg-6">
                                <label htmlFor="">Confirm Password</label>
                                <input
                                  type={
                                    isShowConfirmPassword ? "text" : "password"
                                  }
                                  className="form-control mt-2"
                                  placeholder="Write your password"
                                />
                                <div className="form-check form-switch mt-1">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                    onChange={(event) =>
                                      setIsShowConfirmPassword(
                                        event.target.checked
                                      )
                                    }
                                  />
                                  <label
                                    className="form-check-label label-show-password"
                                    htmlFor="flexSwitchCheckDefault"
                                  >
                                    Show Password
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-update-information mt-2">
                      Update changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
