import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Experience = ({ isEditable }) => {
  const [experience, setExperience] = React.useState([
    {
      company: 'Example Corp',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isCurrent: true,
    },
    {
      company: 'Old Company',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Sed do eiusmod tempor incididunt ut labore and dolore magna aliqua.',
      isCurrent: false,
    },
  ]);

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        company: '',
        startDate: new Date(),
        endDate: new Date(),
        description: '',
        isCurrent: false,
      },
    ]);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const handleDeleteExperience = (index) => {
    const newExperience = experience.filter((_, i) => i !== index);
    setExperience(newExperience);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl mt-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
      <p className="text-gray-600 mb-6">Your professional journey and career history</p>
      
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  {isEditable ? (
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) =>
                        handleExperienceChange(index, 'company', e.target.value)
                      }
                      className="text-xl font-bold text-gray-800 p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2 md:mb-0"
                      placeholder="Company name"
                    />
                  ) : (
                    <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                  )}
                  
                  <div className="flex items-center">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        exp.isCurrent
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {exp.isCurrent ? 'Current' : 'Previous'}
                    </span>
                    
                    {isEditable ? (
                      <div className="flex items-center ml-4">
                        <DatePicker
                          selected={exp.startDate}
                          onChange={(date) =>
                            handleExperienceChange(index, 'startDate', date)
                          }
                          dateFormat="MMM yyyy"
                          showMonthYearDropdown
                          showYearDropdown
                          scrollableYearDropdown
                          className="p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-28 text-sm"
                        />
                        <span className="mx-2 text-gray-400">to</span>
                        <DatePicker
                          selected={exp.endDate}
                          onChange={(date) =>
                            handleExperienceChange(index, 'endDate', date)
                          }
                          dateFormat="MMM yyyy"
                          showMonthYearDropdown
                          showYearDropdown
                          scrollableYearDropdown
                          className={`p-1 border rounded-md w-28 text-sm ${
                            exp.isCurrent
                              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                              : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                          }`}
                          disabled={exp.isCurrent}
                        />
                        <label className="ml-3 flex items-center text-sm text-gray-600">
                          <input
                            type="checkbox"
                            checked={exp.isCurrent}
                            onChange={(e) =>
                              handleExperienceChange(index, 'isCurrent', e.target.checked)
                            }
                            className="mr-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          Current
                        </label>
                      </div>
                    ) : (
                      <span className="ml-4 text-gray-600 text-sm">
                        {formatDate(exp.startDate)} -{' '}
                        {exp.isCurrent ? 'Present' : formatDate(exp.endDate)}
                      </span>
                    )}
                  </div>
                </div>
                
                {isEditable ? (
                  <textarea
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(index, 'description', e.target.value)
                    }
                    className="text-gray-600 mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                    rows="3"
                    placeholder="Describe your role and responsibilities"
                  />
                ) : (
                  <p className="text-gray-600 mt-2 leading-relaxed">{exp.description}</p>
                )}
              </div>
              
              {isEditable && (
                <button
                  onClick={() => handleDeleteExperience(index)}
                  className="text-red-500 hover:text-red-700 ml-4 p-2 rounded-full hover:bg-red-50 transition-colors duration-300"
                  aria-label="Delete experience"
                >
                  <svg
                    className="w-5 h-5"
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
            </div>
          </div>
        ))}
      </div>
      
      {isEditable && (
        <button
          onClick={handleAddExperience}
          className="flex items-center justify-center mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300 w-full md:w-auto"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          Add Experience
        </button>
      )}
    </div>
  );
};

export default Experience;
