import React from "react";
import "./experience.css";
import html_logo from "../../assets/logos/html_logo.png";
import css_logo from "../../assets/logos/css_logo.png";
import tailwind_logo from "../../assets/logos/tailwind_logo.png";
import js_logo from "../../assets/logos/javascript_logo.png";
import react_logo from "../../assets/logos/react_logo.png";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills that I know</h5>
      <h2>Skills</h2>
      <div className="container">
        <div className="frontend-text">FrontEnd</div>
        <div className="logos">
          <div className="skill_card html__logo">
            <img className="logo" src={html_logo} alt="HTML_LOGO" />
            <p className="skill_text">HTML</p>
          </div>
          <div className="skill_card  css__logo">
            <img className="logo" src={css_logo} alt="CSS_LOGO" />
            <p className="skill_text">CSS</p>
          </div>
          <div className="skill_card  js__logo">
            <img className="logo" src={js_logo} alt="JS_LOGO" />
            <p className="skill_text">Javascript</p>
          </div>
          <div className="skill_card  react__logo">
            <img className="logo" src={react_logo} alt="REACT_LOGO" />
            <p className="skill_text">React</p>
          </div>
          <div className="skill_card  tailwind__logo">
            <img className="logo" src={tailwind_logo} alt="TAILWIND_LOGO" />
            <p className="skill_text">Tailwind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
