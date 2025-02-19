import React from "react";
import { motion } from "framer-motion";

const SlidingImageRight = () => {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "650px",
        height: "650px",
      }}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.div
        className="sliding-coin-right"
        animate={{
          x: ["100%", "40%"],
          y: ["-50%", "-15%"],
          scale: [0.7, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 9,
          bounce: 0.3,
          duration: 1.2,
          ease: "circOut",
        }}
      />
      <motion.div
        className="sliding-coin-right-2"
        animate={{
          x: ["50%", "0%"],
          y: ["-10%", "0%"],
          scale: [0.5, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 10,
          bounce: 0.5,
          duration: 1.2,
          ease: "circOut",
        }}
      />
    </motion.div>
  );
};

export default SlidingImageRight;
