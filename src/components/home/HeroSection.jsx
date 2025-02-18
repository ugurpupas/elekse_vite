import React from "react";
import SlidingBackground from "./SlidingBackground";
import { useTranslation } from "react-i18next";
import { heroContentCardData } from "../../constants/titles/homeTitles";
import HeroContentCard from "./HeroContentCard";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div
      className="heroLayout"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
        background: "var(--color-bg-home)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <SlidingBackground />

      <div
        className="display-layout-column hero-content-layout"
        style={{ color: "white" }}
      >
        <div className="hero-content-titles">
          <h4 className="hero-content-sm-title body-20-semibold">
            {t("new_financial_solutions")}
          </h4>
          <h2 className="hero-content-lg-title body-56-semibold">
            <span>{t("remove_limits")}</span>
            <br />
            <span>{t("instant_payments_worldwide")}</span>
          </h2>
        </div>
      </div>

      <div className="hero-content-cards-layout">
        {heroContentCardData.map((card, index) => (
          <HeroContentCard
            key={index}
            icon={card.icon}
            title={card.title}
            content={card.content}
            buttonTitle={card.button}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
