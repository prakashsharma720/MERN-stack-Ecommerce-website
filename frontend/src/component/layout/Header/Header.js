import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { CgShoppingBag, CgSearch, CgProfile } from "react-icons/cg";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
  <div className="head">
    <div className="logo">
      <img src={logo} alt="LOGO"></img>
    </div>
 
  <ul className="list">
    <li><NavLink to="/" className="navlink">Home</NavLink></li>
    <li><NavLink to="/products" className="navlink">Products</NavLink></li>
    <li><NavLink to="/contact" className="navlink">Contact</NavLink></li>
    <li><NavLink to="/about" className="navlink">About</NavLink></li>
  </ul>
  <div className="icon">
    <NavLink to="/search"><CgSearch className="icons "/></NavLink>
    <NavLink to="/cart"><CgShoppingBag className="icons "/></NavLink>
    <NavLink to="/login"><CgProfile className="icons "/></NavLink>
  </div>
  </div>
  );
};

export default Header;