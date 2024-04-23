import React, { useState } from "react";
import "./NRICorner.css";
import Footers from "./Footers";
import nriimg from "../images/contact.jpg";

function NRICorner() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://venturellp-default-rtdb.firebaseio.com/NRICLIENT.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (res) {
      setFormData({
        name: "",
        number: "",
        email: "",
        comment: "",
      });
      alert("We have recieved Your data... reach out to you soon");
    }
  };
  return (
    <>
      <div>
        <div>
          <img className="nri-bg" src={nriimg} />
        </div>
        <div className="nri-heading">
          <p>
            <br />
            Global <br /> Dreams, <br /> Local <br /> Homes. <br />
          </p>
        </div>
      </div>
      <div className="abt-corner">
        <div className="row1">
          <div className="col-6 corner-head">
            <p>
              <span>NRI</span> <br />
              Corner
            </p>
          </div>
          <div className="col-6 corner-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            incidunt sint culpa a dignissimos corporis voluptatem, delectus
            sequi quidem enim quae vero id quas doloremque odit dicta eum omnis
            modi?
          </div>
        </div>
      </div>

      <div className="nri-contact-form">
        <form action="" method="get" onSubmit={handleSubmit}>
          <h1 style={{ fontStyle: "italic" }}>Get Quote</h1>
          <label>
            <input
              type="text"
              id="name2"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
          </label>
          <label>
            <input
              type="tel"
              id="number2"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Number"
              required
            />
          </label>
          <label>
            <input
              type="email"
              id="email"
              name="number"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </label>
          <p id="comment-head">Comment</p>
          <label>
            <input
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              type="text"
              required
            />
          </label>
          <br />
          <button type="submit" className="sent-btn">
            Submit
          </button>
        </form>
      </div>
      <Footers />
    </>
  );
}
export default NRICorner;
