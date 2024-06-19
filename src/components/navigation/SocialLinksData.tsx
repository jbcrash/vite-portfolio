import * as FaIcons from 'react-icons/fa'
import '../../styles.css'

export const SocialLinksData = [
    {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/in/josh-bellingham/',
        icon: <FaIcons.FaLinkedin className='grow' title='LinkedIn' />
    },
    {
        title: 'Credly',
        path: 'https://www.credly.com/users/joshua-bellingham',
        icon: <FaIcons.FaCertificate className='grow' title='Credly'/>
    },
    {
        title: 'GitHub',
        path: 'https://github.com/jbcrash',
        icon: <FaIcons.FaGithubSquare className='grow' title='GitHub'/>
    }
]