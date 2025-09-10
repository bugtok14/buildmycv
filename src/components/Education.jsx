import React, { useState } from 'react';

const Education = ({ isEditable }) => {
  const [education, setEducation] = useState([
    {
      date: '2029 - 2030',
      university: 'WARDIERE UNIVERSITY',
      degree: 'Master of Business Management',
    },
    {
      date: '2025 - 2029',
      university: 'WARDIERE UNIVERSITY',
      degree: 'Bachelor of Business',
      gpa: '3.8 / 4.0',
    },
  ]);

  const handleAddEducation = () => {
    setEducation([...education, { date: '', university: '', degree: '', gpa: '' }]);
  };

  const handleDeleteEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-white uppercase tracking-wider">Education</h2>
      <div className="w-16 border-b-2 border-white my-2"></div>
      <div className="mt-4 space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            {isEditable ? (
              <div className="space-y-1">
                <input type="text" value={edu.date} onChange={(e) => handleEducationChange(index, 'date', e.target.value)} placeholder="Date" className="bg-transparent border-b w-full" />
                <input type="text" value={edu.university} onChange={(e) => handleEducationChange(index, 'university', e.target.value)} placeholder="University" className="bg-transparent border-b w-full font-bold" />
                <input type="text" value={edu.degree} onChange={(e) => handleEducationChange(index, 'degree', e.target.value)} placeholder="Degree" className="bg-transparent border-b w-full" />
                <input type="text" value={edu.gpa} onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)} placeholder="GPA" className="bg-transparent border-b w-full" />
              </div>
            ) : (
              <div>
                <p className="font-bold text-sm">{edu.date}</p>
                <h3 className="font-bold text-lg">{edu.university}</h3>
                <p className="font-light">{edu.degree}</p>
                {edu.gpa && <p className="font-light">GPA: {edu.gpa}</p>}
              </div>
            )}
            {isEditable && (
              <button onClick={() => handleDeleteEducation(index)} className="absolute top-0 right-0 text-red-500 hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
              </button>
            )}
          </div>
        ))}
      </div>
      {isEditable && (
        <button onClick={handleAddEducation} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">+ Add Education</button>
      )}
    </div>
  );
};

export default Education;