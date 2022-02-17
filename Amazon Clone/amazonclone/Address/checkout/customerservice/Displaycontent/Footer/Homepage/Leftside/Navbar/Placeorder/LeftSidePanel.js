import React from "react";
import "./LeftSide.css";

function LeftSidePanel(props){
    return(
        <div className="LeftSize_main">
        <div className="leftSide_header">
            Brand
        </div>
        <div className="leftSide_brandname">
            <label className="brandname">
                <input type="checkbox" value="Apple" />Apple
            </label >
            <label className="brandname">
                <input type="checkbox" value="Samsung" />Samsung
            </label>
            <label className="brandname">
                <input type="checkbox" value="Oppo" />Oppo
            </label>
            <label className="brandname">
                <input type="checkbox" value="MI" />MI
            </label>
            <label className="brandname">
                <input type="checkbox" value="Vivo" />Vivo
            </label>
            <label className="brandname">
                <input type="checkbox" value="Vivo" />iQOO
            </label>
            <label className="brandname">
                <input type="checkbox" value="Vivo" />xiaomi
            </label>
           
            <label className="brandname">
                <input type="checkbox" value="Vivo" />OnePlus
            </label>
           
           
           
        </div>
        </div>
    );
}
export default LeftSidePanel;