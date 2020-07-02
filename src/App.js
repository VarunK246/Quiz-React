import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Rules from "./components/instruct";
import Play from "./components/quiz/play";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/play" component={Play} />
      </Router>
    </div>
  );
}

export default App;
