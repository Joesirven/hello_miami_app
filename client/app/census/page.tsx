import Script from "next/script";
import { Metadata } from "next";
import Link from "next/link";

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
      <div className="min-h-screen flex items-center justify-center bg-[#141414] relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Multiple SVG Circles with Gradient and Glow Effect */}
          <svg width="100%" height="100%">
            <circle cx="50%" cy="10%" r="200" fill="url(#grad1)" />
            <circle cx="80%" cy="70%" r="300" fill="url(#grad2)" />
            <circle cx="10%" cy="50%" r="250" fill="url(#grad3)" />
            <defs>
              <radialGradient id="grad1">
                <stop offset="0%" stop-color="rgba(29, 78, 216, 0.5)" />
                <stop offset="100%" stop-color="transparent" />
              </radialGradient>
              <radialGradient id="grad2">
                <stop offset="0%" stop-color="rgba(16, 185, 129, 0.4)" />
                <stop offset="100%" stop-color="transparent" />
              </radialGradient>
              <radialGradient id="grad3">
                <stop offset="0%" stop-color="rgba(219, 39, 119, 0.6)" />
                <stop offset="100%" stop-color="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="text-center p-4 z-10">
          <h1 className="text-white text-3xl font-bold mb-2">
            Miami Engineers Census 2024
          </h1>
          <p className="text-green-300 mb-4">Every engineer counts.</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/census/census">Take it now</Link>
          </button>
          <div className="text-white mt-4">
            <p>300 more responses needed</p>
            <p>A project by Hello Miami and Miami DDA</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CensusPage;
