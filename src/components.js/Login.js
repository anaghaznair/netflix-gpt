import { useRef, useState } from "react";
import Header from "./Header";
import validateInputField from "../utils.js/validate";
import { netflixLogo, profileLogo } from "../utils.js/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils.js/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils.js/userSlice";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignIn = function () {
    setIsSignedIn(!isSignedIn);
  };
  const handleClickLogin = () => {
    const message = validateInputField(
      email.current.value,
      password.current.value,
      name.current?.value || "",
      !isSignedIn,
    );
    setErrorMessage(message);

    if (message) return;

    //SIGNUP/SIGNIN LOGIC
    if (!isSignedIn) {
      //SIGNUP
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: profileLogo,
          })
            .then(() => {
              // Profile updated!
              // ...
              const currentUser = auth.currentUser;
              dispatch(
                addUser({
                  uid: currentUser.uid,
                  email: currentUser.email,
                  displayName: currentUser.displayName,
                  photoURL: currentUser.photoURL,
                }),
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              const errorCode = error.code;
              setErrorMessage(errorCode);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    } else {
      //SIGNIN

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  return (
    <div className="relative">
      <Header />
      <div>
        <img src={netflixLogo} alt="BG-IMAGE" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.9)_100%)]"></div>
      {errorMessage === "auth/invalid-credential" && (
        <div className="absolute left-[29%] top-[18px] w-5/12 bg-[#1f3f6e] text-white flex items-start gap-3 p-4 rounded-md max-w-2xl">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#1f3f6e] font-bold text-sm">
            i
          </div>

          <p className="text-sm leading-relaxed">
            Enter your email address to get started or check your mobile number
            and try again.
          </p>
        </div>
      )}
      <div className="absolute mt-20 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-16 py-12 w-5/12 bg-opacity-80">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
          <p className="text-3xl text-white font-bold mb-7">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </p>
          {!isSignedIn && (
            <input
              ref={name}
              className="p-3 py-6 mt-4 bg-transparent w-full bg-black/60 border border-gray-500 rounded px-4 py-3 text-white outline-none"
              type="text"
              placeholder="Full Name"
            />
          )}
          {errorMessage?.includes("Name") && (
            <p className="text-red-600 text-[13px] font-semibold">
              {errorMessage}
            </p>
          )}
          <input
            ref={email}
            className={`p-3 mt-4 bg-transparent  w-full bg-black/60 border  rounded px-4 py-3 text-white outline-none ${
              errorMessage?.includes("email")
                ? "border-red-500"
                : "border-grey-500"
            }`}
            type="text"
            placeholder="Email"
          />
          {errorMessage?.includes("email") && (
            <p className="text-red-600 text-[13px] font-semibold">
              {errorMessage}
            </p>
          )}

          <input
            ref={password}
            className={`p-3 py-6 mt-4 bg-transparent w-full bg-black/60 border  rounded px-4 py-3 text-white outline-none ${
              errorMessage?.includes("password")
                ? "border-red-500"
                : "border-grey-500"
            }`}
            type="password"
            placeholder="password"
          />
          {errorMessage?.includes("password") && (
            <p className="text-red-600 text-[13px] font-semibold">
              {errorMessage}
            </p>
          )}
          <button
            className="bg-red-600 mt-4 py-[10px] px-4 rounded-sm text-white font-medium"
            onClick={handleClickLogin}
          >
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white mt-6 cursor-pointer" onClick={handleSignIn}>
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
