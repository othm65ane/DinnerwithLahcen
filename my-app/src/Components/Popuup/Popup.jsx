import React from "react";
import "./popup.css"
const Popup = (props) => {
    return (props.tigger) ? (
      <div className="popup">
        <div className="">
            {props.children}
        </div>
      </div>
    ) : "";
  };
  
  export default Popup;