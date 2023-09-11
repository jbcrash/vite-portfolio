import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import PDFViewer from '../components/PDFViewer.tsx'
import JBResume from '../assets/Josh Bellingham Resume 2023 (2).pdf'

const Resume: React.FunctionComponent = () => {
    return (
        <div>
            <Nav />
        <div style={{display: 'grid', placeContent: 'center', marginBottom: '10rem'}}>
            <h1>Resume</h1>
            <PDFViewer pdfUrl={JBResume} />
        </div>
        </div>
    )
}

export default Resume