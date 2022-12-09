import React from "react";
import { TeamsList } from "./TeamsList";
import Logo from "./Logo";
import stylesheet from "../styles.css";

function About() {
  return (
    <div className="title">
      <Logo />
      <Logo />
      <Logo />
      <Logo />
      <h1>League Teams & Roster</h1>
      <TeamsList />
      <Logo />
      <Logo />
      <Logo />
      <Logo />
    </div>
  );
}

export default About;
