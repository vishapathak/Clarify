import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registeration() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, fname, lname, password);
    setEmail("");
    setFname("");
    setLname("");
    setPassword("");
  }
  return (
    <main className=" flex gap-4 m-4">
      <section className="w-[60%] h-screen p-10 justify content-center text-xl">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <label htmlFor=" " className="block mb-2">
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
            <label htmlFor=" " className=" block mb-2">
              {" "}
              Enter first name
            </label>
            <input
              name="fname"
              type="text"
              placeholder=" enter first name"
              value={fname}
              onChange={(event) => setFname(event.target.value)}
              className="border p-2"
            ></input>
          </div>

          <div className="text-center">
            <label htmlFor=" " className=" block mb-2">
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
            <label htmlFor="" className=" block mb-2">
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
          <div className="text-center pt-4">
          <button 
            type="submit"
            className=" border border-black pr-3 text-black  hover:bg-black hover:text-white"
          >
            Submit </button>
            <Link to="/sigIn">
              <button className="text-black border border-black pl-3 hover:bg-black hover:text-white ">
                sign in
              </button>
            </Link>
            <p className="block "> Already have an account?
              
              <Link to="/signIN" className="text-blue-500 underline ml-1">
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
