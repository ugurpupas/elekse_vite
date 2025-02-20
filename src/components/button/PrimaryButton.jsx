import React from "react";

const PrimaryButton = ({ navbar, title, bac, textColor }) => {
  return (
    <div
      style={{ backgroundColor: bac, color: textColor }}
      className={`button-layout body-12-semibold ${
        navbar && "panel-button-layout"
      }`}
    >
      {title}
    </div>
  );
};

export default PrimaryButton;
