import React from "react";
import HomePageNavbar from "../components/navbar/HomePageNavbar";
import HomepageFooter from "../components/footer/HomepageFooter";
import HeroSection from "../components/home/HeroSection";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      className="homeDisplay"
      animate={{
        opacity: [0.1, 1],
      }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
      }}
    >
      {/* Hero Section */}
      <div className="hero-display">
        <HomePageNavbar />

        <HeroSection />

        <HomepageFooter />
      </div>
    </motion.div>
  );
};

export default HomePage;
