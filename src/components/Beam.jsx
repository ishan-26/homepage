import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/explodingBeams";
import googleIcon from "../assets/goog.svg";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center h-screen text-center overflow-hidden relative z-10">
        {/* Heading with gradient */}
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 dark:bg-gradient-to-r dark:from-yellow-400 dark:via-red-500 dark:to-pink-600">
          What&apos;s cooler than{" "}
          <img src={googleIcon} alt="Google" className="inline-block" />{" "}
          Calendar?{" "}
          <br />
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            {/* Gradient text for Eventify */}
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] dark:text-transparent dark:bg-gradient-to-r dark:from-yellow-400 dark:via-red-500 dark:to-pink-600">
              <span className="">Eventify.</span>
            </div>
            {/* Gradient text for Eventify */}
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 dark:bg-gradient-to-r dark:from-yellow-400 dark:via-red-500 dark:to-pink-600">
              <span className="">Eventify.</span>
            </div>
          </div>
        </h2>

        {/* Button */}
        <button className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition flex items-center">
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
    </BackgroundBeamsWithCollision>
  );
}

export default BackgroundBeamsWithCollisionDemo;
