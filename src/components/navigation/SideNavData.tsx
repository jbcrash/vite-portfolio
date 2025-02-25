import * as FaIcons from 'react-icons/fa'

export const SideNavData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        isActive: false
    },
    {
        title: 'Work',
        path: '/work',
        icon: <FaIcons.FaBriefcase />,
        isActive: false
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaInfoCircle />,
        isActive: false
    },
    // {
    //     title: 'Resume',
    //     path: '/resume',
    //     icon: <FaIcons.FaFileAlt />,
    //     isActive: false
    // },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaAt />,
        isActive: false
    },
]