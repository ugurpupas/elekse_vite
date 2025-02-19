import React from "react";
import { motion } from "framer-motion";

const SlidingImageLeft = () => {
  return (
    <motion.div
      className="sliding-coin-left"
      animate={{
        opacity: [0.01, 1],
        x: ["-50%", "0"],
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

export default SlidingImageLeft;
