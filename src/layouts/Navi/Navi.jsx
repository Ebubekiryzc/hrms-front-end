import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Container } from "react-bootstrap";
import NaviItem from "./NaviItem";
import SignIn from "./Tools/SignIn";
import SignOut from "./Tools/SignOut";
import "./Navi.css";

export default function Navi({ ...props }) {
  const [navbarShrink, setNavbarShrink] = useState(false);
  const [expanded, setExpanded] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    history.push("/sign")
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
      onToggle={()=>{setExpanded(!expanded)}}
    >
      <Container>
        <Navbar.Brand className="logo" href="/" style={{ color: "white" }}>
          {props.logo}
        </Navbar.Brand>
        <Navbar.Toggle >
          <FontAwesomeIcon icon="bars" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
          <Nav className="ms-auto" defaultActiveKey="/" onClick={()=>{setExpanded(!expanded)}}>
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
