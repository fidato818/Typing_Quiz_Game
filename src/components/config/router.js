import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../screens/Login";
import HighScoreScreen from "../screens/HighScoreScreen";
import LevelScreen from "../screens/LevelScreen";
import EasyScreen from "../screens/EasyScreen";
import HardScreen from "../screens/HardScreen";
import MediumScreen from "../screens/MediumScreen";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    function Index() {
      return <h2>Home</h2>;
    }

    function About() {
      return <h2>About</h2>;
    }

    function Users() {
      return <h2>Users</h2>;
    }
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/login/">Login</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
              <li>
                <Link to="/LevelScreen/">LevelScreen</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Route path="/login/" component={Login} />
          <Route path="/HighScoreScreen/" component={HighScoreScreen} />
          <Route path="/LevelScreen/" component={LevelScreen} />
          <Route path="/EasyScreen/" component={EasyScreen} />
          <Route path="/MediumScreen/" component={MediumScreen} />
          <Route path="/HardScreen/" component={HardScreen} />
        </div>
      </Router>
    );
  }
}
