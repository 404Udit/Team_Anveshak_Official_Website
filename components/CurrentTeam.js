"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CurrentTeam = ({ img_url, name, position }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center 
                 w-[320px] min-h-[420px] 
                 max-[700px]:w-[170px] max-[700px]:min-h-[240px]
                 max-[1000px]:w-[220px] max-[1000px]:min-h-[300px]
                 bg-gradient-to-b from-[#111] to-[#1a1a1a] rounded-3xl
                 shadow-[0_0_20px_rgba(221,100,8,0.2)]
                 hover:shadow-[0_0_40px_rgba(221,100,8,0.5)]
                 transition-all duration-300 p-5 group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Image Container */}
      <div className="relative w-[240px] h-[240px] 
                      max-[1000px]:w-[150px] max-[1000px]:h-[150px] 
                      max-[700px]:w-[120px] max-[700px]:h-[120px] 
                      rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={img_url}
          alt={`${name} - ${position}`}
          fill
          sizes="100%"
          className="object-cover rounded-full transition-all duration-500 
                     group-hover:scale-105"
          priority
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t 
                        from-[#DD6408]/30 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300"></div>
      </div>

      {/* Name and position */}
      <div className="flex flex-col items-center mt-4 text-center">
        <span className="font-semibold text-[26px] text-[#C0C0C0] uppercase tracking-wide 
                         max-[1000px]:text-[18px] max-[700px]:text-[15px]">
          {name}
        </span>
        <span className="font-semibold text-[20px] text-[#DD6408] uppercase tracking-wider 
                         max-[1000px]:text-[13px] max-[700px]:text-[10px]">
          {position}
        </span>
      </div>
    </motion.div>
  );
};

export default CurrentTeam;
