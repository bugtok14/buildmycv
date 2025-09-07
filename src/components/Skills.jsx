import React from 'react';

const Skills = ({ isEditable }) => {
  const [skills, setSkills] = React.useState([
    { name: 'Java', level: 95 },
    { name: 'Selenium', level: 84 },
    { name: 'WebdriverIO', level: 90 },
    { name: 'NodeJs', level: 90 },
    { name: 'Cucumber/BDD', level: 79 },
    { name: 'Loving You 💔', level: 40 },
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

  const getProgressColor = (level) => {
    if (level >= 90) return 'bg-gradient-to-r from-green-500 to-emerald-600';
    if (level >= 70) return 'bg-gradient-to-r from-blue-500 to-indigo-600';
    if (level >= 50) return 'bg-gradient-to-r from-yellow-500 to-amber-600';
    return 'bg-gradient-to-r from-red-400 to-red-500';
  };

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl mt-6 md:mt-8 border border-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Skills Gained Through Experience</h2>
      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Your technical proficiencies and expertise levels</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="p-3 sm:p-4 border border-gray-200 rounded-lg sm:rounded-xl hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-center mb-2">
              {isEditable ? (
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                  className="font-semibold text-gray-800 p-1 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-28"
                  placeholder="Skill name"
                />
              ) : (
                <span className="font-semibold text-gray-800 text-sm sm:text-base">{skill.name}</span>
              )}
              <span className="text-blue-600 font-medium text-sm sm:text-base">{skill.level}%</span>
            </div>
            
            <div className="w-full bg-gray-100 rounded-full h-2 sm:h-3 mb-2 overflow-hidden">
              <div
                className={`h-2 sm:h-3 rounded-full ${getProgressColor(skill.level)} transition-all duration-500`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            
            {isEditable && (
              <div className="flex items-center mt-2 sm:mt-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={skill.level}
                  onChange={(e) => handleSkillChange(index, 'level', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <button
                  onClick={() => handleDeleteSkill(index)}
                  className="text-red-500 hover:text-red-700 ml-3 sm:ml-4 p-1 rounded-full hover:bg-red-50 transition-colors duration-300"
                  aria-label="Delete skill"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
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
          className="flex items-center justify-center mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-colors duration-300 w-full md:w-auto text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Add Skill
        </button>
      )}
    </div>
  );
};

export default Skills;