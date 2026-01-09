import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const handleSignIn = function () {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg"
          alt="BG-IMAGE"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.9)_100%)]"></div>
      <div className="absolute mt-20 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-16 py-12 w-5/12 bg-opacity-80">
        <form className="flex flex-col">
          <p className="text-3xl text-white font-bold mb-7">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </p>
          {!isSignedIn && (
            <input
              className="p-3 py-6 mt-4 bg-transparent w-full bg-black/60 border border-gray-500 rounded px-4 py-3 text-white outline-none"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="p-3 mt-4 bg-transparent  w-full bg-black/60 border border-gray-500 rounded px-4 py-3 text-white outline-none "
            type="text"
            placeholder="Email"
          />
          <input
            className="p-3 py-6 mt-4 bg-transparent w-full bg-black/60 border border-gray-500 rounded px-4 py-3 text-white outline-none"
            type="password"
            placeholder="password"
          />
          <button className="bg-red-600 mt-4 py-[10px] px-4 rounded-sm text-white font-medium">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white mt-6" onClick={handleSignIn}>
            {isSignedIn
              ? "New To Netflex?Sign Up Now"
              : "Already Registered.Please Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
