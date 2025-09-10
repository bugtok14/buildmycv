import React from 'react';
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';

const LeftColumn = ({ isEditable }) => {
  return (
    <div
     className="w-1/3.3 bg-[#1C3A52] text-white p-8"
     style={{ backgroundColor: "#1C3A52" }}
     >
      <Profile isEditable={isEditable} />
      <Education isEditable={isEditable} />
      <Skills isEditable={isEditable} />
      <Languages isEditable={isEditable} />
    </div>
  );
};

export default LeftColumn;