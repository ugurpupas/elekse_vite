import React from "react";
import { ICONS } from "../icons/icons";

const PrimaryMenuButton = ({ bac, textColor }) => {
  return (
    <div
      style={{ backgroundColor: bac, color: textColor }}
      className="button-hamburger-layout"
    >
      {ICONS.OUTLINE.HAMBURGER_MENU}
    </div>
  );
};

export default PrimaryMenuButton;
