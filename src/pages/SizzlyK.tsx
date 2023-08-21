import React from 'react'
import Nav from '../components/navigation/Nav.tsx'
import PDFViewer from '../components/PDFViewer.tsx'


const SizzlyK: React.FunctionComponent = () => {
    return (
        <div>
            <div style={{display: 'flex', placeContent: 'center', marginTop: '100px', marginBottom: '100px', zIndex: '0'}}>
                <PDFViewer pdfUrl="/SizzlyKCaseStudy.pdf" />
            </div>
            <Nav />
        </div>
    )
}

export default SizzlyK