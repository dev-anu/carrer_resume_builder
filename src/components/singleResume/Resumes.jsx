import React from "react";
import SingleResume from "./SingleResume";
import "./resumes.css";

function Resumes() {
  const resumes = [
    {
      id: 1,
      url:
        "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/02/Resume-Design-Template-1.png",
    },
    {
      id: 2,
      url:
        "https://resumegenius.com/wp-content/uploads/2020/05/resume-example-sample-best.png",
    },
    {
      id: 3,
      url:
        "https://s3.amazonaws.com/thumbnails.venngage.com/template/1be5e53e-7dc6-404e-bde1-3e9bc0192405.png",
    },
    {
      id: 4,
      url:
        "https://s3.amazonaws.com/thumbnails.venngage.com/template/1be5e53e-7dc6-404e-bde1-3e9bc0192405.png",
    },
    {
      id: 5,
      url:
        "https://www.easel.ly/blog/wp-content/uploads/2019/01/Blue-Green-Resume-Template.jpg",
    },
    {
      id: 6,
      url:
        "https://www.easel.ly/blog/wp-content/uploads/2019/01/minimalist-infographic-template.jpg",
    },
    {
      id: 7,
      url:
        "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/02/Resume-Design-Template-1.png",
    },
    {
      id: 8,
      url:
        "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/02/Resume-Design-Template-1.png",
    },
  ];
  return (
    <div className="resumes">
      <SingleResume resumes={resumes} />
    </div>
  );
}

export default Resumes;
