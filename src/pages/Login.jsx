import React from "react";
import Header from "../components/header/Header";
import UserGoogleLogin from "../UserGoogleLogin";

function Login(props) {
  const id = props.match.params.id;
  return (
    <div>
      <Header />
      <div>{id}</div>
      <UserGoogleLogin />
    </div>
  );
}

export default Login;
