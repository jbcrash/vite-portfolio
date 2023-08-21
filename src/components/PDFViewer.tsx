import React, { useState, useRef, useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }

        const handleResize = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div ref={containerRef} style={{ width: '70%' }}>
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages || 0), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} width={containerWidth} renderAnnotationLayer={false} />
                ))}
            </Document>
        </div>
    );
}

export default PDFViewer;