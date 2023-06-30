import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import './SocialLinkComponent.css';

interface SocialLink {
  title: string;
  path: string;
  icon: React.ReactNode;
  className: string;
}

const SocialLinks: SocialLink[] = [
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/josh-bellingham-7627a7239/',
    icon: <FaIcons.FaLinkedin />,
    className: 'linkedin-icon'
  },
  {
    title: 'Behance',
    path: 'https://www.behance.net/joshbellingham1',
    icon: <FaIcons.FaBehanceSquare />,
    className: 'behance-icon'
  },
  {
    title: 'Dribbble',
    path: 'https://dribbble.com/jbcrash?onboarding=true',
    icon: <FaIcons.FaDribbbleSquare />,
    className: 'dribbble-icon'
  },
  {
    title: 'Twitter',
    path: 'https://twitter.com/JBCrashCoding',
    icon: <FaIcons.FaTwitterSquare />,
    className: 'twitter-icon'
  },
  {
    title: 'GitHub',
    path: 'https://github.com/joshbellingham1',
    icon: <FaIcons.FaGithubSquare />,
    className: 'github-icon'
  },
];

const SocialLinkComponent: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const handleIconHover = (index: number) => {
    setHoveredIcon(index);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', minHeight: '100vh', top: '20px', right: '100px' }}>
      {SocialLinks.map((link, index) => (
        <a
          key={index}
          href={link.path}
          onMouseEnter={() => handleIconHover(index)}
          onMouseLeave={handleIconLeave}
          style={{
            color: '#ffffff',
            margin: '10px',
            fontSize: '1.5rem',
          }}
        >
          <span className={hoveredIcon === index ? link.className + ' icon-hover' : link.className}>{link.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinkComponent;
