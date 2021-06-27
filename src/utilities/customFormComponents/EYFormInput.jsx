import React from "react";
import { useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EYFormInput({ icon,...props }) {
  const [field,meta] = useField(props)
  return (
    <div className="input-field">
      <div className="i">
      <FontAwesomeIcon icon={icon} fixedWidth />
      </div>
      <input {...field} {...props}/>
    </div>
  );
}
