import React from "react";
import { LOGOS } from "../icons/icons.jsx";
import { navbarTitles } from "../../constants/titles/homeTitles.jsx";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../switch/LanguageSwitch.jsx";
import PrimaryButton from "../button/PrimaryButton.jsx";
import { motion } from "framer-motion";
import PrimaryMenuButton from "../button/PrimaryMenuButton.jsx";

const HomePageNavbar = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="home-navbar  body-14-semibold"
      animate={{
        opacity: [0, 1],
        y: ["-80%", "0%"],
      }}
      transition={{
        ease: "circOut",
        duration: 1.2,
      }}
    >
      <div className="display-layout-navbar navbar-wrapper ">
        <div className="navbar-left">
          <div className="icon-layout">{LOGOS.ELEKSE.NAVBAR_LOGO}</div>
        </div>

        <div className="navbar-middle">
          {navbarTitles.map((title, index) => (
            <a className="navbar-titles body-14-semibold" key={index} href="#">
              {t(title)}
            </a>
          ))}
        </div>

        <div className="navbar-right">
          <LanguageSwitch />

          <PrimaryButton
            title={t("panel_login")}
            bac={"var(--color-bg-secondary)"}
            textColor={"var(--color-content-text)"}
          />
          <PrimaryMenuButton
            bac={"var(--color-bg-home)"}
            textColor={"var(--color-content-main)"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePageNavbar;
