import React from "react";
import Drawer from "../drawer";
import Header from "../header";
import About from "./widget/about";
import ContactForm from "./widget/contact";
import HomeBanner from "./widget/home_banner";
import Projects from "./widget/projects";
import Testimony from "./widget/testimony";
function Home() {
  return (
    <div className="flex">
      <div className="hidden lg:flex">
        <Drawer></Drawer>
      </div>
      <div className="h-screen flex-grow   overflow-y-scroll">
        <div className="  myscrolling  ">
          <Header />
          <HomeBanner />
          <About />
          <Projects />
          <Testimony />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
