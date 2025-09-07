import React from 'react';

const Header = ({ isEditable, setIsEditable }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-6 px-8 bg-white shadow-md z-50">
      <h1 className="text-3xl font-bold text-gray-800">Resume</h1>
      <button
        onClick={() => setIsEditable(!isEditable)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
      >
        {isEditable ? 'Save Changes' : 'Edit'}
      </button>
    </header>
  );
};

export default Header;
