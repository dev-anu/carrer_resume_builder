import React from "react";
import Header from "../components/header/Header";
import SignUp from "../components/signup/SignUp";
import SignIn from "../components/signin/SignIn";

function Login(props) {
  const id = props.match.params.id;
  return (
    <div>
      <Header />
      <div className="login">
        <div className="signup">
          <SignUp />
        </div>
        <div className="signin">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default Login;
