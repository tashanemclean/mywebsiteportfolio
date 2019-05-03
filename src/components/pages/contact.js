import React from "react";
import contactPagePicture from "../../../static/assets/images/contact-image/contact-background.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    
    return (
        <div className="contact-page-wrapper">
            <div className="left-column"
            style={{
                background: "url(" + contactPagePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            ></div>

            <div className="right-column">
                <div className="contact-bullet-points">
                    <h1>Get In Touch</h1>

                    <div className="contact-item">
                    <a><FontAwesomeIcon icon="mobile-alt"/> 1-347-854-4793</a>
                    </div>

                    <div className="contact-item">
                    <a><FontAwesomeIcon icon="envelope-open"/> tashane.mclean@gmail.com</a>
                    </div>

                    <div className="contact-item">
                    <a href="https://www.linkedin.com/in/tashane-mclean-4a0779177/">LinkedIn profile</a>
                    </div>

                    {/* <div className="contact-item">
                    <a><FontAwesomeIcon icon="file-alt"/> View resume</a>
                    </div> */}

                    <div className="powered-by">
                    <h1>This website:</h1>
                    <a className="powered-by-item">is powered by: REACT.JS</a>
                    <a className="powered-by-item">is hosted on: HEROKU</a>
                    <a href="https://github.com/tashanemclean"className="powered-by-item"><FontAwesomeIcon className="icon" icon="hand-point-right"/>has a public repository on GitHub</a>
                    </div>
                </div>
            </div>
        </div>

    )
}