import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sign-up.css";

function SignUp() {
  return (
    <div>
      <div id="register">
      <div class="row">
        {/* <!--Left--> */}
        <div class="col-lg-6 col-12 background-login">
          <img src="image/tickitz 1.png" class="tickitz" alt="cover" />
          <p>wait, watch, wow!</p>
        </div>
        {/* <!--Right--> */}
        <div class="col-lg-6 col-12 form-sign-up">
          <div>
            <h2>Sign Up</h2>
            <p>Fill your additional details</p>
            <div class="mb-3 form-width">
              <label for="name-input" class="form-label form-control-lg">
                Name
              </label>
              <input
                type="name"
                class="form-control form-tabel"
                id="name-input"
                placeholder="Write Your Name"
              />
            </div>
            <div class="mb-3 form-width">
              <label for="phone-input" class="form-label form-control-lg">
                Phone Number
              </label>
              <input
                type="number"
                class="form-control form-tabel"
                id="phone-input"
                placeholder="Write Your Phone Number"
              />
            </div>
            <div class="mb-3 form-width">
              <label for="email-input" class="form-label form-control-lg">
                Email
              </label>
              <input
                type="email"
                class="form-control form-tabel"
                id="email-input"
                placeholder="Write Your Email"
              />
            </div>
            <div class="mb-3 form-width">
              <label for="password-input" class="form-label form-control-lg">
                Password
              </label>
              <input
                type="password"
                class="form-control form-tabel"
                id="password-input"
                placeholder="Write Your Password"
              />
            </div>
            <div class="d-grid gap-2 but">
              <button type="button" class="btn btn-warning color">
                <Link class="text" to="">
                  Sign Up
                </Link>
              </button>
            </div>
            <p class="accc">
              Already have account?
              <Link class="sign-in" to="">
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
