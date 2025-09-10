import React, { useState } from 'react';

const Summary = ({ isEditable }) => {
  const [summary, setSummary] = useState(
    'Dynamic Marketing Manager with proven experience in developing campaigns, managing teams, and driving brand growth. Skilled in digital marketing, strategy, and market research, with a focus on delivering measurable business results.'
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