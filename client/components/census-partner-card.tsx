import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Import the Button component from shadcn/ui

const partnerLogos = [{ src: "/LULA.svg", alt: "LULA" }];

function CensusPartnerCard() {
  return (
    <div className="min-h-[200px] min-w-96 max-w-4xl mx-auto p-6 bg-white/10 rounded-3xl backdrop-blur-lg flex flex-col items-center gap-4 md:flex-row md:justify-between">
      <div className="flex flex-wrap justify-center gap-4">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="relative w-32 h-16 md:w-40 md:h-20">
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full md:justify-end">
        <Button asChild className="mt-4 md:mt-0">
          <Link href="https://1zlrvuskgmr.typeform.com/to/f8D8DKvd">
            Support or Partner
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default CensusPartnerCard;
