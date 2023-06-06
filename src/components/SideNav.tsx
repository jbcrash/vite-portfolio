import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components' 
import { SideNavData } from './SideNavData'
import { useState } from 'react'

const SideNavMenu = styled.div`
    width: 250px;
    height: 100vh;
    background-color: opacity: 0;
    position: absolute;
    top: 60px;
    left: 0;
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;
    position: absolute;

    &:hover {
        background-color: rgba(0, 0, 0, 0);
        color: #ffffff;
        .icon {color: #9747ff;}
        .title {
            transfrom: translateX(10px);
            opacity: 1;}
        height: 45px;
        align-items: center;
    }
`

const Icon = styled.span`
    color: #ffffff;
`;

const Title = styled.span<{ isVisible: boolean }>`
    display: inline-block;
    margin-left: 10px;

    opacity: 0;
    transition: transform 0.5s ease-out, opacity 0.4s ease-out;
    transform: translateX(-100%);
    ${({ isVisible }) => isVisible && `
    opacity: 1;
    transform: translateX(0);
    `}
`;

const SideNav: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState('');

  const handleMouseEnter = (title: string) => {
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setHoveredItem('');
  };

  return (
    <SideNavMenu>
      {SideNavData.map((item, index) => {
        const isHovered = hoveredItem === item.title;

        return (
          <MenuItems key={index}>
            <MenuItemLinks
              to={item.path}
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
                <Icon className="icon">{item.icon}</Icon>
                <Title isVisible={isHovered}>{item.title}</Title>
            </MenuItemLinks>
          </MenuItems>
        );
      })}
    </SideNavMenu>
  );
};

export default SideNav;