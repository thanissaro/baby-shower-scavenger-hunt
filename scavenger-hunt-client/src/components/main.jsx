import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { ProgressBar } from "react-bootstrap";
import { getQuestions } from "../services/questions";

class Main extends Form {
  state = {
    data: {
      hint: [],
      answer: ""
    },
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    answer: Joi.string()
      .required()
      .label("Answer")
  };

  componentDidMount() {
    this.setState({ data: getQuestions() });
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <ProgressBar active bsStyle="success" now={25} />
        <form onSubmit={this.handleSubmit}>
          <h1>Hint: </h1>
          {this.renderInput("answer", "Answer")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default Main;
