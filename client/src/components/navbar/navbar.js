import React from "react";
import "./navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <a href="/">SubHut</a>
      </div>
      <div className="nav-links">
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/About">
          About
        </a>
        <a className="nav-link" href="/Contact">
          Contact
        </a>
        <a className="nav-link" href="/app/season">
          Subtitles
        </a>
        <a className="nav-link" href="/tvseries/upload">
          upload
        </a>
      </div>
      <div className="auth-btns">
        <a id="login" className="button" href="/auth/login">
          Login
        </a>
        <a className="button" href="/auth/register">
          Sign Up
        </a>
      </div>
    </div> 
  );
}

export default Navbar;
