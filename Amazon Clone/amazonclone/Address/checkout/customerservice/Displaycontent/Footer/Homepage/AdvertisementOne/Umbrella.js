import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementOne.css";

function Umbrella(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    Sandals for Women
                </div>
                <div className="AdvertisementOne_body">
                <Link to="/display"> <img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/sandals1_ogMdXY7Hz.jpg?updatedAt=1640787052603" height="240px"width="230px"/>  </Link>                  
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Umbrella;