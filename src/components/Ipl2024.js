import React from 'react'
import { useState } from 'react';

const Ipl2024 = () => {
    const IPL =["Fixtures & Results" , "Squad" , "Stats" , "Teams" , "Photo" , "video"]

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
            <span>IPL 2024</span>
        </div>
        {isOpen && (
            <div className='absolute py-3'>
                <ul className=' bg-white  text-black '>
                    {IPL.map((ipl , index) =>(
                        <li key={index}>{ipl}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default Ipl2024
