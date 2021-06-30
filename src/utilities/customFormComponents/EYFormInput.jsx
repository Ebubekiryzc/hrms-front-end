import React from "react";
import { ErrorMessage, useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EYFormInput({ icon,...props }) {
  const [field,meta] = useField(props)
  return (
    <div className="input-field" >
      <div className="i">
      <FontAwesomeIcon icon={icon} fixedWidth />
      </div>
      <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} autoComplete="false" {...field} {...props}/>
      <div>
      <ErrorMessage component="div" name={field.name}  className="error"/>
      </div>
    </div>
  );
}
