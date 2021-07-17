import React from "react";

export default function EYCheckBox({ ...props }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={props.id}
        checked={props.isChecked || false}
        onChange={props.onChangeFunction}
      />
      <label htmlFor={props.id}>{props.labelText}</label>
    </div>
  );
}
