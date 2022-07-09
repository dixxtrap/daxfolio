import React from "react";
import Typewriter from "typewriter-effect";
function HomeBanner() {
  return (
    <div className="w-full      banner ">
      <div className="w-full h-full pl-6 flex bg-gradient-to-r from-slate-900 to-transparent   py-5 flex-col items-start justify-center      ">
        <h2 className="text-5xl font-bold text-white"> Hi I am</h2>
      
        <h2 className="text-3xl md:text-6xl font-black my-4  text-white">  <Typewriter
        
          options={{
            strings: [' Djiga Salane', ' Full-Stack Developper'],
            autoStart: true,
            loop: true,
          }}
         
        /></h2>
      
        <h2 className="text-lg md:flex hidden  max-w-lg my-5  text-ellipsis leading-snug text-white">
          Je suis ingénieur en système d'information repartie qui est compétent
          dans le développement des solutions informatiques en apportant des
          applications basées sur les technologies du web et des réseaux
        </h2>
      </div>
    </div>
  );
}

export default HomeBanner;
