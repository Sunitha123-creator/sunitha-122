import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CheckoutItems from "./Checkoutitems";
import { grid } from "@mui/system";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import NumberFormat from 'react-number-format';

function Checkout(props){
    const {item,size,increment} = useContext(CartContext);

    const cartValue = function(){
        let price=0;
        for(let i=0;i<item.length;i++){
            price+=parseInt(item[i].price);
        }
        return price;
    }

    return(
        <div className="checkout_body">
            <Grid container>
                <Grid item={8}>
                    <div className="checkout_container">
                        <div style={{fontSize:"30px",fontWeight:"500",padding:"20px 0px 0px 20px"}}>Shopping Cart</div>
                        <div>
                            {
                                item.map( (value) =>(
                                    <CheckoutItems definition={value} />
                                    
                                    
                                ))
                                
                            }
                            
                            {/*<CheckoutItems />
                            <CheckoutItems />
                            <CheckoutItems /> */}
                        </div>
                    </div>
                </Grid>
                <Grid item={4}>
                    <div style={{width:"250px",height:"200px",marginTop:"25px",padding:"20px",backgroundColor:"white"}}>
                        <div style={{fontSize:"25px",marginleft:"5px"}}>Subtotal ( {size} items): 
                        <NumberFormat value= { cartValue()} displayType={'text'} thousandSeparator={true} prefix={'₹' }/>
                        </div>
        
                        <div style={{paddingTop:"25px"}}>
                            <Link to="Address"><button className="placeorder_button">Proceed to Buy</button></Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
export default Checkout;
            

