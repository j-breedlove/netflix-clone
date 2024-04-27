import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className={"nav"}>
      <img className={"nav_logo"} src={"src/assets/images/netflix-logo.jpg"} />
      <img
        className={"nav_avatar"}
        src={"src/assets/images/netflix-avatar.png"}
      />
      <h1>This is nav</h1>
    </div>
  );
};

export default Nav;
