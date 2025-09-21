import { useState } from "react";

export default function Registeration() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email,fname, lname,password);
    setEmail("");
    setFname("");
    setLname("");
    setPassword("");
  }
  return (
    <main className=" flex gap-4 m-4">
      <section className="w-[60%] h-screen bg-red-400 p-10 justify content-center text-xl">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <label htmlFor=" " className="pr-3">
              {" "}
              Enter your email
            </label>
            <input
              name="email"
              type="text"
              placeholder=" enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="text-center">
            <label htmlFor=" " className="pr-3">
              {" "}
              Enter first name
            </label>
            <input
              name="fname"
              type="text"
              placeholder=" enter first name"
              value={fname}
              onChange={(event) => setFname(event.target.value)}
            ></input>
          </div>

          <div className="text-center ">
            <label htmlFor=" " className="pr-3">
              {" "}
              Enter last name
            </label>
            <input
              name="lname"
              type="text"
              placeholder=" enter last tname"
              value={lname}
              onChange={(event) => setLname(event.target.value)}
            ></input>
          </div>

          <div className="text-center">
            <label htmlFor="" className=" pr-3">
              {" "}
              Enter password
            </label>
            <input
              name="password"
              type="text"
              placeholder=" password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button
            type="submit"
            className="text-center w-full border-white rounded-lg "
          >
            Submit
          </button>
        </form>
      </section>

      <section className="w-[40%] h-screen bg-green-400 p-10">
        <img src="/Image/signin.png" alt="" />
      </section>
    </main>
  );
}
