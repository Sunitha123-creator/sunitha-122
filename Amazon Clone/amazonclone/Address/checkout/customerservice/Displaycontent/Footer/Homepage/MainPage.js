import React,{ Component } from "react";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import "./MainPage.css";
import Men from "./AdvertisementFour/Men";
import Tv from "./AdvertisementFour/Tv";
import Clothingnew from "./AdvertisementOne/Clothingnew";
import Umbrella from "./AdvertisementOne/Umbrella";
import Baby from "./AdvertisementFour/Baby";
import Garden from "./AdvertisementFour/Garden";
import Babycare from "./AdvertisementFour/Babycare";
import Beautynew from "./AdvertisementOne/Beautynew";
import Clothing  from "./AdvertisementOne/Clothing";
import Beauty from "./AdvertisementOne/Beauty";
import Sofa  from "./AdvertisementOne/Sofa";
import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";
import { Link } from "react-router-dom";
import Sofanew from "./AdvertisementFour/Sofanew";
import Mobile from "./AdvertisementOne/Mobile";
import Mobilenew from "./AdvertisementOne/Mobilenew";


class MainPage extends Component{
    constructor(props){
        super(props);
        this.state={ }

    }
    render(){
        return(
            <div className="mainpage">
               <div style={{paddingTop:"260px",display:"flex",flexWrap:"wrap"}}>
                <AdvertisementOne/>
                <Mobilenew/>
                <AdvertisementFour/>
                <Mobile/>
                </div>
                <div style={{paddingTop:"20px",display:"flex",flexWrap:"wrap", backgroundColor:"#e4e7ed"}}>
                <Beauty/>
                <Sofanew/>
                <Clothing/>
                <Beautynew/>
                
                </div>
                <div style={{paddingTop:"20px",display:"flex",flexWrap:"wrap",backgroundColor:"#e4e7ed"}}>
                <Garden/>
                <Baby/>
                <Babycare/>
                <Umbrella/>
                </div>
                <div style={{paddingTop:"20px",display:"flex",flexWrap:"wrap",backgroundColor:"#e4e7ed"}}>
                <Clothingnew/>
                <Sofa/>
                <Men/>
                <Tv/>
                </div>
                <div className="footerarea">
                    <div className="footerarea_top">
                        <p> Back to Top</p>
                    </div>
                    <div className="main_footer">
                        <div className="details">
                            <span>Get to Know Us</span>
                        </div>
                        <div className="details">
                            <span>Connect With Us</span>
                        </div>
                        <div className="details">
                            <span>Make Money with us</span>
                        </div>
                        <div className="details">
                            <span>Let Us Help you</span>
                        </div>
                        
                    </div>
                    <div className="main_footer">
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"20px"}}>About Us</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"50px"}}>Facebook</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"60px"}}>Sell on Amazon</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"60px"}}>COVID-19- and Amazon</span>
                        </div>
                        
                    </div>
                    <div className="main_footer">
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"20px"}}>Careers</span>
                        </div>
                        <div className="details">
                            <span  style={{fontSize:"14px",marginLeft:"60px"}}>Twitter</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"70px"}}>Amazon Global Selling</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"25px"}}>Your Account</span>
                        </div>
                        
                    </div>
                    <div className="main_footer">
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"20px"}}>Press Releases</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"20px"}}>Instagram</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"50px"}}>Become an Affiliate</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"50px"}}>Returns Centre</span>
                        </div>
                        
                    </div>
                    <div className="main_footer">
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"20px"}}>Gift a Smile</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"60px"}}></span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"80px"}}>Advertise Your Products</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"20px"}}>100% Purchase Production</span>
                        </div>
                        
                    </div>
                    <div className="main_footer">
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"17px"}}>Amazon Cares</span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"60px"}}></span>
                        </div>
                        <div className="details">
                            <span style={{fontSize:"14px",marginLeft:"70px"}}>Fulfilment by Amazon</span>
                        </div>
                        <div className="details">
                         <Link to="/customer"><span style={{fontSize:"14px",marginLeft:"30px"}}>Customer Service</span></Link>
                        </div>
                        
                    </div>
                   
                   
                </div>
            </div>
        );
    }
                
    
}
export default MainPage;