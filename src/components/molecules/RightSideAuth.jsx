import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RightSideAuth() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const register = () => navigate("/sign-up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = {
      email,
      password,
    };

    console.log(data);
    axios
      .post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  return (
    <div id="right-side-auth">
      <div className="right-side-auth">
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
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="form-control mt-2"
              placeholder="Write your password"
              onChange={(event) => setPassword(event.target.value)}
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

          <button className="btn btn-primary mt-4 w-100" onClick={login}>
            Sign In
          </button>

          <div className="menu mt-5 text-center">
            <p>
              Forgot your password? <span> Reset now</span>
            </p>
            <p>
              Don’t have an account?{" "}
              <span className="menu-cursor" onClick={register}>
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideAuth;
