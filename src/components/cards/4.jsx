import React from 'react';
import lockImg from '../../assets/lock.svg'
// Calendar Icon Component
const CalendarIcon = () => {
  return (
    <img 
      src={} // Replace with the actual path to your image file
      alt="Calendar Icon" 
      width="20" 
      height="20" 
    />
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
        Restricts access to edit or based
