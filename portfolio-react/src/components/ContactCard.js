import React from "react";
import ContactPNG from "../assets/contact.png";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <div className="card">
        <h1 className="text-center">Contact Me</h1>
        <div className="card-content">
          <a href="#" className="ml-4 mt-4 font-weight-bold">
            Email
            <br />
            Abuye20@yahoo.com
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/abuye-mamuye-5a49921b0/"
            className="ml-4 mt-4 font-weight-bold"
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/AbuyeM1"
            className="ml-4 mt-4 font-weight-bold"
          >
            GitHub
          </a>

          <img
            src={ContactPNG}
            alt="profile-photo"
            className="profile float-left"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
