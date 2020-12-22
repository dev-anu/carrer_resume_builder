import React from "react";
import GoogleLogin from "react-google-login";

function UserGoogleLogin() {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  return (
    <div>
      <GoogleLogin
        clientId="760185322345-0gfoianmaihhce2lnrl5qh3raj3d68ir.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default UserGoogleLogin;
