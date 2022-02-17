import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementFour.css";

function Sofanew(props){
    return (
        <div className="AdvertisementOne_main">
            <div className="AdvertisementOne_header">
                Apple LapTop
            </div>
            <div className="AdvertisementOne_body">
            <Link to="/display">  <img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/apple_Va0_qDTyX5N.jpeg?updatedAt=1640787044942" height="230px" width="250px"/></Link>  
            </div>
            <div className="AdvertisementOne_footer">
               <Link to ="/">
                   <button>See More</button>
                </Link> 
            </div>

        </div>
    );
}
export default Sofanew;