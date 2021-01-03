import React, { useContext } from "react";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    history.push("/");
  };
  const name = state.name;
  const email = state.email;

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}

export default Dashboard;
