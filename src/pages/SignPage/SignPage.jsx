import { React, useRef, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "./SignPageStyle.css";

import EYFormInput from "../../utilities/customFormComponents/EYFormInput";

import EYFormToggleButton from "../../utilities/customFormComponents/ToggleButton/EYFormToggleButton";

import Hello from "../../assets/Hello.svg";

import Browsing from "../../assets/Browsing.svg";

/*  
  TODO: scss dönüşümleri ileride yapılacak
  TODO: Burada bir handle mekanizması kurulabilir ve buradaki formlar componentlere ayrılabilir
  TODO: Media kısmında oynama yapılacak tam responsive değil!
  TODO: Java tarafındaki yearOfBirth tarih olarak düzeltilecek, buradaki doğrulama sistemine de bir tarih girilmesi şart koşulacak
*/
export default function SignPage() {
  const [userTypeSelection, setUserTypeSelection] = useState();

  const initialValuesForSignIn = { email: "", password: "" };
  const signInSchema = Yup.object({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email field cannot be empty"),
    password: Yup.string().required("Password field cannot be empty"),
  });

  const initialValuesForSignUp = {
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    website: "",
    phone: "",
    firstName: "",
    lastName: "",
    nationalId: "",
    yearOfBirth: "",
  };
  const signUpSchema = Yup.object({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email field cannot be empty"),
    password: Yup.string().required("Password field cannot be empty"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password field cannot be empty"),
    companyName: Yup.string().required("Company name field cannot be empty"),
    webSite: Yup.string().required("Web site field cannot be empty"),
    phone: Yup.string().required("Phone field cannot be empty"),
    firstName: Yup.string().required("First name field cannot be empty"),
    lastName: Yup.string().required("Last name field cannot be empty"),
    nationalId: Yup.string()
      .min(11, "Must be exact 11 character")
      .max(11, "Must be exact 11 character")
      .required("National id field cannot be empty"),
    yearOfBirth: Yup.number()
    .typeError("Must contain only numbers")
    .required("Year of birth field cannot be empty"),
  });

  const activePanelRef = useRef(null);

  const onClickSignUpButton = () => {
    activePanelRef.current.classList.add("sign-up-mode");
  };

  const onClickSignInButton = () => {
    activePanelRef.current.classList.remove("sign-up-mode");
  };

  return (
    <div className="no-bootstrap-container" ref={activePanelRef}>
      <div className="forms-container">
        <div className="signin-signup">
          <Formik
            initialValues={initialValuesForSignIn}
            validationSchema={signInSchema}
          >
            <Form className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <EYFormInput
                name="email"
                icon="user"
                type="text"
                placeholder="Email"
              />
              <EYFormInput
                name="password"
                icon="lock"
                type="password"
                placeholder="Password"
              />
              <input className="btn solid" type="submit" value="Login" />
            </Form>
          </Formik>
          <Formik
            initialValues={initialValuesForSignUp}
            validationSchema={signUpSchema}
          >
            <Form className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <EYFormInput
                name="email"
                icon="envelope"
                type="text"
                placeholder="Email"
              />
              <EYFormInput
                name="password"
                icon="lock"
                type="password"
                placeholder="Password"
              />
              <EYFormInput
                name="confirmPassword"
                icon="lock"
                type="password"
                placeholder="Confirm password"
              />
              <EYFormToggleButton
                onSelection={setUserTypeSelection}
                option1="Employer"
                option2="Job Seeker"
              />
              {userTypeSelection === null ? (
                <></>
              ) : userTypeSelection === "0" ? (
                <>
                  <EYFormInput
                    name="companyName"
                    icon="building"
                    type="text"
                    placeholder="Company name"
                  />
                  <EYFormInput
                    name="webSite"
                    icon="globe"
                    type="text"
                    placeholder="Web site"
                  />
                  <EYFormInput
                    name="phone"
                    icon="phone"
                    type="text"
                    placeholder="Phone"
                  />
                </>
              ) : userTypeSelection === "1" ? (
                <>
                  <EYFormInput
                    name="firstName"
                    icon="quote-right"
                    type="text"
                    placeholder="First name"
                  />
                  <EYFormInput
                    name="lastName"
                    icon="quote-right"
                    type="text"
                    placeholder="Last name"
                  />
                  <EYFormInput
                    name="nationalId"
                    icon="id-card"
                    type="text"
                    placeholder="National ID"
                  />
                  <EYFormInput
                    name="yearOfBirth"
                    icon="birthday-cake"
                    type="text"
                    placeholder="Year of birth"
                  />
                </>
              ) : (
                <> </>
              )}
              <input className="btn solid" type="submit" value="Sign Up" />
            </Form>
          </Formik>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
              sequi quaerat. Quas.
            </p>
            <button
              onClick={onClickSignUpButton}
              className="btn transparent"
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img src={Browsing} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
              sequi quaerat. Quas.
            </p>
            <button
              onClick={onClickSignInButton}
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img src={Hello} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
