import React, { useState } from "react";
import Button from "../button/Button";
import InputType from "../inputText/InputType";
import "../../styles/login.css";
import axios from "axios";

function SignUp(props) {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errName, seterrName] = useState("");
  const [errEmail, seterrEmail] = useState("");
  const [errPass, seterrPass] = useState("");
  const [errConfirm, seterrConfirm] = useState("");

  const getValue = (term, name) => {
    if (name === "fullname") {
      setName(term);
    }
    if (name === "email") {
      setEmail(term);
    }
    if (name === "password") {
      setPassword(term);
    }
    if (name === "confirm") {
      setConfirm(term);
    }
  };

  const validate = () => {
    if (confirm !== password) {
      seterrConfirm("Password do not match");
      return false;
    } else if (!fullname) {
      seterrName("Please enter name");
      return false;
    } else if (!email) {
      seterrEmail("Please enter Email");
      return false;
    } else if (!password) {
      seterrPass("Please enter Password");
      return false;
    } else if (!confirm) {
      seterrConfirm("Please enter Confirm");
      return false;
    } else {
      seterrName("");
      seterrEmail("");
      seterrPass("");
      seterrConfirm("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate() === true) {
      axios
        .post("http://localhost:8080/register", {
          name: fullname,
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error);
          } else {
            alert(res.data.success);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="fullname">Name:</label>
        <InputType
          className="fullname"
          type="text"
          name="fullname"
          id="fullname"
          getValue={getValue}
        />
      </div>
      <div className="err">{errName}</div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <InputType
          className="email"
          type="email"
          name="email"
          id="email"
          getValue={getValue}
        />
      </div>
      <div className="err">{errEmail}</div>
      <div className="form-control">
        <label htmlFor="password">Password:</label>
        <InputType
          type="password"
          name="password"
          id="password"
          getValue={getValue}
        />
      </div>
      <div className="err">{errPass}</div>
      <div className="form-control">
        <label htmlFor="confirm">Confirm Password:</label>
        <InputType
          type="password"
          name="confirm"
          id="confirm"
          getValue={getValue}
        />
      </div>
      <div className="err">{errConfirm}</div>
      <div className="btn_div">
        <Button type="submit" name="SignUp" className="success_btn" />
      </div>
    </form>
  );
}

export default SignUp;
