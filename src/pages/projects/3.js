import React from "react";
import habitrabbit from '../assets/habitrabbit.jpg'
import './project.css'
function Three() {
    return (
      <section>
          <h1>Habit Tracker - Python, Django, PostgreSQL, HTML, CSS</h1>
          <h2><a href="https://github.com/rudisiona/habittracker" target="_blank" rel="noreferrer">GitHub Repo</a></h2>
          <h2><a href="https://habitrabbit-4c12e5279299.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo</a></h2>
          <img src={habitrabbit} alt="habit rabbit screenshot" width="750" height="400" />
      </section>
    );
  }
  
  export default Three;