import React, { useEffect, useState } from "react";
import { LOGOS } from "../icons/icons.jsx";
import { navbarTitles } from "../../constants/titles/homeTitles.jsx";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../switch/LanguageSwitch.jsx";
import PrimaryButton from "../button/PrimaryButton.jsx";
import { motion } from "framer-motion";
import PrimaryMenuButton from "../button/PrimaryMenuButton.jsx";
import MenuModal from "../modal/MenuModal.jsx";

const HomePageNavbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [windowWidth]);

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
            navbar
            title={t("panel_login")}
            bac={"var(--color-bg-secondary)"}
            textColor={"var(--color-content-text)"}
          />
          <PrimaryMenuButton
            onClick={handleMenu}
            bac={"var(--color-bg-home)"}
            textColor={"var(--color-content-main)"}
          />

          <MenuModal isOpen={isOpen} />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePageNavbar;
