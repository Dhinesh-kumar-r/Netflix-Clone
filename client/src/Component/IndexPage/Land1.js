import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Land1() {
  return (
    <>
      <div className="body">
        <div class="header">
          <img src="logo.png" alt="" height="70px" width="150px" class="logo" />
          <nav class="navbar">
            <ul>
              <li>
              
                <select name="language" className="language">
               
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </li>
              <li>
                <Link to={"/login"} className="signin">
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="main">
          <span className="heading">Unlimited movies,TV show and more</span>
          <span className="head2">Watch any where.Cancel any time</span>
          <span className="head3">
            Ready to Watch ? Enter your email to create or restart your
            membership
          </span>
          <div className="mail">
            <input type="email" placeholder="Email address" className="email" />
            <button type="button" class="submit">
              Get Started <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </>
  );
}

export default Land1;
