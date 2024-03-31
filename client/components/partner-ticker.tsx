"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import dynamic from "next/dynamic";

const partners = [
  "/citizenM.svg",
  "/LULA.svg",
  "/init.svg",
  "/techstars.png",
  "/moonlighter.png",
];

import React from "react";
import Ticker from "framer-motion-ticker";

function PartnerTicker() {
  return (
    <div className="container bottom-0 z-10  space-x-4 overflow-hidden rounded-full  bg-[#14393D] p-4">
      <Ticker duration={20}>
        {partners.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={`Logo of ${item}`}
            width={32}
            height={32}
          />
        ))}
      </Ticker>
    </div>
  );
}
export default PartnerTicker;
