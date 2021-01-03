import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { UserContext } from "./App";
import { useHistory } from "react-router-dom";

function UserGoogleLogin() {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const responseGoogle = (response) => {
    localStorage.setItem("jwt", response.accessToken);
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    dispatch({ type: "USER", payload: response.profileObj });
    alert("Logged In Successfull");
    history.push("/dashboard");
  };
  return (
    <GoogleLogin
      clientId="760185322345-0gfoianmaihhce2lnrl5qh3raj3d68ir.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default UserGoogleLogin;
