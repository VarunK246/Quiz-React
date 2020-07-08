import React, { Component } from "react";
import Navbar from "./components/nav";
import About from "./components/about";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/homepage";
import Play from "./components/quiz/Play";
import QuizInstructions from "./components/quiz/QuizInstructions";
import QuizSummary from "./components/quiz/QuizSummary";
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/play/quiz" component={Play} />
          <Route path="/play/instruction" component={QuizInstructions}></Route>
          <Route path="/play/quizSummary" exact component={QuizSummary} />
        </div>
      </Router>
    );
  }
}

export default App;
