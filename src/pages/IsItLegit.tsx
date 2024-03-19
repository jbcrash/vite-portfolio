import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import CanvaEmbedComponent from '../components/CanvaEmbedComponent.tsx'
import WorkButton from '../components/navigation/WorkButton.tsx'

const IsItLegit: React.FunctionComponent = () => {
    return (
        <div>
            <h1 style={{position: 'relative', top: '5vw'}}>Is It Legit</h1>
            <CanvaEmbedComponent url="https://www.canva.com/design/DAF_5rgc0TM/i-oc_JXMEC9XfDyKeXIfNQ/view?embed" />
            <div style={{position: 'relative', top: '10vw'}}><WorkButton /></div>
            <Nav />
        </div>
    )
}

export default IsItLegit