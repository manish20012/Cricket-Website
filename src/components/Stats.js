import React from 'react'
import { useState } from 'react';

const Stats = () => {
    const stat =["Fixtures & Results" , "Squad" , "Stats" , "Teams" , "Photo" , "video"]

    const[isOpen , setIsOpen] = useState('');


    const handleMouseEnter = () => {
        setIsOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsOpen(false);
      };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div>
            <span>Stats</span>
        </div>
        {isOpen && (
            <div className='absolute py-3'>
                <ul className=' bg-white  text-black '>
                    {stat.map((stats , index) =>(
                        <li key={index}>{stats}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default Stats
