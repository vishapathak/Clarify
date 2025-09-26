import { useState } from "react";
import { Link } from "react-router-dom";
export default function SignIN() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <main className="flex">
      <section className="w-[60%] h-screen p-10 justify content-center text-xl text-white">
        <form onSubmit={handleSubmit} className="bg-black">
          <div className=" text-center">
            <label htmlFor=" " className=" block mb-3">
              {" "}
              Enter email
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
          <div className=" text-center">
            <label htmlFor=" " className="block mb-2">
              {" "}
              password
            </label>
            <input
              name="password"
              type="text"
              placeholder=" password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" border p-2"
            ></input>
          </div>
          <div className="text-center py-3">
          <button type="submit" className=" text-center border border-white  hover:bg-white hover:text-black px-2 ">
            Login
          </button>
           <Link to="/register">
          <button className="  border border-white ml-5  hover:bg-white hover:text-black px-2"> 
            Back
            </button>
            </Link>
            <p className="block text-white " > Don't have an account?
              
              <Link to="/register" className="text-blue-500 underline ml-1">
                click here
              </Link>
              to create one
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
