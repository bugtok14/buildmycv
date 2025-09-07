import React from 'react';

const Portfolio = ({ isEditable }) => {
  const [portfolio, setPortfolio] = React.useState([
    { title: 'ShopSavvy', url: 'https://shopsavvy-v69e.onrender.com/', image: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Project 2', url: '',  image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1239&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Project 3', url: '',  image: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ]);

  const [showPortfolio, setShowPortfolio] = React.useState(true);

  const handleAddProject = () => {
    setPortfolio([...portfolio, { title: 'New Project', image: 'https://via.placeholder.com/300' }]);
  };

  const handlePortfolioChange = (index, field, value) => {
    const newPortfolio = [...portfolio];
    newPortfolio[index][field] = value;
    setPortfolio(newPortfolio);
  };

  const handleDeleteProject = (index) => {
    const newPortfolio = portfolio.filter((_, i) => i !== index);
    setPortfolio(newPortfolio);
  };

  const togglePortfolioSection = () => {
    setShowPortfolio(!showPortfolio);
  };

  // Don't render the portfolio section if it's not shown and we're not in edit mode
  if (!showPortfolio && !isEditable) {
    return null;
  }

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl mt-6 md:mt-8 border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Explore My Portfolio Showcase</h2>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">A collection of my recent work and projects</p>
        </div>
        
        {isEditable && (
          <button
            onClick={togglePortfolioSection}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm ${
              showPortfolio 
                ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                : 'bg-green-100 text-green-600 hover:bg-green-200'
            } transition-colors duration-300`}
          >
            {showPortfolio ? 'Hide Portfolio' : 'Show Portfolio'}
          </button>
        )}
      </div>
      
      {showPortfolio && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolio.map((project, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Always visible delete button in edit mode */}
                  {isEditable && (
                    <button
                      onClick={() => handleDeleteProject(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 sm:p-2 rounded-full hover:bg-red-600 transition-colors duration-300 z-10"
                      aria-label="Delete project"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  )}
                  
                  {/* Hover overlay for edit controls */}
                  {isEditable && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-4">
                      <div className="mt-2 sm:mt-4 flex flex-wrap justify-center gap-1 sm:gap-2">
                        <label className="cursor-pointer bg-white text-gray-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors duration-300">
                          Change Image
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (e) => {
                                  handlePortfolioChange(index, 'image', e.target.result);
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Project title - always visible */}
                <div className="p-3 sm:p-4 bg-white">
                  {isEditable ? (
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) =>
                        handlePortfolioChange(index, 'title', e.target.value)
                      }
                      className="text-gray-800 text-base sm:text-lg font-bold bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none w-full text-center"
                      placeholder="Project title"
                    />
                  ) : (
                    <h3 className="text-blue-500 text-base sm:text-lg font-bold text-center">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    </h3>
                  )}
                </div>
                
                {isEditable && (
                  <div className="absolute top-2 left-2 bg-white rounded-full p-1 shadow-md">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 8V4a1 1 0 011-1h4M4 8v8a2 2 0 002 2h8m0 0v4a1 1 0 01-1 1h-4m4 0a2 2 0 002-2V8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2h8z"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {isEditable && (
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 gap-3">
              <button
                onClick={handleAddProject}
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-colors duration-300 w-full sm:w-auto text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Add Project
              </button>
              
              {portfolio.length === 0 && (
                <p className="text-gray-500 italic text-xs sm:text-sm text-center sm:text-left">
                  No projects added. Your portfolio section will be hidden when not in edit mode.
                </p>
              )}
            </div>
          )}
        </>
      )}
      
      {!showPortfolio && isEditable && (
        <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">Portfolio section is currently hidden</p>
          <button
            onClick={togglePortfolioSection}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-md sm:rounded-lg font-medium transition-colors duration-300 text-xs sm:text-sm"
          >
            Show Portfolio
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;