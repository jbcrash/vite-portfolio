import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import CanvaEmbedComponent from '../components/CanvaEmbedComponent.tsx'
import Card from '../components/Card.tsx'
import kalsMockup from '../assets/kalsMockup.png'
import petersMockup from '../assets/petersMockup.png'

const SizzlyK: React.FunctionComponent = () => {
    return (
        <div>
            <CanvaEmbedComponent url="https://www.canva.com/design/DAFb6aSjv_Y/view?embed" />
            <div style={{position: 'relative', top: '20vw'}}>
                <h1 style={{position: 'relative', top: '-4em'}}>Other Projects</h1>
                <Card 
                    imageUrl={kalsMockup}
                    title='Kneehill Adult Learning Mobile Redesign'
                    description='Redesigning for a responsive mobile experience.'
                    link='/kals' />
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

export default SizzlyK