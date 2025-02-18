import React from "react";

const PrimaryButton = ({ title, bac, textColor }) => {
  return (
    <div
      style={{ backgroundColor: bac, color: textColor }}
      className="button-layout body-12-semibold"
    >
      {title}
    </div>
  );
};

export default PrimaryButton;
