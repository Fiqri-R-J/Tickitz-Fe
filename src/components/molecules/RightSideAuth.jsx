import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as authReducer from "../../stores/auth/index";

function RightSideAuth() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const register = () => navigate("/sign-up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const login = () => {
    setIsLoading(true);
    const data = {
      email,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, data)
      .then((res) => {
        // set status success
        setError(false);
        setSuccess(true);

        setSuccessMsg(res?.data?.message);
        localStorage.setItem("dataauth", res?.data?.data?.users_id);

        // store data auth to redux
        dispatch(
          authReducer.setAuth({
            data: res?.data?.data,
            isAuth: true,
          })
        );

        // redirect to home page
        navigate("/");
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setSuccess(false);
        setError(true);
        setErrorMsg(
          err?.response?.data?.message?.email?.message ||
            err?.response?.data?.message?.password?.message ||
            err?.response?.data?.message?.message ||
            "Error! Please try again."
        );
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div id="right-side-auth">
      <div className="right-side-auth">
        <div className="right-side-group col-lg-8 col-12">
          <h1>Sign In</h1>
          <p>
            Sign in with your data that you entered during your registration
          </p>

          {error === true ? (
            <div
              className="alert alert-danger"
              style={{ marginBottom: "-30px" }}
              role="alert"
            >
              {errorMsg}
            </div>
          ) : (
            ""
          )}

          {success === true ? (
            <div
              className="alert alert-success"
              style={{ marginBottom: "-30px" }}
              role="alert"
            >
              {successMsg}
            </div>
          ) : (
            ""
          )}

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

          {isLoading ? (
            <button className="btn btn-primary mt-4 w-100" disabled>
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </button>
          ) : (
            <button
              className="btn btn-primary mt-4 w-100"
              onClick={() => login()}
            >
              Sign In
            </button>
          )}

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
