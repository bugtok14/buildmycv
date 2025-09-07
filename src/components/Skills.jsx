import React from 'react';

const Skills = ({ isEditable }) => {
  const [skills, setSkills] = React.useState([
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 84 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 79 },
    { name: 'Bootstrap', level: 60 },
  ]);

  const handleAddSkill = () => {
    setSkills([...skills, { name: '', level: 50 }]);
  };

  const handleSkillChange = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  const handleDeleteSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills Gained Through Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              {isEditable ? (
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                  className="font-semibold border-b-2"
                />
              ) : (
                <span className="font-semibold">{skill.name}</span>
              )}
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            {isEditable && (
              <div className="flex items-center mt-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={skill.level}
                  onChange={(e) => handleSkillChange(index, 'level', e.target.value)}
                  className="w-full"
                />
                <button
                  onClick={() => handleDeleteSkill(index)}
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
              </div>
            )}
          </div>
        ))}
      </div>
      {isEditable && (
        <button
          onClick={handleAddSkill}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold mt-6"
        >
          Add Skill
        </button>
      )}
    </div>
  );
};

export default Skills;
