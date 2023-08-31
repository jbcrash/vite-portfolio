import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import CanvaEmbedComponent from '../components/CanvaEmbedComponent.tsx'
import Card from '../components/Card.tsx'
import kalsMockup from '../assets/kalsMockup.png'
import sizzlyKMockup from '../assets/sizzlyKMockup.png'


const PetersPharmacy: React.FunctionComponent = () => {
    return (
        <div>
            <CanvaEmbedComponent url="https://www.canva.com/design/DAFStRzylEQ/view?embed" />
            <div style={{position: 'relative', top: '20vw'}}>
                <h1 style={{position: 'relative', top: '-4em'}}>Other Projects</h1>
                <Card 
                    imageUrl={kalsMockup}
                    title='Kneehill Adult Learning Mobile Redesign'
                    description='Redesigning for a responsive mobile experience.'
                    link='/kals' />
                <Card 
                    imageUrl={sizzlyKMockup}
                    title='Sizzly K BBQ Mobile App Example'
                    description='Making mobile ordering effortless.'
                    link='/sizzly-k' />
            </div>
            <Nav />
        </div>
    )
}

export default PetersPharmacy