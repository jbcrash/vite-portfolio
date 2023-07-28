import React from 'react';
import '../styles.css';

import LogoTitle from './LogoTitle.tsx';
import SideNav from './SideNav.tsx';
import SocialLinkComponent from './SocialLinkComponent.tsx';

const Nav: React.FC = () => {
  
    return (
    <div>
        <SideNav />
        <LogoTitle />
        <SocialLinkComponent /> 
    </div>
    )
}

export default Nav