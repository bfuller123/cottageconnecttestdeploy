import React, { Component } from "react";
import "./Main.css";

class MainTwo extends Component {
  render() {
    return (
      <div className="backgroundMain">
      <br />
       <br />
        <br />
         <br />  
          <br />
           <br /> 
        <div className="row">
        
          <div className="container-fluid text-center col-lg-12 col-md-12 col-sm-12">
              <h1 id="MainHed">Cottage Connect</h1>
              <h2 id="MainDek">Uniting people with homemade products</h2>
          </div>
        </div>      
        <div className="row">
          <div className="container-fluid text-center col-lg-12 col-md-12 col-sm-12">
            <a href="/#About" title="To About">
            <span className="glyphicon glyphicon-circle-arrow-down"></span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainTwo;
