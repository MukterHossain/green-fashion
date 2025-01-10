import { GiSunflower } from "react-icons/gi";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
        <div className="flex items-center gap-x-2 ">
            <Link to={'/'} className=" ">
            <span className=""><GiSunflower   className=" text-green-600 hover:text-green-400  hover:animate-spin w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-spacing-2  border-green-600 hover:border-green-400 "></GiSunflower ></span>
            </Link>
            <h2 className="uppercase text-lg md:text-2xl xl:text-3xl font-bold"> <span className="bg-gradient-to-r  from-green-600 to-pink-400 text-transparent bg-clip-text animate-gradient">Green Fashion</span></h2>
          </div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
