import React, { useEffect, useState } from "react";
import "./Footers.css";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";

export default function Footers() {
  return (
    <>
      <div>
        <div className="footer">
          <div className="f-logo">
            <img src={logo} />
          </div>
          <div className="f-email-form">
            <p>JOIN OUR LIST</p>
            <form>
              <label>
                <input type="email"placeholder="Enter-Email" />
              </label>
              <button type="button">&#8594;</button>
            </form>
          </div>
          <div className="footer-contact-us">
            <p>CONTACT WITH US </p>
            <p style={{color:'white', fontSize:'18px'}}>+91 96172-44330</p>
            <div className="f-social-logos">
              <a href="">  <img src={facebook} /></a>
            </div>
            <div className="f-social-logos">
              <a href=""><img src={instagram} /></a>
            </div>
            <div className="f-social-logos">
              <a href="">   <img src={twitter} /></a>
            </div>
            <div className="f-social-logos">
              <a href=""> <img src={youtube} style={{width:'30px',height:'30px'}} /></a>
            </div>
          </div>
          {/* <div className="admin-btn">
            <button id="admin-btn" type="button"><a href="/adminpage">ADMIN</a></button>
          </div> */}
        </div>

        <div className="f-details">
          <div className="d-content">
            <p>Copyright 2023. All rights reserved Corusview Venture LLP</p>
            <p>Designed & Developed By CorusView</p>
            <p>Privacy Policy Terms of Use Apply </p>
          </div>
        </div>
      </div>
    </>
  );
}
