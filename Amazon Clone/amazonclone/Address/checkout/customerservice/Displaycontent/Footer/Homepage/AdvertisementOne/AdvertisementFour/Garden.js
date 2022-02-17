import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementFour.css";

function Garden(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    Garden Decorators
                </div>
                <div className="AdvertisementOne_body">
                <Link to="/display"><img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/garden_lights_NQCrAcNm7BW.jpg?updatedAt=1640787047532"height="250px" width="220px"/> </Link>                  
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Garden;