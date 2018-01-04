import React from "react";
import MainTwo from "./../components/Main";
import About from "./../components/About";
import Search from "./../components/Search";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <MainTwo />
        <About />
        <Search />
      </div>
    )
  }
}

export default Landing;
