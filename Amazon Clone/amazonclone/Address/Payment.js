import React from "react";
import StripeCheckout from "react-stripe-checkout";

function Payment(){
    const onToken =(token) =>{
    console.log(token);
    }
    return (
        <div className="App">
            <center>
            <StripeCheckout
            token={onToken}
            name="Payment"
            currency="Inr"
            amount="1200000"
            stripeKey="pk_live_51KEWqaSHL27BsxipBF46iZTENAgm4tSaCtrFUpG1Xx97Y6vvXLCQI2npbSvmmLZm6GH93uEfGS1vEPbjVVZRBL0e00bhl4OzZv"
            />
            </center>
        </div>
    );
}

export default Payment;