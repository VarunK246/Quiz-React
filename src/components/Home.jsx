import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>quizzzz</title>
        </Helmet>
        <div id="home">
          <section>
            <div style={{ textAlign: "center" }}>
              <span className="mdi mdi-cube-outline mdi-58px cube"></span>
            </div>
            <h1>Quizz App</h1>

            {/* Play Button */}
            <div id="Play">
              <ul>
                <li>
                  <Link className="play-button" to="/rules">
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
