import React from 'react';
import { SocialLinksData } from './SocialLinksData';
import '../../styles.css';

const SocialLinkComponent: React.FC = () => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        bottom: '1vh',
        right: '1vw',
      }}
    >
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
