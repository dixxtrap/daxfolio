import React from "react";
function SkillsItem({label, pourcentage}){
        return  <div className="flex justify-center flex-col items-center ">
        <div style={{ "--width":`${pourcentage}%` }} className="circularProgress">
          <span className=" absolute font-bold  justify-self-center self-center text-center w-full   z-[12] text-white">
            {pourcentage+"%"}
        
          </span>
        </div>
        <span className="font-bold text-slate-50/90">{label}</span>
      </div>
}
function Skills() {
  return (
    <div className="flex mx-3  pb-5 text-white flex-col">
      <p className="font-bold my-3 ">Skills</p>
      <div className="flex justify-center space-x-4  ">
        <SkillsItem label={"React"} pourcentage={80}/>
        <SkillsItem label={"Flutter"} pourcentage={90}/>
        <SkillsItem label={"Angular"} pourcentage={74}/>

      </div>
    </div>
  );
}

export default Skills;
