import React, { useState, useEffect } from 'react'
import '../styles.css';
import Nav from '../components/Nav.tsx'
import joshProfile from '../assets/joshProfile.png'
import joshUX from '../assets/joshUX.png'
import joshDigital from '../assets/joshDigital.png'
import joshDev from '../assets/joshDev-temp.png'

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
        <div className='page'>
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
                <span>
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
            <Nav />
            </div>
        </div>

    )
}

export default Home