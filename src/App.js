import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/config/router";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
