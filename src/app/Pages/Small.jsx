"use client"
import React from 'react';
import { RxColorWheel } from "react-icons/rx";
import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 5,
    y: 0,
    transition: { duration: 2, ease: "easeOut" }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 1.3, ease: "easeInOut" }
  }
};

export default function Small() {
  return (
    <motion.div
      className="flex-col flex justify-center border-2ing"
      initial="hidden"
      animate="visible"
      variants={revealVariants}
    >
      <div className="pb-2 flex gap-2 flex-wrap">
        <motion.h1
          className="text-slate-300 uppercase text-4xl font-bold"
          variants={revealVariants}
        >
          cars design
        </motion.h1>
        <motion.h1
          className="text-slate-300 uppercase text-4xl font-bold flex items-center justify-center"
          variants={revealVariants}
        >
          pr<RxColorWheel className="spinerCode" />gress
        </motion.h1>
      </div>
      <hr className="w-28" />
      <motion.div
        className="text-slate-300 pt-2 first-letter:uppercase text-sm w-full leading-normal max-w-xl"
        variants={revealVariants}
      >
        <p>A car management system is a software solution designed to help organizations <br /> manage their fleet of vehicles efficiently</p>
      </motion.div>
      <div className="mt-3 flex -space-x-2 pt-3">
        {[
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        ].map((src, index) => (
          <motion.img
            key={index}
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={src}
            alt=""
            whileHover="hover"
            variants={hoverVariants}
          />
        ))}
      </div>
    </motion.div>
  );
}
