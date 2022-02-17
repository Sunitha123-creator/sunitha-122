import React from "react";
import "./AdvertisementFour.css";
import { Link } from "react-router-dom";

function AdvertisementFour(props){
    return (
        <div>
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                        Year End Sale
                </div>
                <div className="AdvertisementOne_body">
                  <Link to="/display"><img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/bag_QUooRye5GsD.jpg?updatedAt=1640787045518" className="ad_fourImage"/></Link> 
                </div>
               <div className="AdvertisementOne_footer">
                 <button>See more</button>
                </div>
            </div>
            

        </div>

       
    );

}
export default AdvertisementFour;