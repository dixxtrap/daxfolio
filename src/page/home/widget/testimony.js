import React from "react";
import aboutSvg from "../../../assets/svg/testy.svg";
import TestimonyItem from "./testimony_item";
import fatouka from  "../../../assets/images/fatouka.jpg";
import abd from  "../../../assets/images/abd.jpg";
import aminataNdiaye from  "../../../assets/images/amina.jpg";
import alAmir from  "../../../assets/images/alAmir.jpg";
import smk from  "../../../assets/images/smk.jpg";

const listTesty = [
  {
    name: "Alioune Badara Diouf",
  img:abd,

    testimony:
      "Aute minim minim irure incididunt labore pariatur ut culpa. Elit mollit velit ad dolor culpa. Non aute ut nisi irure nostrud nisi. Aliqua fugiat consequat fugiat irure commodo nisi proident exercitation duis consequat exercitation sunt. Esse voluptate minim deserunt aliqua anim. Consequat officia eu sit aute exercitation proident. Labore sunt labore commodo ullamco magna laboris laborum consequat.",
    job: "Dév back-end et consultant en dév mobile",
    github:"#",
    facebook:"#",
  },
  {
    name: "Fatou Ka",
    img:fatouka,
    testimony:
      "Aute minim minim irure incididunt labore pariatur ut culpa. Elit mollit velit ad dolor culpa. Non aute ut nisi irure nostrud nisi. Aliqua fugiat consequat fugiat irure commodo nisi proident exercitation duis consequat exercitation sunt. Esse voluptate minim deserunt aliqua anim. Consequat officia eu sit aute exercitation proident. Labore sunt labore commodo ullamco magna laboris laborum consequat.",
    job: "Ingenieur en Systeme d'information",
    github:"#",
    facebook:"#",
    linkedIn:"https://www.linkedin.com/in/fatou-ka-5955211ba/"
  },
  {
    name: "Makhfouz Aidara",
  img:alAmir,
    testimony:
      "Aute minim minim irure incididunt labore pariatur ut culpa. Elit mollit velit ad dolor culpa. Non aute ut nisi irure nostrud nisi. Aliqua fugiat consequat fugiat irure commodo nisi proident exercitation duis consequat exercitation sunt. Esse voluptate minim deserunt aliqua anim. Consequat officia eu sit aute exercitation proident. Labore sunt labore commodo ullamco magna laboris laborum consequat.",
    job: "Ingenieur en Systeme d'information",
    github:"#",
    facebook:"#",
  },
  {
    name: "Serigne Malick Kone",
  img:smk,

    testimony:
      "Aute minim minim irure incididunt labore pariatur ut culpa. Elit mollit velit ad dolor culpa. Non aute ut nisi irure nostrud nisi. Aliqua fugiat consequat fugiat irure commodo nisi proident exercitation duis consequat exercitation sunt. Esse voluptate minim deserunt aliqua anim. Consequat officia eu sit aute exercitation proident. Labore sunt labore commodo ullamco magna laboris laborum consequat.",
    job: "Ingenieur en Systeme d'information",
    github:"#",
    facebook:"#",
  },
  {
    name: "Aminata Ndiaye",
  img:aminataNdiaye,

    testimony:
      "Aute minim minim irure incididunt labore pariatur ut culpa. Elit mollit velit ad dolor culpa. Non aute ut nisi irure nostrud nisi. Aliqua fugiat consequat fugiat irure commodo nisi proident exercitation duis consequat exercitation sunt. Esse voluptate minim deserunt aliqua anim. Consequat officia eu sit aute exercitation proident. Labore sunt labore commodo ullamco magna laboris laborum consequat.",
    job: "Ingenieur en Systeme d'information",
    github:"#",
    facebook:"#",
    linkedIn:"https://www.linkedin.com/in/aminata-ndiaye-246476182/"
  },
  {
  img:smk,
  name: "Khadim Gueye",
    testimony:
      "Aute minim minim irure incididunt labore pariatur ut culpa. Elit mollit velit ad dolor culpa. Non aute ut nisi irure nostrud nisi. Aliqua fugiat consequat fugiat irure commodo nisi proident exercitation duis consequat exercitation sunt. Esse voluptate minim deserunt aliqua anim. Consequat officia eu sit aute exercitation proident. Labore sunt labore commodo ullamco magna laboris laborum consequat.",
    job: "Ingenieur en Busness Intelligent",
    github:"#",
    facebook:"#",
  },
];
function Testimony() {
  return (
    <section className="section  ">
      <div className=" flex items-center px-3  text-amber-400">
        <img src={aboutSvg} alt="about" className="h-16 p-2 md:p-4 md:h-36" />
       
        <div className="flex relative justify-center items-center">
         <h2 className="sectionTitle ">Temoignage</h2>
         <span className="sectiionTitleVis from-amber-500">Temoignage</span>
       </div>
      </div>
      <div className=" mt-6 w-full justify-center  items-start  py-2  flex  flex-wrap ">
        {listTesty.map((item) => (
          <TestimonyItem {...item} />
        ))}
      </div>
    </section>
  );
}

export default Testimony;
