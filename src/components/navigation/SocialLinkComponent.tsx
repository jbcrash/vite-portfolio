import React from 'react';
import { SocialLinksData } from './SocialLinksData';
import '../../styles.css';

interface Props {
  position?: 'center' | 'bottomRight';
}

const SocialLinkComponent: React.FC<Props> = ({
  position = 'center'
}) => {
  
  const getStyles = (): React.CSSProperties => {
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
          flexDirection: 'row',
          position: 'absolute',
          bottom: '1vh',
          right: '1vw'
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
