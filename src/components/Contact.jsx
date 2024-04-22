import React from "react";
import "./Contact.css";
import Footer from "../components/Footers";
import facebook from "../images/facebook-black.png";
import twitter from "../images/twitter-black.png";
import instagram from "../images/instagram-black.png";
import youtube from "../images/youtube-black.png";
import contactbg from "../images/contact.jpg";

export default function Contact() {
  return (
    <>
      <div>
        <div>
          <img className="c-bgimg" src={contactbg} />
        </div>
        <div className="c-heading">
          <p>Contact</p>
        </div>
      </div>

      {/* -------------------- */}
      <div className="contact-venture-llp">
        <div>
          <p className="contact-venture-llp-heading">Write with us</p>
          <p id="corusview-email"> email@corusview.com &#8594; </p>
        </div>
        <div className="venture-number">
          <p className=" contact-venture-llp-heading">Talk with us</p>
          <p id="corusview-phone">+91 96172-44330 </p>
        </div>
      </div>
      {/* --------------------- */}
      <div className="social-logos">
        <p>Connect with us</p>
        <div className="logos">
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
          <img id="youtube-logo-contact" src={youtube} />
        </div>
      </div>
      <Footer />
    </>
  );
}
