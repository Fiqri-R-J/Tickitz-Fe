import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo-app.png";

function LeftSideAuth() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    {
      if (auth.isAuth) {
        navigate("/");
      }
    }
  }, []);

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
