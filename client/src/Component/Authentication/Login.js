import React, { useState } from "react";
import "../Css/authentication.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("")

  const nav = useNavigate();

  const LoginHandler = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:5998/auth/signin",{email,password})
    .then((res=>{
      const check = res.data.msg;
      if(check === "login_Sucessfully"){
        alert("Login Successfully");
        nav("/home")
      }
      else if(check === "incorrect_Password"){
        alert("Password Is Incorrect");
      }
      else{
        alert("Email Not Existing Please Signup")
        setTimeout(nav("/register"),10000)
      }
    }))


  }
  return (
    <>
      <div className="container-1">
        <div className="navbar">
          <img src="logo.png" alt="" height="70px" width="150px" class="logo" />
        </div>
        <div className="log-in-container">
          <div className="log-in">
            <h1 className="heading">Sign In</h1>

            <form onSubmit={LoginHandler}>
                <input type="text" id="name" placeholder="Email or Mobile" className="email" onChange={(e)=>setemail(e.target.value)} /><br/>
                <input type="password" id="email" placeholder="Password" className="email"onChange={(e)=>setpassword(e.target.value)} /><br />
                <input type="submit" value={"Sign In"} className="login-submit"></input>
            </form>
            <div className="others">
              <h4>OR</h4>
              <p className="sign-in-code">Use a sign-in code</p>
              <br />
              <p className="forgot">Forgot Password?</p>
              <br />
            </div>
            <div className="content">
              <input type="checkbox" className="checkbox"></input>
              <label>Remember me</label>
                <p className="">
                <span className="signup-link-label">New to Netflix?</span>{" "}
               <Link to={"/"}>Signup Now</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="login-footer">
           
                <ul>
                    <li className="login-contact">Questions? Call 000-800-919-1694</li>
                </ul>
                <div className="footer-content">
                <ul>
                    <li>FAQ</li>
                    <li>Cookie Preferences</li>
                </ul>
                <ul>
                    <li>Help Centre</li>
                    <li>Corporate Information</li>
                </ul>
                <ul>
                    <li>Terms of Use</li>
                </ul>
                <ul>
                    <li>Privacy</li>
                </ul>
                </div>
                <div className="login-footer-language">
          <li>
            <select name="language" className="login-language">
             
              <option>English</option>
              <option>Hindi</option>
            </select>
          </li>
          
        </div>

            </div>
      
      </div>
    </>
  );
}

export default Login;
