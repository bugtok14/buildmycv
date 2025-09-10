import React from 'react';
import Name from './right/Name';
import Summary from './right/Summary';
import Experience from './Experience';
import References from './References';

const RightColumn = ({ isEditable }) => {
  return (
    <div className="w-2/3 p-8">
      <Name isEditable={isEditable} />
      <Summary isEditable={isEditable} />
      <Experience isEditable={isEditable} />
      <References isEditable={isEditable} />
    </div>
  );
};

export default RightColumn;