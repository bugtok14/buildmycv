import React, { useState, useEffect } from 'react';

const PdfGeneratingModal = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    "Preparing your content",
    "Formatting layout",
    "Optimizing for PDF",
    "Finalizing document"
  ];

  useEffect(() => {
    let startTime = null;
    const duration = 1000; // 1.5 seconds
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressPercent = Math.min(elapsed / duration * 100, 100);
      
      setProgress(progressPercent);
      
      // Update current step based on progress
      if (progressPercent < 25) setCurrentStep(0);
      else if (progressPercent < 50) setCurrentStep(1);
      else if (progressPercent < 75) setCurrentStep(2);
      else setCurrentStep(3);
      
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        // Animation complete
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      }
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      // Cleanup if needed
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-70 flex items-center justify-center z-60 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-200">
        <div className="flex flex-col items-center">
          {/* Animated spinner with document icon */}
          <div className="relative mb-6">
            <div className="w-16 h-16 border-4 border-blue-100 rounded-full"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Generating Your PDF
          </h2>
          
          <p className="text-gray-600 mb-4 text-center">
            {steps[currentStep]}...
          </p>
          
          {/* Progress bar with percentage */}
          <div className="w-full mb-2">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          {/* Step indicator */}
          <div className="flex justify-center mt-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-2 h-2 rounded-full ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                {index < steps.length - 1 && (
                  <div className={`w-6 h-0.5 ${index < currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-xs text-gray-400 mt-6">
            This window will close automatically when complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default PdfGeneratingModal;