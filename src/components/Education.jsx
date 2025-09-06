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
    <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Education</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-3">University</th>
            <th className="text-left py-3">Course</th>
            <th className="text-left py-3">Year</th>
            {isEditable && <th className="text-left py-3">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {education.map((edu, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-3">
                {isEditable ? (
                  <input
                    type="text"
                    value={edu.university}
                    onChange={(e) =>
                      handleEducationChange(index, 'university', e.target.value)
                    }
                    className="border-b-2 w-full"
                  />
                ) : (
                  edu.university
                )}
              </td>
              <td className="py-3">
                {isEditable ? (
                  <input
                    type="text"
                    value={edu.course}
                    onChange={(e) =>
                      handleEducationChange(index, 'course', e.target.value)
                    }
                    className="border-b-2 w-full"
                  />
                ) : (
                  edu.course
                )}
              </td>
              <td className="py-3">
                {isEditable ? (
                  <div className="flex items-center">
                    <DatePicker
                      selected={edu.startDate}
                      onChange={(date) =>
                        handleEducationChange(index, 'startDate', date)
                      }
                      dateFormat="MM/dd/yyyy"
                      className="border-b-2 w-24"
                    />
                    <span className="mx-2">-</span>
                    <DatePicker
                      selected={edu.endDate}
                      onChange={(date) =>
                        handleEducationChange(index, 'endDate', date)
                      }
                      dateFormat="MM/dd/yyyy"
                      className="border-b-2 w-24"
                    />
                  </div>
                ) : (
                  `${edu.startDate.getFullYear()} - ${edu.endDate.getFullYear()}`
                )}
              </td>
              {isEditable && (
                <td className="py-3">
                  <button
                    onClick={() => handleDeleteEducation(index)}
                    className="text-red-500 hover:text-red-700"
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
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {isEditable && (
        <button
          onClick={handleAddEducation}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold mt-6"
        >
          Add Education
        </button>
      )}
    </div>
  );
};

export default Education;
