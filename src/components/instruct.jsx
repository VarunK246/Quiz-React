import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Rules extends Component {
  state = {};
  render() {
    return (
      <div>
        <Fragment>
          <Helmet>
            <title>Instruction</title>
          </Helmet>
          <div className="instruction">
            <h1>How to play the Game</h1>
            <p>Ensure you read it completely from start to finish</p>
            <ul className="browser-default" id="main-list">
              <li>Welcome to sunday samayal</li>
              <li>Corona Curry with Lockdown rice</li>
            </ul>

            <div>
              <span>
                <Link to="/play">Okay lets do this</Link>
              </span>
            </div>
          </div>
        </Fragment>
      </div>
    );
  }
}

export default Rules;
