import React, {useEffect, useState} from "react";
import "./FooterComponents.css";

function FooterComponents(props) {

    const [date, setDate] = useState();

    function getYear() {
        setDate(new Date().getFullYear());
    }

    useEffect(() => {
        getYear();
    }, [])

    return (
        <div>
            <section className="footer-section">
                <div className="max-width">
                    <div className="design-and-developed-by">Design & Developed By {props.line2Name}</div>
                    <div className="copyright-year">Copyright © {date}</div>
                    <div className="social-media-icon-container">
                        <div className="linkedin-container"><a href={props.linkedin} target="_blank" rel="noreferrer"><img className="linkedin" src={require("../../images/footer-images/Linkedin.png")} alt=""/></a></div>
                        <div className="github-container"><a href={props.github} target="_blank" rel="noreferrer"><img className="github" src={require("../../images/footer-images/GitHub.png")} alt=""/></a></div>
                        <div className="youtube-container"><a href={props.youtube} target="_blank" rel="noreferrer"><img className="youtube" src={require("../../images/footer-images/YouTube.png")} alt=""/></a></div>
                        <div className="instagram-container"><a href={props.instagram} target="_blank" rel="noreferrer"><img className="instagram" src={require("../../images/footer-images/Instagram.png")} alt=""/></a></div>
                        <div className="-container"><a href={props.twitter} target="_blank" rel="noreferrer"><img className="twitter" src={require("../../images/footer-images/Twitter.png")} alt=""/></a></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FooterComponents;
