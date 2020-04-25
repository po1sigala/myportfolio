import React from "react";
import "./style.css";
function returnBlurb(props) {
    return (
        <div className="blurb">
            <p>{props.description}</p>
        </div>
    );
}
export default returnBlurb;
