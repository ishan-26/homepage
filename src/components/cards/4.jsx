import React from "react";

const Access = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFB3BA] text-[#396c58] px-4">
      {/* Icon */}
      <div className="mb-0">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" fill="none" stroke="white" stroke-width="2">

  <rect x="25" y="35" width="50" height="50" rx="8" ry="8" stroke="white" stroke-width="2"/>
  <line x1="50" y1="35" x2="50" y2="20" stroke="white" stroke-width="2"/>
  <circle cx="50" cy="20" r="8" stroke="white" stroke-width="2" fill="none"/>
  <path d="M45 62 L55 62" stroke="white" stroke-width="2"/>
  <circle cx="50" cy="70" r="8" stroke="white" stroke-width="2" fill="none"/>
</svg>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">Access Control</h1>

      {/* Description */}
      <p className="text-center max-w-lg text-gray-400 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo
        officia atque iure voluptatibus necessitatibus odit cupiditate
        reprehenderit iusto quaerat!
      </p>

      {/* Button */}
      <button className="px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition flex items-center">
        LEARN MORE
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Access;
