import React from "react";
import web from "../../assets/images/project/web.jpeg";
import software from "../../assets/images/project/soft.jpeg";
import ml from "../../assets/images/project/ml.jpeg";
import "./Projects.css";
import {Link} from 'react-router-dom'

const Projects = () => {
  
  return (
    <div className="project" id="portfolio">
      <div className="project-container">
        <div className="title-container">
          <h2>PORTFOLIO</h2>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={web} alt="web" className="card-img" />
            <div className="card-data">
              <span className="card-description">
                <ul>
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>Full Stack Development</li>
                  <li>UI/UX Design</li>
                </ul>
              </span>
              <h2 className="card-title">Web Development</h2>
              <Link to ='/a' className="card-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0000F5"><path d="M480-83 240-323l46.67-46.67 193.33 193 193.33-193L720-323 480-83Zm0-243.33-240-240L286.67-613 480-420l193.33-193L720-566.33l-240 240Zm0-243.34-240-240 46.67-46.66 193.33 193 193.33-193L720-809.67l-240 240Z"/></svg>
              </Link>
            </div>
          </article>

          <article className="card-article">
            <img src={software} alt="web" className="card-img" />
            <div className="card-data">
              <span className="card-description">
                <ul>
                  <li>Software Development</li>
                  <li>Enterprise Applications</li>
                </ul>
              </span>
              <h2 className="card-title">Web Development</h2>
              <Link to ='/a' className="card-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0000F5"><path d="M480-83 240-323l46.67-46.67 193.33 193 193.33-193L720-323 480-83Zm0-243.33-240-240L286.67-613 480-420l193.33-193L720-566.33l-240 240Zm0-243.34-240-240 46.67-46.66 193.33 193 193.33-193L720-809.67l-240 240Z"/></svg>
              </Link>
            </div>
          </article>

          <article className="card-article">
            <img src={ml} alt="machine learning" className="card-img" />
            <div className="card-data">
              <span className="card-description">
                <ul>
                  <li>Object detection</li>
                  <li>Natural language processing</li>
                  <li>Image recognition</li>
                </ul>
              </span>
              <h2 className="card-title">Machine Learning Applications</h2>
              <Link to ='/b' className="card-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0000F5"><path d="M480-83 240-323l46.67-46.67 193.33 193 193.33-193L720-323 480-83Zm0-243.33-240-240L286.67-613 480-420l193.33-193L720-566.33l-240 240Zm0-243.34-240-240 46.67-46.66 193.33 193 193.33-193L720-809.67l-240 240Z"/></svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Projects;
