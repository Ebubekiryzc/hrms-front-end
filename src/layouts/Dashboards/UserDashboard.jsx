import React from "react";
import { Route } from "react-router";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Advertisements from "../../pages/Advertisements/Advertisements";
import Home from "../../pages/Home/Home";
import Jobs from "../../pages/Jobs/Jobs";
import SignPage from "../../pages/SignPage/SignPage";
import AdvertisementFilter from "../Tools/AdvertisementFilter";

export default function UserDashboard() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/sign" component={SignPage} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/jobadvertisements" component={Advertisements} />
      <Route exact path="/a" component={AdvertisementFilter} />
    </div>
  );
}
