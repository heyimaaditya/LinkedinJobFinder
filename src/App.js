import { useState } from 'react';
import Header from './components/Header';
import ResumeEditor from './components/ResumeEditor';
import PDFPreview from './components/PDFPreview';
import ATSDashboard from './components/ATSDashboard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);

  return (
    <div className="app">
      <Header />
      <div className="main-content" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '10px' }}><ResumeEditor /></div>
        <div style={{ flex: 1, marginRight: '10px' }}><PDFPreview pdfUrl={pdfUrl} /></div>
        <div style={{ flex: 1 }}><ATSDashboard /></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;