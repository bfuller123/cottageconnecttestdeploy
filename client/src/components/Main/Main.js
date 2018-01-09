import React, { Component } from "react";
import "./Main.css";
import Background from "./../../images/cover2.jpg";

var mainStyle = {
  width: "100%",
  height: "1000px",
  backgroundImage: "url(" + Background + ")",
};

class MainTwo extends Component {
  render() {
    return (
      <section style={ mainStyle }>
        <div className="row">
          <div className="MainHeads">
            <h1 className="MainH1">Cottage Connect</h1>
            <h2 className="MainH2">Uniting people with homemade products</h2>
              <div className="container-fluid text-center">
                <a href="/#About" title="To About">
                <span className="glyphicon glyphicon-circle-arrow-down"></span></a>

              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainTwo;
