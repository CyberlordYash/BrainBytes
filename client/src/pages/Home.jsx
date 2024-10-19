import React from "react";
import Posts from "../component/Posts";
import RightArrow from "../images/rightarrow.svg";
import Gemini from "../images/gemini.svg";
import { Link } from "react-router-dom";
import Search from "../images/search.svg";
const Home = () => {
  return (
    <div className="home">
      <div className=" greet-bg">
        {/* <img src={Wave} className="greet-img"></img> */}
        <p className="greet-4">Smart Blogging starts here</p>
        <img className="arrow-icon" src={RightArrow}></img>
        <h1 className="greet-1">Hi, there! </h1>
        <h1 className="greet-2">Let's explore</h1>

        <p className="greet-4">
          Enhance your notes and blog sharing experience with AI-driven insights
          and seamless collaboration, powered by Gemini.
        </p>
      </div>
      <div className="home-mid">
        <Link to="/ai" className=" greet-bg2">
          <img className="gemini" src={Gemini}></img>
          <h1 className="greet-1">Gen AI </h1>
          <p className="greet-3">Get Ai generated Gemini powered blogs</p>
        </Link>
        <Link to="/fact" className=" greet-bg3">
          <img className="gemini" src={Search}></img>
          <h1 className="greet-1">FactShare</h1>
          <p className="greet-3">
            Get random facts on your fav topics and enhance your knowledge
          </p>
        </Link>
      </div>

      <Posts />
    </div>
  );
};

export default Home;
