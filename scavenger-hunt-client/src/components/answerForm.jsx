import React from "react";
import Form from "./common/form";

class AnswerForm extends Form {
  state = {
    questions: "",
    answers: ""
  };

  render() {
    return (
      <div>
        <h1>Questions</h1>
      </div>
    );
  }
}

export default AnswerForm;
