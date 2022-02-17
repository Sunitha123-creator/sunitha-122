import React,{ Component } from 'react';
import "./NavBar.css";
import MenuIcon from '@material-ui/icons/Menu';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

class NavBar extends Component{

    static contextType = CartContext;

    constructor(props){
        super(props);
        this.state ={ }
    }
    render(){
        let {item,size,increment} = this.context;

        return( 
            <div>
            <div className="navbar_component">
                <div className="navbar_logo"></div>
                <div className="navbar_locator">
                <div className="navbar_locatorImage"></div>
                <div className="navbar_location">Bangalore</div>
            </div>
            <div className="navbar_searchcomponent">
                <div>
                    <select className="nav_dropdown">
                        <option value="All">All</option>
                        <option value="Alexa">Alexa</option>
                        <option value="Books">Books</option>
                        <option value="Baby">Baby</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Jewelry">Jewelry</option>
                        <option value="Computers & Accessories">Computers & Accessories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Garden & Outdoors">Garden & outdoors</option>
                        <option value="Gift Cards">Gift Cards</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Health & Personal Care">Health and Personal Care</option>
                        <option value="Home & Kitchen">Home & Kitchen</option>
                        <option value="Lugguage & Bags">Lugguage & Bags</option>
                        <option value="Movies">Movies</option>
                        <option value="TV Shows">TV Shows</option>
                    </select>
                </div>
                <div>
                    <input type="text" className="navbar_searchbox"/>
                </div>
                <div className="navbar_searchboxdiv">
                    <div className="navbar_searchicon"/>
                    </div>
                </div>
                <Link to="/login">
                <div className="navbar_text navbar_signin">
                    <div style={{ fontSize:"14px"}}>Hello, Sign In</div>
                    <div style={{ fontWeight:"bold"}}>Account & List</div>
                </div>
                </Link>
                <div className="navbar_text navbar_returns">
                    <div style={{ fontSize:"14px"}}>Returns</div>
                    <div style={{ fontWeight:"bold"}}>& Order</div>
                </div>
                <div className="navbar_text navbar_cart">
                    <div src=""className="cart_Image"/></div>
                    <div className="cart_item">{ size }</div>
                 <Link to="/checkout"><div className="navbar_text_cart">Cart</div></Link> 
                   </div>
                  
                   <div className="navbar_footer">
                     <div className="menu"><MenuIcon/></div>
                       <div className="navbar_footer_text">All</div>
                       <div className="navbar_footer_text">Best Seller</div>
                       <div className="navbar_footer_text">Mobile</div>
                       <div className="navbar_footer_text">Fashion</div>
                       <div className="navbar_footer_text">Electronics</div>
                       <div className="navbar_footer_text">TV</div>
                       <div className="navbar_footer_text">Clothing</div>
                       <div className="navbar_footer_text">Garden</div>
                       <div className="navbar_footer_text">Computers</div>
                       <div className="navbar_footer_text">Home & Kitchen</div>
                       <div className="navbar_footer_text">Customer Service</div>
                   </div> 
                   
            </div>   
        );
    }
}
export default NavBar;
