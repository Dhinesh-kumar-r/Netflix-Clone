import React from 'react'
import { FaChevronRight } from "react-icons/fa";

function Land8() {
  return (
    <>
        <div className='container-8'>
            <div className='container-8-main'>
            <span className='container-8-content'>
            Ready to watch? Enter your email or mobile number to create or restart your membership.
            </span>
                
            <div className="mail bottom-mail">
            <input type="email" placeholder="Email address" className="email" />
            <button type="button" class="submit">
              Get Started <FaChevronRight />
            </button>
          </div>    
          </div>
        </div>
        <div className="bottom"></div>
    </>
  )
}

export default Land8