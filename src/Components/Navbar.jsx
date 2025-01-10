import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return(
        <nav className="navbar">
      <Link to ="/" className="logo">MARVEL</Link>
      <ul className="nav-links">
        
        
        
        <li><Link to="./Contactus">Contact Us</Link></li>
      </ul>
      </nav>
    );
};
export default Navbar;