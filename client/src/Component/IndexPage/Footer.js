import React from "react";
import { IoLanguage } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className="container-9">
        <ul>
          <li class="contact">Questions? Call 000-800-919-1694</li>
        </ul>
        <div class="footer">
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
          <ul>
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-language">
          <li>
            <select name="language" className="language">
              <IoLanguage />
              <option>English</option>
              <option>Hindi</option>
            </select>
          </li>
          <p style={{ "margin-top": "20px" }}>Netflix India</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
