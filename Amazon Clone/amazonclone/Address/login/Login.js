import axios from "axios";
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Login(){
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    try{
      const user = { username, password };
      axios.post("http://localhost:8846/auth",user);
      alert("login successful");
      console.log(user);

    history.push("/MainPage");
    }catch(error) {
      alert("Something went wrong");
    }
    
  };
  return(
      <div className="login">
        <img  className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
          <div className="login_container">
            <form  className="component" onSubmit={handleForm} method="post">
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
                <button type="submit" className="login_signInButton">Login In</button>
                <p>By Login-In, you agree to Amazon's Terms and Conditions</p>
               <Link to="Signup"><button className="login_registerButton">Create your Amazon Account</button></Link>
                
            </form>
          </div>
      </div>
  );
}
export default Login;

  
 