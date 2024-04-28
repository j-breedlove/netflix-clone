import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className={"nav__logo"}
          src={"src/assets/images/netflix-logo-transparent.png"}
          alt={"netflix-logo"}
        />
        <img
          className={"nav__avatar"}
          src={"src/assets/images/netflix-avatar.png"}
          alt={"netflix-avatar"}
        />
      </div>
    </div>
  );
};

export default Nav;
