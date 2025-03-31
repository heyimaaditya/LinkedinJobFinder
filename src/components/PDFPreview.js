import { Document, Page } from 'react-pdf';

function PDFPreview({ pdfUrl }) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#F4F5F7', margin: '10px' }}>
      <Document file={pdfUrl}>
        <Page pageNumber={1} width={300} />
      </Document>
    </div>
  );
}

export default PDFPreview;