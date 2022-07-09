import React from "react";
import Knowledge from "./widget/connaissance";
import Contact from "./widget/contact";
import DrawerBanner from "./widget/drawer_banner";
import Ide from "./widget/ide";
import Skills from "./widget/skills";
import Tecnologie from "./widget/tecnologie";

function Drawer({ isMobile }) {
  return (
    <div className={"flex   w-[300px] md:w-[330px]   h-screen  bg-slate-900/75 flex-col "}>
      <DrawerBanner></DrawerBanner>

      <div className="w-full  flex-grow my-5  overflow-y-scroll">
        <div className="h-96  divide-y-2  divide-slate-400/10  bg-opacity-20">
          <Contact />
          <Skills />
          <Tecnologie />
<Knowledge/>
          <Ide />
        </div>
      </div>
    </div>
  );
}

export default Drawer;
