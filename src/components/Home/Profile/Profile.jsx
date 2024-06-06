import React from "react";
import GitHub from "../../../assets/images/icons8-github-64.png";
import LinkedIn from "../../../assets/images/icons8-linkedin-64.png";
import "./Profile.css";
import { useTypewriter } from "react-simple-typewriter";
import { Link as ScrollLink } from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom'

const Profile = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder 💻",
      "Full Stack Developer 🌐",
      "UI Designer 🎨",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <div>
              <span className="primary-text">Hi, I Am</span>
            </div>
            <div>
              <span className="highlighted-text">KAWISHKA WIMALARATHNA</span>
            </div>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <span
                  style={{
                    fontSize: "1em",
                    fontFamily: "Lucida Handwriting, cursive",
                  }}
                >
                  a {text}
                </span>
              </h1>
              <span className="profile-role-tagline">
                Transforming Vision into Reality through Code
              </span>
            </span>
          </div>

          <div className="profile-option">
            <a href="KawishkaCV.pdf" download="kawishka wimalarathna.pdf">
              <button className="btn" style={{ color: "#00ffff" }}>
                RESUME<span className="arrow"> ▼</span>
              </button>
            </a>
            <ScrollLink to='portfolio' spy={true} offset={-90} ><RouterLink to='/' ><button className="btn" style={{ color: "#00ffff" }}>
              PROJECTS
            </button></RouterLink></ScrollLink>
          </div>

          <div className="colz">
            <div className="colz-icon">
              <img
                src={GitHub}
                alt="github logo"
                style={{ width: "50px", height: "50px" }}
              />
              <img
                src={LinkedIn}
                alt="linkedin logo"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
