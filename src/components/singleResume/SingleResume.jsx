import React from "react";
import "./resumes.css";
import { Link } from "react-router-dom";

function SingleResume(props) {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div className="resume">
      {props.resumes.map((imgs) => (
        <Link to={`/login/${imgs.id}`}>
          <img
            src={imgs.url}
            alt={imgs.id}
            key={imgs.id}
            onClick={() => handleClick(imgs.id)}
          />
        </Link>
      ))}
    </div>
  );
}

export default SingleResume;
