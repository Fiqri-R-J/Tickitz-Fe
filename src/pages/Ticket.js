import React from "react"
import Navbar from "../components/organisms/Navbar"
import Footer from "../components/organisms/Footer"
import "../styles/ticket.css"

function Ticket(){
    return(
        <div>
            <Navbar/>

            <div id="Ticket">
                <div class="container text-center">
                    <div class="row">
                <div class="col align-items-center">
                <div class="border-ticket">
                <div class="row">
                    <div class="col align-self-start text-ticket">
                    <h2>Proof of Payment</h2>
                    <div class="col align-self-center ticket-card">
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Ticket