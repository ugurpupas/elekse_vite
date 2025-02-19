import React from "react";
import { motion } from "framer-motion";

const SlidingBackground = () => {
  return (
    <motion.div
      className="sliding-lights"
      animate={{ x: "-50%" }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default SlidingBackground;
