'use client';
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
    <footer className="fixed bottom-8 right-8 download-btn">
      <button
        onClick={handleDownloadPDF}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Download this as PDF
      </button>
    </footer>
  );
};

export default Footer;
