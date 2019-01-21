import React, { Component } from "react";
import AnswerBox from "./answerBox";
import { getQuestions } from "../services/questions";

class Main extends Component {
  state = {
    hint: []
  };

  componentDidMount() {
    this.setState({ hint: getQuestions() });
  }

  render() {
    console.log(this.state.hint);
    return (
      <div>
        <AnswerBox value={""} onChange={this.handleAnswer} />
      </div>
    );
  }
}

export default Main;
