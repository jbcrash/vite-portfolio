import React, { useState, useEffect } from "react";
import joshProfile from '../assets/joshProfile.png'

const BackgroundScroll: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateOpacity = () => {
    const maxScroll = 500; // You can adjust this value to control the fade-out distance
    const opacity = 1 - scrollPosition / maxScroll;
    return Math.max(0, Math.min(1, opacity));
  };

  return (
    <div style={{
          height: "500px", // Adjust this value to control the parallax scroll area
          backgroundImage: `url(${joshProfile})`, // Replace with your image URL
          backgroundSize: "cover",
          opacity: calculateOpacity(),
          transition: "opacity 0.3s ease-out", // Smooth transition on opacity change
          zIndex: '-2',
        }} />
  );
};

export default BackgroundScroll;
