import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import CanvaEmbedComponent from '../components/CanvaEmbedComponent.tsx'
import WorkButton from '../components/navigation/WorkButton.tsx'
const SizzlyK: React.FunctionComponent = () => {
    return (
        <div>
            <h1 style={{position: 'relative', top: '5vw'}}>Sizzly K BBQ Mockup</h1>
            <CanvaEmbedComponent url="https://www.canva.com/design/DAFb6aSjv_Y/view?embed" />
            <div style={{position: 'relative', top: '10vw'}}><WorkButton /></div>
            <Nav />
        </div>
    )
}

export default SizzlyK