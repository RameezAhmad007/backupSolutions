import React from "react";
import List from "../../smallcomponents/list/List";
import "./Header.css";

const Header = () => {
  return (
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex justify-content-between">
        <div class="logo">
          {/* <!--<h1><a href="index.html"><span>AJ</span>&COMPANY</a></h1>-->
                <!-- Uncomment below if you prefer to use an image logo --> */}

          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
        </div>
        <nav id="navbar" className="navbar">
          <List />
        </nav>
      </div>
    </header>
  );
};

export default Header;
