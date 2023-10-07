import React from "react";
import projetSvg from "../../../assets/svg/projet.svg";
import ProjetItem from "./projet_item";
const listPoject = [
  {
    name: "Aplication de growth hacking ",
    description:
      "Aliquip et irure veniam laborum aliquip adipisicing proident voluptate veniam labore. Do quis commodo aute id duis in elit sunt voluptate mollit cupidatat pariatur veniam culpa. Dolor occaecat deserunt pariatur est sunt eiusmod nulla nisi eiusmod incididunt cillum anim voluptate nisi. Et ipsum ad minim minim.",
    github: "",
    tecno: ["Fluter", "Dart"],
  },
  {
    name: "Facebook Clone ",
    description:
      "Aliquip et irure veniam laborum aliquip adipisicing proident voluptate veniam labore. Do quis commodo aute id duis in elit sunt voluptate mollit cupidatat pariatur veniam culpa. Dolor occaecat deserunt pariatur est sunt eiusmod nulla nisi eiusmod incididunt cillum anim voluptate nisi. Et ipsum ad minim minim.",
    github: "",
    tecno: ["Fluter", "Dart"],
  },
  {
    name: "Spotify Clone ",
    description:
      "Aliquip et irure veniam laborum aliquip adipisicing proident voluptate veniam labore. Do quis commodo aute id duis in elit sunt voluptate mollit cupidatat pariatur veniam culpa. Dolor occaecat deserunt pariatur est sunt eiusmod nulla nisi eiusmod incididunt cillum anim voluptate nisi. Et ipsum ad minim minim.",
    github: "",
    tecno: ["Fluter,Figma", "Dartfigma"],
  },
  {
    name: "Application de elearning",
    description:
      "Aliquip et irure veniam laborum aliquip adipisicing proident voluptate veniam labore. Do quis commodo aute id duis in elit sunt voluptate mollit cupidatat pariatur veniam culpa. Dolor occaecat deserunt pariatur est sunt eiusmod nulla nisi eiusmod incididunt cillum anim voluptate nisi. Et ipsum ad minim minim.",

    github: "",
    tecno: ["ReactJs , Material Ui,Figma", "NodeJS,Firebase"],
  },
  {
    name: "Portfolio Flutter",
    description:
      "Aliquip et irure veniam laborum aliquip adipisicing proident voluptate veniam labore. Do quis commodo aute id duis in elit sunt voluptate mollit cupidatat pariatur veniam culpa. Dolor occaecat deserunt pariatur est sunt eiusmod nulla nisi eiusmod incididunt cillum anim voluptate nisi. Et ipsum ad minim minim.",

    github: "",
    tecno: ["Fluter,figma", "dart ,"],
  },
  {
    name: "Spotify clone",
    description:
      "Aliquip et irure veniam laborum aliquip adipisicing proident voluptate veniam labore. Do quis commodo aute id duis in elit sunt voluptate mollit cupidatat pariatur veniam culpa. Dolor occaecat deserunt pariatur est sunt eiusmod nulla nisi eiusmod incididunt cillum anim voluptate nisi. Et ipsum ad minim minim.",

    github: "",
    tecno: ["Fluter, Figma", "Dart , APi Spotify "],
  },
];
function Projects() {
  return (
    <section id="project" className="section  ">
      <div className=" flex items-center  text-sky-400">
        <img src={projetSvg} alt="about" className="h-16 md:h-36" />
      
        <div className="flex relative justify-center items-center">
         <h2 className="sectionTitle ">Projet</h2>
         <span className="sectiionTitleVis from-sky-500">Projet</span>
       </div>
      </div>
      <div className="flex py-6 md:flex-row gap-4 gap-y-12 flex-wrap  flex-col items-center align-middle  justify-center ">
        {listPoject.map((item) => (
          <ProjetItem {...item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
