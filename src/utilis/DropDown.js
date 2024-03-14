import React from 'react'
import { useState } from 'react';

const DropDown = ({options}) => {
    const [isOpen , setIsOpen] = useState('');

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dropdown-trigger">
        <span>Teams</span>
      </div>
      {isOpen && (
        <div className="dropdown-content absolute">
             <ul className='w-24 bg-white text-black'>
            {options.map((team, index) => (
              <li key={index}>{team}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
  )
}

export default DropDown
