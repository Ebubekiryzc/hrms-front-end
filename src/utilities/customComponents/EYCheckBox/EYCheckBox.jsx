import React from "react";
import { Form } from "react-bootstrap";
import "./EYCheckBox.css";

export default function EYCheckBox({ ...props }) {
  return (
      <Form.Group>
        <div className="checkbox">
          <Form.Check type="checkbox" id={props.id} checked={props.isChecked || false} onChange={props.onChangeFunction} label={props.labelText}/>
        </div>
      </Form.Group>
  );
}
