import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Import the Button component from shadcn/ui

type Logo = {
  src: string;
  alt: string;
};

const partnerLogos: Logo[] = [
  // { src: "/LULA.svg", alt: "LULA" },
  // { src: "/path/to/logo2.png", alt: "Partner 2" },
  // { src: "/path/to/logo3.png", alt: "Partner 3" },
];

function CensusPartnerCard() {
  return (
    <div className="w-full max-w-3xl md:max-w-4xl mx-auto p-6 bg-white/10 rounded-3xl backdrop-blur-lg flex flex-col items-center gap-4 md:flex-row md:justify-between">
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
      <div className="mt-4 md:mt-0 md:ml-4">
        <Button asChild variant="dark_green">
          <Link href="https://1zlrvuskgmr.typeform.com/to/f8D8DKvd">
            <p>Support or Partner </p>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default CensusPartnerCard;
