import React from "react";
import "../styles/dashboard.css";
import First from "../resumeStyles/first/First";
function Resume({ name, email, address, phone, date }) {
  return (
    <div className="display_res">
      <First
        name={name}
        email={email}
        address={address}
        phone={phone}
        date={date}
      />
    </div>
  );
}

export default Resume;
