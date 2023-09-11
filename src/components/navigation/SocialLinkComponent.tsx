import React, { useState, useEffect } from 'react';
import { SocialLinksData } from './SocialLinksData';
import '../../styles.css';

interface Props {
  position?: 'center' | 'bottomRight';
}

const SocialLinkComponent: React.FC<Props> = ({
  position = 'center'
}) => {
  
  const getStyles = (): React.CSSProperties => {
    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 800); // Set the initial value based on the current screen size

    useEffect(() => {
      const handleResize = () => {
        setIsScreenSmall(window.innerWidth <= 800); // Set the updated value based on the resized screen size
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    switch (position) {
      case 'center':
        return {
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        };
      case 'bottomRight':
        return {
          display: 'flex',
          flexDirection: isScreenSmall ? 'column' : 'row',
          position: 'fixed',
          bottom: '1vh',
          right: '1vw',
          zIndex: '100'
        };
      default:
        return {};
    }
  };

  return (
    <div style={getStyles()}>
        {SocialLinksData.map((link, index) => (
          <div key={index}>
            <a href={link.path}>
              <span>{link.icon}</span>
            </a>
          </div>
        ))}
    </div>
  );
};

export default SocialLinkComponent;
