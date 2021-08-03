import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row, InputGroup } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "./SearchBox.css";

const options = [
  "Warsaw",
  "Kraków",
  "Łódź",
  "Wrocław",
  "Poznań",
  "Gdańsk",
  "Szczecin",
  "Bydgoszcz",
  "Lublin",
  "Katowice",
  "Białystok",
  "Gdynia",
  "Częstochowa",
  "Radom",
  "Sosnowiec",
  "Toruń",
  "Kielce",
  "Gliwice",
  "Zabrze",
  "Bytom",
  "Olsztyn",
  "Bielsko-Biała",
  "Rzeszów",
  "Ruda Śląska",
  "Rybnik",
];

export default function SearchBox(props) {
  return (
    <React.Fragment>
      <Row className="searchBox">
        <InputGroup>
          <Col>
            <Typeahead
              id="filtering-example"
              options={options}
              placeholder="Cities in Poland..." emptyLabel="Anan"
            />
          </Col>
          <Col>
            <Typeahead
              id="filtering-example"
              options={options}
              placeholder="Cities in Poland..."
            />
          </Col>
          <Col>
            <Button>anan</Button>
          </Col>
        </InputGroup>
      </Row>
    </React.Fragment>
  );
}
