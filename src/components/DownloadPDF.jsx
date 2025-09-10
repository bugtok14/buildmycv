import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";

const DownloadPDF = ({ isGeneratingPDF, setIsGeneratingPDF }) => {

  const handleDownload = async () => {
    setIsGeneratingPDF(true);

    const pdfContent = document.getElementById("pdf-content");
    if (!pdfContent) {
      console.error("Element with id 'pdf-content' not found.");
      setIsGeneratingPDF(false);
      return;
    }

    pdfContent.classList.add("pdf-layout");

    try {
      const canvas = await html2canvas(pdfContent, {
        scale: 4, // high resolution
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });

      pdfContent.classList.remove("pdf-layout");

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const ratio = canvasWidth / pdfWidth;
      const canvasHeightInPDF = canvasHeight / ratio;

      let heightLeft = canvasHeightInPDF;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, canvasHeightInPDF);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - canvasHeightInPDF;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, canvasHeightInPDF);
        heightLeft -= pdfHeight;
      }
      pdf.save("resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGeneratingPDF}
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 flex items-center cursor-pointer"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        ></path>
      </svg>
      {isGeneratingPDF ? "Generating..." : "Download PDF"}
    </button>
  );
};

export default DownloadPDF;