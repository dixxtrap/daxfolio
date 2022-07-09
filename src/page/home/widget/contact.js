import React from "react";
import contactSVG from "../../../assets/svg/contact.svg";
import emailjs from "emailjs-com";

const initval = { name: "", email: "", mes: "" };
const ContactInputs = () => {
  const [{ name, email, mes }, setstate] = React.useState(initval);
  const onSubmit = async (e) => {
    e.preventDefault();
    await emailjs
      .send(
        "DaxFolioReact2022",
        "template_u1euttv",
        { name: name, email: email, message: mes },
        "lPQ-OgdvWoQ_mWa5w"
      )
      .then((val) => {
        if (val.status === 200) {
          setstate({ ...initval });

          console.log("SUCCESS", name, email, mes);
        }
      })
      .catch(console.log("error"));
  };
  const handleFormState = (e) => {
    const val = e.target.value;
    const n = e.target.name;
    const valnam = e.target;

    setstate((prev) => {
      return { ...prev, [n]: val };
    });
    console.log(name);
  };
  return (
    <form
      onSubmit={onSubmit}
      className=" my-8 md:px-12  flex flex-col max-w-3xl mx-4  justify-self-center self-center justify-center"
    >
      <div className="flex flex-wrap">
        <div className="flex flex-col mr-6">
          <span className="my-2 text-white">Email</span>
          <div class="relative ... flex items-center   text-white">
            <div class="absolute px-2  md:p-2 pointer-events-none ...">
              <svg
                class=" text-slate-400 h-6 w-6 md:h-8 md:w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Search"
              name="email"
              value={email}
              class="contactInput w-80 md:w-72 inputWithIcon"
              onChange={handleFormState}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="my-2 text-white">Nom </span>
          <div class="relative ... flex items-center   text-white">
            <div class="absolute px-2  md:p-2 pointer-events-none ...">
              <svg
                class=" text-slate-400 h-6 w-6 md:h-8 md:w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              name="name"
              value={name}
              onChange={handleFormState}
              class="contactInput w-80 md:w-72  inputWithIcon"
            />
          </div>
        </div>
      </div>
      <div className="my-6  flex flex-col">
        <span className="my-2 text-white">Message</span>
        <textarea
          placeholder="Donnez votre message"
          name="mes"
          value={mes}
          onChange={handleFormState}
          className="bg-transparent min-h-[200px] resize-y max-w-2xl contactInput   p-2  w-full"
        />
      </div>
      <button
        type="submit" disabled={email===""||name===""||mes===""}
        className="py-2 ring  disabled:from-transparent disabled:bg-slate-600/70 disabled:hover:bg-slate-600/70 bg-gradient-to-br rounded-2xl from-green-500 transition-all duration-300  hover:shadow-lg hover:shadow-green-300 shadow-md shadow-green-200/30   ring-green-200/75  hover:bg-green-500 text-white font-bold"
      >
        Envoyer
      </button>
    </form>
  );
};
function ContactForm() {
  return (
    <section id="temoignage" className="section   ">
      <div className=" flex items-center px-3  text-green-400">
        <img src={contactSVG} alt="about" className="h-16 md:h-28" />
        <div className="flex relative justify-center items-center">
          <h2 className="sectionTitle ">Contact</h2>
          <span className="sectiionTitleVis from-green-500">Contact</span>
        </div>
      </div>
      <ContactInputs />
    </section>
  );
}

export default ContactForm;
