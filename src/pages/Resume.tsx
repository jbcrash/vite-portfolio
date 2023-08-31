import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import PDFViewer from '../components/PDFViewer.tsx'
import JBResume from '../assets/Josh Bellingham Resume 2023 (1).pdf'

const Resume: React.FunctionComponent = () => {
    return (
        <body>
            <Nav />
        <div style={{display: 'grid', placeContent: 'center' }}>
            <h1>Resume</h1>
            <PDFViewer pdfUrl={JBResume} />
        </div>
        </body>
    )
}

export default Resume