import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import CanvaEmbedComponent from '../components/CanvaEmbedComponent.tsx'
import WorkButton from '../components/navigation/WorkButton.tsx'

const KALS: React.FunctionComponent = () => {
    return (
        <div>
            <h1 style={{position: 'relative', top: '5vw'}}>Kneehill Adult Learning Society</h1>
            <CanvaEmbedComponent url="https://www.canva.com/design/DAFtI-DNJdQ/view?embed" />
            <div style={{position: 'relative', top: '10vw'}}><WorkButton /></div>
            <Nav />
        </div>
    )
}

export default KALS