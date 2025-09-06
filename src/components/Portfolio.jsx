import React from 'react';

const Portfolio = ({ isEditable }) => {
  const [portfolio, setPortfolio] = React.useState([
    { title: 'Project 1', image: 'https://via.placeholder.com/300' },
    { title: 'Project 2', image: 'https://via.placeholder.com/300' },
    { title: 'Project 3', image: 'https://via.placeholder.com/300' },
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
    <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore My Portfolio Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolio.map((project, index) => (
          <div key={index} className="relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isEditable ? (
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) =>
                    handlePortfolioChange(index, 'title', e.target.value)
                  }
                  className="text-white text-lg font-bold bg-transparent border-b-2"
                />
              ) : (
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
              )}
            </div>
            {isEditable && (
              <>
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
                  className="absolute top-2 left-2 bg-white p-1 rounded-full"
                />
                <button
                  onClick={() => handleDeleteProject(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
                >
                  X
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      {isEditable && (
        <button
          onClick={handleAddProject}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold mt-6"
        >
          Add Project
        </button>
      )}
    </div>
  );
};

export default Portfolio;
