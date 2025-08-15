import React, { useState } from 'react';

const TruncatedText: React.FC<{ 
  text: string; 
  maxWidth: string; 
  cellKey: string 
}> = ({ text, maxWidth, cellKey }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="relative"
      style={{ maxWidth }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="block truncate">
        {text}
      </span>
      {text.length > 20 && hovered && (
        <div className="absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg -top-8 left-0 whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
};

export default TruncatedText;