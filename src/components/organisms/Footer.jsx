import React from "react";
import iconEbuid from "../../images/ebuid-icon.png";
import iconCineone21 from "../../images/cineone21-icon.png";
import iconHiflix from "../../images/hiflix-icon.png";
import miniIconInstagram from "../../images/instagram-mini-icon.png";
import miniIconFacebook from "../../images/facebook-mini-icon.png";
import miniIconTwitter from "../../images/twitter-mini-icon.png";
import miniIconYoutube from "../../images/youtube-mini-icon.png";
import iconNavbar from "../../images/icon-navbar-tickitz.png";
import "../../styles/components/footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <img src={iconNavbar} alt="" />
            <p className="color-footer mt-3">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </p>
          </div>
          <div className="col-lg-3 mb-4">
            <h5>Explore</h5>
            <br />
            <div className="list-group">
              <a href="#" className="footer-link color-footer">
                Home
              </a>
              <a href="#" className="footer-link color-footer">
                List Movie
              </a>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <h5>Our Sponsor</h5>
            <br />
            <div className="list-group">
              <a href="#" className="footer-link color-footer">
                <img src={iconEbuid} alt="" />
              </a>
              <a href="#" className="footer-link color-footer mt-4">
                <img src={iconCineone21} alt="" />
              </a>
              <a href="#" className="footer-link color-footer mt-4">
                <img src={iconHiflix} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <h5>Follow Us</h5>
            <br />
            <div className="list-group">
              <a
                href="#"
                className="mb-3 footer-link color-footer d-flex align-items-center"
              >
                <img src={miniIconFacebook} className="me-3" alt="" />
                <span>Tickitz Cinema id</span>
              </a>
              <a
                href="#"
                className="mb-3 footer-link color-footer d-flex align-items-center"
              >
                <img src={miniIconInstagram} className="me-3" alt="" />
                <span>tickitz.id</span>
              </a>
              <a
                href="#"
                className="mb-3 footer-link color-footer d-flex align-items-center"
              >
                <img src={miniIconTwitter} className="me-3" alt="" />
                <span>tickitz.id</span>
              </a>
              <a
                href="#"
                className="mb-3 footer-link color-footer d-flex align-items-center"
              >
                <img src={miniIconYoutube} className="me-3" alt="" />
                <span>Tickitz Cinema id</span>
              </a>
            </div>
          </div>

          <div className="col-lg-12 text-center mt-4">
            <p className="color-footer">
              © 2023 Tickitz. All Rights Reserved by Avangers Coders
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
