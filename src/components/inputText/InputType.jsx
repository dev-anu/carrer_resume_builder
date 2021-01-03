import React, { useState } from "react";
import "../../styles/login.css";

function InputType(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    props.getValue(e.target.value, e.target.name);
  };

  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      onChange={handleChange}
      value={input}
    />
  );
}

export default InputType;
