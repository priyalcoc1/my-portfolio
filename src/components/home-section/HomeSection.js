import React from "react";
import FooterComponents from "../footer-section/FooterComponents";
import IntroSection from "../intro-section/IntroSection";
import SectionWithBGImage from "../section-with-bg-image/SectionWithBGImage";

function HomeSection() {
    return (
        <div>
            <SectionWithBGImage
                backgroundImage={require("../../images/about-me-images/banner.jpg")}
                line1="Hey Fellas"
                line2="My Name Is"
                line2Name="Priyal Raj"
                line3="I'M A"
                line3Profession={["Front End Web Dev", "YouTuber", "Content Creator", "Freelancer"]}/>
            <IntroSection
                line3Profession={["Front End Web Dev", "YouTuber", "Content Creator", "Freelancer"]}
                introImageLink={require("../../images/about-me-images/passport-picture.jpg")}
                introHere="An enthusiastic engineering fresher who is a self-starter and capable to use technical skills for the betterment of the organization. A bachelor's degree in Computer Science Engineering has enhanced my proficiency in developing websites and looking forward to work in a competitive environment that enhances overall learning."/>
            <FooterComponents
                line2Name="Priyal Raj"
                linkedin="https://www.linkedin.com/in/priyal-raj-bb19b4228/"
                github="https://github.com/Capta1nRaj"
                youtube="https://youtube.com/captainraj"
                instagram="https://www.instagram.com/capta1n_raj/"
                twitter="https://twitter.com/capta1n_raj"/>
        </div>
    );
}

export default HomeSection;
