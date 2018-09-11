import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
//import ReactDOM from "react-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import MyNavbar from "./components/CustomNavbar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MyNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
