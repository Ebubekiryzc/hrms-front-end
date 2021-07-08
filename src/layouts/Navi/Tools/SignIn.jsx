import React from "react";
import { NavDropdown, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignIn({...props}) {
  return (
    <NavDropdown
      title={
        <>
          <Image
            className="avatar-img"
            src={props.userPicture}
            roundedCircle
          />
          <span className="user-name">{props.userName}</span>
        </>
      }
    >
      <NavDropdown.Item exact as={NavLink} to="/profile">&nbsp;
        <FontAwesomeIcon icon="info" />
        <span className="custom-dropdown-item-text">&nbsp;My Profile</span>
      </NavDropdown.Item>
      <NavDropdown.Item onClick={props.logOut}>
        <FontAwesomeIcon icon="sign-out-alt" />
        <span className="custom-dropdown-item-text">Log out</span>
      </NavDropdown.Item>
    </NavDropdown>
  );
}
