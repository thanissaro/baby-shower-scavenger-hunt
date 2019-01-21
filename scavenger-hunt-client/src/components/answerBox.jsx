import React from "react";

const AnswerBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="answer"
      className="form-control my-3"
      placeholder="Type Answer Here..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default AnswerBox;
