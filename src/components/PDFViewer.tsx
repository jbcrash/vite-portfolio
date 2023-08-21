import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState<number | null>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number}) {
        setNumPages(numPages);
    }

    return (
        <div style={{ maxWidth: '2vw', margin: '0 auto' }}>
        <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            {Array.from(new Array(numPages || 0), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={0.5} />
            ))}
        </Document>
        </div>
    );
}

export default PDFViewer;