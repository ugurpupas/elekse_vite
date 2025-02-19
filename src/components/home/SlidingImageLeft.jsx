import React from "react";
import { motion } from "framer-motion";

const SlidingImageLeft = () => {
  return (
    <motion.div
      className="sliding-coin-left"
      animate={{
        opacity: [0, 1],
        x: ["-100%", "-20%"],
        y: ["-35%", "0%"],
      }}
      transition={{
        delay: 0.13,
        type: "spring",
        stiffness: 30,
        damping: 8,
        bounce: 0.3,
        duration: 1.2,
        ease: "circOut",
      }}
    />
  );
};

export default SlidingImageLeft;
