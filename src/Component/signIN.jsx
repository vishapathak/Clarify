import { useState } from "react";
export default function SignIN() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=" " className=" pr-5">
            {" "}
            Enter email
          </label>
          <input
            name="email"
            type="text"
            placeholder=" enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor=" " className=" pr-5">
            {" "}
            password
          </label>
          <input
            name="password"
            type="text"
            placeholder=" password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" className=" text-center border-black">
          Submit
        </button>
      </form>
    </main>
  );
}
