import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementOne.css";

function AdvertisementOne(props){
    return (
        <div className="AdvertisementOne_main">
            
            <div className="AdvertisementOne_header">
                Up to 70% off on Mobiles
            </div>
            <div className="AdvertisementOne_body">
            <Link to="/display"><img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/iphone_12_wMD09rNdfY.PNG?updatedAt=1639760891497" width="210px"/></Link>
            </div>
            <div className="AdvertisementOne_footer">
                   <button>See More</button>
            </div>
            
        </div>
        
    );
}
export default AdvertisementOne;