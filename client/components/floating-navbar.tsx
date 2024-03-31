"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FloatingNavbar = () => {
  return (
    <motion.div
      className="z-100 fixed inset-x-0 bottom-0 hidden w-full items-center justify-center rounded-full p-7 sm:flex"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center rounded-full  border border-white/50 bg-[#14393D] p-1.5 backdrop-blur-md">
        <div className="boder flex items-stretch p-2">
          <Link
            href="#hero"
            style={{
              backgroundImage:
                "url(https://assets-global.website-files.com/5837424ae11409586f837994/624322b0c806026f5689d841_Group%2012569.svg)",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 22px",
              paddingLeft: "38px",
              paddingRight: "38px",
            }}
            className="cursor-pointer rounded-full bg-zinc-800 p-4 pb-4 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black"
          ></Link>
          <Link
            href="/auth/"
            className="rounded-full p-4 font-bold text-white transition-colors hover:bg-white hover:text-black"
          >
            Survey
          </Link>
          <Link
            href="/auth/"
            className="rounded-full p-4 font-bold text-white transition-colors hover:bg-white hover:text-black"
          >
            About
          </Link>
          <Link
            href="https://lu.ma/hello_miami"
            className="rounded-full p-4 font-bold text-white transition-colors hover:bg-white hover:text-black"
          >
            Calendar
          </Link>
          <Link
            href="/auth/"
            className="rounded-full p-4 font-bold text-white transition-colors hover:bg-white hover:text-black"
          >
            Join
          </Link>
          <Link
            href="/auth/login"
            className="rounded-full bg-zinc-800 p-4 font-bold text-white transition-colors hover:bg-white hover:text-black"
          >
            Login
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingNavbar;
