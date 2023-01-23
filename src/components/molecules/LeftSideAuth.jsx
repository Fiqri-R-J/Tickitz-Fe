import React from "react";
import logo from "../../images/logo-app.png";

function LeftSideAuth() {
  return (
    <div id="left-side-auth">
      <div className="left-side-auth d-flex">
        <div className="overlay-background">
          <div className="left-side-group text-center">
            <img src={logo} alt="" width={"400px"} />
            <p className="">wait, watch, wow!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideAuth;
