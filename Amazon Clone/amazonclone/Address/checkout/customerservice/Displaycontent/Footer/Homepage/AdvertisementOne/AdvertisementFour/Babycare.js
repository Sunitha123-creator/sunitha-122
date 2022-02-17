import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementFour.css";

function Babycare(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    Baby Products
                </div>
                <div className="AdvertisementOne_body">
                  <Link to="/display"><img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/baby_products__rjBpLS3x.jpg?updatedAt=1640787045109" height="240px" width="230px"/></Link>                   
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Babycare;