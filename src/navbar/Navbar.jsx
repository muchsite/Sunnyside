import React from "react";
import "./navbar.scss";
import logo from "../../images/logo.svg";
import ham from "../../images/icon-hamburger.svg";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav_cont">
      <div className="nav_ham" style={{ maxHeight: "50px" }}>
        <div className="nav_content">
          <div className="nav_child">
            <img src={logo} alt="" />
          </div>
          <div
            className="nav_child dn_for_large"
            onClick={() => setOpen(!open)}
          >
            <img src={ham} alt="" />
          </div>
          <div className="des_nav_links dn_for_small">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
        <div className={`hamburger  ${open && "ham_open"}`}>
          <div className="ham_link">About</div>
          <div className="ham_link">Services</div>
          <div className="ham_link">Projects</div>
          <div className="ham_link">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
