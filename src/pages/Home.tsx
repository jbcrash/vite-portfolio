import React, { useState } from 'react'
import '../styles.css';
import Nav from '../components/navigation/Nav.tsx'
import Card from '../components/Card.tsx'

import joshProfile from '../assets/joshProfile.png'
import joshUX from '../assets/joshUX.png'
import joshDigital from '../assets/joshDigital.png'
import joshDev from '../assets/joshDev-temp.png'
import kalsMockup from '../assets/kalsMockup.png'
import sizzlyKMockup from '../assets/sizzlyKMockup.png'
import petersMockup from '../assets/petersMockup.png'

const Home: React.FunctionComponent = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false)
    const [backgroundImage, setBackgroundImage] = useState(joshProfile);

    const handleMouseEnter = () => {
        if (isWaiting)
            setTimeout(() => {
            setIsHovered(true)
            }, 300)
        else
            setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsWaiting(true);
        setTimeout(() => {
            setIsWaiting(false)
            setIsHovered(false)
        }, 300)
    };
    const handleBackground = (image: string) => {
        handleMouseEnter();
        if (isWaiting)
            setTimeout(() => {
            setBackgroundImage(image);
        }, 300)
        else
            setBackgroundImage(image)
    };

    return (
        <div>
        <div className={isHovered ? 'bg-hovered' : 'bg-normal'}>
            <img src={backgroundImage} style={{position: 'fixed', width: '100%'}} />
        </div>
            <div style={{zIndex: 1}}>
            <div style={{position: 'relative', top: '2rem', display: 'grid', placeItems: 'center'}}>
                <span style={{display: 'inline-flex', placeItems: 'center'}}>
                <h1>Hi, I'm</h1>
                <h1 className='name-bg' onMouseEnter={() => handleBackground(joshProfile)} onMouseLeave={handleMouseLeave}>
                    Josh Bellingham
                </h1>
                </span>
                <span style={{position: 'relative', top: '25%'}}>
                    <h2 className='ux-designer' 
                    onMouseEnter={() => handleBackground(joshUX)} 
                    onMouseLeave={handleMouseLeave}>
                        UX Designer
                    </h2>
                    <h2 className='digital-instructor' 
                    onMouseEnter={() => handleBackground(joshDigital)} 
                    onMouseLeave={handleMouseLeave}>
                        Digital Instructor
                    </h2>
                    <h2 className='web-developer' 
                    onMouseEnter={() => handleBackground(joshDev)} 
                    onMouseLeave={handleMouseLeave}>
                        Web Developer
                    </h2>
                </span>
            </div>
            <div style={{position: 'relative', top: '80vh'}}>
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
            </div>
        <Nav />
        </div>

    )
}

export default Home