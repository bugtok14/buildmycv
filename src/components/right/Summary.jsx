import React, { useState } from 'react';

const Summary = ({ isEditable }) => {
  const [summary, setSummary] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim veniam quis nostrud exercitation.'
  );

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-gray-700 uppercase tracking-wider">Profile</h2>
      <div className="w-16 border-b-2 border-gray-400 my-2"></div>
      {isEditable ? (
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="mt-4 text-gray-600 bg-transparent border border-gray-300 rounded-md p-2 w-full h-40"
        />
      ) : (
        <p className="mt-2 text-gray-600">{summary}</p>
      )}
    </div>
  );
};

export default Summary;