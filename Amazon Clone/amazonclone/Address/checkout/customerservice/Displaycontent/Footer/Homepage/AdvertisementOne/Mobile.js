import { Link } from "react-router-dom";
import React from "react";
import "./AdvertisementOne.css";

function Mobile(props){
    return (
            <div className="AdvertisementOne_main">
                <div className="AdvertisementOne_header">
                    Xiaomi
                </div>
                <div className="AdvertisementOne_body">
                <Link to="/display"> <img src="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__eY0zeJywGm.webp?updatedAt=1639653714192" width="200px"/></Link>                   
                </div>
                
                <div className="AdvertisementOne_footer">
                
                    <button>See More</button>
                </div>

            </div>
    );
}
export default Mobile;