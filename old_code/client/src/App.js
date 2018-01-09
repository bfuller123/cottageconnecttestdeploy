import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import MemberPortal from "./pages/MemberPortal";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/portal" component={MemberPortal} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
