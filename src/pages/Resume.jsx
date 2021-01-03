import React from "react";
import "../styles/dashboard.css";
function Resume({ name, email, address, phone, date }) {
  return (
    <div className="display_res">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{date}</p>
    </div>
  );
}

export default Resume;
