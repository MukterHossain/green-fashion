import { Link, NavLink } from "react-router-dom";
import { GiSunflower } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [barOpen, setBarOpen] = useState(false)

  const open = () =>{
    setBarOpen(!barOpen)
  }



  const navLink = [
      <>
        <NavLink to={'/'} className={({isActive}) => isActive ? ' mx-2 px-3 py-1 text-green-600 font-medium' : ' text-gray-600  mx-2 px-3 py-1 font-medium'}>Home</NavLink>
        <NavLink to={'/project'} className={({isActive}) => isActive ? ' text-green-600 mx-2 px-3 py-1 font-medium' : 'text-gray-800  mx-2 px-3 py-1 font-medium'}>Our Project</NavLink>
        <NavLink to={'/our-team'} className={({isActive}) => isActive ? 'mx-2 px-3 text-green-600 py-1 font-medium' : 'text-gray-800 mx-2 px-3 font-medium py-1'}>Our Team</NavLink>
        <NavLink to={'/contact'} className={({isActive}) => isActive ? 'px-3 mx-2 py-1 text-green-600 font-medium' : 'text-gray-800 mx-2 px-3 py-1 font-medium'}>Contact Us</NavLink>
    </>
  ]

  return (
    <div>
      <header className="py-4 px-2 dark:bg-gray-100 dark:text-gray-800 shadow-xl fixed w-full border border-gray-300">
        <div className="max-w-7xl flex justify-between items-center h-12 mx-auto">
        <button className="p-4 lg:hidden">
             <FaBars></FaBars>
           </button>
          <div className="flex items-center gap-x-2">
            <Link to={'/'} className=" ">
            <span className=""><GiSunflower   className=" text-green-600 hover:text-green-400  hover:animate-spin w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-spacing-2  border-green-600 hover:border-green-400 "></GiSunflower ></span>
            </Link>
            <h2 className="uppercase text-lg md:text-2xl xl:text-3xl font-bold"> <span className="bg-gradient-to-r  from-green-600 to-pink-400 text-transparent bg-clip-text animate-gradient">Green Fashion</span></h2>
          </div>
          <ul className="items-stretch hidden space-x-3 lg:flex">
          {navLink}
          </ul>
          <div className="items-center flex-shrink-0  lg:flex">
            <Link to={'/login'}><button className="self-center  rounded">Log in</button> </Link>
            
            <div>
              <img className="w-12 h-12" src="https://i.ibb.co.com/k4Fy93r/Mlogo5.png" alt="" />
             </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
