import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import PDFViewer from '../components/PDFViewer.tsx'
import JBResume from '../assets/Josh Bellingham Resume October 2023 (1).pdf'
import CanvaEmbedComponent from '../components/CanvaEmbedComponent.tsx'

const Resume: React.FunctionComponent = () => {
    return (
        <div>
            <Nav />
        <div style={{display: 'grid', placeContent: 'center', marginBottom: '10rem'}}>
            <h1>Resume</h1>
            <PDFViewer pdfUrl={JBResume} />
        </div>
        <div><CanvaEmbedComponent url="https://www.canva.com/design/DAF_5vxWruU/sVBgbwoC63ygF5lfUITiWw/view?embed" /></div>
        </div>
    )
}

export default Resume