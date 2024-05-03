import React, { useEffect } from "react";
import "../Css/home.css"
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";

function Home() {
  const nav = useNavigate();

  axios.defaults.withCredentials = true
  useEffect(()=>{
    axios.get("http://localhost:5998/verify/auth")
    .then((res)=>{
      if(res.data.status){
        console.log("Token Alive")
      }
      else{
      nav("/")
      }
    })
  });

  function handleLogout(){
    axios.get("http://localhost:5998/auth/logout")
    .then((res=>{
      if(res.data.status){
        nav("/")
      }
    }))
  }

  return (
    <>
    <div className='home-container'>

        <div className='home-nav'>
        
            <ul className='nav-side'>
            <img src="logo.png" alt="" height="70px" width="150px" class="logo" />
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/"}>Series</Link></li>
                <li><Link to={"/"}>Movies</Link></li>
                <li><Link to={"/"}>Originals</Link></li>
                <li><Link to={"/"}>Recently Added</Link></li>
                <li><Link to={"/"}>MyList</Link></li>
                <li className='logout' onClick={handleLogout}>Logout</li>
               
               
            </ul>
            
        </div>
    </div>
    </>
  )
}

export default Home