import React, { useState, useEffect } from "react";
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
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState({});

  useEffect(() => {
    let valueHolder = {};
    if (props.inputAreas !== undefined) {
      props.inputAreas.map((prop, index) => {
        valueHolder[`input-${index}`] = "";
      });
    } else {
      valueHolder["input-1"] = "";
    }
    setSearchValue(valueHolder);
  }, []);

  const handleSearchValue = (event, index) => {
    searchValue[`input-${index}`] = event.target.value;
    //console.log(searchValue);
  };

  const handleSelected = (selected, index) => {
    searchValue[`input-${index}`] = selected.toString();
    // console.log(searchValue)
  };

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
                  clearButton
                  className={props.className}
                  id={`Typhead-${index}`}
                  options={prop.data}
                  placeholder={prop.placeholder}
                  emptyLabel={prop.empty}
                  onKeyDown={(event) => {
                    handleSearchValue(event, index);
                  }}
                  onChange={(selected) => handleSelected(selected, index)}
                />
              </OverlayTrigger>
            </React.Fragment>
          ))
        ) : (
          <Typeahead
            clearButton
            className={props.className}
            id={`Typhead-1`}
            options={props.data}
            placeholder={props.placeholder}
            emptyLabel={props.empty}
            onKeyDown={(event) => {
              handleSearchValue(event, 1);
            }}
            onChange={(selected) => handleSelected(selected, 1)}
          />
        )}
        <Button className={props.className}>
          <FontAwesomeIcon icon="search" className={props.className} />
          &nbsp;&nbsp;{props.buttonText}
        </Button>
      </InputGroup>
    </Form.Group>
  );
}