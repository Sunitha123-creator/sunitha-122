import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomerService from "./CustomerService";



class Customer extends Component{
  constructor(props){
    super(props)
    this.state= {
      id:'',
      name:'',
      email:'',
      mobile:'',
      productname:'',
      about:''

    }
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.changeProductnameHandler = this.changeProductnameHandler.bind(this);
    this.changeAboutHandler = this.changeAboutHandler.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
    
  }
  saveCustomer = (e) =>{
    e.preventDefault();
    let customer = {id:this.state.id,name:this.state.name,email:this.state.email,mobile:this.state.mobile,productname:this.state.productname,about:this.state.about};
    console.log('customer => ' + JSON.stringify(customer));
    alert("Thank you for contacting us.Soon Our team will connect with You");

    CustomerService.createCustomer(customer).then(res =>{
      this.props.history.push('/');
    });
  }
  changeIdHandler=(event) =>{
    this.setState({id:event.target.value});


  }
  changeNameHandler=(event) =>{
    this.setState({name:event.target.value});


  }
  changeEmailHandler=(event) =>{
    this.setState({email:event.target.value});


  }
  changeMobileHandler=(event) =>{
    this.setState({mobile:event.target.value});


  }
  changeProductnameHandler=(event) =>{
    this.setState({productname:event.target.value});


  }
  changeAboutHandler=(event) =>{
    this.setState({about:event.target.value});


  }
  render(){
    return(
      <div className="address">
        <h1 className="text">Customer Service</h1>
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
              <label className="labelstyle">Product Name</label>
              <input 
                type="Productname" 
                name="productname" 
                required={true} 
                autoComplete="off" 
                value={this.state.productname} 
                onChange={this.changeProductnameHandler}
              />
              <br/>
              <label className="labelstyle">About the Product</label>
              <input 
                type="About" 
                name="about" 
                required={true} 
                autoComplete="off" 
                value={this.state.about} 
                onChange={this.changeAboutHandler}
              />

              <br />
              
            <button type="submit" className="address_registerButton" onClick={this.saveCustomer} style={{marginLeft:"25px"}}>Save</button>
            
            </form>
          </div>
      </div>

    )
  }
  
               

}
export default Customer;

  
 