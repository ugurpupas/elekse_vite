import React from "react";
import HomePageNavbar from "../components/navbar/HomePageNavbar";
import HomepageFooter from "../components/footer/HomepageFooter";
import HeroSection from "../components/home/HeroSection";

const HomePage = () => {
  return (
    <div className="homeDisplay">
      {/* Hero Section */}
      <div className="hero-display">
        <HomePageNavbar />

        <HeroSection />

        <HomepageFooter />
      </div>
    </div>
  );
};

export default HomePage;
