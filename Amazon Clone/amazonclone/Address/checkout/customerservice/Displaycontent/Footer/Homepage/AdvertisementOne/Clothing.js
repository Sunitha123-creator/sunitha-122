import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementOne.css";

function Clothing(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    Saree Collections
                </div>
                <div className="AdvertisementOne_body">
                <Link to="/display"><img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/saree4_MCoKFPoitWW.webp?updatedAt=1640787054294" height="230px"width="190px"/></Link>                   
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Clothing;