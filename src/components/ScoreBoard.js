import Coursel from "./Coursel";

const ScoreBoard = ({info}) => {
    const{teams , ground , series} = info;

  return (
    <Coursel >
  <div className="p-2 m-2 h-[134px] relative w-[288px] shadow-lg bg-white flex flex-row text-black rounded-lg">
    
       <div className=" truncate">
        <ul className="  flex text-xs font-medium justify-items-center leading-5 space-x-2 ">
          <li>{info.status}</li>
          <li>{info.title}</li>
          <li>{series.alternateName}</li>
          <li>{ground.smallName}</li>
        </ul>
        
        <div className="px-5 m-2 text-sm  items-center">
          <div className="space-x-36">
            <span>{teams[0].team.abbreviation}</span>
            <span className="">{teams[0].score}</span>
          </div>
        </div>

          <div className="px-5 m-2">
            <div className=" ">
            <span className="font-medium">{teams[1].team.abbreviation}</span>
            <span className="text-xs">({teams[1].scoreInfo})
            <span className="font-medium text-sm">{teams[1].score}</span>
            </span>
            </div>
            
          </div>

          <div className="text-xs font-medium">
            <ul>
              <li>{info.statusText}</li>
            </ul>
          </div>
          
          <hr/>
          <div>
           <ul>
            <li></li>
           </ul>
          </div>
         
        
       </div>
       
      </div>
  </Coursel>
  )
}

export default ScoreBoard
