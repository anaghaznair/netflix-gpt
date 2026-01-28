import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 text-white pt-40 pl-14 bg-gradient-to-r from-black/80 to-transparent">
      <h1 className="font-sans text-6xl font-semibold">{title}</h1>
      <p className="py-6 w-1/4 text-m">{overview}</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
          <svg
            className="w-5 h-5 fill-black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3.867v16.266c0 .775.84 1.26 1.5.867l13-8.133a1 1 0 0 0 0-1.734l-13-8.133A1 1 0 0 0 5 3.867z" />
          </svg>
          Play
        </button>

        <button className="flex items-center gap-2 bg-gray-500/70 text-white font-semibold px-6 py-2 rounded hover:bg-gray-500 transition">
          <span className="border border-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
            i
          </span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
