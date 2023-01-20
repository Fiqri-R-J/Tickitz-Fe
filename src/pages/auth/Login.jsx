import React from "react";
import { useState } from "react";
import "../../styles/auth/login.css";

function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div id="sign-in">
      <div className="row">
        {/* left-side */}
        <div className="col-lg-6 col-12 left-side-auth d-flex">
          <div className="overlay-background">
            <div className="left-side-group text-center">
              <img
                src="https://asset.tix.id/wp-content/uploads/2021/10/TIXID_logo_inverse-300x82.png"
                alt=""
                width={"400px"}
              />
              <p className="mt-4">wait, watch, wow!</p>
            </div>
          </div>
        </div>

        {/* right-side */}
        <div className="col-lg-6 col-12 right-side-auth">
          <div className="right-side-group col-lg-8 col-12">
            <h1>Sign In</h1>
            <p>
              Sign in with your data that you entered during your registration
            </p>

            <div className="form-group mt-5">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Write your email"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                type={isShowPassword ? "text" : "password"}
                className="form-control mt-2"
                placeholder="Write your password"
              />
            </div>

            <div className="form-check form-switch mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={(event) => setIsShowPassword(event.target.checked)}
              />
              <label
                className="form-check-label label-show-password"
                htmlFor="flexSwitchCheckDefault"
              >
                Show Password
              </label>
            </div>

            <button className="btn btn-primary mt-4 w-100">Sign In</button>

            <div className="menu mt-5 text-center">
              <p>
                Forgot your password? <span> Reset now</span>
              </p>
              <p>
                Don’t have an account? <span>Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
