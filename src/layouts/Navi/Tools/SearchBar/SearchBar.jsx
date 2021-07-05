import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <InputGroup className={props.className}>
      <FormControl
        className={props.className}
        placeholder={props.placeholder}
        aria-label="Type something..."
        aria-describedby="basic-addon2"
      />
      <Button className={props.className}>
        <FontAwesomeIcon icon="search" className={props.className} />
        &nbsp;&nbsp;{props.buttonText}
      </Button>
    </InputGroup>
  );
}