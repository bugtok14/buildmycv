import React from 'react';

const Header = ({ isEditable, setIsEditable }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-3 px-4 sm:py-4 sm:px-6 bg-white shadow-md z-50 border-b border-gray-100">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
        </svg>
        BuildMyCV
      </h1>
      <div className="flex items-center space-x-3">
        {/* GitHub Icon */}
        <a
          href="https://github.com/bugtok14/buildmycv.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
          aria-label="View source code on GitHub"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0.296c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        
        <button
          onClick={() => setIsEditable(!isEditable)}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-md sm:rounded-lg font-medium sm:font-semibold transition-colors duration-300 flex items-center text-xs sm:text-sm ${
            isEditable 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isEditable ? (
            <>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Save
            </>
          ) : (
            <>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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