import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import CanvaEmbedComponent from '../components/CanvaEmbedComponent.tsx'
import WorkButton from '../components/navigation/WorkButton.tsx'


const PetersPharmacy: React.FunctionComponent = () => {
    return (
        <div>
            <h1 style={{position: 'relative', top: '5vw'}}>Peter's Pharmacy</h1>
            <CanvaEmbedComponent url="https://www.canva.com/design/DAFStRzylEQ/view?embed" />
            <div style={{position: 'relative', top: '10vw'}}><WorkButton /></div>
            <Nav />
        </div>
    )
}

export default PetersPharmacy