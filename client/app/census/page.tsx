import GradientBackground from "@/components/gradient-background";
import { Metadata } from "next";
import Link from "next/link";
import CensusLogo from "@/components/census-logo";
import GreenLogo from "@/components/hello-miami-green-logo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import DDALogo from "@/components/dda-logo";
import INITLogo from "@/components/init-logo";
import CensusPartnerCard from "@/components/census-partner-card";

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
      <div className="min-[1915px] flex items-center justify-center bg-neutral-900 relative">
        <div className="absolute w-full h-[2555px] pl-[1184.20px] pr-[1623px] pt-[496px] bg-neutral-900 justify-start items-center inline-flex">
          <GradientBackground />
        </div>

        <div className="text-center p-4 z-10">
          <div className="text-white text-[27.87px] font-normal font-['Px Grotesk'] leading-snug">
            the 2024
          </div>
          <CensusLogo />
          <div className="w-[243.63px] h-[147.13px] pl-[25.20px] pr-[24.96px] pt-[18.64px] pb-[18.93px] bg-white/opacity-10 rounded-[13.32px] backdrop-blur-[60.87px] justify-center items-center inline-flex">
            <div className="w-[193.47px] h-[109.57px] relative shadow flex-col justify-start items-start flex">
              <div className="w-[193.47px] h-[109.57px] bg-lime-200 hover:bg-lime-500 rounded-[9.59px]" />
              <Link
                href={"/census/census"}
                className="text-white text-4xl font-normal font-['Px Grotesk'] leading-9"
              >
                Take it rn
              </Link>
              <div className="text-cyan-950 text-sm font-normal font-['Px Grotesk']">
                (7 mins)
              </div>
            </div>
          </div>
          <div className="text-center text-lime-200 text-[52.85px] font-normal font-['Px Grotesk'] leading-[105.70px]">
            every engineer counts
          </div>
          <div className="text-white text-[15px] font-normal font-['Px Grotesk'] leading-3">
            A project by
          </div>
          <div className="w-[371.28px] h-[92px] py-[16.58px] justify-start items-baseline gap-[55.65px] inline-flex">
            <div className="w-[130.30px] h-[32.58px] relative">
              <div className="max-h-20 ">
                <GreenLogo />
                <DDALogo />
                <INITLogo />
              </div>
            </div>
          </div>
          <div className="text-white mt-4">
            <p>300 more responses needed</p>
            <p>A project by Hello Miami and Miami DDA</p>
          </div>
          {/* <CensusPartnerCard /> */}
        </div>
      </div>
    </>
  );
}

export default CensusPage;
