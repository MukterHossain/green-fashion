import { GiSunflower } from "react-icons/gi";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogIn = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log( email, password)
        console.table( {email, password})
 }
  return (
    <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto shadow my-12 rounded-lg p-5">
      <div className="flex items-center justify-center gap-x-2 ">
        <span className="">
          <GiSunflower className=" text-green-600 hover:text-green-400  hover:animate-spin w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-spacing-2  border-green-600 hover:border-green-400 "></GiSunflower>
        </span>
        <h2 className="uppercase text-lg md:text-2xl xl:text-3xl font-bold">
          <span className="bg-gradient-to-r  from-green-600 to-pink-400 text-transparent bg-clip-text animate-gradient">
            Green Fashion
          </span>
        </h2>
      </div>
      <div>
        <h2 className=" text-lg md:text-xl xl:text-2xl font-bold text-center mt-8 pb-3">Login With</h2>
        <form onSubmit={handleLogIn} className="space-y-3">
          <div>
            <label className="">User email</label> <br />
            <input
              type="email"
              name="email"
              className="w-full bg-gray-50 rounded-md px-3 outline-none  py-2 mt-2 text-sm md:text-lg"
              placeholder="email"
            />
          </div>
          <div>
            <label >Password</label> <br />
            <input
              type="password"
              name="password"
              className="w-full bg-gray-50 rounded-md px-3 outline-none  py-2 mt-2 text-sm md:text-lg"
              placeholder="password"
            />
          </div>
          <div className="text-center flex justify-center hover:bg-green-800 bg-green-700 text-white rounded-md px-3 outline-none  py-2 mt-2 ">
            <input className="w-full font-bold text-sm md:text-lg" type="submit" value="Login" />
          </div>
          <p className="text-center"> Don't have an account? <Link to={'/signup'} className="font-bold text-blue-500 underline">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
