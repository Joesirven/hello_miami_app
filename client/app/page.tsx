import { Novatrix } from "uvcanvas";
import PartnerTicker from "@/components/partner-ticker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "<Hello_miami />",
  description: "miami's engineering community",
};

export default function HomePage() {
  return (
    <>
      <div className="relative h-screen overflow-y-scroll">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
          src="/background_video.mp4"
        />
        <div className="absolute right-32 bg-[#14393D] opacity-80 w-[415px] h-[645px] rounded-md top-0 z-0">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-4xl font-bold">Hello, Miami!</h1>
            <p className="text-white text-lg mt-4">
              We are a community of engineers, designers, and entrepreneurs
              based in Miami, FL. We host events, workshops, and meetups to
              connect and empower our members.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 pb-40">
          <PartnerTicker />
        </div>
      </div>
      <div className="h-[calc(2500px-100vh)] overflow-y-auto">
        {" "}
        <Novatrix />{" "}
      </div>
    </>
  );
}
