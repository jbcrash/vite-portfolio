import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import PDFViewer from '../components/PDFViewer.tsx'


const SizzlyK: React.FunctionComponent = () => {
    return (
        <div>
            <Nav />
        <div style={{display: 'flex', placeContent: 'center', }}>
            <PDFViewer pdfUrl="/SizzlyKCaseStudy.pdf" />
        </div>
        </div>
    )
}

export default SizzlyK