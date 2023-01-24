import React, { useState } from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/profile.css";
import { useDispatch, useSelector } from "react-redux";
import * as authReducer from "../stores/auth/index";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                      src={`https://res.cloudinary.com/daouvimjz/image/upload/${auth?.data?.profilePicture}`}
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
                  <button className="me-4 color-aaa">Account Settings</button>
                  <button className=" color-aaa">Order History</button>
                </div>
              </div>

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
                            />
                          </div>
                          <div className="form-group col-lg-6 mb-3">
                            <label htmlFor="">E-mail</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={auth?.data?.email}
                            />
                          </div>
                          <div className="form-group col-lg-6 ">
                            <label htmlFor="">Phone Number</label>
                            <div className="input-group mb-3">
                              <span className="input-group-text">+62</span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={auth?.data?.email}
                              />
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
                              type={isShowConfirmPassword ? "text" : "password"}
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
                                  setIsShowConfirmPassword(event.target.checked)
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
