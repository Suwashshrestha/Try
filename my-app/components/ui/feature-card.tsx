"use client";

import { cn } from "@/lib/utils";
import Image from "next/image"; 
import { useState } from "react";

interface FeatureCardProps {
  type: "cognitive" | "ai_problem_solving" | "dynamic_paths" | "ai_mentor";
  title: string;
  points: string[];
  position: "top-left" | "bottom-left" | "top-right" | "bottom-right";
}

const icons = {
  cognitive: "/Group 76.svg",
  ai_problem_solving: "/Group 75.svg",
  dynamic_paths: "/Group 74.svg",
  ai_mentor: "/Group 77.svg",
};

export function FeatureCard({ type, title, points, position }: FeatureCardProps) {
  const [isActive, setIsActive] = useState(false);
  const iconPath = icons[type];

  const getPointsPosition = () => {
    switch (position) {
      case "top-left":
        return "left-full top-20 ml-4 md:ml-6 lg:ml-15";
      case "top-right":
        return "right-full top-20 mr-4 md:mr-6 lg:mr-15";
      case "bottom-left":
        return "left-full bottom-20 ml-4 md:ml-6 lg:ml-15";
      case "bottom-right":
        return "right-full bottom-20 mr-4 md:mr-6 lg:mr-15";
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={() => setIsActive(!isActive)}
        className={cn(
          "relative p-4 transition-all duration-300 text-left font-host-grotesk",
          isActive && "text-primary"
        )}
      >
        <div className={cn(
          "relative z-10 flex flex-col",
          (type === "dynamic_paths" || type === "ai_mentor") ? "items-end" : "items-start"
        )}>
          <Image
            src={iconPath}
            alt={`${type} icon`}
            width={116.49} // Set consistent width
            height={108}   // Set consistent height
          />
            <p className={cn(
            "mt-2 text-2xl font-medium",
            type === "cognitive" && "max-w-[200px]",
            type === "ai_problem_solving" && "max-w-[250px]",
            type === "dynamic_paths" && "max-w-[200px] text-right ",
            type === "ai_mentor" && "max-w-[200px] text-right"
            )}>{title}</p>
        </div>
        {isActive && (
          <div className="absolute inset-0 bg-secondary rounded-lg" />
        )}
      </button>

      {/* Points Container */}
      <div
        className={cn(
          "absolute z-50 min-w-[345px] opacity-0 scale-95 transition-all duration-200",
          isActive && "opacity-100 scale-100",
          getPointsPosition()
        )}
      >
        <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-4 relative">
          {/* Connector Line */}
          <div
            className={cn(
              "absolute w-4 border-t border-gray-200",
              position.includes("left") ? "-left-4" : "-right-4",
              position.includes("top") ? "top-[28px]" : "bottom-[28px]"
            )}
          />

          <ul className="space-y-3 text-left">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
          <span className="text-primary mt-1">•</span>
          <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}