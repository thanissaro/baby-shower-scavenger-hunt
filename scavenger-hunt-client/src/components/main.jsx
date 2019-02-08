import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { ProgressBar } from "react-bootstrap";
import { getQuestions } from "../services/questions";

class Main extends Form {
  state = {
    data: [],
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
    const hint = this.state.data.map(data => {
      return <span key={data.id}>{data.hint}</span>;
    });

    return (
      <div>
        <ProgressBar active bsStyle="success" now={50} />
        <form onSubmit={this.handleSubmit}>
          <h1>Hint: {hint[0]}</h1>
          {this.renderInput("data[answer]", "Answer")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default Main;
