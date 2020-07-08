import React, { Component } from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiDice5Outline } from "@mdi/js";
class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home - Quiz App</title>
        </Helmet>
        <div id="home">
          <section>
            <div style={{ textAlign: "center" }}>
              <Icon path={mdiDice5Outline} size={10} color="orange" spin={7} />
            </div>
            <h1>Quiz</h1>
            <div className="play-button-container">
              <ul>
                <li>
                  <Link className="play-button" to="/play/instruction">
                    Play
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Home;
