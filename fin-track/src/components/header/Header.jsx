import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
import logo from "../../assets/trace.svg"

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link> 
          </li>
          <li>
            <Link to={"/"}>Savings</Link>
          </li>
          <li>
            <Link to={"/"}>Financial Literacy</Link>
          </li>
          <li>
            <Link to={"/"}>Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
