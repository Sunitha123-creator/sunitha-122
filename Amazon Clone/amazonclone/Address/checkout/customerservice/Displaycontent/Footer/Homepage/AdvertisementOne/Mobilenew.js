import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementOne.css";

function Mobilenew(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    IQOO
                </div>
                <div className="AdvertisementOne_body">
                <Link to="/display"><img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/iqoo_QDe2s0MBZ.PNG?updatedAt=1639893722915" width="200px"/> </Link>                  
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Mobilenew;