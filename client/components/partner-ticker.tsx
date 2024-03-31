"use client";

import Image from "next/image";
import React from "react";
import Ticker from "framer-motion-ticker";
import dynamic from "next/dynamic";

const partners = [
  "/citizenM.svg",
  "/LULA.svg",
  "/init.svg",
  "/techstars.png",
  "/moonlighter.png",
];

const PartnerTickerComponent: React.FC = () => {
  return (
    <div className="fixed inset-x-0 bottom-10 z-10 mx-auto flex w-full justify-center">
      <div className="space-x-4 overflow-hidden rounded-full bg-[#14393D] p-4">
        <Ticker duration={20}>
          {partners.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt={`Logo of ${item}`}
              width={32}
              height={32}
              loading="eager"
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
