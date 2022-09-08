import React from "react";
import Typed from "react-typed";
import ButtonSection from "../button-section/ButtonSection";
import "./SectionWithBGImage.css";

function SectionWithBGImage(props) {
  return (
    <div>
      <section
        className="home-section"
        id="home-section"
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      >
        <div className="about-me-section">
          <div className="about-me">
            <div className="line-1">{props.line1}</div>
            <div className="line-2">
              {props.line2}
              <span> {props.line2Name}</span>
            </div>
            <div className="line-3">
              {props.line3} {""}
              <span>
                <Typed strings={props.line3Profession} typeSpeed={60} backSpeed={60} backDelay={2000} loop={true} />
              </span>
            </div>
          </div>
          <ButtonSection buttonLink={require("../../resume/Resume.pdf")} buttonText="Download Resume" buttonType="submit" />
        </div>
      </section>
    </div>
  );
}

export default SectionWithBGImage;
