import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementOne.css";

function Beauty(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    Beauty Collections
                </div>
                <div className="AdvertisementOne_body">
                 <Link to="/display"><img src="https://ik.imagekit.io/amazon12345/amazon-image/images_8xOZpjdU6.jpg?updatedAt=1641562414114" height="230px"width="200px"/></Link>                  
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Beauty;