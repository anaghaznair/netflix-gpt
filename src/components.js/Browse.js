import { useState } from "react";
import Header from "./Header";
import { auth } from "../utils.js/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const [clickIcon, setClickIcon] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleClickIcon = () => {
    setClickIcon(!clickIcon);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <header class="fixed top-0 w-full h-[68px]  flex items-center px-10 z-50">
        <img
          className="w-36 "
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />

        <ul class="flex space-x-5 text-sm text-gray-300  flex-1">
          <li>
            <a href="/browse" class="text-white font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="/browse/genre/83" class="hover:text-white">
              Shows
            </a>
          </li>
          <li>
            <a href="/browse/genre/34399" class="hover:text-white">
              Movies
            </a>
          </li>
          <li>
            <a href="/games" class="hover:text-white">
              Games
            </a>
          </li>
          <li>
            <a href="/latest" class="hover:text-white">
              New & Popular
            </a>
          </li>
          <li>
            <a href="/browse/my-list" class="hover:text-white">
              My List
            </a>
          </li>
          <li>
            <a href="/browse/original-audio" class="hover:text-white">
              Browse by Languages
            </a>
          </li>
        </ul>

        <div class="flex items-center space-x-5 text-white">
          <button class="hover:text-gray-300">🔍</button>

          <button class="hover:text-gray-300">🔔</button>

          <div
            className="flex items-center gap-1 relative"
            onClick={handleClickIcon}
          >
            <img
              src={user?.photoURL}
              class="w-8 h-8 rounded cursor-pointer"
              alt="profile"
            />
            <svg class="w-3 h-3 mt-1" fill="000" viewBox="0 0 20 20">
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.1l3.71-3.87a.75.75 0 111.08 1.04l-4.25 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
            </svg>
          </div>
          {clickIcon && (
            <div class="relative">
              <div class="absolute right-0 top-12 w-64 bg-black/95 text-white rounded-md shadow-2xl border border-gray-800 overflow-hidden">
                <div class="p-3 space-y-3">
                  <div class="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded cursor-pointer">
                    <img class="w-7 h-7 rounded" src={user?.photoURL} />
                    <span>{user?.displayName}</span>
                  </div>

                  <div class="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded cursor-pointer">
                    <span>Manage Profiles</span>
                  </div>

                  <div class="border-t border-gray-700 my-2"></div>

                  <div class="hover:bg-gray-800 p-2 rounded cursor-pointer">
                    Account
                  </div>
                  <div class="hover:bg-gray-800 p-2 rounded cursor-pointer">
                    Help Centre
                  </div>

                  <div class="border-t border-gray-700 my-2"></div>

                  <button
                    onClick={handleSignOut}
                    class="hover:bg-gray-800 p-2 rounded cursor-pointer text-center w-[100%]"
                  >
                    Sign out of Netflix
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Browse;
