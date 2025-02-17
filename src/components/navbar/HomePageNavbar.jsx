import React from "react";
import { LOGOS } from "../icons/icons.jsx";
import { navbarTitles } from "../../constants/titles/homeTitles.jsx";
import { useTranslation } from "react-i18next";

const HomePageNavbar = () => {
  const { t } = useTranslation();
  return (
    <div className="home-navbar  body-14-semibold">
      <div className="display-layout-row navbar-wrapper ">
        <div className="navbar-left">
          <div className="icon-layout">{LOGOS.PARAX.NAVBAR_LOGO}</div>
        </div>

        <div className="navbar-middle">
          {navbarTitles.map((title, index) => (
            <a className="navbar-titles body-14-semibold" key={index} href="#">
              {t(title)}
            </a>
          ))}
        </div>

        <div className="navbar-right"></div>
      </div>
    </div>
  );
};

export default HomePageNavbar;
