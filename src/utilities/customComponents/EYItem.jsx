import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EYItem(props) {
  return (
    <div className={props.className}>
      <h3>
        {props.h3Content === undefined ? (
          <></>
        ) : props.h3Content.type === FontAwesomeIcon ||
          typeof props.h3Content === "string" ||
          props.h3Content.type === React.createElement("img").type ? (
          props.h3Content
        ) : (
          <></>
        )}
      </h3>
      <span>{props.spanText}</span>
    </div>
  );
}
