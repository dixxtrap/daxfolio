import React from "react";
import sunImg from "../../assets/svg/sun.svg";
import Drawer from "../drawer";
function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const LinearNav = () => (
    <div className="md:flex space-x-4 flex-grow   hidden    items-center justify-center justify-self-center justify-items-center      ">
      <a href="." className="navItem ">
        Home
      </a>
      <a href="#about" className="navItem ">
        about
      </a>
      <a href="#projet" className="navItem ">
        Project
      </a>
      
      <a href="#temoignage" className="navItem ">
        Contact
      </a>
    </div>
  );
  const MobileDrawer = () => (
    <div className={openDrawer===true?"drawerOpen ":"drawerClose " } >
      <Drawer />
     
    </div>
  );
  const Menu = () => (
    <button
      onClick={()=>{ console.log("fonction drawer");setOpenDrawer(!openDrawer)}}
      className="text-white mx-2 hover:animate-bounce lg:hidden z-20"
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-text-paragraph"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  );
  const Theme = () => (
    <div className="flex space-x-4       items-center   mx-5     ">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke-fill="currentColor"
          width="20"
          height="20"
          class="bi fill-white   bi-sun-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </svg>
      </button>
    </div>
  );
  return (
    <header className="flex z-50   h-[40px] sticky top-0 w-full text-white bg-slate-800 bg-opacity-50  backdrop-blur-xl  ">
      <Menu />
      <MobileDrawer />
      <LinearNav />
      <div className="flex-grow" />
      <Theme />
    </header>
  );
}

export default Header;
