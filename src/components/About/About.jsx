import React, { useContext } from "react";
import "./About.css";
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
        <img className="about-left-img" style={{backgroundColor: darkMode ? 'var(--primary)': 'black'}} src='https://res.cloudinary.com/qziners/image/upload/v1641739220/about-me-bg_eul3g6.png' alt="About-Me-BG" />
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
            src='https://res.cloudinary.com/qziners/image/upload/v1641739403/tech%20logos/html5-logo_dt9lrc.png'
            alt="HTML"
          />
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src='https://res.cloudinary.com/qziners/image/upload/v1641739403/tech%20logos/css-logo_reg6zv.png'
            alt="CSS"
          />
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src='https://res.cloudinary.com/qziners/image/upload/v1641739404/tech%20logos/js-logo_mhcyyf.png'
            alt="JS"
          />
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src='https://res.cloudinary.com/qziners/image/upload/v1641739404/tech%20logos/react-logo_tttxax.png'
            alt="REACT"
          />
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src='https://res.cloudinary.com/qziners/image/upload/v1641739404/tech%20logos/node-logo_zrpv32.png'
            alt="NODE"
          />
          <img
            style={{ backgroundColor: darkMode ? "var(--primary)" : "white" }}
            className="about-tech-logos"
            src='https://res.cloudinary.com/qziners/image/upload/v1641739404/tech%20logos/mongodb-logo_ktnqfi.png'
            alt="MONGODB"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
