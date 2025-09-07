import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Education = ({ isEditable }) => {
  const [education, setEducation] = React.useState([
    {
      university: 'University of Example',
      course: 'Computer Science',
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { university: '', course: '', startDate: new Date(), endDate: new Date() },
    ]);
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  const handleDeleteEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl mt-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Education</h2>
      <p className="text-gray-600 mb-6">Your academic background and qualifications</p>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <div className="text-sm text-gray-500 mb-1">University</div>
                {isEditable ? (
                  <input
                    type="text"
                    value={edu.university}
                    onChange={(e) =>
                      handleEducationChange(index, 'university', e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="University name"
                  />
                ) : (
                  <div className="font-medium text-gray-800">{edu.university}</div>
                )}
              </div>
              
              <div className="md:col-span-4">
                <div className="text-sm text-gray-500 mb-1">Course</div>
                {isEditable ? (
                  <input
                    type="text"
                    value={edu.course}
                    onChange={(e) =>
                      handleEducationChange(index, 'course', e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Course name"
                  />
                ) : (
                  <div className="font-medium text-gray-800">{edu.course}</div>
                )}
              </div>
              
              <div className="md:col-span-2">
                <div className="text-sm text-gray-500 mb-1">Duration</div>
                {isEditable ? (
                  <div className="flex flex-col space-y-2">
                    <DatePicker
                      selected={edu.startDate}
                      onChange={(date) =>
                        handleEducationChange(index, 'startDate', date)
                      }
                      dateFormat="yyyy"
                      showYearPicker
                      className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                    />
                    <span className="text-center">to</span>
                    <DatePicker
                      selected={edu.endDate}
                      onChange={(date) =>
                        handleEducationChange(index, 'endDate', date)
                      }
                      dateFormat="yyyy"
                      showYearPicker
                      className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                    />
                  </div>
                ) : (
                  <div className="font-medium text-gray-800">
                    {edu.startDate.getFullYear()} - {edu.endDate.getFullYear()}
                  </div>
                )}
              </div>
              
              {isEditable && (
                <div className="md:col-span-1 flex items-center justify-end">
                  <button
                    onClick={() => handleDeleteEducation(index)}
                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors duration-300"
                    aria-label="Delete education"
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
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {isEditable && (
        <button
          onClick={handleAddEducation}
          className="flex items-center justify-center mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300 w-full md:w-auto"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Add Education
        </button>
      )}
    </div>
  );
};

export default Education;