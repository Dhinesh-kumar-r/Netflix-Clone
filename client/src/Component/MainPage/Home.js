import React from 'react'
import "../Css/home.css"
import { Link } from 'react-router-dom';

function Home() {
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
                <li className='logout'><Link to={"/"}>Logout</Link></li>
               
               
            </ul>
            
        </div>
    </div>
    </>
  )
}

export default Home