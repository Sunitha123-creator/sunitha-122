import axios from "axios";
import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Signup(){
  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    try{
      const user = { username, password };
      axios.post("http://localhost:8846/subs",user);
      console.log(user);

    history.push("/Login");
    }catch(error) {
      alert("Something went wrong");
    }
    
  };
  return(
      <div className="login">
        <img  className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
          <div className="login_container">
            <form  className="component" onSubmit={handleForm} method="post">
            <label className="labelstyle">First name</label>
              <input 
                type="Firstname" 
                name="firstname"  
                required={true} 
                autoComplete="off" 
                value={firstname} 
                onChange={(e) => setFirstname(e.target.value)}
              />

              <br />
              <label className="labelstyle">Last name</label>
              <input 
                type="Lastname" 
                name="lastname" 
                required={true} 
                autoComplete="off" 
                value={lastname} 
                onChange={(e) => setLastname(e.target.value)}
              />

              <br />
              <label className="labelstyle">User name</label>
              <input 
                type="Username" 
                name="username" 
                required={true} 
                autoComplete="off" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
              />

              <br />
              <label className="labelstyle">Password</label>
              <input 
                type="Username" 
                name="username" 
                required={true} 
                autoComplete="off" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button type="submit" className="login_registerButton">Login In</button>   
            </form>
          </div>
      </div>
  );
}
export default Signup;

  
 