import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementOne.css";

function Beautynew(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    Mascara
                </div>
                <div className="AdvertisementOne_body">
                 <Link to="/display">  <img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/mascara_be2mmHuzTV_.jpg?updatedAt=1640787050863" height="230px" width="200px"/></Link>                    
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Beautynew;