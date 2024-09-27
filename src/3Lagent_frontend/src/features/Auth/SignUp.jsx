import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkMsg, setCheckMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      username,
      password,
      isAuth: false,
    };

    if (name && username && email && password) {
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("User data stored in localStorage:", userData);
      setCheckMsg("Registration successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setCheckMsg("All fields are required.");
    }
    setName("");
    setEmail("");
    setUserName("");
    setPassword("");
    setIsChecked(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-[600px] items-center justify-center mt-10">
      <img src="Paste image.svg" alt="Sign in illustration" className="h-[500px]" />
      <div className="w-[400px] h-[500px] p-10">
        <div className="w-full flex items-start flex-col">
          <p className="text-3xl ">Sign Up</p>
          <p className="py-5">
            Already have an account?{" "}
            <strong className="text-[#38CB89]">
              <Link to="/">Sign In</Link>
            </strong>
          </p>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <input
              className="p-2 outline-none border-b-2"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-2 outline-none border-b-2"
              type="text"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
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
            <div className="flex items-center justify-between w-full">
              <div>
                <input
                  id="check"
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="check" className="ml-2">
                  I agree with Privacy Policy and Terms of Use
                </label>
              </div>
            </div>
            <button className="bg-[#141718] text-white p-2 rounded-md" type="submit">
              Sign Up
            </button>
            <p className="py-3 text-center">{checkMsg}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
