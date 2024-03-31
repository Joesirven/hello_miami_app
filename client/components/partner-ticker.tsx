"use client";

import Image from "next/image";
import React from "react";
import Ticker from "framer-motion-ticker";
import dynamic from "next/dynamic";
import { AspectRatio } from "./ui/aspect-ratio";

const partners = [
  {
    src: "/citizenM.svg",
    alt: "citizenM",
    width: 25,
    height: 25,
  },
  {
    src: "/LULA.svg",
    alt: "LULA",
    width: 100,
    height: 25,
  },
  {
    src: "/init.svg",
    alt: "init",
    width: 60,
    height: 20,
  },

  {
    src: "/moonlighter.png",
    alt: "moonlighter",
    width: 100,
    height: 25,
  },
  {
    src: "/techstars.png",
    alt: "techstars",
    width: 140,
    height: 15,
  },
];

const PartnerTickerComponent: React.FC = () => {
  return (
    <div className="z-20 mx-auto w-[800px] justify-center">
      <div className="overflow-hidden rounded-full bg-[#14393D] p-4">
        <Ticker duration={20}>
          {partners.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={`Logo of ${item.alt}`}
              width={item.width}
              height={item.height}
              loading="eager"
              className="px-3"
            />
          ))}
        </Ticker>
      </div>
    </div>
  );
};

// Use dynamic import with ssr false since we're dealing with animations and want to hydrate this component on the client-side.
const PartnerTicker = dynamic(() => Promise.resolve(PartnerTickerComponent), {
  ssr: false,
});

export default PartnerTicker;
