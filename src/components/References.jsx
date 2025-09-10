import React, { useState } from 'react';

const References = ({ isEditable }) => {
  const [references, setReferences] = useState([
    {
      name: 'Estelle Darcy',
      title: 'Wardiere Inc. / CTO',
      phone: '123-456-7890',
      email: 'hello@reallygreatsite.com',
    },
    {
      name: 'Harper Richard',
      title: 'Wardiere Inc. / CEO',
      phone: '123-456-7890',
      email: 'hello@reallygreatsite.com',
    },
  ]);

  const handleAddReference = () => {
    setReferences([...references, { name: '', title: '', phone: '', email: '' }]);
  };

  const handleDeleteReference = (index) => {
    const newReferences = references.filter((_, i) => i !== index);
    setReferences(newReferences);
  };

  const handleReferenceChange = (index, field, value) => {
    const newReferences = [...references];
    newReferences[index][field] = value;
    setReferences(newReferences);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-gray-700 uppercase tracking-wider">Reference</h2>
      <div className="w-16 border-b-2 border-gray-400 my-2"></div>
      <div className="grid grid-cols-2 gap-8 mt-4">
        {references.map((ref, index) => (
          <div key={index} className="relative">
            {isEditable ? (
              <div className="space-y-1 p-4 border border-dashed rounded-md">
                <input type="text" value={ref.name} onChange={(e) => handleReferenceChange(index, 'name', e.target.value)} placeholder="Name" className="font-bold text-lg text-gray-800 bg-transparent border-b w-full" />
                <input type="text" value={ref.title} onChange={(e) => handleReferenceChange(index, 'title', e.target.value)} placeholder="Title" className="text-gray-600 bg-transparent border-b w-full" />
                <input type="text" value={ref.phone} onChange={(e) => handleReferenceChange(index, 'phone', e.target.value)} placeholder="Phone" className="text-gray-600 bg-transparent border-b w-full" />
                <input type="text" value={ref.email} onChange={(e) => handleReferenceChange(index, 'email', e.target.value)} placeholder="Email" className="text-gray-600 bg-transparent border-b w-full" />
                <button onClick={() => handleDeleteReference(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                </button>
              </div>
            ) : (
              <div>
                <h3 className="font-bold text-lg text-gray-800">{ref.name}</h3>
                <p className="text-gray-600">{ref.title}</p>
                <p className="text-gray-600">Phone: {ref.phone}</p>
                <p className="text-gray-600">Email: {ref.email}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {isEditable && (
        <button onClick={handleAddReference} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">+ Add Reference</button>
      )}
    </div>
  );
};

export default References;