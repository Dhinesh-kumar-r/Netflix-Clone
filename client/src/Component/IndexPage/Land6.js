import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    
    <div className='container-6'>
      
      
    <div className="accordion-item">
     
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? 'x' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  </div>
  );
};

export default Accordion;


