import React from 'react'
import { useState } from 'react';

const Scores = () => {
    const Live =["Live Scores Home" ,"Results" , "Season view", "Schedule" , "Month View" , "International Calender" , "Desktop Scoreboard"]

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
        <span>Live Scores</span>
    </div>
    {isOpen && (
        <div className='absolute py-3'>
            <ul className=' bg-white  text-black '>
                {Live.map((score , index) =>(
                    <li key={index}>{score}</li>
                ))}
            </ul>
        </div>
    )}
</div>
  )
}

export default Scores
