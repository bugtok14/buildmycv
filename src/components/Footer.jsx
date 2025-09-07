import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleDownloadPDF = () => {
    setIsVisible(false);

    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
        #resume, #resume * {
          visibility: visible;
        }
        #resume {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        /* Hide fixed UI elements like buttons */
        .fixed, .edit, .save, .download-btn {
          display: none !important;
        }
        /* Force colors to show */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
      }
    `;
    document.head.appendChild(style);

    window.print();

    document.head.removeChild(style);
    setIsVisible(true);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className={`fixed bottom-8 right-8 download-btn transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={handleDownloadPDF}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
        Download PDF
      </button>
    </footer>
  );
};

export default Footer;