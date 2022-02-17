import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementOne.css";

function Sofa(props){
    return (
        <div className="AdvertisementOne_main">
            <div className="AdvertisementOne_header">
                Home Furnitures
            </div>
            <div className="AdvertisementOne_body">
            <Link to="/display"><img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/furniture1_s1J_kNIs5.jpg?updatedAt=1640787047702" height="230px" width="220px"/></Link>
            </div>
            <div className="AdvertisementOne_footer">
               <Link to ="/">
                   <button>See More</button>
                </Link> 
            </div>

        </div>
    );
}
export default Sofa;