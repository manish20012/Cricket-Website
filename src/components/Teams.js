import React, { useState } from 'react'


const Teams = () => {

    const team =["India" , "Australia" , "England", "newZealand","India" , "Australia" , "England", "newZealand", "India" , "Australia" , "England", "newZealand"];
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
            <span>Teams</span>
        </div>
        {isOpen && (
            <div className='absolute py-3'>
                <ul className=' bg-white  text-black '>
                    {team.map((team , index) =>(
                        <li key={index}>{team}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default Teams
