import React from "react";

function TecnoItem({title,pourcentage}) {
      
    
        
  return (

    <div className="flex flex-col   my-2">
      <div className="flex  justify-between">
        <p className="font-thin text-white ">{title}</p>
        <span  className="contentItem font-bold ">{pourcentage}%</span>
      </div>
      <div  className="relative   h-1 w-full bg-slate-400 bg-opacity-5 rounded-lg">
        <div style={{"--width":pourcentage+"%"}} className=" h-[100%] progressItem rounded-lg bg-red-400"></div>
      </div>
    </div>
  );
}

export default TecnoItem;
