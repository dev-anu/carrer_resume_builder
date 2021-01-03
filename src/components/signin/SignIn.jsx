import React, { useState, useContext } from "react";
import Button from "../button/Button";
import InputType from "../inputText/InputType";
import "../../styles/login.css";
import UserGoogleLogin from "../../UserGoogleLogin";
import axios from "axios";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";

function SignIn(props) {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getValue = (term, name) => {
    if (name === "email") {
      setEmail(term);
    }
    if (name === "password") {
      setPassword(term);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          localStorage.setItem("jwt", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data));
          dispatch({ type: "USER", payload: res.data, resumeId: props.id });
          alert("Logged In Successfull");
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
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
      <div className="form-control">
        <label htmlFor="password">Password:</label>
        <InputType
          type="password"
          name="password"
          id="password"
          getValue={getValue}
        />
      </div>
      <div className="btn_login">
        <Button type="submit" name="SignIn" className="success_btn" />
        <div className="google_log">
          <UserGoogleLogin />
        </div>
      </div>
    </form>
  );
}

export default SignIn;
