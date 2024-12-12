import React from 'react';

// Calendar Icon Component
const CalendarIcon = () => {
  return (
   <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
     <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
       <g id="XMLID_504_"> <path id="XMLID_505_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M207.481,219.356l-42.5,42.5 c-2.929,2.929-6.768,4.394-10.606,4.394s-7.678-1.465-10.606-4.394l-21.25-21.25c-5.858-5.858-5.858-15.354,0-21.213 c5.857-5.858,15.355-5.858,21.213,0l10.644,10.643l31.894-31.893c5.857-5.858,15.355-5.858,21.213,0 C213.34,204.002,213.34,213.498,207.481,219.356z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"></path> 
   </g> 
   </g>
   </svg>
  );
};

// Main Component
const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] bg-[#FFB3BA] text-[#396c58] px-4">
      {/* Calendar Icon */}
      <div className="mb-6">
        <CalendarIcon />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">
       Access Control
      </h1>

      {/* Description */}
      <p className="text-center max-w-lg text-gray-400 mb-6">
       Restricts access to edit or based on roles, permissions and authentication, ensuring that only authorized individuals can perform specific actions
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
