import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementOne.css";

function Clothingnew(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    Kurta Set
                </div>
                <div className="AdvertisementOne_body">
                <Link to="/display"> <img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/kurti1_a8YXB9V-h.jpg?updatedAt=1640787049327" height="250px" width="200px"/> </Link>                  
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Clothingnew;