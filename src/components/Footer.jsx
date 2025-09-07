import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleDownloadPDF = () => {
    setIsVisible(false);

    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        /* Reset body margins and padding */
        body, html {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }
        
        /* Hide all elements except the resume */
        body * {
          visibility: hidden;
        }
        
        /* Show only the resume content */
        #resume, #resume * {
          visibility: visible;
        }
        
        /* Position the resume at the top of the page */
        #resume {
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          width: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          border: none !important;
        }
        
        /* Ensure all resume sections print correctly */
        #resume > div {
          margin-top: 0 !important;
          padding-top: 0.5in !important;
          page-break-inside: avoid;
        }
        
        /* Portfolio specific print fixes */
        .portfolio-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 0.5rem !important;
        }
        
        .portfolio-item {
          break-inside: avoid;
          page-break-inside: avoid;
          margin-bottom: 0.75rem;
        }
        
        .portfolio-item img {
          max-height: 200px !important;
          object-fit: contain !important;
        }
        
        /* Ensure links are visible in print */
        a {
          color: #3b82f6 !important;
          text-decoration: underline !important;
        }
        
        /* Hide Netlify badge and other UI elements */
        .fixed, .edit, .save, .download-btn, header, footer, 
        #netlify-badge, [class*="netlify"], [data-netlify] {
          display: none !important;
          visibility: hidden !important;
        }
        
        /* Hide any potential watermarks */
        [class*="watermark"], [id*="watermark"] {
          display: none !important;
          visibility: hidden !important;
        }
        
        /* Force colors to show in print */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        
        /* Set page margins for better layout */
        @page {
          margin: 0.5in;
          size: portrait;
        }
      }
    `;
    document.head.appendChild(style);

    // Add a small delay to ensure styles are applied before printing
    setTimeout(() => {
      window.print();
      // Clean up after printing
      setTimeout(() => {
        document.head.removeChild(style);
        setIsVisible(true);
      }, 500);
    }, 100);
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
    <footer className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 download-btn transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={handleDownloadPDF}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center text-xs sm:text-sm"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
        Download PDF
      </button>
    </footer>
  );
};

export default Footer;