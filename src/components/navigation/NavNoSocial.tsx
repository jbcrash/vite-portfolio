import React from 'react';
import '../../styles.css';

import LogoTitle from './LogoTitle.tsx';
import SideNav from './SideNav.tsx';


const NavNoSocial: React.FC = () => {
  
    return (
    <div style={{zIndex: '100'}}>
        <LogoTitle />
        <SideNav />
    </div>
    )
}

export default NavNoSocial