import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Css/authentication.css"
import axios from "axios"
import ex from '../logo.png';

function Register() {
    const[email,setemail] = useState("");
    const[password,setpassword]=useState("");
    const nav = useNavigate()


    const RegisterHandler=(e)=>{
       e.preventDefault();
       axios.post("http://localhost:5998/auth/signup",{email,password})
       .then((res)=>{

       
        if(res.data.msg === "added"){
            alert("Registered Sucessfully")
            nav("/home")
        }
        else if(res.data.msg === "exist"){
            alert("Email id Already Exist");
        }
       })
    }
  return (
   <>
        
        <div className="navbar-register">
            <ul>
                <li> <img src={ex} alt="" height="70px" width="150px" class="logo" /></li>
                <li className='link'><Link to={"/"} style={{color:"black"}}>Signin</Link></li>
            </ul>
        </div>

        <div className='register-container'>
            <span className='register-head'>
            Create a password to start your membership
            </span>
            <span className='register-para'>
            Just a few more steps and you're done!
                We hate paperwork, too.
            </span>
            <form onSubmit={RegisterHandler}>
                <div className='register-form'>
                    <input type="text" id="name" placeholder="Email or Mobile" className="email email-1" onChange={(e)=>setemail(e.target.value)} /><br/>
                     <input type="password" id="email" placeholder="Password" className="email email-1" onChange={(e)=>setpassword(e.target.value)} /><br />
                    <input type="submit" value={"Next"} className="login-submit-1"></input>
                </div>
            </form>
        </div>
            <div className="reg-footer">
                <ul>
                    <li className="reg-contact">Questions? Call 000-800-919-1694</li>
                </ul>
            <div className="footer-content">
                <ul>
                    <li>FAQ</li>
                    <li>Privacy</li>
                </ul>
                <ul>
                    <li>Help Centre</li>
                    <li>Cookie Preferences</li>
                </ul>
                <ul>
                    <li>Netflix Shop</li>
                    <li>Corporate Information</li>
                </ul>
                <ul>
                    <li>Terms of Use</li>
                </ul>
           </div>
           <div className="reg-footer-language">
                <li>
                    <select name="language" className="reg-language">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </li>
            </div>
    </div>
      
       
   </>
  )
}

export default Register