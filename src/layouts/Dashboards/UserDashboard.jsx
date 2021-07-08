import React from "react";
import { Route } from "react-router";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Home from "../../pages/Home/Home";
import Jobs from "../../pages/Jobs/Jobs";
import SignPage from "../../pages/SignPage/SignPage";

export default function UserDashboard() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/sign" component={SignPage} />
      <Route exact path="/about" component={AboutUs} />
    </div>
  );
}
