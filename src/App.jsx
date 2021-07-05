import React, { useState, useRef } from "react";
import Navi from "./layouts/Navi/Navi";
import UserDashboard from "./layouts/Dashboards/UserDashboard";
import DarkMode from "./layouts/Tools/DarkMode/DarkMode";
import Footer from "./layouts/Footer/Footer";
import "./App.css";

export default function App() {
  const [themeMode, setThemeMode] = useState("moon");
  const theme = useRef(null);

  const changeTheme = () => {
    if (theme.current.className === "App") {
      theme.current.classList.add("dark");
      setThemeMode("sun");
    } else {
      theme.current.classList.remove("dark");
      setThemeMode("moon");
    }
  };

  return (
    <div className="App" ref={theme}>
      <Navi logo="HRMS" />
      <DarkMode changeTheme={changeTheme} icon={themeMode} />
      <UserDashboard />
      <Footer />
    </div>
  );
}
