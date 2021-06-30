import { React, useState, useCallback } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import "./EYFormToggleButton.css";

export default function EYFormToggleButton({ onSelection, ...props }) {
  const [radioValue, setRadioValue] = useState();
  const properties = Object.values(props);
  
  const handleSelection = useCallback(event=> {
    onSelection(event.target.value)
  }, [onSelection])

  return (
    <div className="toggleButton">
      <ButtonGroup toggle>
        {properties.map((prop, keyValue) => (
          <ToggleButton
            className="customButton"
            key={keyValue}
            type="radio"
            name="radio"
            value={keyValue.toString()}
            checked={radioValue === keyValue.toString()}
            onChange={(e) => setRadioValue(e.currentTarget.value.toString())}
            onClick={handleSelection}
          >
            {prop}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}
