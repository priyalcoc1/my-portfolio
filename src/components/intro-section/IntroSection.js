import React from "react";
import Typed from "react-typed";
import ButtonSection from "../button-section/ButtonSection";
import "./IntroSection.css";

function IntroSection(props) {
  return (
    <div>
      <section className="my-intro-with-image">
        <div className="max-width">
          <div className="heading-text-container">About Me</div>
          <div className="about-me-with-image-and-intro-container">
            <div className="left-side-image-container">
              <img src={props.introImageLink} alt="" />
            </div>
            <div className="right-side-text-container">
              <div className="heading-container">
                My Name Is <span style={{ color: "red" }}>{props.line2Name}</span> & I Am A{" "}
                <span style={{ color: "red" }}>
                  <Typed strings={props.line3Profession} typeSpeed={60} backSpeed={60} backDelay={2000} loop={true} />
                </span>
              </div>
              <div className="intro-container">{props.introHere}</div>
              <ButtonSection buttonLink={require("../../resume/Resume.pdf")} buttonText="Download Resume" buttonType="submit"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroSection;
