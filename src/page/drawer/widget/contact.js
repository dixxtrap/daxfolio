import React from "react";

function ContactItem({ label, describe }) {
  return (
    <div className="flex ml-3  justify-between">
      <p className="text-white/90 font-semibold">{label}</p>
      <p className="text-white font-thin">{describe}</p>
    </div>
  );
}
function Contact() {
  return (
    <div className="flex mx-3 pb-5 space-y-2  text-white flex-col">
      <div className="flex  items-center text-center content-center ">
    
        <p className="font-bold mt-3 text-center  ">Contact</p>
      </div>
      <ContactItem label={"Pays"} describe="Sénégal" />
      <ContactItem label={"Ville"} describe="Pikine" />
      <ContactItem label={"Email"} describe="Djiga2015@gmail.com" />

      <ContactItem label={"Telephone"} describe="77 237 16 68" />
    </div>
  );
}

export default Contact;
