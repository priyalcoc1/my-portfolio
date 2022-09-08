import React, { useState, useEffect } from "react";
import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavigationBar(props) {
  // Changing Text Color Shadow Background Color(Responsive), Menu, And Text Drop Button Color While Scrolling
  const [textColor, setTextColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState(props.setBackgroundColor);
  const [backgroundColorResponsive, setBackgroundColorResponsive] = useState("transparent");
  const [menuButtonColor, setMenuButtonColor] = useState("red");
  const [textDropShadow, setTextDropShadow] = useState("drop-shadow(0px 4px 10px white)");

  function listenScrollEvent() {
    window.scrollY > 200 ? setTextColor("red") : setTextColor("white");
    window.scrollY > 200 ? setBackgroundColor("black") : setBackgroundColor(props.setBackgroundColor);
    window.scrollY > 200 ? setBackgroundColorResponsive("rgb(0,0,0,0.6)") : setBackgroundColorResponsive("transparent");
    window.scrollY > 200 ? setMenuButtonColor("white") : setMenuButtonColor("red");
    window.scrollY > 200 ? setTextDropShadow("drop-shadow(0px 4px 15px white)") : setTextDropShadow("drop-shadow(0px 4px 15px white)");
  }

  // CHange NavBar Background Color When Switched To Other Page
  useEffect(() => {
    setBackgroundColor(props.setBackgroundColor);
  }, [props.setBackgroundColor]);

  // Scrolling Will Change Nav Bar Color And Text Color
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  // Changing Menu Button On Click
  const [item, setItem] = React.useState(true);

  // Menu Slide Left To Right When Clicked On Menu Button
  const [leftSlidePosition, setLeftSlidePosition] = useState("-120%");

  function expandLeftSlidePosition() {
    if (leftSlidePosition === "-120%") {
      setLeftSlidePosition("0%");
    } else {
      setLeftSlidePosition("-120%");
    }
  }

  // OnClick Of Hamburger Menu Icon, It Will Change Icon To Cross Menu Icon
  function handleitem() {
    if (item === true) {
      setItem(false);
    } else {
      setItem(true);
    }
  }

  // NavBar Link Text Decoration Setting
  const navBarLinkTextDecoration = {
    textDecoration: "none",
    color: textColor,
    transition: "all 0.6s ease-in-out",
  };

  return (
    <div>
      <section
        className="fixed-navigation-bar"
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <div className="left-side-section">
          <div className="logo-container">
            <Link to="/">
              {" "}
              <img src={props.fixedNavigationBarLogo} alt="" className="logo-image" />{" "}
            </Link>
          </div>
        </div>
        <div
          className="right-side-section"
          style={{
            color: textColor,
            backgroundColor: backgroundColorResponsive,
            left: leftSlidePosition,
          }}
        >
          <div style={{ filter: textDropShadow }} className="right-side-section-text home-text">
            <Link to="/" style={navBarLinkTextDecoration}>
              {props.firstOption}
            </Link>
          </div>
          <div style={{ filter: textDropShadow }} className="right-side-section-text about-text">
            <Link to="/about" style={navBarLinkTextDecoration}>
              {props.secondOption}
            </Link>
          </div>
          <div style={{ filter: textDropShadow }} className="right-side-section-text portfolio-text">
            <Link to="/portfolio" style={navBarLinkTextDecoration}>
              {props.thirdOption}
            </Link>
          </div>
          <div style={{ filter: textDropShadow }} className="right-side-section-text projects-text">
            <Link to="/projects" style={navBarLinkTextDecoration}>
              {props.fourthOption}
            </Link>
          </div>
          <div style={{ filter: textDropShadow }} className="right-side-section-text contact-text">
            <Link to="/hire-me" style={navBarLinkTextDecoration}>
              {props.fifthOption}
            </Link>
          </div>
          {/* Menu Button */}
        </div>
        <div
          className="menu-btn"
          onClick={() => {
            handleitem();
            expandLeftSlidePosition();
          }}
          style={{ color: menuButtonColor }}
        >
          <FontAwesomeIcon icon={item ? faBars : faTimes} size="lg" />
        </div>
      </section>
    </div>
  );
}

export default NavigationBar;
