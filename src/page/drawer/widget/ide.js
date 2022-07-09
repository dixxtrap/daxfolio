import React from "react";
import vsStudio from "../../../assets/images/vstudio.png";
import vscode from "../../../assets/images/vscode.png";
import android from "../../../assets/images/android.png";
import figma from "../../../assets/images/figma.png";

function Ide() {
  return (
    <div className="flex mx-3  pb-5 text-white flex-col">
      <p className="font-bold mt-3 ">Environnements</p>
      <div className="flex space-x-2 h-16 ">
        <img alt="image"  className="h-14" src={vsStudio}/>
       
        <img alt="image"  className="h-14" src={vscode}/>
         <img alt="image"  className="h-14" src={android}/>
         <img alt="image"  className="h-14" src={figma}/>
      </div>
      
        <button className="bg-gradient-to-tr border-dotted border-2 hover:shadow-md hover:shadow-red-200/60 hover:bg-red-600 transition-all duration-500 border-red-300 rounded-xl font-bold  from-red-500 px-5 py-3">Circulum vitae</button>
    
    </div>
  );
}

export default Ide;
