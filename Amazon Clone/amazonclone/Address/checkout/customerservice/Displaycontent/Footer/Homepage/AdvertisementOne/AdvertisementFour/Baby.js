import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementFour.css";

function Baby(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    Head Set
                </div>
                <div className="AdvertisementOne_body">
                 <Link to="/display"> <img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/headset_pmSzw4jKF.jpg?updatedAt=1640787048357" height="245px" width="240px"/></Link>                   
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Baby;