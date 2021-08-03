import React, { useState, useRef } from "react";
import Navi from "./layouts/Navi/Navi";
import UserDashboard from "./layouts/Dashboards/UserDashboard";
import DarkMode from "./layouts/Tools/DarkMode/DarkMode";
import Footer from "./layouts/Footer/Footer";
import "./App.css";
import { useLocation } from "react-router-dom";
import GoToTop from "./utilities/customComponents/GoToTop";
import SearchBox from "./layouts/Navi/Tools/SearchBar/SearchBox";
import SearchBar from "./layouts/Navi/Tools/SearchBar/SearchBar";

export default function App() {
  const [themeMode, setThemeMode] = useState("moon");
  const theme = useRef(null);

  let location = useLocation();

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
      <div className="content-wrapper">
        {/* {location.pathname !== "/sign" ? <Navi logo="HRMS" /> : <></>} */}
        <DarkMode changeTheme={changeTheme} icon={themeMode} />
        {/* <UserDashboard /> */}
        <SearchBar
          className="search"
          inputAreas={[
            {
              icon: "briefcase",
              placeholder: "Search for a Position or Employer...",
              data: ["Anan", "Baban", "Deden", "Halan"],
            },
            {
              icon: "map-marker-alt",
              placeholder: "Search for a City...",
              data: ["Anan2", "Baban2", "Deden2", "Halan2"],
            },
          ]}
        />
        {/* <SearchBox /> */}
      </div>
      {/* {location.pathname !== "/sign" ? <Footer /> : <></>} */}
      <GoToTop />
      {
        //TODO: Yapılacaklar:
        /*
          1-) Job Advertisement Filter yapılacak.
          2-) Find a job yapılacak.
          3-) Post a job yapılacak.
          4-) Admin Dashboard ayarlanacak.
          5-) Candidate Dashboard ayarlanacak.
          6-) Store mantığına geçilecek.
          7-) Kontrol...
        */
      }
    </div>
  );
}
