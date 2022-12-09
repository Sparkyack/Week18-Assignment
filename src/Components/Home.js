import React from "react";
import Homepic from "./Homepic";
import Logo from "./Logo";
import American from "./American";
import stylesheet from "./home.css";

function Home() {
  return (
    <div className="home">
      <div id="gridItem1">
        <Logo />
      </div>
      <div id="welcome">
        <h1>Welcome to the Lincoln Vipers!</h1>
      </div>

      <div id="gridItem3">
        <Logo />
      </div>
      <div id="gridItem4">
        <Logo />
      </div>
      <div id="teampic">
        <Homepic />
      </div>
      <div id="gridItem6">
        <Logo />
      </div>
      <div id="gridItem7">
        <American />
      </div>
      <div id="gridItem8">
        <Logo />
      </div>
      <div id="gridItem9">
        <Logo />
      </div>
      <div id="gridItem10">
        <American />
      </div>
    </div>
  );
}

export default Home;
