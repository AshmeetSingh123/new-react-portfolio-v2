import React, { useContext } from "react";
import "./Intro.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { ThemeContext } from "../../context";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="intro"
      style={{
        backgroundColor: darkMode
          ? "var(--primary)"
          : "var(--darkprimary)",
        color: darkMode ? "black" : "white",
      }}
    >
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-left-text">Hello, my name is</h2>
          <h1 className="intro-left-name">Ashmeet Singh</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UX / UI Designer</div>
              <div className="intro-title-item">Graphic Designer</div>
              <div className="intro-title-item">Problem Solver</div>
            </div>
          </div>
          <div className="intro-description">
            I’m a software engineer specializing in building and designing
            modern, stylish Web Applications. I'm passionate about creating
            interactive digital experiences on the web.
          </div>
        </div>
        <p className="intro-left-scroll-text">SCROLL</p>
        <KeyboardDoubleArrowDownIcon />
      </div>
      <div className="intro-right">
        <div className="intro-right-bg"></div>
        <img className="intro-image"  src='https://res.cloudinary.com/qziners/image/upload/v1641739219/cartoon-me_icdos0.png' alt="MY Portrait" />
      </div>
    </div>
  );
};
export default Intro;
