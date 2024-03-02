import { useState } from "react";

export default function MenuComponent() {

  const [burgerMenu, setBurgerMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(24)


    return (
        <div className={` z-40 flex flex-shrink-0 w-full h-16 px-5 bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 shadow-md`}>
          <div className="w-full md:w-[25%] lg:w-[18%] flex items-center justify-center">
            <span className="ml-2 text-indigo-500 text-5xl md:text-4xl font-semibold herr-von">
               Hackaton
            </span>
          </div>
          <div className="hidden md:w-full md:flex md:items-center md:justify-end md:pr-14 gap-10">
            <a  href="#" className="text-base font-semibold text-indigo-500">Home</a>
            <a  href="#" className="text-base font-semibold text-gray-600 hover:text-indigo-500">Gallery</a>
            <a  href="#" className="text-base font-semibold text-gray-600 hover:text-indigo-500">Social Networks</a>
            <a  href="#" className="text-base font-semibold text-gray-600 hover:text-indigo-500">Newsletters</a>
          </div>
          <div className="flex items-center justify-end md:justify-center md:hidden  w-[15%] md:w-[7.5%] ">
              <div
                onClick={() => setBurgerMenu(!burgerMenu)}
                className={`burger ${burgerMenu && 'perform'} group w-10 h-[30px] relative flex flex-col gap-[6.75px] items-center justify-center`}>
                <span className="rounded bg-indigo-500"></span>
                <span className={`rounded bg-indigo-500 ${burgerMenu && 'rotate-45'}`}></span>
                <span className={`rounded bg-indigo-500 ${burgerMenu && '-rotate-45'}`}></span>
                {/* <span className="absolute opacity-0 transition-opacity group-hover:opacity-100 w-7 transform group-hover:rotate-45 h-[3.5px] rounded bg-indigo-500"></span> */}
                {/* <span className="absolute opacity-0 transition-opacity group-hover:opacity-100 w-7 transform group-hover:-rotate-45  h-[3.5px] rounded bg-indigo-500"></span> */}
              </div>
          </div>

          {/* <div className="absolute right-0 bottom-0 left-0 top-0 backdrop-blur-sm bg-white/30">

          </div> */}

          {
            burgerMenu &&
            (
              <div className={` z-50 absolute flex flex-col items-center justify-center gap-5 right-0 bottom-0 left-0 top-20 backdrop-blur-sm bg-white/50`}>
                <a  href="#" className="text-3xl font-semibold text-indigo-500">Home</a>
                <a  href="#" className="text-3xl font-semibold text-gray-600 hover:text-indigo-500">Gallery</a>
                <a  href="#" className="text-3xl font-semibold text-gray-600 hover:text-indigo-500">Social Networks</a>
                <a  href="#" className="text-3xl font-semibold text-gray-600 hover:text-indigo-500">Newsletters</a>
              </div>
            )
          }
	  </div>
    );
}
