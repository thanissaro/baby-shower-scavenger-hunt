import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {
    data: {}
  };

  renderInput(name, label, type = "text") {
    const { data } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
