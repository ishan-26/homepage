"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll";
import { motion } from "framer-motion";
import FloatingNavDemo from "../components/Navbar"; // Import the navbar demo

export function HeroScrollDemo() {
  const currentDate = new Date().getDate();

  return (
    <div id="home" className="flex flex-col overflow-hidden">
      {/* Fixed Navbar */}
      <FloatingNavDemo />

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white text-center">
              One place for <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text [text-shadow:0_0_rgba(0,0,0,0.1)]">
                All your events
              </span>
            </h1>
          </>
        }
      >
        <motion.div
          className="mt-8 sm:mt-4 md:mt-0 w-full bg-gray-900 shadow-lg rounded-lg p-8 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="mb-6 text-center">
            <h3 className="font-semibold text-white inline-block">Division - A</h3>
            <br />
            <p className="text-gray-400 text-sm inline-block">CSE 7th Sem</p>
          </div>
          <p className="text-gray-400 mt-4 text-sm text-center">
            Welcome to Eventify. Schedule your events with just a few clicks.
          </p>
          <ul className="mt-6 text-gray-400 text-sm flex flex-col items-center">
            <li>⏱ 10:15 am</li>
            <li>📕 OS OBA</li>
            <li>📢 DS Seminar</li>
          </ul>
          <div className="mt-4 sm:mt-2">
            {/* Reduced top margin for mobile screens */}
            <h4 className="font-semibold text-white mb-4 text-center">Dec 2024</h4>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(31).keys()].map((day) => (
                <motion.button
                  key={day}
                  className={`py-2 rounded-md ${
                    day + 1 === currentDate
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {day + 1}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;
