import React from "react";
import { motion } from "framer-motion";

const SlidingImageRight = () => {
  return (
    <motion.div
      className="sliding-coin-right"
      animate={{
        opacity: [0.01, 1],
        x: ["50%", "0"],
      }}
      //   animate={{ x: "-50%" }}
      transition={{
        duration: 2,
        type: "keyframes",

        // ease: "linear",
      }}
    />
  );
};

export default SlidingImageRight;
