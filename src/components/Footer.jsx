import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Footer = () => {
  const handleDownload = () => {
    const input = document.getElementById('resume');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('resume.pdf');
    });
  };

  return (
    <footer className="fixed bottom-8 right-8">
      <button
        onClick={handleDownload}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Download this as PDF
      </button>
    </footer>
  );
};

export default Footer;
