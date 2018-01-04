import React from "react";
import Main from "./../components/Main";
import About from "./../components/About";
import Search from "./../components/Search";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <About />
        <Search />
      </div>
    )
  }
}

export default Login;
