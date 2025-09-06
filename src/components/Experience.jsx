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

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience</h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="pb-4 border-b border-gray-200 flex justify-between items-start">
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-2">
                {isEditable ? (
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, 'company', e.target.value)
                    }
                    className="text-2xl font-bold border-b-2"
                  />
                ) : (
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                )}
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded-full ${exp.isCurrent ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                >
                  {isEditable ? (
                    <div className="flex items-center">
                      <DatePicker
                        selected={exp.startDate}
                        onChange={(date) =>
                          handleExperienceChange(index, 'startDate', date)
                        }
                        dateFormat="MM/dd/yyyy"
                        className="border-b-2 w-28"
                      />
                      <span className="mx-2">-</span>
                      <DatePicker
                        selected={exp.endDate}
                        onChange={(date) =>
                          handleExperienceChange(index, 'endDate', date)
                        }
                        dateFormat="MM/dd/yyyy"
                        className="border-b-2 w-28"
                      />
                    </div>
                  ) : (
                    `${exp.startDate.getFullYear()} - ${exp.endDate.getFullYear()}`
                  )}
                </span>
              </div>
              {isEditable ? (
                <textarea
                  value={exp.description}
                  onChange={(e) =>
                    handleExperienceChange(index, 'description', e.target.value)
                  }
                  className="text-gray-600 mt-2 border-b-2 w-full"
                />
              ) : (
                <p className="text-gray-600 mt-2">{exp.description}</p>
              )}
            </div>
            {isEditable && (
              <button
                onClick={() => handleDeleteExperience(index)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                <svg
                  className="w-6 h-6"
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
        ))}
      </div>
      {isEditable && (
        <button
          onClick={handleAddExperience}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold mt-6"
        >
          Add Experience
        </button>
      )}
    </div>
  );
};

export default Experience;
