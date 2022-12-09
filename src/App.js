import "./App.css";
import React from "react";
import American from "./Components/American";
import Logo from "./Components/Logo";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <nav>
        <div className="gridn1">
          <American />
        </div>
        <div className="gridn2" >
          <Logo />
        </div>
        <div className="gridn3">
          <ul>
            <li>
              <Link to="/">
                <Button variant="outline-primary">2022 Vipers</Button>
              </Link>
            </li>
            <br />
            <li>
              <Link to="/about">
                <Button variant="outline-primary">About the League</Button>
              </Link>
            </li>
            <br />
            <li>
              <Link to="/contact">
                <Button variant="outline-primary">Contact Us</Button>
              </Link>
            </li>
          </ul>
          <div></div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
