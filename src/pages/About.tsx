import React from 'react'
import Nav from '../components/Nav.tsx'

const About: React.FunctionComponent = () => {
    return (
        <body>
            <Nav />
        <div style={{display: 'grid', placeContent: 'center' }}>
            <h1>About</h1>
        </div>
        </body>
    )
}

export default About