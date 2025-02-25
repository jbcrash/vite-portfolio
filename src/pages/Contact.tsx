import React from 'react'
import NavNoSocial from '../components/navigation/NavNoSocial'
import SocialLinkComponent from '../components/navigation/SocialLinkComponent'

const Contact: React.FunctionComponent = () => {
    return (
        <body>
            <NavNoSocial />
        <div style={{display: 'grid', placeContent: 'center' }}>
            <h1>Let's get in touch</h1>
            <p>Email: <a href="mailto:kneehilllearn.josh@gmail.com">KneehillLearn.Josh@gmail.com</a></p>
            <SocialLinkComponent position='center' />
        </div>
        </body>
    )
}

export default Contact