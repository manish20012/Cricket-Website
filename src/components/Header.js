import React  from 'react'
import Teams from './Teams'
import Ipl2024 from './Ipl2024'
import Scores from './Scores'
import Series from './Series'
import Stats from './Stats'
import ScoreCard from './ScoreCard'


const Header = () => {


  return (
    <>
    <div className='h-48 w-full bg-sky-600 text-white gird grid-flow-col'>
      <div className=''>
      <ul>
              <li>Matches</li>
              <li><ScoreCard/></li>
             </ul>
      </div>
             
    </div>
    <div className="grid grid-flow-col  bg-sky-500 h-12 py-3">
      <div className=" ">
        <h1 className="font-bold  text-center text-white">Cricket Game </h1>
        </div>
      <div className="col-span-1  text-white cursor-pointer">
        <ul className="flex space-x-6">
          <li><Scores /></li>
          <li><Series /></li>
          <li><Teams /></li>
          <li><Stats /></li>
          <li><Ipl2024 /></li>
        </ul>
        
        </div>

        <div className="col-span-1 space-x-4 text-white">
          <button>Login </button>
          <button>Theme</button>
        </div>
    </div>
    </>
  )
}

export default Header
