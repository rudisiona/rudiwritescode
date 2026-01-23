import React from "react";
import matching from '../assets/matching.jpg'
import './project.css'
function One() {
    return (
      <section>
          <h1>Matching Game - JavaScript, HTML, CSS</h1>
          <h2><a href="https://github.com/rudisiona/matchinggame" target="_blank" rel="noreferrer">GitHub Repo</a></h2>
          <h2><a href="https://rudisiona.github.io/matchinggame/" target="_blank" rel="noreferrer">Live Demo</a></h2>
          <img src={matching} alt="matching game screenshot" width="750" height="400" />
      </section>
    );
  }
  
  export default One;