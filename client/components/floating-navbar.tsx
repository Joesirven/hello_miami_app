"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const FloatingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        className="z-100 fixed inset-x-0 bottom-0 hidden w-full items-center justify-center rounded-full p-7 sm:flex"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center rounded-full bg-[#14393D] p-1.5 backdrop-blur-md">
          <div className="flex items-stretch p-2">
            <Link
              href="#hero"
              style={{
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto 22px",
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
              className="cursor-pointer rounded-full bg-zinc-800 p-2 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black"
            >
              <Image
                src="https://assets-global.website-files.com/5837424ae11409586f837994/624322b0c806026f5689d841_Group%2012569.svg"
                alt="icon"
                width={16}
                height={16}
              />
            </Link>
            <Link
              href="/survey"
              className="rounded-full p-2 font-bold text-white transition-colors hover:bg-white hover:text-black"
            >
              Survey
            </Link>
            <Link
              href="#about"
              className="rounded-full p-2 font-bold text-white transition-colors hover:bg-white hover:text-black"
            >
              About
            </Link>
            <Link
              href="https://lu.ma/hello_miami"
              className="rounded-full p-2 font-bold text-white transition-colors hover:bg-white hover:text-black"
            >
              Calendar
            </Link>
            <Link
              href="/auth/"
              className="rounded-full p-2 font-bold text-white transition-colors hover:bg-white hover:text-black"
            >
              Join
            </Link>
            <Link
              href="/auth/login"
              className="rounded-full bg-zinc-800 p-2 font-bold text-white transition-colors hover:bg-white hover:text-black"
            >
              Login
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="fixed bottom-5 right-5 z-50 sm:hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="cursor-pointer rounded-full bg-blue-500 p-4 shadow-lg">
          <Image src="/hmicon.png" alt="icon" layout="fill" objectFit="cover" />
        </div>
      </motion.div>
      <div
        className="menu-button-cover"
        onClick={() => setIsMenuOpen(false)}
      ></div>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 flex items-end bg-black/30 backdrop-blur-sm sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex w-full flex-col items-center justify-center rounded-t-lg bg-white p-4">
            <div className="flex items-stretch p-2">
              <Link
                href="#hero"
                style={{
                  backgroundImage:
                    "url(https://assets-global.website-files.com/5837424ae11409586f837994/624322b0c806026f5689d841_Group%2012569.svg)",
                  backgroundPosition: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "auto 22px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
                className="cursor-pointer rounded-full bg-zinc-800 p-2 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black"
              ></Link>
              <Link
                href="/auth/"
                className="rounded-full p-2 font-bold text-white transition-colors hover:bg-white hover:text-black"
              >
                Survey
              </Link>
              <Link
                href="/auth/"
                className="rounded-full p-2 font-bold text-white transition-colors hover:bg-white hover:text-black"
              >
                About
              </Link>
              <Link
                href="https://lu.ma/hello_miami"
                className="rounded-full p-2 font-bold text-white transition-colors hover:bg-white hover:text-black"
              >
                Calendar
              </Link>
              <Link
                href="/auth/"
                className="rounded-full p-2 font-bold text-white transition-colors hover:bg-white hover:text-black"
              >
                Join
              </Link>
              <Link
                href="/auth/login"
                className="rounded-full bg-zinc-800 p-2 font-bold text-white transition-colors hover:bg-white hover:text-black"
              >
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      )}
      ;
    </>
  );
};

export default FloatingNavbar;
