import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Main from "./components/main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/main" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
