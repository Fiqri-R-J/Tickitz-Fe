import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/ticket.css";
import qrIcon from "../images/qr-ticket.png";

function Ticket() {
  return (
    <div>
      <Navbar />

      <div id="Ticket">
        <div class="container text-center">
          <div class="row">
            <div class="col-12 mt-5 mb-5 align-items-center">
              <div class="border-ticket ">
                <div class="row ">
                  <div class="col-12 align-self-start text-ticket">
                    <h2>Proof of Payment</h2>
                    <div class="d-flex justify-content-end ticket-card">
                      <img src={qrIcon} className="d-block" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Ticket;
