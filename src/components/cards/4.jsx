import React from 'react';

// Calendar Icon Component
const CalendarIcon = () => {
  return (
 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
  <path fill="black" d="M12 2C9.79 2 8 3.79 8 6V10H6V6C6 3.79 7.79 2 10 2C11.1 2 12 2.9 12 4C12 2.9 12.9 2 14 2C16.21 2 18 3.79 18 6V10H16V6C16 3.79 14.21 2 12 2ZM12 12C9.79 12 8 13.79 8 16V20H6V16C6 13.79 7.79 12 10 12H12C14.21 12 16 13.79 16 16V20H14V16C14 13.79 12.21 12 12 12Z"/>
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
    </div>
  );
};

export default Card;
