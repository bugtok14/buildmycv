import React, { useState, useEffect } from 'react';

const Header = ({ isEditable, setIsEditable, isGeneratingPDF }) => {
  const [stars, setStars] = useState(128); // Default star count
  const [isHovered, setIsHovered] = useState(false);

  // In a real app, fetch this from GitHub API
  useEffect(() => {
    // just using hardcoded star count from GitHub API
    // For a real implementation, pleass use:
    // fetch('https://api.github.com/repos/your-username/your-repo')
    //   .then(response => response.json())
    //   .then(data => setStars(data.stargazers_count))
    const interval = setInterval(() => {
      // Simulate star count changing (for demo purposes)
      setStars(prev => Math.random() > 0.5 ? prev + 1 : prev);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-gray-300 to-white text-white shadow-lg sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-600">
          <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gray-800">
            BuildMyCV
          </h1>
        </div>
        
        {/* GitHub Star Badge */}
        <a 
          href="https://github.com/bugtok14/buildmycv" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center space-x-1 bg-gray-800 hover:bg-gray-900 rounded-full px-3 py-1 transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span className="text-sm font-medium">Star</span>
          <div className="h-4 w-px bg-gray-600 mx-1"></div>
          <span className="text-sm font-medium">{stars}</span>
          
          {/* Animation for hover effect */}
          {isHovered && (
            <span className="ml-1 animate-pulse">⭐</span>
          )}
        </a>
      </div>
      
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setIsEditable(!isEditable)}
          disabled={isGeneratingPDF}
          className={`px-4 py-2 cursor-pointer rounded-lg font-semibold transition-all duration-300 flex items-center ${
            isEditable 
              ? 'bg-green-500 hover:bg-green-600 shadow-md' 
              : 'bg-blue-500 hover:bg-blue-600 shadow-md'
          }`}
        >
          {isEditable ? (
            <>
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Save
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
              Edit
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
