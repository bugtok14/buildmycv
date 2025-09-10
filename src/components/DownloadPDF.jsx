import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';

const DownloadPDF = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    document.body.classList.add('pdf-generating');
    const pdfContent = document.getElementById('pdf-content');

      // Add a special class that forces desktop layout
    pdfContent.classList.add("pdf-layout");

    if (!pdfContent) {
      console.error("Element with id 'pdf-content' not found.");
      setIsGenerating(false);
      document.body.classList.remove('pdf-generating');
      return;
    }

    try {
      const canvas = await html2canvas(pdfContent, {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      pdfContent.classList.remove("pdf-layout");

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;
      const imgWidth = pdfWidth;
      const imgHeight = imgWidth / ratio;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
      document.body.classList.remove('pdf-generating');
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center text-xs sm:text-sm"
    >
      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
      </svg>
      {isGenerating ? 'Generating...' : 'Download PDF'}
    </button>
  );
};

export default DownloadPDF;
