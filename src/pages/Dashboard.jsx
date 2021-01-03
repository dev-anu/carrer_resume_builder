import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";
import Resume from "./Resume";
import Form from "./Form";
import "../styles/dashboard.css";

function Dashboard() {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const name = state.name;
  const email = state.email;
  const [fname, setName] = useState(name);
  const [femail, setEmail] = useState(email);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const logout = () => {
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    history.push("/");
  };

  const getResumeValue = (value, term) => {
    if (term === "name") {
      setName(value);
    }
    if (term === "email") {
      setEmail(value);
    }
    if (term === "address") {
      setAddress(value);
    }
    if (term === "phone") {
      setPhone(value);
    }
    if (term === "date") {
      setDate(value);
    }
  };

  return (
    <div>
      <div className="dash_log">
        <button onClick={logout}>Logout</button>
      </div>
      <div className="dash_body">
        <Resume
          name={fname}
          email={femail}
          address={address}
          phone={phone}
          date={date}
        />
        <Form getResumeValue={getResumeValue} />
      </div>
    </div>
  );
}

export default Dashboard;
