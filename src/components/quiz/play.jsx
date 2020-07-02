import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

class Play extends Component {
  state = {};
  handleCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="quiz-questions">
          <div className="lifeline-container">
            <span className="mdi mdi-set-center mdi-24px life" />2
            <span className="mdi mdi-lightbulb-outline mdi-24px bulb" />5
          </div>
          <div>
            <p>
              <span>1 of 15</span>
              <span className="mdi mdi-clock-outline mdi-24px"></span>
            </p>
          </div>
          <h5>Google was founded in which year ?</h5>

          <div className="options-container">
            <p className="option">1997</p>
            <p className="option">1998</p>
          </div>
          <div className="options-container">
            <p className="option">1999</p>
            <p className="option">2000</p>
          </div>
          <div className="button-container">
            <button>Previous</button>
            <button>Next</button>
            <button>Quit</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;
