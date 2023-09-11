import React, { useState, useRef, useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const updateContainerWidth = () => {
            const newContainerWidth = Math.floor(window.innerWidth * 0.58);
            setContainerWidth(newContainerWidth);
        };

        window.addEventListener('resize', updateContainerWidth);
        return () => window.removeEventListener('resize', updateContainerWidth);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <div ref={containerRef} style={{ width: '60%' }}>
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(Array(numPages || 0), (_, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={containerWidth}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                    />
                ))}
            </Document>
        </div>
    );
}

export default PDFViewer;