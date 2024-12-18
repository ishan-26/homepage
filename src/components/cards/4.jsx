import React from 'react';
// Calendar Icon Component
const CalendarIcon = () => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="lock" width="64" height="64">  
<g fill="#000">
    <path d="M20.8 28.8h-3v-6.4c0-7.8 6.4-14.2 14.2-14.2 7.2 0 13.2 5.3 14.1 12.4l-2.9.4c-.7-5.6-5.5-9.8-11.2-9.8-6.2 0-11.2 5-11.2 11.2v6.4"></path>
    <path d="M44.7 55.8H19.2c-2.6 0-4.8-2.1-4.8-4.8V31.9c0-2.6 2.1-4.8 4.8-4.8h25.5c2.6 0 4.8 2.1 4.8 4.8V51c0 2.7-2.1 4.8-4.8 4.8zM19.3 30.4c-.9 0-1.6.7-1.6 1.6v19.1c0 .9.7 1.6 1.6 1.6h25.5c.9 0 1.6-.7 1.6-1.6V32c0-.9-.7-1.6-1.6-1.6H19.3z"></path>
    <path d="M35.2 36.7c0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2c0-1.8 1.4-3.2 3.2-3.2s3.2 1.5 3.2 3.2"></path>
    <path d="M32.8 36.7h-1.6l-1.6 9.6h4.8l-1.6-9.6"></path>
  </g>
</svg>

  );
};

// Main Component
const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] bg-[#FFB3BA] text-grey-900 px-4">
      {/* Calendar Icon */}
      <div className="mb-6">
        <CalendarIcon />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">
       Access Control
      </h1>

      {/* Description */}
      <p className="text-center max-w-lg text-gray-900 mb-6">
          Ensures only authorized individuals can perform specific actions.
      </p>

    </div>
  );
};

export default Card;
