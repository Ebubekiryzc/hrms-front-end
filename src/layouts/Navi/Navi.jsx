import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Container } from "react-bootstrap";
import NaviItem from "./NaviItem";
import SignIn from "./Tools/SignIn";
import SignOut from "./Tools/SignOut";
import "./Navi.css";

export default function Navi({ ...props }) {
  const [navbarShrink, setNavbarShrink] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleSignOut() {
    setIsAuthenticated(false);
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbarShrink(true);
    } else {
      setNavbarShrink(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={navbarShrink ? "navbar-shrink" : ""}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand className="logo" href="/" style={{ color: "white" }}>
          {props.logo}
        </Navbar.Brand>
        <Navbar.Toggle>
          <FontAwesomeIcon icon="bars" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="/">
            <NaviItem pathAdr="/" displayName="Home" />
            <NaviItem pathAdr="/about" displayName="About us" />
            <NaviItem pathAdr="/jobadvertisements" displayName="Find a job" />
            <NaviItem
              pathAdr="/jobadvertisements/add"
              displayName="Post a Job"
            />
            <Nav.Item className="sign-mode">
              {isAuthenticated ? (
                <SignIn logOut={handleSignOut} />
              ) : (
                <SignOut logIn={handleSignIn} />
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
