import React from "react";
import { motion } from "framer-motion";

const SlidingBackground = () => {
  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "300%",
        height: "80%",
        background: `
            url('/src/assets/Lights.png'),
            url('/src/assets/lights-mirror.png')
          `,
        backgroundSize: "50% 100%",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "100% 0%, 100% 0%",
      }}
      animate={{ x: "-50%" }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default SlidingBackground;
