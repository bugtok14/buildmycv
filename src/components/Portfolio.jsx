import React from 'react';

const Portfolio = ({ isEditable }) => {
  const [portfolio, setPortfolio] = React.useState([
    { title: 'Project 1', image: 'https://resume-getnextjs.vercel.app/images/portfolio/cozycasa.png' },
    { title: 'Project 2', image: 'https://resume-getnextjs.vercel.app/images/portfolio/humans.png' },
    { title: 'Project 3', image: 'https://resume-getnextjs.vercel.app/images/portfolio/roket-squred.png' },
  ]);

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

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl mt-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore My Portfolio Showcase</h2>
      <p className="text-gray-600 mb-6">A collection of my recent work and projects</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((project, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              {isEditable ? (
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) =>
                    handlePortfolioChange(index, 'title', e.target.value)
                  }
                  className="text-white text-lg font-bold bg-transparent border-b border-gray-400 focus:border-white focus:outline-none text-center w-4/5"
                />
              ) : (
                <h3 className="text-white text-lg font-bold text-center">{project.title}</h3>
              )}
              
              {isEditable && (
                <div className="mt-4 flex space-x-2">
                  <label className="cursor-pointer bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors duration-300">
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
                  
                  <button
                    onClick={() => handleDeleteProject(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-red-600 transition-colors duration-300"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            
            {isEditable && (
              <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                <svg
                  className="w-4 h-4 text-gray-600"
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
        <button
          onClick={handleAddProject}
          className="flex items-center justify-center mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300 w-full md:w-auto"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Add Project
        </button>
      )}
    </div>
  );
};

export default Portfolio;