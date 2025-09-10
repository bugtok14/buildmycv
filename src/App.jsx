import React, { useState } from 'react';
import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import DownloadPDF from './components/DownloadPDF';

const App = () => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <>
      <Header isEditable={isEditable} setIsEditable={setIsEditable} />
      <div id="pdf-content" className="w-full max-w-4xl mx-auto bg-white shadow-lg">
        <div className="flex">
          <LeftColumn isEditable={isEditable} />
          <RightColumn isEditable={isEditable} />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <DownloadPDF />
      </div>
    </>
  );
};

export default App;
