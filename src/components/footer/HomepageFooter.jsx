import React from "react";
import { brandTitles } from "../../constants/titles/homeTitles";
import { LOGOS } from "../icons/icons";
import { motion } from "framer-motion";

const HomepageFooter = () => {
  const duplicatedTitles = [...brandTitles, ...brandTitles];

  return (
    <div className="hero-footer">
      <motion.div
        className="brands-wrapper"
        animate={{ x: ["0%", "-51.3%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedTitles.map((title, index) => (
          <div key={index} className="icon-layout">
            {LOGOS.BRANDS[title]}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomepageFooter;
