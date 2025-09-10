import React, { useState } from 'react';

const Experience = ({ isEditable }) => {
  const [experiences, setExperiences] = useState([
    {
      company: 'Borcelle Studio',
      title: 'Marketing Manager & Specialist',
      date: '2030 - PRESENT',
      tasks: [
        'Develop and execute comprehensive marketing strategies and campaigns that align with the company\'s goals and objectives.',
        'Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.',
        'Monitor brand consistency across marketing channels and materials.',
      ],
    },
    {
      company: 'Fauget Studio',
      title: 'Marketing Manager & Specialist',
      date: '2025 - 2029',
      tasks: [
        'Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI.',
        'Oversee market research to identify emerging trends, customer needs, and competitor strategies.',
        'Monitor brand consistency across marketing channels and materials.',
      ],
    },
    {
      company: 'Studio Shodwe',
      title: 'Marketing Manager & Specialist',
      date: '2024 - 2025',
      tasks: [
        'Develop and maintain strong relationships with partners, agencies, and vendors to support marketing initiatives.',
        'Monitor and maintain brand consistency across all marketing channels and materials.',
      ],
    },
  ]);

  const handleAddExperience = () => {
    setExperiences([...experiences, { company: '', title: '', date: '', tasks: [''] }]);
  };

  const handleDeleteExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  const handleTaskChange = (expIndex, taskIndex, value) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].tasks[taskIndex] = value;
    setExperiences(newExperiences);
  };

  const handleAddTask = (expIndex) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].tasks.push('');
    setExperiences(newExperiences);
  };

  const handleDeleteTask = (expIndex, taskIndex) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].tasks = newExperiences[expIndex].tasks.filter((_, i) => i !== taskIndex);
    setExperiences(newExperiences);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-700 uppercase tracking-wider">Work Experience</h2>
      <div className="w-16 border-b-2 border-gray-400 my-2"></div>
      <div className="mt-4 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {isEditable ? (
              <div className="space-y-2 p-4 border border-dashed rounded-md">
                <div className="flex justify-between items-baseline">
                  <input type="text" value={exp.company} onChange={(e) => handleExperienceChange(index, 'company', e.target.value)} placeholder="Company" className="font-bold text-lg text-gray-800 bg-transparent border-b w-2/3" />
                  <input type="text" value={exp.date} onChange={(e) => handleExperienceChange(index, 'date', e.target.value)} placeholder="Date" className="text-sm font-medium text-gray-600 bg-transparent border-b w-1/3 text-right" />
                </div>
                <input type="text" value={exp.title} onChange={(e) => handleExperienceChange(index, 'title', e.target.value)} placeholder="Title" className="text-gray-700 italic bg-transparent border-b w-full" />
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex items-center">
                      <input type="text" value={task} onChange={(e) => handleTaskChange(index, i, e.target.value)} className="bg-transparent border-b w-full mr-2" />
                      <button onClick={() => handleDeleteTask(index, i)} className="text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                      </button>
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleAddTask(index)} className="text-sm text-blue-600">+ Add Task</button>
                <button onClick={() => handleDeleteExperience(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                </button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-lg text-gray-800">{exp.company}</h3>
                  <span className="text-sm font-medium text-gray-600">{exp.date}</span>
                </div>
                <p className="text-gray-700 italic">{exp.title}</p>
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      {isEditable && (
        <button onClick={handleAddExperience} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">+ Add Experience</button>
      )}
    </div>
  );
};

export default Experience;