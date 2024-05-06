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
        <div className="absolute right-32 bg-[#14393D] opacity-80 w-[415px] h-[645px] rounded-md top-0 z-0"></div>
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
