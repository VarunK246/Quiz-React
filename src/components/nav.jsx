import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link id="nav-mobile" className="brand-logo" to="/">
            <h3>Quiz</h3>
          </Link>
          <ul id="nav-ul" className="right hide-on-med-and-down">
            <Link to="/login">
              <li>
                <h5>Login</h5>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <h5>About</h5>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
