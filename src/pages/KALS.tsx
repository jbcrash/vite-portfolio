import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import CanvaEmbedComponent from '../components/CanvaEmbedComponent.tsx'
import Card from '../components/Card.tsx'
import sizzlyKMockup from '../assets/sizzlyKMockup.png'
import petersMockup from '../assets/petersMockup.png'


const KALS: React.FunctionComponent = () => {
    return (
        <div>
            <CanvaEmbedComponent url="https://www.canva.com/design/DAFtI-DNJdQ/view?embed" />
            <div style={{position: 'relative', top: '20vw'}}>
                <h1 style={{position: 'relative', top: '-4em'}}>Other Projects</h1>
                <Card 
                    imageUrl={sizzlyKMockup}
                    title='Sizzly K BBQ Mobile App Example'
                    description='Making mobile ordering effortless.'
                    link='/sizzly-k' />
                <Card 
                    imageUrl={petersMockup}
                    title="Peter's Pharmacy Website"
                    description='A more accessible pharmacy experience'
                    link='/peters-pharmacy' />
            </div>
            <Nav />
        </div>
    )
}

export default KALS