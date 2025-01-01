import { Link } from "react-router-dom";
import { GiSunflower } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800 shadow-xl fixed w-full border border-gray-300">
        <div className="container flex justify-between items-center h-16 mx-auto">
          <div className="flex items-center gap-x-2">
            <Link to={'/'} className=" ">
            <span className=""><GiSunflower   className=" text-green-600 hover:text-green-400  hover:animate-spin w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-spacing-2  border-green-600 hover:border-green-400 "></GiSunflower ></span>
            </Link>
            <h2 className="uppercase text-lg md:text-2xl xl:text-3xl font-bold"> <span className="bg-gradient-to-r  from-green-600 to-pink-400 text-transparent bg-clip-text animate-gradient">Green Fashion</span></h2>
          </div>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
              >
                Link
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded">Sign in</button>
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
              Sign up
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
