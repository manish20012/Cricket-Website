import React from 'react'
import { useState } from 'react';

const Series = () => {
    const serie =["WPL 2024" , "IPL 2024" , "India vs England" , "New Zealand vs England" , "Afghanistan vs Ireland" , "PSL 2024"]

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
            <span>Series</span>
        </div>
        {isOpen && (
            <div className='absolute py-3'>
                <ul className=' bg-white  text-black '>
                    {serie.map((series , index) =>(
                        <li key={index}>{series}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default Series
