import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NaviItem({ ...props }) {
  return (
    <Nav.Item>
      <Nav.Link className={props.activeness} exact as={NavLink} to={props.pathAdr}>
        {props.displayName}
      </Nav.Link>
    </Nav.Item>
  );
}
