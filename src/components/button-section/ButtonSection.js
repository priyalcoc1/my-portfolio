import React from 'react'
import "./ButtonSection.css"

function ButtonSection(props) {
    return (
        <div>
            <div className="button-container">
                <a href={props.buttonLink} target="_blank" rel="noreferrer" type={props.buttonType}>
                    <button className="button-text">{props.buttonText}</button>
                </a>
            </div>
        </div>
    )
}

export default ButtonSection