import React from "react";
import { motion } from "framer-motion";

const SlidingBackgroundMirror = () => {
  return (
    <div style={{ 
      position: "absolute", 
      top: 0, 
      left: 0, 
      width: "200%",
      height: "100%",
    }}>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background: "url('/src/assets/lights-mirror.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "50%",
          height: "100%",
          background: "url('/src/assets/lights-mirror.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default SlidingBackgroundMirror;
