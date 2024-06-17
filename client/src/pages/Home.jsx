import React from "react";
import Posts from "../component/Posts";
import RightArrow from "../images/rightarrow.svg";

const Home = () => {
  return (
    <div className="home">
      <div className=" greet-bg">
        {/* <img src={Wave} className="greet-img"></img> */}
        <p className="greet-4">Smart Bloggin starts here</p>
        <img className="arrow-icon" src={RightArrow}></img>
        <h1 className="greet-1">Hi, there! </h1>
        <h1 className="greet-2">Let's explore</h1>

        <p className="greet-3">
          Empower your blogging journey with insightful, self-serve analytics to
          help you attract, engage, and grow your readership.
        </p>
      </div>
      <Posts />
    </div>
  );
};

export default Home;
