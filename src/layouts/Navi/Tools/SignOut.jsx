import React from "react";
import { Button } from "react-bootstrap";

export default function SignOut({...props}) {
  return (
    <div onClick={props.logIn}>
      <Button className="sign-up-btn">Register</Button>
      <Button className="sign-in-btn">Sign In</Button>
    </div>
  );
}
