import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registeration() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const[confirmpass,setConfirmpass]= useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, fname, lname, password,confirmpass);
    setEmail("");
    setFname("");
    setLname("");
    setPassword("");
    setConfirmpass("");
  }
  return (
    <main className=" flex gap-4 m-4">
      <section className="w-[60%] h-screen p-10 justify content-center text-xl">
         <h4 className="text-center text-6xl text-black pb-16">Create Account</h4>
        <form onSubmit={handleSubmit} className= "min-w-full bg-black p-8">
          

          <div className=" text-center flex ">
            <label htmlFor=" " className=" block mb-2 text-white ">
              {" "}
                Enter first name
            </label>
            <input
              name="fname"
              type="text"
              placeholder=" enter first name"
              value={fname}
              onChange={(event) => setFname(event.target.value)}
              className="border border-white p-2"
            ></input>
          {/* </div>

          <div className="text-center"> */}
            <label htmlFor=" " className="lg:block mb-2 text-white px-4">
              {" "}
              Enter last name
            </label>
            <input
              name="lname"
              type="text"
              placeholder=" enter last tname"
              value={lname}
              onChange={(event) => setLname(event.target.value)}
              className=" border p-2"
            ></input>
          </div>
          <div className="text-center">
            <label htmlFor=" " className="block mb-2 text-white">
              {" "}
              Enter your email
            </label>
            <input
              name="email"
              type="text"
              placeholder=" enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            className="border p-2"
            ></input>
          </div>

          <div className="text-center">
            <label htmlFor="" className=" block mb-2 text-white">
              {" "}
              Enter password
            </label >
            <input
              name="password"
              type="text"
              placeholder=" password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2"
            ></input>
          </div>
          <div className="text-center">
            <label htmlFor="" className=" block mb-2 text-white">
              {" "}
              Confirm pasword
            </label >
            <input
              name="password"
              type="text"
              placeholder=" password"
              value={password}
              onChange={(e) => setConfirmpass(e.target.value)}
              className="border p-2"
            ></input>
          </div>
          <div className="text-center pt-4 ">
          <button 
            type="submit"
            className=" border border-white  text-white  hover:bg-white hover:text-black px-2"
          >
            Register </button>
            <Link to="/signIN" className="pl-5" >
              <button className="text-white border border-white  hover:bg-white hover:text-black px-2">
                sign in
              </button>
            </Link>
            <p className="block text-white " > Already have an account?
              
              <Link to="/signin" className="text-blue-500 underline ml-1">
                click here
              </Link>
              for sign in 
            </p>
          </div>
          
        </form>
      </section>

      <section className="w-[40%] h-screen p-10">
        <img src="/Image/signin.png" alt="" />
      </section>
    </main>
  );
}
