import React from 'react'
import Navbar from '../components/organisms/Navbar'
import "../styles/Payment.css"
import Vector from "../images/Vector.png"
import GPay from "../images/logo/GPay.png"
import Visa from "../images/logo/Visa.png"
import Gopay from "../images/logo/Gopay.png"
import Paypal from "../images/logo/Paypal.png"
import Dana from "../images/logo/Dana.png"
import BCA from "../images/logo/BCA.png"
import BRI from "../images/logo/BRI.png"
import Ovo from "../images/logo/Ovo.png"

function Payment(){
    return(
        <div>
        <div id='payment'>
            <div class="container">
            {/* <div>
                <Navbar/>
            </div> */}
            <section id='payment-page'>
                <div class="row">
                    <div class="col-7 left">
                        <h2>Payment Info</h2>
                        <div class="borders">
                        <table class="table">
                        <tbody>
                        <tr>
                        <th class="left-table">Date & time</th>
                        <td class="d-flex flex-row-reverse right-table">Tuesday, 07 July 2020 at 02:00 </td>
                        </tr>
                        <tr>
                        <th  class="left-table">Movie Title</th>
                        <td class="d-flex flex-row-reverse right-table">Spider-Man: Homecoming</td>
                        </tr>
                        <tr>
                        <th  class="left-table">Cinema Name</th>
                        <td class="d-flex flex-row-reverse right-table">CineOne21 Cinema</td>
                        </tr>
                        <tr>
                        <th  class="left-table">Number Of Tickets</th>
                        <td class="d-flex flex-row-reverse right-table">3 pieces</td>
                        </tr>
                        <tr>
                        <th  class="left-table">Total Payment</th>
                        <td class="d-flex flex-row-reverse right-tables">$30,00</td>
                        </tr>
                        </tbody>
                        </table>
                        </div>                        
                    </div>
                    <div class="col-5 right">
                        <h2>Personal Info</h2>
                        <div class='borders'>
                        <div class="info">
                        <div class="mb-3 form-data">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input class="form-control box-data" type="text" placeholder="Full Name" aria-label="Disabled input example" disabled/>
                        </div>
                        <div class="mb-3 form-data">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input class="form-control box-data" type="email" placeholder="Email" aria-label="Disabled input example" disabled/>
                        </div>
                        <div class="mb-3 form-data">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input class="form-control box-data" type="number" placeholder="Phone Number" aria-label="Disabled input example" disabled/>
                        </div>
                        <div class='form-data'>
                        <div class="alert alert-danger correct" role="alert">
                         <img src={Vector}alt='vector'/><h2>Fill You Data Correctly</h2>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                </section>
                <section id='payment-by'>
                    <h2>Choose a Payment Method</h2>
                    <div class="border-pay">
                    <div class="container text-center">
                    <div class="row row-cols-auto">
                    <button type="button" class="button-border"><img src={GPay}alt='Google Play'/></button>
                        <button type="button" class="button-border"><img src={Visa}alt='Visa'/></button>
                        <button type="button" class="button-border"><img src={Gopay}alt='Gopay'/></button>
                        <button type="button" class="button-border"><img src={Paypal}alt='Paypal'/></button>
                    </div>
                    </div>
                    <div class="container text-center">
                    <div class="row row-cols-auto">
                    <button type="button" class="button-border"><img src={Dana}alt='Dana'/></button>
                        <button type="button" class="button-border"><img src={BCA}alt='BCA'/></button>
                        <button type="button" class="button-border"><img src={BRI}alt='BRI'/></button>
                        <button type="button" class="button-border"><img src={Ovo}alt='Ovo'/></button>
                    </div>
                    </div>
                    <div class="row justify-content-around">
                    <div class="line"></div>
                    <div class="col-md-auto mid">Or</div>
                    <div class="line"></div>
                    </div>
                    <div class="row justify-content-center cash"><p> Pay via cash. <span> See how it work</span></p></div>
                    </div>
                    <div class="text-center">
                    <div class="row justify-content-around but-next">
                    <div class="col-6">
                    <button type="button" class="next-prev">Prvious step</button>
                    </div>
                    <div class="col-6">
                    <button type="button" class="next-prev next">Pay your order</button>
                    </div>
                </div>
                    </div>
                </section>
            </div>
        </div>
        </div>
    )
}

export default Payment