import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg"

export default function() {
    
    return (
        <div className="content-page-wrapper">
            <div className="left-column"
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"

            }}
            ></div>
            <div className="right-column">Junior Software Engineer who can bring a diverse skill set and creative drive to software application development. Experience working on teams of up to six, with artists and programmers, on yearlong projects taking on roles such as designer and producer in addition to programming. Specializing in outside of the box approaches to find unique solutions to difficult engineering problems.</div>
        </div>

    )
}