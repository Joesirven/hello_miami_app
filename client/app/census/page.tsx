import GradientBackground from "@/components/gradient-background";
import { Metadata } from "next";
import Link from "next/link";
import CensusLogo from "@/components/census-logo";
import { Button } from "@/components/ui/button";
import CensusPartnerCard from "@/components/census-partner-card"; // Import the CensusPartnerCard component
import GreenLogo from "@/components/hello-miami-green-logo";
import DDALogo from "@/components/dda-logo";
import INITLogo from "@/components/init-logo";

export const metadata: Metadata = {
  title: "hello_miami Engineers Survey",
  description: "Miami's Engineering Community",
  openGraph: {
    images: [
      "https://storage.googleapis.com/hello-miami-app/twitter-image.png",
    ],
  },
};

function CensusPage() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white text-center">
        <GradientBackground />

        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="text-white text-[27.87px] font-normal font-['Px Grotesk'] leading-snug">
            the 2024
          </div>
          <CensusLogo />
          <div className="mt-6">
            <Button asChild>
              <Link href="/census/census">
                <p>👉 Take it rn</p>
                <p>(7 mins)</p>
              </Link>
            </Button>
          </div>
          <div className="mt-4 text-lime-200 text-[52.85px] font-normal font-['Px Grotesk'] leading-[105.70px]">
            every engineer counts
          </div>
          <div className="mt-2 text-white text-[15px] font-normal font-['Px Grotesk'] leading-3">
            A project by
          </div>
          <div className="flex justify-center items-center gap-8 mt-4">
            <GreenLogo />
            <DDALogo />
            <INITLogo />
          </div>
          <div className="text-white mt-4">
            <p>300 more responses needed</p>
            <p>A project by Hello Miami and Miami DDA</p>
          </div>
          <div className="min-h-64 min-w-2.5">
            <CensusPartnerCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default CensusPage;
