import React from "react";
import List from "../../smallcomponents/list/List";
import "./Header.css";

const Header = () => {
  return (
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex justify-content-between">
        <div class="logo">Logo</div>
        <nav id="navbar" className="navbar">
          <List />
        </nav>
      </div>
    </header>
  );
};

export default Header;
