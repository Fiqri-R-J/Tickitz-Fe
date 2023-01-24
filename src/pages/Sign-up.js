import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Sign-up.css";

function SignUp() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const data = {
    email,
    password,
    phone_number: phone,
    username: name,
  };

  const register = () => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_URL_BACKEND}/users/register`, data)
      .then((res) => {
        // set status success
        setSuccessMsg(res?.data?.message);
        setError(false);
        setSuccess(true);

        // redirect to home page
        navigate("/login");
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setSuccess(false);
        setError(true);
        setErrorMsg(
          err?.response?.data?.message?.username?.message ||
            err?.response?.data?.message?.phone_number?.message ||
            err?.response?.data?.message?.email?.message ||
            err?.response?.data?.message?.password?.message ||
            err?.response?.data?.message?.message ||
            "Error! Please try again."
        );
      })
      .finally(() => setIsLoading(false));
  };

  React.useEffect(() => {
    {
      if (auth.isAuth) {
        navigate("/");
      }
    }
  }, []);

  return (
    <div>
      <div id="register">
        <div className="row">
          {/* <!--Left--> */}
          <div className="col-lg-6 col-12 background-login">
            <img src="image/tickitz 1.png" className="tickitz" alt="cover" />
            <p>wait, watch, wow!</p>
          </div>
          {/* <!--Right--> */}
          <div className="col-lg-6 col-12 form-sign-up">
            <div>
              <h2>Sign Up</h2>
              <p>Fill your additional details</p>
              {error === true ? (
                <div
                  className="alert alert-danger mb-3"
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
                  className="alert alert-success mb-3"
                  style={{ marginBottom: "-30px" }}
                  role="alert"
                >
                  {successMsg}
                </div>
              ) : (
                ""
              )}
              <div className="mb-3 form-width">
                <label
                  htmlFor="name-input"
                  className="form-label form-control-lg"
                >
                  Name
                </label>
                <input
                  type="name"
                  className="form-control form-tabel"
                  id="name-input"
                  placeholder="Write Your Name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-3 form-width">
                <label
                  htmlFor="phone-input"
                  className="form-label form-control-lg"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control form-tabel"
                  id="phone-input"
                  placeholder="Write Your Phone Number"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="mb-3 form-width">
                <label
                  htmlFor="email-input"
                  className="form-label form-control-lg"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-tabel"
                  id="email-input"
                  placeholder="Write Your Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-3 form-width">
                <label
                  htmlFor="password-input"
                  className="form-label form-control-lg"
                >
                  Password
                </label>
                <input
                  type={isShowPassword ? "text" : "password"}
                  className="form-control form-tabel"
                  id="password-input"
                  placeholder="Write Your Password"
                  onChange={(event) => setPassword(event.target.value)}
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
              <div className="d-grid gap-2 but">
                {isLoading ? (
                  <button
                    type="button"
                    className="btn btn-warning color"
                    disabled
                  >
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-warning color"
                    onClick={register}
                  >
                    Sign Up
                  </button>
                )}
              </div>
              <p className="accc">
                Already have account?
                <Link className="sign-in" to="/login">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
