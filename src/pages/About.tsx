import React, { useState, useEffect } from 'react'
import Nav from '../components/navigation/Nav.tsx'
import Card from '../components/Card.tsx'

import joshProfile from '../assets/joshProfile.png'
import kalsMockup from '../assets/kalsMockup.png'
import sizzlyKMockup from '../assets/sizzlyKMockup.png'
import petersMockup from '../assets/petersMockup.png'

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
                <p style={{marginTop: '0.25rem'}}>I’m a user experience designer and tech enthusiast from Three Hills AB.
                I currently working for local non-profits to improve their web prescence, manage their IT, and teach digital literacy.</p>
                <p style={{marginTop: '0.25rem'}}>I love improving designs by creating design systems that promote accessibilty for everyone. 
                Icons, color, and plain language all contribute to an equitable user experience, and I love building them into products.</p>
            </div>
            {/* Content */}
            <div style={{position: 'relative', top: '50vh', zIndex: '2'}}>
                <h1 style={{position: 'relative', top: '-4em'}}>My Work</h1>
                <Card 
                    imageUrl={kalsMockup}
                    title='Kneehill Adult Learning Mobile Redesign'
                    description='Redesigning for a responsive mobile experience.'
                    link='/kals' />
                <Card 
                    imageUrl={sizzlyKMockup}
                    title='Sizzly K BBQ Mobile App Example'
                    description='Making mobile ordering effortless.'
                    link='/sizzly-k' />
                <Card 
                    imageUrl={petersMockup}
                    title="Peter's Pharmacy Website"
                    description='A more accessible pharmacy experience'
                    link='/peters-pharmacy' />
            </div>
            <Nav />
        </div>
    )
}

export default About