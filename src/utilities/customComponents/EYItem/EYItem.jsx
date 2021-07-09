import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./EYItem.css";

export default function EYItem(props) {
  return (
    <div className={`ey-item ${props.className}`}>
      <h3>
        {props.h3Content === undefined ? (
          <></>
        ) : props.h3Content.type === React.createElement("div").type ||
          props.h3Content.type === FontAwesomeIcon ||
          typeof props.h3Content === "string" ||
          props.h3Content.type === React.createElement("img").type ? (
          props.h3Content
        ) : (
          <></>
        )}
      </h3>
      <span className="spanText">{props.spanText}</span>
    </div>
  );
}
