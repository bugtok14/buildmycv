import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleDownloadPDF = () => {
    window.print();
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
    <footer className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 download-btn transition-opacity duration-300 no-print`}>
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