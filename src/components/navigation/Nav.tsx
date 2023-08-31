import React from 'react';
import '../../styles.css';

import LogoTitle from './LogoTitle.tsx';
import SideNav from './SideNav.tsx';
import SocialLinkComponent from './SocialLinkComponent.tsx';

const Nav: React.FC = () => {
  
    return (
    <div style={{zIndex: '100'}}>
        <LogoTitle />
        <SideNav />
        <SocialLinkComponent position='bottomRight' /> 
    </div>
    )
}

export default Nav