import React from "react";
import SlidingBackground from "./SlidingBackground";
import { useTranslation } from "react-i18next";
import { heroContentCardData } from "../../constants/titles/homeTitles";
import HeroContentCard from "./HeroContentCard";
import SlidingImageRight from "./SlidingImageRight";
import SlidingImageLeft from "./SlidingImageLeft";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="heroLayout">
      <SlidingBackground />

      <SlidingImageRight />

      <SlidingImageLeft />

      <div className="hero-subwrapper">
        <div
          className="display-layout-column hero-content-layout"
          style={{ color: "white" }}
        >
          <div className="hero-content-titles">
            <motion.h4
              className="hero-content-sm-title body-20-semibold"
              animate={{
                y: ["5%", "0%"],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: "backInOut",
              }}
            >
              {t("new_financial_solutions")}
            </motion.h4>
            <motion.h2
              className="hero-content-lg-title body-56-semibold"
              animate={{
                y: ["5%", "0%"],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                ease: "backInOut",
              }}
            >
              <span>{t("remove_limits")}</span>
              <br />
              <span>{t("instant_payments_worldwide")}</span>
            </motion.h2>
          </div>
        </div>

        <div className="hero-content-cards-layout">
          {heroContentCardData.map((card, index) => (
            <motion.div
              key={index}
              animate={{
                y: ["5%", "0%"],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.7,
                duration: 0.7 + index * 0.3,
                ease: "backInOut",
              }}
            >
              <HeroContentCard
                icon={card.icon}
                title={card.title}
                content={card.content}
                buttonTitle={card.button}
              />

              <div className="hero-card-seperator"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
