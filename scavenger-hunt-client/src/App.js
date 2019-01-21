import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AnswerForm from "./components/answerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/questions" component={AnswerForm} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
