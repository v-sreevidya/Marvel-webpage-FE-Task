import React from 'react';
import './Contactus.css';
import { FaPhoneAlt,  FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

const Contactus = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>CONTACT US</h1>
        <ul>
          <li>
            <FaPhoneAlt className="icon" /> +123-456-7890
          </li>
          
          <li>
            <FaEnvelope className="icon" /> support@marvelstudios.com
          </li>
          <li>
            <FaMapMarkerAlt className="icon" /> Frank G. Wells Building, 2nd Floor, California ,
              United States
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contactus;
