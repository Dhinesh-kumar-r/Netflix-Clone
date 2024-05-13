import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import "../Css/authentication.css"
import ex from '../logo.png';
import axios from 'axios';


function Reset() {

    const[password,setpassword] = useState("")
   
    const [confirmPassword, setConfirmPassword] = useState("");
    const {token} = useParams();

    const PasswordHandler=(e)=>{
        setpassword(e.target.value)
    }
    const HandleConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value)
    }

    const ResetHandler=(e)=>{

        e.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        axios.post(`http://localhost:5998/auth/reset/${token}`,{password})
        .then((res)=>{
            if(res.data.status){
                alert("Password Updated")
            }
        })
    }
  return (

   <>
        <div className='reset-container'>
            <div className="navbar-reset">
                <ul>
                    <li> <img src={ex} alt="imag" height="70px" width="150px" class="logo" /></li>
                    <li className='link'><Link to={"/"}>Signin</Link></li>
                </ul>
            </div>

            <div className='reset-main'>           
            <div className='reset-main-container'>
                <span className='reset-header'>Change password</span>
                <span className='reset-para'>Protect your account with a unique password at least 6 characters long.</span>
                
                <form onSubmit={ResetHandler}>
                    <div>
                        <label className='email-label' >Current Email</label>
                        <input type='text' className='forgot-email reset' value={"dhinesh"}disabled ></input>
                        <input type='password' className='reset' placeholder='New Password' onChange={PasswordHandler}></input>
                        <input type='password' className='reset' placeholder='Re-Type Password' onChange={HandleConfirmPassword}></input>
                        <div className='submit-box'>
                        <input type='submit' className='reset-submit' value={"Save"}></input>
                        <input type='submit' className=' cancel' value={"Save"}></input>
                        </div>
                    </div>
                </form>
            </div>
            </div>
 


        </div>

        <div className="forgot-footer">
            <ul>
               <li className="forgot-contact">Questions? Call 000-800-919-1694</li>
            </ul>
            
            <div className="footer-content">
                <ul>
                    <li>Audio and Subtitle</li>
                    <li>Media Centre</li>
                    <li>Privacy Statement</li>
                </ul>
                <ul>
                    <li>Help Centre</li>
                    <li>Jobs</li>
                </ul>
                <ul>
                    <li>Gift Cards</li>
                    <li>Cookie Preferences</li>
                </ul>
                <ul>
                    <li>Investor Relations</li>
                    <li>Terms of Use</li>
                </ul>
           </div>
           <div className="forgot-footer-language">
                <li>
                    <span name="language" className="forgot-language service">
                        Service Code
                    </span>
                </li>
            </div>
        </div>

   </>
  )
}

export default Reset