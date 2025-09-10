import React, { useState } from 'react';

const Name = ({ isEditable }) => {
  const [name, setName] = useState('JESSA SANCHEZ');
  const [title, setTitle] = useState('MARKETING MANAGER');

  return (
    <div>
      {isEditable ? (
        <div className="space-y-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-5xl font-bold text-gray-800 bg-transparent border-b w-full"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl text-gray-600 bg-transparent border-b w-full"
          />
        </div>
      ) : (
        <>
          <h1 className="text-5xl font-bold text-gray-800">{name}</h1>
          <h2 className="text-2xl text-gray-600">{title}</h2>
        </>
      )}
      <div className="w-24 border-b-4 border-gray-400 mt-4"></div>
    </div>
  );
};

export default Name;