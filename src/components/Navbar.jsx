import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconBrandSlack, IconCalendar, IconMessage } from "@tabler/icons-react"; // Add the missing icon import

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
      icon: <Iconlayers-intersect className="h-4 w-4 text-neutral-500 dark:text-white" />, // Ensure IconBrandSlack is imported if used
    },
       {
      name: "Info",
      link: "#beam",
      icon: <IconBrand className="h-4 w-4 text-neutral-500 dark:text-white" />, // Ensure IconBrandSlack is imported if used
    },
  
   
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default FloatingNavDemo;
