import React from "react";
import LeftSideAuth from "../../components/molecules/LeftSideAuth";
import RightSideAuth from "../../components/molecules/RightSideAuth";
import "../../styles/auth/login.css";
import "../../styles/components/leftSideAuth.css";
import "../../styles/components/rightSideAuth.css";

function Login() {
  return (
    <div id="sign-in">
      <div className="row">
        {/* left-side */}
        <div className="col-lg-6 col-12 ">
          <LeftSideAuth />
        </div>

        {/* right-side */}
        <div className="col-lg-6 col-12 ">
          <RightSideAuth />
        </div>
      </div>
    </div>
  );
}

export default Login;
