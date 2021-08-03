import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  InputGroup,
  FormControl,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
  FormGroup,
} from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <Form.Group>
      <InputGroup className={props.className}>
        {props.inputAreas !== undefined ? (
          props.inputAreas.map((prop, index) => (
            <React.Fragment key={index}>
              <InputGroup.Text>
                <FontAwesomeIcon icon={prop.icon} />
              </InputGroup.Text>
              <OverlayTrigger
                key={props.className}
                overlay={
                  <Tooltip id={`tooltip-top`}>{prop.placeholder}</Tooltip>
                }
              >
                <Typeahead
                  className={props.className}
                  id={`Typhead-${index}`}
                  options={prop.data}
                  placeholder={prop.placeholder}
                  emptyLabel={prop.empty}
                />
                {/* <FormControl
                className={props.className}
                placeholder={prop.placeholder}
                aria-label="Type something..."
                aria-describedby="basic-addon2"
              /> */}
              </OverlayTrigger>
            </React.Fragment>
          ))
        ) : (
          <FormControl
            className={props.className}
            placeholder={props.placeholder}
            aria-label="Type something..."
            aria-describedby="basic-addon2"
          />
        )}
        <InputGroup.Append>
          <Button className={props.className}>
            <FontAwesomeIcon icon="search" className={props.className} />
            &nbsp;&nbsp;{props.buttonText}
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  );
}
