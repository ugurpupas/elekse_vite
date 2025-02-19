import React from "react";
import { motion } from "framer-motion";

const SlidingImageLeft = () => {
  return (
    <motion.div
      className="sliding-coin-left"
      animate={{
        opacity: [0.01, 1],
        x: ["-80%", "-20%"],
      }}
      //   animate={{ x: "-50%" }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 8,
        bounce: 0.3,
        duration: 1.2,
        ease: "circOut",
      }}
    />
  );
};

export default SlidingImageLeft;
