import React from "react";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../button/PrimaryButton";

const HeroContentCard = ({ title, content, icon, buttonTitle }) => {
  const { t } = useTranslation();

  return (
    <div className="hero-card-layout">
      <div className="hero-card-icon ">{icon}</div>

      <div className="hero-card-title body-20-semibold">{t(title)}</div>

      <div className="hero-card-content body-12-regular">{t(content)}</div>

      <div style={{ width: "max-content" }}>
        <PrimaryButton
          bac={"var(--color-btn-opacity-10)"}
          textColor={"var(--color-content-main)"}
          title={t(buttonTitle)}
        />
      </div>
    </div>
  );
};

export default HeroContentCard;
