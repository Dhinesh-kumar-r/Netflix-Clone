import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Css/authentication.css"
import axios from 'axios';
import ex from '../logo.png';




function ForgotPassword() {
    const [email,setemail] =useState();

    const HandleForgotPassword=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5998/auth/forgot",{email})
        .then((res)=>{
            
            if(res.data.status){
                alert("Check Your Mail")
            }
            else{
                alert("Email Id Not Exist")
            }
        })
    }
  return (
   <>
  
        <div className ="forgot-container">
            <div className="navbar-forgot">
                <ul>
                <img src={ex} alt="" height="70px" width="150px" class="logo" />

                    <li className='link'><Link to={"/"}>Signin</Link></li>
                </ul>
            </div>

            <div className='forgot-center-container'>
                <div className='forgot-main-container'>
                    <span className='forgot-head'>Forgot Password</span>
                        <span className='forgot-para'>How would you like to reset your password?</span>
                        <div className='radio-button'>
                            <div>
                                <input type='radio' name={"email"}/>
                                <label for="email" >Email</label>
                            </div>
                            <div>
                                <input type='radio' name={"email"}/>
                                <label for="mobile">Text Message</label>
                            </div>
                    </div>
                    <span className='forgot-para'>We will send you an email with instructions on how to reset your password.</span>
                    <form onSubmit={HandleForgotPassword}>
                    <input type='text' placeholder='@example.com' className='forgot-text' onChange={(e)=>setemail(e.target.value)}/><br/>

                    <input type='submit' value={"Email Me"} className='forgot-submit'></input>
                    </form>
                    <span className="forgot-final">I can't remember my email address or phone number.</span>
                </div>
            </div>

        </div>
        <div className="forgot-footer">
           
           <ul>
               <li className="forgot-contact">Questions? Call 000-800-919-1694</li>
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
           <div className="forgot-footer-language">
     <li>
       <select name="language" className="forgot-language">
        
         <option>English</option>
         <option>Hindi</option>
       </select>
     </li>
     
   </div>

       </div>
   
   </>
  )
}

export default ForgotPassword