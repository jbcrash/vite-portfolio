import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SideNavData } from './SideNavData'
import './SideNav.css'


const SideNav: React.FC = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState('');

  const handleMouseEnter = (title: string) => {
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setHoveredItem('');
  };

  return (
    <div className='container'>
      {SideNavData.map((item, index) => {
        const isHovered = hoveredItem === item.title;
        const isActive = location.pathname === item.path;

        return (
          <li key={index}>
            <Link 
              to={item.path}
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}>
                <span className='icon-container' style={{ background: isActive ? 'linear-gradient(144deg, rgba(55,49,140,0.75) 26%, rgba(41,41,186,0.75) 76%, rgba(0,116,209,0.75) 99%)' : 'transparent' }}>
                  <span className='icon' style={{ color: isHovered ? '#9747ff' : '' }}>
                    {item.icon}
                  </span>
                </span>
                <span className='title' style={{opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateX(0)' : 'translateX(-100%)'}}>
                  {item.title}
                </span>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default SideNav;