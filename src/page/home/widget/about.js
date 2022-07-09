import React from "react";
import im3 from "../../../assets/images/im5.png";
import aboutSvg from "../../../assets/svg/about.svg";
function About() {
  return (
    <section id="about" className="section  ">
      <div className=" flex items-center text-red-400">
        <img src={aboutSvg} alt="about" className="h-16 md:h-36"/>
       
        <div className="flex relative justify-center items-center">
         <h2 className="sectionTitle  ">A propos </h2>
         <span className="sectiionTitleVis from-red-500/30 ">A propos</span>
       </div>
      </div>
      <div className="flex md:flex-row space-x-5 flex-col items-center align-middle justify-center ">
        <div>
          <p className="text-lg md:text-4xl  text-white font-bold ">
            It's DAK'S
          </p>
          <p className="max-w-lg text-white/60">
            Sunt excepteur fugiat Lorem ea in laborum eiusmod sint est consequat
            veniam laboris consectetur non. Reprehenderit proident elit eu elit
            dolore est cillum ipsum ad id eiusmod in nostrud. Tempor sint et
            labore quis exercitation nostrud ad veniam adipisicing amet mollit
            exercitation. Et ex ullamco tempor fugiat dolore dolore cillum
            dolor. Ullamco et Lorem excepteur ipsum sunt velit. Voluptate id
            dolore mollit est. Pariatur aliquip nostrud mollit consequat commodo
            quis voluptate labore Lorem consectetur ullamco adipisicing.
          </p>
        </div>
        <div className=" bg-red-400 rounded-md rounded-tr-[50px]">
          <img src={im3} className="max-w-lg h-96"></img>
        </div>
      </div>
    </section>
  );
}

export default About;
