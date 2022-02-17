import axios from "axios";
import React, { Component } from "react";
import "./Address.css";
import { Link } from "react-router-dom";
import AddressService from "./AddressService";



class Address extends Component{
  constructor(props){
    super(props)
    this.state= {
      id:'',
      name:'',
      city:'',
      mobile:'',
      state:'',
      email:''

    }
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.changeStateHandler = this.changeStateHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveAddress = this.saveAddress.bind(this);
    
  }
  saveAddress = (e) =>{
    e.preventDefault();
    let address = {id:this.state.id,name:this.state.name,city:this.state.city,mobile:this.state.mobile,state:this.state.state,email:this.state.email};
    console.log('address => ' + JSON.stringify(address));

    AddressService.createAddress(address).then(res =>{
      this.props.history.push('/payment');
    });
  }
  changeIdHandler=(event) =>{
    this.setState({id:event.target.value});


  }
  changeNameHandler=(event) =>{
    this.setState({name:event.target.value});


  }
  changeCityHandler=(event) =>{
    this.setState({city:event.target.value});


  }
  changeMobileHandler=(event) =>{
    this.setState({mobile:event.target.value});


  }
  changeStateHandler=(event) =>{
    this.setState({state:event.target.value});


  }
  changeEmailHandler=(event) =>{
    this.setState({email:event.target.value});


  }
  render(){
    return(
      <div className="address">
        <h1 className="text"> Order Details</h1>
        <div className="address_container">
            <form  className="component">
            <label className="labelstyle">Id</label>
              <input 
                type="Id" 
                name="id"  
                required={true} 
                autoComplete="off" 
                value={this.state.id} 
                onChange={this.changeIdHandler}
              />

              <br />
            <label className="labelstyle">Name</label>
              <input 
                type="Name" 
                name="name"   
                value={this.state.name} 
                onChange={this.changeNameHandler}
              />

              <br />
              <label className="labelstyle">City</label>
              <input 
                type="City" 
                name="city" 
                required={true} 
                autoComplete="off" 
                value={this.state.city} 
                onChange={this.changeCityHandler}
              />
              <br />
              <label className="labelstyle">Mobile</label>
              <input 
                type="Mobile" 
                name="mobile" 
                required={true} 
                autoComplete="off" 
                value={this.state.mobile} 
                onChange={this.changeMobileHandler}
              />
              <br/>
              <label className="labelstyle">State</label>
              <input 
                type="State" 
                name="state" 
                required={true} 
                autoComplete="off" 
                value={this.state.state} 
                onChange={this.changeStateHandler}
              />
              <br/>
              <label className="labelstyle">Email</label>
              <input 
                type="Email" 
                name="email" 
                required={true} 
                autoComplete="off" 
                value={this.state.email} 
                onChange={this.changeEmailHandler}
              />

              <br />
              
            <button type="submit" className="address_registerButton" onClick={this.saveAddress}>Save</button>
            <Link to="/payment">
              <button type="submit" className="address_registerButton"  style={{marginLeft:"10px"}}>Pay Online</button>
              </Link>
            </form>
          </div>
      </div>

    )
  }
  
               

}
export default Address;

  
 