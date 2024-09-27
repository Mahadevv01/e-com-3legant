import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkMsg, setCheckMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      if (storedUserData) {
        if (storedUserData.email === email && storedUserData.password === password) {
          storedUserData.isAuth = true;
          localStorage.setItem("userData", JSON.stringify(storedUserData));
          setIsAuth(true);
          navigate("/");
        } else {
          setCheckMsg("Invalid Email or Password");
        }
      } else {
        setCheckMsg("No user found, please register first.");
      }
    } else {
      setCheckMsg("Both fields are required.");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col md:flex-row h-[600px] items-center justify-center mt-10">
      <img src="Paste image.svg" alt="Sign in illustration" className="h-[500px]" />
      <div className="w-[400px] h-[500px] p-10">
        <div className="w-full flex items-start flex-col">
          <p className="text-3xl pt-10">Sign in</p>
          <p className="py-5">
            Don’t have an account yet?{" "}
            <strong className="text-[#38CB89] font-semibold">
              <Link to="/signup">Sign Up</Link>
            </strong>
          </p>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <input
              className="p-2 outline-none border-b-2"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="p-2 outline-none border-b-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-[#141718] text-white p-2 rounded-md" type="submit">
              Sign In
            </button>
          </form>
          <p className="py-4">{checkMsg}</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
