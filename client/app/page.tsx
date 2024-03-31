import PartnerTicker from "@/components/partner-ticker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
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
          src="/background.mp4"
        />
        <div className="absolute inset-x-0 bottom-0 pb-40">
          <PartnerTicker />
        </div>
      </div>
      <div className="h-[calc(2500px-100vh)] overflow-y-auto"></div>
    </>
  );
}
