import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementFour.css";

function Men(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    Men Clothing
                </div>
                <div className="AdvertisementOne_body">
                <Link to="/display"><img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/men_clothing1_ckxBDptKa.jpeg?updatedAt=1640787051538" height="245px" width="240px"/> </Link>                  
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Men;