import React, { useState } from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/profile.css";

function Profile() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

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
                      src="https://www.omgtb.com/wp-content/uploads/2021/04/620_NC4xNjE-1-scaled.jpg"
                      alt="profile-image"
                    />
                    <h5 className="mt-4">Jonas El Rodriguez</h5>
                    <p>Moviegoers</p>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary btn-logout mt-2 mb-2">
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
                          <div className="form-group col-lg-6">
                            <label htmlFor="">First Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-lg-6">
                            <label htmlFor="">Last Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-lg-6 mt-3">
                            <label htmlFor="">E-mail</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-lg-6 mt-3">
                            <label htmlFor="">Phone Number</label>
                            <div className="input-group mb-3">
                              <span className="input-group-text">+62</span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="xxx"
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
