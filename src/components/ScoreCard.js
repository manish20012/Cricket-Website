import React, { useEffect, useState } from 'react'
import ScoreBoard from './ScoreBoard';
import { Live_ScoreBoard_API } from '../utilis/constants';

const ScoreCard = () => {
    const [cricketData , setCricketData] = useState([]);

    useEffect(()=>{
          getScoreCard();
    }, [])


      async function getScoreCard() {
        try{
            const data = await fetch(Live_ScoreBoard_API);
            const json = await data.json();
            setCricketData(json.matches);


        } catch(error){
            console.log(error);
        }
         
      }


  return (
    <div className='flex'>
        {cricketData.map((data , id) =>(<ScoreBoard key={id} info={data}/>))}
        
    </div>
  )
}

export default ScoreCard
