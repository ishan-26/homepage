import React from 'react';

// Calendar Icon Component
const CalendarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect
        x="3"
        y="8"
        width="18"
        height="13"
        rx="2"
        ry="2"
        className="stroke-current"
      />
      <line x1="16" y1="2" x2="16" y2="6" className="stroke-current" />
      <line x1="8" y1="2" x2="8" y2="6" className="stroke-current" />
      <line x1="3" y1="10" x2="21" y2="10" className="stroke-current" />
    </svg>
  );
};

// Main Component
const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffdfba] text-[#5f6a6e] px-4">
      {/* Calendar Icon */}
      <div className="mb-6">
        <CalendarIcon />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Personalized calendar for each class
      </h1>

      {/* Description */}
      <p className="text-center max-w-lg text-gray-400 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo
        officia atque iure voluptatibus necessitatibus odit cupiditate
        reprehenderit iusto quaerat!
      </p>

      {/* Button */}
      <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition flex items-center">
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

export default Card;
