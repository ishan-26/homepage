import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"; // Add the missing icon import

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home", // Set this to the correct route
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: "#lamp",
      icon: <IconBrandSlack className="h-4 w-4 text-neutral-500 dark:text-white" />, // Ensure IconBrandSlack is imported if used
    },
    {
      name: "Try",
      link: "#beam", // Set this to the correct route
      icon: (
        <IconCalendar className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact", // Set this to the correct route
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default FloatingNavDemo;
