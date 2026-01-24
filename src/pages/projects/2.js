import React from "react";
import playlistin from '../assets/playlistin.jpg'
import './project.css'
function Two() {
    return (
      <section className="projectsect">
          <h1>Album Reviewer - MongoDB, JavaScript, HTML, CSS</h1>
          <h2><a href="https://github.com/rudisiona/albumtracker" target="_blank" rel="noreferrer">GitHub Repo</a></h2>
          <h2><a href="https://playlistin-b93bbc7b368e.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo</a></h2>
          <img src={playlistin} alt="albhum reviewer screenshot" width="750" height="400" />
      </section>
    );
  }
  
  export default Two;