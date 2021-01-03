import React, { useState, useContext } from "react";
import "../styles/dashboard.css";
import { UserContext } from "../App";
function Form(props) {
  const { state, dispatch } = useContext(UserContext);
  const name = state.name;
  const email = state.email;
  const [fname, setName] = useState(name);
  const [femail, setEmail] = useState(email);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState();
  const [date, setDate] = useState();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }

    if (e.target.name === "email") {
      setName(e.target.value);
    }

    if (e.target.name === "address") {
      setAddress(e.target.value);
    }
    props.getResumeValue(e.target.value, e.target.name);
  };
  return (
    <div className="form_area">
      <h2>Personal Information</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={fname}
          name="name"
          id="name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={femail}
          name="email"
          id="email"
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <textarea
          value={address}
          name="address"
          id="address"
          onChange={handleChange}
          rows="10"
        ></textarea>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          value={phone}
          name="phone"
          id="phone"
          onChange={handleChange}
        />
        <label htmlFor="date">Date Of Birth</label>
        <input
          type="date"
          value={date}
          name="date"
          id="date"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Form;
