import React from "react";
import Header from "../components/header/Header";
import Resumes from "../components/singleResume/Resumes";

function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <Resumes />
    </div>
  );
}

export default HomePage;
