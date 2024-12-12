import React from "react";

const UseExistingToolsPage = () => {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#bae1ff] text-[#305f73] px-4">
      {/* Icon */}
      <div className="mb-6">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="50"
  height="50"
  fill="none"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="6" y="3" width="12" height="18" rx="2" ry="2" />
  <line x1="12" y1="18" x2="12" y2="18" />
  <circle cx="12" cy="18" r="1" />
</svg>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">In-App notification</h1>

      {/* Description */}
      <p className="text-center max-w-lg text-gray-400 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo
        officia atque iure voluptatibus necessitatibus odit cupiditate
        reprehenderit iusto quaerat!
      </p>
    </div>
  );
};

export default UseExistingToolsPage;
