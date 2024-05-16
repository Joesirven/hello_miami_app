import GradientBackground from "@/components/gradient-background";
import { Metadata } from "next";
import Link from "next/link";
import CensusLogo from "@/components/census-logo";
import { Button } from "@/components/ui/button";
import CensusPartnerCard from "@/components/census-partner-card";
import GreenLogo from "@/components/hello-miami-green-logo";
import DDALogo from "@/components/dda-logo";
import INITLogo from "@/components/init-logo";
import VentureMiamiLogo from "@/components/v-m-logo";

export const metadata: Metadata = {
  title: "hello_miami Engineers Survey",
  description: "Miami's Engineering Community",
  openGraph: {
    images: [
      "https://storage.googleapis.com/hello-miami-app/twitter-image.png",
    ],
  },
};

type ResponseData = {
  count: number;
};

async function fetchResponseCount(): Promise<number> {
  try {
    const res = await fetch(
      `http://${process.env.NEXT_PUBLIC_URL}/api/censusResponse`,
    );
    const result: ResponseData = await res.json();
    return result.count;
  } catch (error) {
    console.error("Error fetching response count:", error);
    return 0;
  }
}

const CensusPage = async () => {
  const responseCount = await fetchResponseCount();

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white text-center">
        <GradientBackground />

        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="text-white text-[27.87px] font-normal font-['Px Grotesk'] leading-snug">
            the 2024
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
            <CensusLogo />
          </div>
          <div className="mt-10">
            <div className="bg-white/10 rounded-3xl backdrop-blur-lg flex flex-col items-center p-10">
              <Button asChild variant="green" size="xl">
                <Link
                  href="/census/census"
                  className="flex-col place-items-center gap-2"
                >
                  <p className="text-4xl mt-2">👉Take it rn</p>
                  <p className="text-2xl">(7 mins)</p>
                </Link>
              </Button>
            </div>

            <div className="flex text-white text-5xl mt-5">
              <p className="text-lime-200">{370 - responseCount}</p>
              <p className="ml-2">more responses needed</p>
            </div>
          </div>
          <div className="mt-24 text-lime-200 text-[52.85px] font-normal font-['Px Grotesk'] leading-[105.70px]">
            every engineer counts
          </div>

          <div className="mt-24 text-white text-[15px] font-normal font-['Px Grotesk'] leading-3">
            A project by
          </div>
          <div className="flex justify-center items-center gap-16 mt-10 mb-24">
            <div className="w-16">
              <GreenLogo />
            </div>
            <div className="w-44">
              <VentureMiamiLogo />
            </div>
            <div className="w-44">
              <DDALogo />
            </div>
            <div className="w-20">
              <INITLogo />
            </div>
          </div>

          <div className="min-h-64 w-full max-w-5xl mx-auto mt-2">
            <CensusPartnerCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CensusPage;
