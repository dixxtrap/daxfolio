import React from "react";
import TecnoItem from "./tecno_item";

function Tecnologie() {
  return (
    <div className="flex mx-3  pb-5 text-white flex-col">
      <p className="font-bold mt-3 ">Tecnologie</p>
      <TecnoItem title={"Python"} pourcentage={parseInt(79)} />
      <TecnoItem title={"Janva 8+"} pourcentage={parseInt(74)} />

      <TecnoItem title={"JavaScript"} pourcentage={parseInt(63)} />
      <TecnoItem title={"Dart"} pourcentage={parseInt(59)} />

      <TecnoItem title={"Dot Net"} pourcentage={parseInt(56)} />

      <TecnoItem title={"C++"} pourcentage={parseInt(54)} />
    </div>
  );
}

export default Tecnologie;
