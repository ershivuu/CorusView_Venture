import React from "react";
import "./Design.css";
import img1 from "../../images/home1.jpg";
import img2 from "../../images/home2.jpg";
import img3 from "../../images/home3.jpg";
import { Link } from "react-router-dom";

function Design() {
  return (
    <>
      <div className="welcome">
        <div className="imgs">
          <div className="big-img">
            <img src={img1} alt="" />
          </div>
          <div className="small-imgs">
            <div style={{ marginBottom: "18px" }}>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div className="testimonial-content">
          <p>
            <span>"</span>
            You and team went above and beyond! Thank y'all so much for the
            commitment to excellence- the results speak for themselves.
            <span>"</span>
          </p>

          <button>
            <Link to="/upcomming-projects">View Testimonial</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Design;
