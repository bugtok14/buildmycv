import React, { useState } from 'react';
import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import DownloadPDF from './components/DownloadPDF';

const App = () => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className=" bg-gradient-to-br from-gray-100 to-white">
      <Header isEditable={isEditable} setIsEditable={setIsEditable} />
      <div id="pdf-content" className="w-full max-w-4xl mx-auto bg-white shadow-lg mt-15 mb-15">
        <div className="flex">
          <LeftColumn isEditable={isEditable} />
          <RightColumn isEditable={isEditable} />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <DownloadPDF />
      </div>
    </div>
  );
};

export default App;
