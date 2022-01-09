import React, { useContext } from "react";
import "./About.css";
import HTML from "../../images/html5-logo.png";
import CSS from "../../images/css-logo.png";
import JS from "../../images/js-logo.png";
import MONGODB from "../../images/mongodb-logo.png";
import REACT from "../../images/react-logo.png";
import NODE from "../../images/node-logo.png";
import AboutMeBG from "../../images/about-me-bg.png";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="about"
      style={{
        backgroundColor: darkMode ? "var(--primary)" : "var(--darkprimary)",
        color: darkMode ? "black" : "white",
      }}
    >
      <div
        className="about-left"
        style={{
          backgroundColor: darkMode ? "var(--secondary)" : "var(--secondary)",
        }}
      >
        <img className="about-left-img" style={{backgroundColor: darkMode ? 'var(--primary)': 'black'}} src={AboutMeBG} alt="About-Me-BG" />
      </div>
      <div className="about-right">
        <h1 className="about-right-heading">About Me</h1>
        <p className="about-right-subtitle">
          I am a Student in Guru Tegh Bahadur Institute of Technology persuing
          my B.Tech degree.{" "}
        </p>
        <p className="about-right-text">
          Over the years , i have studied various technologies like Web
          Development( HTML 5,CSS 3,JS 6, React.Js, Express.js, Node.js,
          MongoDB, SQL, EJS, etc). and also have experience using CSS libraries
          such as Bootstrap, Material UI. I have improved my proficiency in
          programming while Learning Data Structures and Algorithms. I have
          experience of working on Adobe Photoshop & Corel Draw.
        </p>
        <hr className="about-hr" />
        <h3 className="about-tech-known-heading">Technologies Known</h3>
        <div className="about-tech-learned">
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src={HTML}
            alt="HTML"
          />
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src={CSS}
            alt="CSS"
          />
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src={JS}
            alt="JS"
          />
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src={REACT}
            alt="REACT"
          />
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src={NODE}
            alt="NODE"
          />
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src={MONGODB}
            alt="MONGODB"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
