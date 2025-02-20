import React from "react";
import { navbarTitles } from "../../constants/titles/homeTitles";
import { useTranslation } from "react-i18next";

const MenuModal = ({ isOpen }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{ display: isOpen ? "flex" : "none" }}
      className="navbar-menu-modal"
    >
      {navbarTitles.map((title, index) => (
        <a className="navbar-menu-titles body-14-semibold" key={index} href="#">
          {t(title)}
        </a>
      ))}
    </div>
  );
};

export default MenuModal;
