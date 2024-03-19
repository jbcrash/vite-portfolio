import React, { useState, useEffect } from 'react'
import Nav from '../components/navigation/Nav.tsx'
import WorkButton from '../components/navigation/WorkButton.tsx'
import CanvaEmbedComponent from '../components/CanvaEmbedComponent.tsx'

import joshProfile from '../assets/joshProfile.png'


const About: React.FunctionComponent = () => {
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
      const maxScroll = 500; 
      const opacity = 0.3 - scrollPosition / maxScroll;
      return Math.max(0, Math.min(1, opacity));
    };

    return (
        <div style={{position: 'relative'}}>
            <div style={{
            height: '50vw',
            backgroundImage: `url(${joshProfile})`,
            backgroundSize: "cover",
            opacity: calculateOpacity(),
            transition: "opacity 0.3s ease-out",
            zIndex: '-1',
            }} />
            {/* Background image */}
            <div style={{display: 'grid', 
            placeContent: 'center', 
            marginLeft: '15%', 
            marginRight: '15%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: '1'}}>
                <h1>Hi, I'm Josh Bellingham</h1>
                <p style={{marginTop: '0.25rem'}}>I have been working in tech for most of my life, and have developed a love for helping people achieve their goals.
                I am currently working for local non-profits to improve their web prescence, manage their IT, and teach digital literacy.</p>
                <p style={{marginTop: '0.25rem'}}>I am excited about learning new things, and I love learning by doing. Below are some of the certifications I have earned.</p>
            </div>
            <div><WorkButton /></div>
            <div><CanvaEmbedComponent url="https://www.canva.com/design/DAF_5vxWruU/lHMp_jZY0va4zD6Vtn8AfQ/view?embed" /></div>
            <Nav />
        </div>
    )
}

export default About