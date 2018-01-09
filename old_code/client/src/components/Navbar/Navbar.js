import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Cottage Connect</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#About" className="active">About</a></li>
            <li><a href="#Search">Search</a></li>
            <li><a href="#">Log In</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;