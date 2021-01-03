import React from "react";
import "../styles/first.css";
function First({ name, email, address, phone, date }) {
  return (
    <div className="resume_container">
      <div className="head_section">
        <h1>{name}</h1>
        <div className="head_right_sec">
          <p>{phone}</p>
          <p>{email}</p>
          <p>{address}</p>
        </div>
      </div>
      <div className="objective_section">
        <h4>Objective</h4>
        <p>This is my Objective.</p>
      </div>
      <div className="educational_section">
        <h4>Educational History</h4>
        <p className="headings">Degree</p>
        <div className="edu_sec_deg">
          <p>Start Year</p>
          <p>End Year</p>
          <p>College</p>
        </div>
        <p className="headings">Degree</p>
        <div className="edu_sec_deg">
          <p>Start Year</p>
          <p>End Year</p>
          <p>College</p>
        </div>
      </div>
      <div className="experience_section">
        <h4>Experience History</h4>
        <p className="headings">Company Name</p>
        <div className="edu_sec_deg">
          <p>Start Year</p>
          <p>End Year</p>
        </div>
        <p className="tech_used">Technology Used</p>
        <p className="headings">Company Name</p>
        <div className="edu_sec_deg">
          <p>Start Year</p>
          <p>End Year</p>
        </div>
        <p className="tech_used">Technology Used</p>
      </div>
    </div>
  );
}

export default First;
