import React, { useEffect } from "react";
import "./WebDevelopment.css";
import sample from "../../../assets/images/project/sample.mp4";
import sample1 from "../../../assets/images/project/sample.mp4";
import sample2 from "../../../assets/images/project/sample.mp4";
import sample3 from "../../../assets/images/project/sample.mp4";
import sample4 from "../../../assets/images/project/sample.mp4";
import sample5 from "../../../assets/images/project/sample.mp4";

const WebDevelopment = () => {
  useEffect(() => {
    const videoElements = document.querySelectorAll(".video-container video");
    const popup = document.querySelector(".popup-video");
    const closeButton = document.querySelector(".popup-video .close-btn");
    const popupVideo = document.querySelector(".popup-video video");

    videoElements.forEach((element) => {
      element.onclick = () => {
        popup.style.display = "flex";
        popupVideo.src = element.src;
      };
    });

    closeButton.onclick = () => {
      popup.style.display = "none";
      popupVideo.src = "";
    };

    return () => {
      videoElements.forEach((element) => {
        element.onclick = null;
      });
      closeButton.onclick = null;
    };
  }, []);

  return (
    <div className="web-container">
      <h2>WEB DEVELOPMENT</h2>
      <div className="video-container">
        
        <div className="video">
          <video src={sample} muted></video>
          <div class="video-data">
            <h3 class="video-name">Video Name 1</h3>
            <p class="video-description">Video description goes here.</p>
            <button href="#" class="video-button">
              DEMO
            </button>
            <button href="#" class="video-button">
              GIT
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="video">
          <video src={sample1} muted></video>
          <div class="video-data">
            <h3 class="video-name">Video Name 2</h3>
            <p class="video-description">Video description goes here.</p>
            <button href="#" class="video-button">
              DEMO
            </button>
            <button href="#" class="video-button">
              GIT
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="video">
          <video src={sample2} muted></video>
          <div class="video-data">
            <h3 class="video-name">Video Name 3</h3>
            <p class="video-description">Video description goes here.</p>
            <button href="#" class="video-button">
              DEMO
            </button>
            <button href="#" class="video-button">
              GIT
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="video">
          <video src={sample3} muted></video>
          <div class="video-data">
            <h3 class="video-name">Video Name 4</h3>
            <p class="video-description">Video description goes here.</p>
            <button href="#" class="video-button">
              DEMO
            </button>
            <button href="#" class="video-button">
              GIT
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="video">
          <video src={sample4} muted></video>
          <div class="video-data">
            <h3 class="video-name">Video Name 5</h3>
            <p class="video-description">Video description goes here.</p>
            <button href="#" class="video-button">
              DEMO
            </button>
            <button href="#" class="video-button">
              GIT
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="video">
          <video src={sample5} muted></video>
          <div class="video-data">
            <h3 class="video-name">Video Name 6</h3>
            <p class="video-description">Video description goes here.</p>
            <button href="#" class="video-button">
              DEMO
            </button>
            <button href="#" class="video-button">
              GIT
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="popup-video">
        <span className="close-btn">
          <i className="fas fa-times fa-2x"></i>
        </span>
        <video muted autoPlay controls></video>
      </div>
    </div>
  );
};

export default WebDevelopment;
